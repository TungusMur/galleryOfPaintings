import { api } from "./api";

const getGalleryData = (page = 1, authorId, limit = 12) =>
  api.get(
    `/paintings?_limit=${limit}&_page=${page}${
      authorId ? `&authorId=${authorId}` : ""
    }`
  );

export default getGalleryData;
