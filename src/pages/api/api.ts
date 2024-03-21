import axios, { getData } from "@/lib/axios";
import type { MoviesResponse } from "@/lib/definitions";

const PUBLIC_USER_ID = process.env["NEXT_PUBLIC_USER_ID"];

export const GetWatchlistMovies: () => Promise<MoviesResponse> = async () => {
  const response = await axios.get<MoviesResponse>(
    `/account/${PUBLIC_USER_ID}/watchlist/movies`,
  );
  return getData<MoviesResponse>(response);
};

export const GetMovieList = async () => {
  const response = await axios.get(`/genre/movie/list`);
  return getData(response);
};

export const GetTrendingMovies: (
  time_window: string,
) => Promise<MoviesResponse> = async (time_window: string) => {
  const response = await axios.get(`/trending/movie/${time_window}`);
  return getData(response);
};

export const GetTrendingAll: (
  time_window: string,
) => Promise<MoviesResponse> = async (time_window: string) => {
  const response = await axios.get(`/trending/all/${time_window}`);
  return getData(response);
};
