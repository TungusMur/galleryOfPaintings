import { api } from "./api";

const getGalleryData = (
  page = 1,
  authorId,
  locationId,
  name,
  createdGte,
  createdLte,
  limit = 12
) =>
  api.get(
    `/paintings?_limit=${limit}&_page=${page}${
      authorId ? `&authorId=${authorId - 1}` : ""
    }${locationId ? `&locationId=${locationId - 1}` : ""}
    ${
      createdGte && createdLte
        ? `&created_gte=${createdGte}&created_lte=${createdLte}`
        : ""
    }${name ? `&q=${name}` : ""}`
  );

export default getGalleryData;
