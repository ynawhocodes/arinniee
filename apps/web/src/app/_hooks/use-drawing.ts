import useSWR from "swr";
import { getDrawing } from "../_api/getDrawing";

const useDrawing = () => {
  const { data: drawings, error } = useSWR("drawing", () => getDrawing());

  console.log(error);
  console.log('useDrawing', drawings)
  return { drawings };
};

export default useDrawing;
