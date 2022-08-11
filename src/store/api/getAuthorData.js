import { api } from "./api";

const getAuthorData = () => api.get("/authors");

export default getAuthorData;
