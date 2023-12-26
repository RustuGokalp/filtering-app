import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 5peFpC3cGXCCL7bIcOHOzgXek1E_abfQuJyGDJJtazo",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
