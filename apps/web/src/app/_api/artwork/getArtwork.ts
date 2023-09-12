import { supabase } from "../../supabase";
import { ArtworkType } from "../../_type/artwork";

const getArtwork = async () => {
  let { data: artworks, error } = await supabase
    .from("artwork")
    .select("id, thumbnailImageUrl")

  console.log('>', artworks)
  
  if (error) {
    console.log(error);
  }
  return artworks as ArtworkType[];
};

export { getArtwork };