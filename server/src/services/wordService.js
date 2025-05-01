import dotenv from 'dotenv';

dotenv.config();

const generatePhrase = async() => {
  console.log('running generatePhrase');
  const numWords = 2; //this will make it easier to increase the number of words returned if needed
  try {
    //TODO: update code so it will make sure that the length of the two words when added together is at least 4 characters long
    const response = await fetch(`https://random-word-api.herokuapp.com/word?number=${numWords}`);
    const result = await response.json();

    console.log(result);

    const phrase = await formatPhrase(result);

    if(!phrase){
      throw new Error('Unable to parse data into phrase.');
    }

    return phrase;

  } catch (error) {
    console.error('generatePhrase encountered an error: ', error);
    return null;
  }
};

const formatPhrase = async(data) => {
  console.log('Running formatPhrase...');
  try {
    if(Array.isArray(data)) {
      console.log('this data is in an array.');
      const capArray = data.map(item => item.charAt(0).toUpperCase() + item.slice(1));
      console.log('capArray =', capArray);
      const phrase = capArray.join('');
      return phrase;
    }
    throw new Error('The data provided must be in an array. It is not');
  } catch(error) {
    console.error('formatPhrase encountered an error: ');
    return null;
  }
};


export default generatePhrase;