import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.thedogapi.com/v1",
});

const dogApiKey = process.env.NEXT_PUBLIC_DOG_API_KEY;
if (dogApiKey) {
  api.defaults.headers.common["X-API-KEY"] = dogApiKey;
}

export const API_URL_RANDOM =
  "https://api.thedogapi.com/v1/images/search?limit=2";
export const API_URL_FAVORITES = (id: string) =>
  `https://api.thedogapi.com/v1/favourites/${id}`;
export const API_URL_FAVORITES_DELETE = (id: string) =>
  `https://api.thedogapi.com/v1/favourites/${id}`;
export const API_URL_UPLOAD = "https://api.thedogapi.com/v1/images/upload";
export const API_URL_BREEDS =
  "https://api.thedogapi.com/v1/breeds/search?limit=50";
export const API_URL_CATEGORIES = "https://api.thedogapi.com/v1/categories";