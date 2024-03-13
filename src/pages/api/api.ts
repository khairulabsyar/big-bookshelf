import axios, { getData } from "@/lib/axios";
import type { MoviesResponse } from "@/lib/definitions";

const PUBLIC_USER_ID = process.env["NEXT_PUBLIC_USER_ID"];
const PUBLIC_API_IMAGE_PATH = process.env["NEXT_PUBLIC_API_IMAGE_PATH"];

export const GetWatchlistMovies: () => Promise<MoviesResponse> = async () => {
  const response = await axios.get<MoviesResponse>(
    `/account/${PUBLIC_USER_ID}/watchlist/movies`,
  );
  return getData<MoviesResponse>(response);
};

export const MovieList = async () => {
  const response = await axios.get(`/genre/movie/list`);
  return getData(response);
};

export const GetImage = async (url: string) => {
  axios.defaults.baseURL = PUBLIC_API_IMAGE_PATH;
  const response = await axios.get(url);
  return getData(response);
};
