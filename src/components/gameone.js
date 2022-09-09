import React, { useState, useMemo, useRef, useEffect } from 'react'
import { useStopwatch } from 'react-timer-hook';
import TinderCard from './cardcomp/index'
import './App.css';
import { alertClasse, Button, Stack, Box, Typography } from '@mui/material';
import { UpdateSharp } from '@mui/icons-material';
const dbtwo = [
  {
    name: 'soru1',
    caption: '5+5',
    url: './img/sr-besartibes.svg',
    rightim: './img/cv-on.svg',
    leftim: './img/cv-yirmi.svg',
    correct: 'right'
  },
  {
    name: 'soru2',
    caption: '50-40',
    url: './img/sr-ellieksikirk.svg',
    rightim: './img/cv-yirmi.svg',
    leftim: './img/cv-on.svg',
    correct: 'left',
  },
  {
    name: 'soru3',
    caption: '50-30',
    url: './img/sr-ellieksiotuz.svg',
    rightim: './img/cv-yirmi.svg',
    leftim: './img/cv-otuz.svg',
    correct: 'right',
  },
  {
    name: 'soru4',
    caption: '50-20',
    url: './img/sr-ellieksiyirmionon.svg',
    rightim: './img/cv-yirmi.svg',
    leftim: './img/cv-otuz.svg',
    correct: 'left',
  },
  {
    name: 'soru5',
    caption: '200-50',
    url: './img/sr-ikiyuzeksielli.svg',
    rightim: './img/cv-yuzelli.svg',
    leftim: './img/cv-yuz.svg',
    correct: 'right',
  },
  {
    name: 'soru6',
    caption: '200-100',
    url: './img/sr-ikiyuzeksiyuz.svg',
    rightim: './img/cv-yuz.svg',
    leftim: './img/cv-elli.svg',
    correct: 'right',
  },
  {
    name: 'soru7',
    caption: '200-100',
    url: './img/sr-ikiyuzeksiyuzellielli.svg',
    rightim: './img/cv-yuzelli.svg',
    leftim: './img/cv-yuz.svg',
    correct: 'right',
  },
  {
    name: 'soru8',
    caption: '40+60',
    url: './img/sr-kirkartialtmis.svg',
    rightim: './img/cv-yuz.svg',
    leftim: './img/cv-elli.svg',
    correct: 'right',
  },
  {
    name: 'soru9',
    caption: '40+10',
    url: './img/sr-kirkartion.svg',
    rightim: './img/cv-elli.svg',
    leftim: './img/cv-otuz.svg',
    correct: 'right',
  },
  {
    name: 'soru10',
    caption: '40+60',
    url: './img/sr-kirkartialtmisyirmiyirmi.svg',
    rightim: './img/cv-otuz.svg',
    leftim: './img/cv-yuz.svg',
    correct: 'left',
  },
  {
    name: 'soru11',
    caption: '40+10',
    url: './img/sr-kirkartibesbes.svg',
    rightim: './img/cv-elli.svg',
    leftim: './img/cv-yirmi.svg',
    correct: 'right',
  },
  {
    name: 'soru12',
    caption: '10+10',
    url: './img/sr-onartionbesbes.svg',
    rightim: './img/cv-yirmi.svg',
    leftim: './img/cv-kirk.svg',
    correct: 'right',
  },
  {
    name: 'soru13',
    caption: '10-5',
    url: './img/sr-oneksibes.svg',
    rightim: './img/cv-bes.svg',
    leftim: './img/cv-yirmi.svg',
    correct: 'right',
  },
  {
    name: 'soru14',
    caption: '70-20',
    url: './img/sr-yetmiseksiyirmiyirmi.svg',
    rightim: './img/cv-otuz.svg',
    leftim: './img/cv-elli.svg',
    correct: 'left',
  },
  {
    name: 'soru15',
    caption: '20+30',
    url: './img/sr-yirmiartiotuz.svg',
    rightim: './img/cv-otuz.svg',
    leftim: './img/cv-elli.svg',
    correct: 'left',
  },
  {
    name: 'soru16',
    caption: '20-10',
    url: './img/sr-yirmieksion.svg',
    rightim: './img/cv-on.svg',
    leftim: './img/cv-yirmi.svg',
    correct: 'right',
  },
  {
    name: 'soru17',
    caption: '20-10',
    url: './img/sr-yirmieksionbesbes.svg',
    rightim: './img/cv-yirmi.svg',
    leftim: './img/cv-on.svg',
    correct: 'left',
  },
  {
    name: 'soru18',
    caption: '100+100',
    url: './img/sr-yuzartiyuz.svg',
    rightim: './img/cv-ikiyuz.svg',
    leftim: './img/cv-yuzelli.svg',
    correct: 'left',
  },
  {
    name: 'soru19',
    caption: '100-50',
    url: './img/sr-yuzeksielli.svg',
    rightim: './img/cv-kirk.svg',
    leftim: './img/cv-elli.svg',
    correct: 'left',
  },
  {
    name: 'soru20',
    caption: '100-50',
    url: './img/sr-yuzeksielliyirmiyirmi.svg',
    rightim: './img/cv-elli.svg',
    leftim: './img/cv-kirk.svg',
    correct: 'right',
  },
  {
    name: 'soru21',
    caption: '150+50',
    url: './img/sr-yuzelliartielli.svg',
    rightim: './img/cv-yuz.svg',
    leftim: './img/cv-ikiyuz.svg',
    correct: 'left',
  },
  {
    name: 'soru22',
    caption: '150+100',
    url: './img/sr-yuzelliartiyuz.svg',
    rightim: './img/cv-ikiyuz.svg',
    leftim: './img/cv-ikiyuzelli.svg',
    correct: 'left',
  },
  {
    name: 'soru23',
    caption: '120+30',
    url: './img/sr-yuzyirmiartiotuz.svg',
    rightim: './img/cv-yuzelli.svg',
    leftim: './img/cv-yuz.svg',
    correct: 'right',
  },
  {
    name: 'soru24',
    caption: '120+30',
    url: './img/sr-yuzyirmiartiotuz.svg',
    rightim: './img/cv-yuzelli.svg',
    leftim: './img/cv-yuz.svg',
    correct: 'right',
  },
]

