import { supabase } from "../../supabase";

const postFilmImage = async (file: File,folder: string, name: string) => {
  const { data, error } = await supabase.storage
    .from("web")
    .upload(`${folder}/2020/thumbnail/${folder}_${name}`, file);

  console.log('data', data);

  if (error) {
    console.log(error);
  } else {
    return data.path;
  }
};

export { postFilmImage };
