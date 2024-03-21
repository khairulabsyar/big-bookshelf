import {
  GetWatchlistMovies,
  GetMovieList,
  GetTrendingMovies,
  GetTrendingAll,
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

export function UseTrendingAll(time_window: string) {
  return useQuery({
    queryKey: ["trendingAll"],
    queryFn: () => GetTrendingAll(time_window),
  });
}
