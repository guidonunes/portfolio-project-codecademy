const API_URL = `https://api.unsplash.com/search/photos?query=nature&page=1&per_page=5&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`;


console.log(API_URL);
export const getImage = async () => {
  console.log("Fetching images from Unsplash...");
  const response = await fetch(API_URL);
  console.log("Response:", response);
  const json = await response.json();
  console.log("Fetched data:", json);
  return json.results.map((result) => result.urls.full);
}

const unsplashApi= {
  getImage
};


export default unsplashApi;
