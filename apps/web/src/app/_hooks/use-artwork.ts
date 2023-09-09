import useSWR from "swr";
import { getArtwork } from "../_api/getArtwork";

const useArtwork = () => {
  const { data: artworks, error } = useSWR("artwork", () => getArtwork());

  console.log(error);
  
  return { artworks };
};

export default useArtwork;
