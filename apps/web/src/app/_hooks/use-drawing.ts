import useSWR from "swr";
import { getDrawing } from "../_api/drawing/getDrawing";

const useDrawing = () => {
  const { data: drawings, error } = useSWR("drawing", () => getDrawing());

  // console.log(error);

  return { drawings };
};

export default useDrawing;
