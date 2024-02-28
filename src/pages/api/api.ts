import axios, { getData } from "@/lib/axios";
const PUBLIC_USER_ID = process.env["NEXT_PUBLIC_USER_ID"];

export const GetWatchlistMovies = async () => {
  const response = await axios.get(
    `/account/${PUBLIC_USER_ID}/watchlist/movies`,
  );
  return getData(response);
};

export const MovieList = async () => {
  const response = await axios.get(`/genre/movie/list`);
  return getData(response);
};
