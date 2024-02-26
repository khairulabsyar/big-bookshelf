import { GetUserDetails, MovieList } from "@/pages/api/api";
import { useQuery } from "@tanstack/react-query";

export function GetUser() {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => GetUserDetails,
  });
}

export function GetMovies() {
  return useQuery({
    queryKey: ["movies"],
    queryFn: MovieList,
  });
}