const db = [
  {
    name: 'Bitir',
    url: './img/bitir.svg',
    rightim: './img/rightarr.svg',
    leftim: './img/leftarr.svg',
    correct: 'right'
  },
  {
    name: 'soru1',
    caption: '5+5',
    url: './img/sr-besartibes.svg',
    rightim: './img/cv-on.svg',
    leftim: './img/cv-yirmi.svg',
    correct: 'right'
  },
  {
    name: 'soru2',
    caption: '50-40',
    url: './img/sr-ellieksikirk.svg',
    rightim: './img/cv-yirmi.svg',
    leftim: './img/cv-on.svg',
    correct: 'left',
  },
  {
    name: 'soru3',
    caption: '50-30',
    url: './img/sr-ellieksiotuz.svg',
    rightim: './img/cv-yirmi.svg',
    leftim: './img/cv-otuz.svg',
    correct: 'right',
  },
  {
    name: 'soru4',
    caption: '50-20',
    url: './img/sr-ellieksiyirmionon.svg',
    rightim: './img/cv-yirmi.svg',
    leftim: './img/cv-otuz.svg',
    correct: 'left',
  },
  {
    name: 'soru5',
    caption: '200-50',
    url: './img/sr-ikiyuzeksielli.svg',
    rightim: './img/cv-yuzelli.svg',
    leftim: './img/cv-yuz.svg',
    correct: 'right',
  },
  {
    name: 'soru19',
    caption: '100-50',
    url: './img/sr-yuzeksielli.svg',
    rightim: './img/cv-kirk.svg',
    leftim: './img/cv-elli.svg',
    correct: 'left',
  },
  {
    name: 'soru20',
    caption: '100-50',
    url: './img/sr-yuzeksielliyirmiyirmi.svg',
    rightim: './img/cv-elli.svg',
    leftim: './img/cv-kirk.svg',
    correct: 'right',
  },
  {
    name: 'soru21',
    caption: '150+50',
    url: './img/sr-yuzelliartielli.svg',
    rightim: './img/cv-yuz.svg',
    leftim: './img/cv-ikiyuz.svg',
    correct: 'left',
  },
  {
    name: 'soru22',
    caption: '150+100',
    url: './img/sr-yuzelliartiyuz.svg',
    rightim: './img/cv-ikiyuz.svg',
    leftim: './img/cv-ikiyuzelli.svg',
    correct: 'left',
  },
  {
    name: 'soru23',
    caption: '120+30',
    url: './img/sr-yuzyirmiartiotuz.svg',
    rightim: './img/cv-yuzelli.svg',
    leftim: './img/cv-yuz.svg',
    correct: 'right',
  },
  {
    name: 'Basla',
    url: './img/basla.svg',
    rightim: './img/rightarr.svg',
    leftim: './img/leftarr.svg',
    correct: 'right'
  }
]



var permute = function(nums){
  var result = [];
  var backtrack = (i, nums) => {
    if(i===nums.length){
      result.push(nums.slice());
      return;
    }  
    for(let j = i; j < nums.length; j++){
      [nums[i],nums[j]] = [nums[j],nums[i]];
      backtrack(i+1, nums);
      [nums[i],nums[j]] = [nums[j],nums[i]];
    }
  }
  backtrack(0, nums);
  console.log(result);
  return result;
};

