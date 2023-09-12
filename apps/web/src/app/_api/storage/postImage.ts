import { FilmType } from "../../_type/film";
import { supabase } from "../../supabase";

const postImage =  async (db, field) => {
  const { data, error } = await supabase
  .from(`${db}`)
  .insert(
    [field]
  )
  .select()

  if(error){
    console.log('error', error)
    return
  }

  return data
}


export {postImage}
