
//get a random sequence to return to the calling function
const getRandSequence = () => {
  //TODO: consolidate after testing
  const sequenceString = (getRandNums() + getRandSpecialCharcter()).toString();
  console.log('Final sequence string = ', sequenceString);
  return sequenceString;
};

//get three random non-consecutive numbers
const getRandNums = () => {
  let count = 0;
  const NumArr = [];
  
  while(count !== 3){
    console.log('Entering while loop. count = ', count);
    //generate a random number between 0 and 9
    const randNum = generateRandNum(0, 9);
    //if numArray is not empty, check that the new randNum is not the same or consecutive to the previous num
    if(NumArr.length !== 0){
      console.log('NumArr.length = ', NumArr.length);
  
      const lastNum = NumArr[length -1];
  
      console.log('lastNum = ', lastNum);
      console.log(`comparing randNum (${randNum}) to lastNum(${lastNum})`);
  
      if(lastNum !== randNum && lastNum + 1 !== randNum && lastNum -1 !== randNum){
        //the number is not consectutive or the same, add it to the array and increment the count.
        NumArr.push(randNum);
        count++;
      };
  
    };
  };
  console.log('Exiting while loop. Final number combo = ', NumArr);
  return NumArr;
  
};
  
//generates a single special character corresponding to a character on the keyboard numbers 1-8 (!-*).
const getRandSpecialCharcter = () => {
  let specialCharater = '';
  const randNum = generateRandNum(1,8);
  
  switch(randNum) {
  case 1: {
    specialCharater = '!';
    break;
  };
  case 2: {
    specialCharater = '@';
    break;
  };
  case 2: {
    specialCharater = '@';
    break;
  };
  case 3: {
    specialCharater = '#';
    break;
  };
  case 4: {
    specialCharater = '$';
    break;
  };
  case 5: {
    specialCharater = '%';
    break;
  };
  case 6: {
    specialCharater = '^';
    break;
  };
  case 7: {
    specialCharater = '&';
    break;
  };
  case 8: {
    specialCharater = '*';
    break;
  };
  default: {
    console.log('An Error occured. Going with default value.');
    specialCharater = '!';
  };
  };
  
  console.log('Special character = ', specialCharater);
  return specialCharater;
};
 
const generateRandNum = (min, max) => {
  //TODO: consolidate this into single return statements once testing is complete
  let randNum = 0;
  
  if(min === 0) {
    randNum = Math.floor(Math.random() * max);
  
  }else {
    randNum = Math.floor(Math.random() * max) + min;
  }
     
  console.log('random number = ', randNum);
  return randNum;
};
  
export default getRandSequence;