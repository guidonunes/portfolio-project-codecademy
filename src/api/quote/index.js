const API_URL_QUOTE = `https://api.api-ninjas.com/v1/quotes?category=inspirational`;
const API_KEY = process.env.REACT_APP_QUOTE_API;

console.log(API_URL_QUOTE);



export const getQuote = async () => {
  console.log("Fetching quote from API...");
  const response = await fetch(API_URL_QUOTE, {
    headers: {
      "X-Api-Key": API_KEY
    }
  });

  if (!response.ok) {
    console.error("Failed to fetch quote");
    throw new Error("Failed to fetch quote");
  }
  const json = await response.json();
  const quoteData = json[0];
  console.log("Fetched data:", quoteData);
  return {
    quote: quoteData.quote,
    author: quoteData.author
  }
};


const quoteApi = {
  getQuote
};

export default quoteApi;
