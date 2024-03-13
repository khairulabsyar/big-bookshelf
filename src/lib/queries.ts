import { GetImage, GetWatchlistMovies, MovieList } from "@/pages/api/api";
import {
  useQueries,
  useQuery,
  type UseQueryResult,
} from "@tanstack/react-query";
import type { MoviesResponse } from "./definitions";

export function UseMWatchlist(): UseQueryResult<MoviesResponse, Error> {
  return useQuery({
    queryKey: ["watchlist"],
    queryFn: GetWatchlistMovies,
  });
}

export function UseMovies() {
  return useQuery({
    queryKey: ["movies"],
    queryFn: MovieList,
  });
}

export function UseMoviesImage(urls: string[]) {
  return useQueries({
    queries: (urls ?? [])?.map((url) => {
      // since urls can be array of number or undefined or just undefined, we need to make sure it is capable to do the map function
      return {
        queryKey: ["todo", { url }],
        queryFn: () => GetImage(url!), // ! is telling ts that the value is always defined
      };
    }),
  });
}
