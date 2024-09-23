import axios from "axios";

const API_KEY = "Xdy94vcF56BSiQfuDNbwyg5MdtToIT8jxqpN3UvVkqg";

axios.defaults.baseURL = `https://api.unsplash.com/search/photos/`;

const searchImagesForTopic = async (topic, page) => {
  const res = await axios.get(
    `?client_id=${API_KEY}&query=${topic}&per_page=8&page=${page}`
  );

  return res.data.results;
};
export default searchImagesForTopic;
