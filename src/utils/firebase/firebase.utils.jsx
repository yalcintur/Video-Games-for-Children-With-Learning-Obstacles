import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  onValue,
  ref
} from "firebase/database";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  doc,
  setDoc,
  writeBatch,
  addDoc,
  getDoc,
  updateDoc,

} from "firebase/firestore";
import firebaseConfig from '../../components/firebaseConfig.json'

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account',
  });

const retrieveUserData = async (userAuth) => {
  const q = query(collection(db, "users"), where("uid", "==", userAuth));
  const ke = await getDocs(q);
  return ke.docs.map(doc => ({...doc.data()}));
}
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,          
      });    
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const registerWithEmailAndPassword = async (nameofParent, nameofChild, email, password, telephone, city, typeOrder) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      nameofParent,
      nameofChild,
      authProvider: "local",
      email,
      city, 
      telephone,
      typeOrder,
      gamecontrol:{},
      gamecontrolfeedback:{},
      gameexperiment:{},
      gameexperimentfeedback: {},
      roles:'',
    });

  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = async () => await signOut(auth);

//update user
const updateUser = async (useruid, nameofParent, nameofChild, typeOrders, city, telephone) => {
  const q = query(collection(db, "users"), where("uid", "==", useruid));
  const querySnapshot = await getDocs(q);
  const userList = [];
  querySnapshot.forEach((doc) => {
      userList.push(doc.id);
    });
  const userDocName = userList[0];
  const userRef = doc(db, "users", userDocName);
  await updateDoc(userRef, {
    nameofParent: nameofParent,
    nameofChild: nameofChild,
    typeOrder: typeOrders,
    city: city, 
    telephone: telephone,
  })
  return userDocName;
}

const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export {
  updateUser,
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  onAuthStateChangedListener,
  retrieveUserData
};