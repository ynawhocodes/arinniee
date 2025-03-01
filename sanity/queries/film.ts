import { defineQuery } from "next-sanity";

export const filmQuery = defineQuery(`*[_type == "film"][0]{
  _id,
  "images": images[]{
    "image": asset,
    "metadata": asset->metadata
  },
}`);
