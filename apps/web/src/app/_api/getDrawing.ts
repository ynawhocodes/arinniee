import { DrawingType } from "../_type/drawing";
import { supabase } from "../supabase";

const getDrawing = async () => {
  let { data: drawings, error } = await supabase
    .from("drawing")
    .select("*")
    .limit(12)

  if (error) {
    console.log(error);
  }

  return drawings as DrawingType[];
};

export { getDrawing };