var createNewArr = function(arr){
  
  const bitir = [ {
    name: 'Bitir',
    url: './img/bitir.svg',
    rightim: './img/rightarr.svg',
    leftim: './img/leftarr.svg',
    correct: 'right'
  }]

  const indexArr =  Math.floor(Math.random() * 20);
   
  const basla = [ {
    name: 'Basla',
    url: './img/basla.svg',
    rightim: './img/rightarr.svg',
    leftim: './img/leftarr.svg',
    correct: 'right'
  } ];

  const children = bitir.concat(arr,basla);

  return children;
};

function createNumElements(arr){

  const returnedArray = [];
  for(var i=0; i<10; i++){
    let x = Math.floor((Math.random() * 23));
    if(!returnedArray.includes(arr[x])){
      returnedArray.push(arr[x]);
    }
  }
  console.log(returnedArray);
  return returnedArray;
}

var randomArr= createNewArr(createNumElements(dbtwo));
var newDbTwo = []

if (randomArr.length === 12){
  console.log(randomArr)
  newDbTwo = randomArr
}
else{
  newDbTwo = db
}

console.log("NEWDB", newDbTwo)

const newDb = createNewArr(db);





function Advanced () {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);

  React.useEffect(() => {
    let interval = null;
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

useEffect(()=>{
  console.log(time);
  const text = "Great! You have finished the game. Your time score is " + String(time/1000) + " seconds";
  if(gameFinished === true){
    alert(text)
  }
},[gameFinished])



  
  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };
  
  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };
  
  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };


  const [currentIndex, setCurrentIndex] = useState(db.length - 1)
  const [lastDirection, setLastDirection] = useState()
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex)

  const childRefs = useMemo(
    () =>
      Array(newDb.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  )

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canGoBack = currentIndex < db.length - 1

  const canSwipe = currentIndex >= 0

  var checkQuestion = [];

  var numQ = 1



useEffect(()=>{
  console.log(currentIndex, 'currrentt')
},[currentIndex])


  // set last direction and decrease current index
  const swiped = async (direction, nameToDelete, index, correct) => {

    console.log(checkQuestion)
    if(nameToDelete === 'Basla'){
      handleStart();
    }
    if(direction !== correct){
      if(numQ >= 12 && checkQuestion.length>0){
        const lenarray = checkQuestion.length;
        updateCurrentIndex(checkQuestion[lenarray-1]);
        await childRefs[checkQuestion[lenarray-1]].current.restoreCard()
        checkQuestion.pop();
        if(nameToDelete !=='Basla' && nameToDelete !== 'Bitir'){
          checkQuestion.push(index);
        }
        numQ -= 1;
      }
      else{
        if(nameToDelete !=='Basla' && nameToDelete !== 'Bitir'){
          checkQuestion.push(index);
        }
        updateCurrentIndex(index - 1);
        numQ += 1;
      }
    }
    else{
        if(numQ >= 12 && checkQuestion.length>0){
          const lenarray = checkQuestion.length;
         await childRefs[checkQuestion[lenarray-1]].current.restoreCard()
          updateCurrentIndex(checkQuestion[lenarray-1]);
          checkQuestion.pop();
           numQ -= 1;
      }
      else{
        updateCurrentIndex(index - 1)
        numQ += 1;
      }

    }
    setLastDirection(direction)


if(currentIndexRef.current === -1){
    handlePauseResume();
    setGameFinished(true);
    }

  }

  const outOfFrame = (name, correct, idx) => {
    
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()


    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  }

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      console.log(dir);
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    }
  }

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[newIndex].current.restoreCard()
  }



  return (
    <div className="app">
      <link
        href='https://fonts.googleapis.com/css?family=Damion&display=swap'
        rel='stylesheet'
      />
      <link
        href='https://fonts.googleapis.com/css?family=Alatsi&display=swap'
        rel='stylesheet'
      />
      <div className='cardContainer'>
        {newDbTwo.map((character, index) => (
          <TinderCard
            ref={childRefs[index]}
            className='swipe'
            key={character.name}
            onSwipe={(dir) => swiped(dir, character.name, index, character.correct)}
            onCardLeftScreen={() => {outOfFrame(character.name, character.correct, index); }}
          >
          <Stack direction="row" sx={{display:'flex', justifyContent:'center', alignItems:'center'}} spacing={3}>
          <Box component="img" sx={{
            height: "15em",
            width: "15em",
            m: 1
          }} disableRipple  src={character.leftim} />
            <div
              style={{ backgroundImage: 'url(' + character.url + ')' }}
              className='card'
            >
            <Box sx={{justifyContent:'center', alignItems:'start', display:'flex'}}><Typography sx={{fontSize: 25,}}>{character.caption}</Typography></Box>
            
            </div>

            <Box component="img" sx={{
              height: "15em",
              width: "15em",
              m: 1
            }} disableRipple  src={character.rightim} />
          </Stack>
          </TinderCard>

        ))}
      </div>
    </div>
  )
}

export default Advanced;