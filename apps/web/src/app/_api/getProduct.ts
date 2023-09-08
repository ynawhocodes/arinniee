import { ShopType } from "../_type/shop";
import { supabase } from "../supabase";

const getProduct = async (productId: number) => {
  let { data: product, error } = await supabase
    .from("shop")
    .select("thumbnailImageUrl, imageUrl")
    .eq("id", productId)

  if (error) {
    console.log(error);
  }

  return product;
};

export { getProduct };