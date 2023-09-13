import useSWR from "swr";
import { getShop } from "../_api/shop/getShop";

const useShop = () => {
  const { data: shops, error } = useSWR("shop", () => getShop());

  // console.log(error);
  
  return { shops };
};

export default useShop;
