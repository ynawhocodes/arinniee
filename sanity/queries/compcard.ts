import { defineQuery } from "next-sanity";

export const compcardQuery = defineQuery(`*[_type == "compcard"][0]{
  _id,
  "images": images[]{
    "image": asset,
    "metadata": asset->metadata
  },
}`);
