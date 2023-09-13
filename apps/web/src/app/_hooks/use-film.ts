import useSWR from "swr";
import { getFilm } from "../_api/film/getFilm";

const useFilm = () => {
  const { data: films, error } = useSWR("film", () => getFilm());

  // console.log(error);
  
  return { films };
};

export default useFilm;
