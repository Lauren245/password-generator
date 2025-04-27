import dotenv from 'dotenv';

dotenv.config();

const generateWord = async() => {
  console.log('running generateWord');
  const url = process.env.BASE_URL;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': process.env.API_KEY,
      'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
    return result;
  } catch (error) {
    console.error('getWords encountered an error: ', error);
    return null;
  }
};


export default generateWord;