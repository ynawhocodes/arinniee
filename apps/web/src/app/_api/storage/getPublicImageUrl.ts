import { supabase } from "../../supabase";

const getPublicImageUrl = async (path: string) => {
  const url = supabase.storage.from("web").getPublicUrl(`${path}`);

  return url;
};

export { getPublicImageUrl};