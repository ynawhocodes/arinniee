import useSWR from "swr";
import { getCompcard, getCompcardPagination } from "../_api/compcard/getCompcard";

const useCompcard = () => {
  const { data: compcards, error } = useSWR("compcard", () => getCompcard());

  // console.log(error);
  
  return { compcards };
};

export default useCompcard;


const useCompcardPagination = (page: number) => {
  const { data: compcards, error } = useSWR(`compcard?page=${page}`, () => getCompcardPagination(page));
  return { compcards };
};

export { useCompcardPagination };
