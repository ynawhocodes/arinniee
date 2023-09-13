import { supabase } from "../../supabase";
import { ShopType } from "../../_type/shop";

const getShop = async () => {
  let { data: shops, error } = await supabase
    .from("shop")
    .select("id, thumbnailImageUrl, isSoldout")
    .limit(12)
    .order('id', { ascending: false })

  if (error) {
    console.log(error);
  }

  return shops as ShopType[];
};

export { getShop };