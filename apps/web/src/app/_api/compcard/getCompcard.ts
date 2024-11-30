import { CompcardType } from "../../_type/compcard";
import { supabase } from "../../supabase";

const getCompcard = async () => {
  let { data: compcards, error } = await supabase
    .from("compcard")
    .select("*")
    .order("orderNum", { ascending: false });

  if (error) {
    console.log(error);
  }
  return compcards as CompcardType[];
};

export { getCompcard };

const getCompcardPagination = async (page: number) => {
  const { data: compcards, error } = await supabase
    .from("compcard")
    .select("*")
    .order("orderNum", { ascending: false })
    .range((page - 1) * 9, page * 9);

  if (error) {
    console.log(error);
  }
  return compcards as CompcardType[];
};

export { getCompcardPagination };
