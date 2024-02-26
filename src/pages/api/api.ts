// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios, { getData } from "@/lib/axios";

export const GetUserDetails = async () => {
  const response = await axios.get(`/account/21020398`);
  // return response;
  return getData(response);
};

export const MovieList = async () => {
  const response = await axios.get(`/genre/movie/list`);
  // return response;
  return getData(response);
};
