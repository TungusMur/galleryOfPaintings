import { api } from "./api";

const getGalleryData = (page = 1, limit = 12) =>
  api.get(`/paintings?_limit=${limit}&_page=${page}`);

export default getGalleryData;
