import useSWR from "swr";
import { getCompcard } from "../_api/getCompcard";

const useCompcard = () => {
  const { data: compcards, error } = useSWR("compcard", () => getCompcard());

  console.log(error);
  
  return { compcards };
};

export default useCompcard;
