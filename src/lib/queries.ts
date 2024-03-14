import {
  GetWatchlistMovies,
  GetMovieList,
  GetTrendingMovies,
} from "@/pages/api/api";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import type { MoviesResponse } from "./definitions";

export function UseWatchlist(): UseQueryResult<MoviesResponse, Error> {
  return useQuery({
    queryKey: ["watchlist"],
    queryFn: GetWatchlistMovies,
  });
}

export function UseMovies() {
  return useQuery({
    queryKey: ["movies"],
    queryFn: GetMovieList,
  });
}

export function UseTrendingMovies(time_window: string) {
  return useQuery({
    queryKey: ["trending"],
    queryFn: () => GetTrendingMovies(time_window),
  });
}

// export function UseMoviesImage(urls: string[]) {
//   return useQueries({
//     queries: (urls ?? [])?.map((url) => {
//       // since urls can be array of number or undefined or just undefined, we need to make sure it is capable to do the map function
//       return {
//         queryKey: ["todo", { url }],
//         queryFn: () => GetImage(url!), // ! is telling ts that the value is always defined
//       };
//     }),
//   });
// }
