import { supabase } from "../../supabase";

const postOrderNumCompard = async (id: number, orderNum: number) => {
  let { error } = await supabase
    .from("compcard")
    .update({ orderNum: orderNum })
    .eq("id", id)
    .select();

  if (error) {
    console.log(error);
  }
};

export { postOrderNumCompard };
