import { GetWatchlistMovies, MovieList } from "@/pages/api/api";
import { useQuery } from "@tanstack/react-query";

export function UseMWatchlist() {
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
