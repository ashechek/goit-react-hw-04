import axios from "axios";
const searchImagesForTopic = async (topic, page) => {
  const res = await axios.get(
    `https://api.unsplash.com/search/photos/?client_id=j0mEJ6Vu734i0Bfo8b52JgV1vS-b9s5OLb7V9H2sXpo&query=${topic}&per_page=8&page=${page}`
  );
  return res.data.results;
};
export default searchImagesForTopic;
