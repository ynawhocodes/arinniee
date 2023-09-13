import { supabase } from "../../supabase";

const postImageToBucket = async (file: File, folder: string, isThumbnail: boolean, name: string) => {
  const { data, error } = await supabase.storage
    .from("web")
    .upload(`${folder}/2020/${isThumbnail ? 'thumbnail' : ''}/${name}`, file);

  // console.log('data', data);

  if (error) {
    console.log(error);
  } else {
    return data.path;
  }
};

export { postImageToBucket };
