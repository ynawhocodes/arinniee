import { supabase } from "../supabase";
import { FilmType } from "../_type/film";

const getFilm = async () => {
  let { data: films, error } = await supabase
    .from("film")
    .select("id, thumbnailImageUrl")

  console.log(films)
  
  if (error) {
    console.log(error);
  }

  return films as FilmType[];
};

export { getFilm };