import { FilmType } from "../../_type/film";
import { supabase } from "../../supabase";

const postFilm =  async (film: FilmType) => {
  const { data, error } = await supabase
  .from('film')
  .insert(
    [film]
  )
  .select()

  if(error){
    console.log('error', error)
    return
  }

  return data
}


export {postFilm}
