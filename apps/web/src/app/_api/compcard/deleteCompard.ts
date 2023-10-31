import { CompcardType } from "../../_type/compcard";
import { supabase } from "../../supabase";

const deleteCompcard = async (id: string) => {
  let { error } = await supabase
    .from("compcard")
    .delete()
    .eq('id', id)

  if (error) {
    console.log(error);
  }
};

export { deleteCompcard };