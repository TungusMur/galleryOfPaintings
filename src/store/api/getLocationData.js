import { api } from "./api";

const getLocationData = () => api.get("/locations");

export default getLocationData;
