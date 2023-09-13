import { DrawingType } from "../../_type/drawing";
import { supabase } from "../../supabase";

const getDrawing = async () => {
  let { data: drawings, error } = await supabase
    .from("drawing")
    .select("*")
    .order('id', { ascending: false })

  if (error) {
    console.log(error);
  }
  return drawings as DrawingType[];
};

export { getDrawing };