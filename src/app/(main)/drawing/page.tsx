import { getDrawing } from "@sanity/api/drawing";
import Drawing from "./Drawing";

export default async function DrawingPage() {
  const drawing = await getDrawing();
  console.log(drawing);

  return <Drawing drawing={drawing} />;
}
