
//TODO: add requirements for passwords.
const getWords = async () => {
  try{
    const response = await fetch('/api/words');

    console.log(` \n API call returned with status: ${response.status}: ${response.statusText}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log('response = ', response);
    // **New**
    console.log('Content-Type header:', response.headers.get('content-type'));

    const text = await response.text(); // get raw text
    console.log('Raw response text:', text); // **New**
    
    try {
      return await response.json();
    } catch (jsonError) {
      console.error('Failed to parse JSON: ', jsonError);
      return null; // Return a default value in case of JSON parsing failure
    }
  } catch (error) {
    console.error('getWords encountered an error: ', error);
    return null; // Return a default value in case of fetch failure
  }
};

export default getWords;