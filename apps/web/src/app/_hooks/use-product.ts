import useSWR from "swr";
import { getProduct } from "../_api/shop/getProduct";

const useProduct = (productId: number) => {
  const { data: product, error } = useSWR("product", () => getProduct(productId));

  // console.log(error);
  
  return { product };
};

export default useProduct;
