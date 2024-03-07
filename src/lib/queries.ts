import { GetWatchlistMovies, MovieList } from "@/pages/api/api";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";
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
