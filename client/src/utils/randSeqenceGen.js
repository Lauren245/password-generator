
//get a random sequence to return to the calling function
const getRandSequence = () => {
  //TODO: consolidate after testing
  const rawSequence = (getRandNums() + getRandSpecialCharacter()).toString();
  const sequenceString = rawSequence.replace(/,/g,'');
  console.log('Final sequence string = ', sequenceString);
  return sequenceString;
};

// Get three random non-consecutive numbers
const getRandNums = () => {
  const numArr = [];
  
  while (numArr.length < 3) {
    const randNum = generateRandNum(0, 9);
    const lastNum = numArr[numArr.length - 1];
  
    if (numArr.length === 0 || (randNum !== lastNum && randNum !== lastNum + 1 && randNum !== lastNum - 1)) {
      numArr.push(randNum);
    }
  }
  
  console.log('Final number combo =', numArr);
  return numArr;
};
  
// Generate a single special character corresponding to keyboard numbers 1-8 (!-*).
const getRandSpecialCharacter = () => {
  const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*'];
  const index = generateRandNum(0, specialCharacters.length - 1);
  const specialCharacter = specialCharacters[index];
  
  console.log('Special character =', specialCharacter);
  return specialCharacter;
};
  
// Generate a random number between min and max (inclusive)
const generateRandNum = (min, max) => {
  const randNum = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log('Random number =', randNum);
  return randNum;
};
  
export default getRandSequence;