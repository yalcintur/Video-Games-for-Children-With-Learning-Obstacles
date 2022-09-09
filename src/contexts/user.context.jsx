import { useContext ,createContext, useState, useEffect } from 'react';
import { retrieveUserData } from '../utils/firebase/firebase.utils';
import {
  onAuthStateChangedListener,
} from '../utils/firebase/firebase.utils';

export function useAuth() {
    return useContext(UserContext)
  }
export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});


export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    let unsubscribe;
    const getUser = async () =>{
      unsubscribe = await onAuthStateChangedListener(user => {
        const getUserDetails = async ()=>{
          let useruid;
          if (user === null){
            useruid = ""
          }
          else
          {
            useruid = user.uid
          }
            const userDetails = await retrieveUserData(useruid)
            setCurrentUser(userDetails[0])
            setLoading(false);
        }
        getUserDetails();
        });
    }
    getUser();

    return unsubscribe;
  }, [])

  return (
    <UserContext.Provider value={value}>
      {!loading && children}
    </UserContext.Provider>
  )};
