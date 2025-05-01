
//TODO: add requirements for passwords.
const getWords = async () => {
  try{
    const response = await fetch('/api/words');

    console.log(` \n API call returned with status: ${response.status}: ${response.statusText}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
    
  } catch (error) {
    console.error('getWords encountered an error: ', error);
    return null; // Return a default value in case of fetch failure
  }
};

export default getWords;