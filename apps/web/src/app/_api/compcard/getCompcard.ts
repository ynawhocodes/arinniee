import { CompcardType } from "../../_type/compcard";
import { supabase } from "../../supabase";

const getCompcard = async () => {
  let { data: compcards, error } = await supabase
    .from("compcard")
    .select("*")

  if (error) {
    console.log(error);
  }
  return compcards as CompcardType[];
};

export { getCompcard };