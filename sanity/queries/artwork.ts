import { defineQuery } from "next-sanity";

export const artworkQuery = defineQuery(`*[_type == "artwork"][0]{
  _id,
  "images": images[]{
    "image": asset,
    "metadata": asset->metadata
  },
}`);
