const API_URL = `https://api.unsplash.com/search/photos?query=nature&page=1&per_page=5&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`;

console.log(API_URL);
export const fetchImages = async () => {
  const response = await fetch(API_URL);
  const json = await response.json();

  return json.results.map((result) => result.urls.full);
}

const unsplashApi= {
  fetchImages
};


export default unsplashApi;
