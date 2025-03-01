import { defineQuery } from "next-sanity";

export const drawingQuery = defineQuery(`*[_type == "drawing"][0]{
  _id,
  "images": images[]{
    "image": asset,
    "metadata": asset->metadata
  },
}`);
