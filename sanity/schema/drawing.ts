import { defineField, defineType } from "sanity";

export default defineType({
  name: "drawing",
  title: "그림",
  type: "document",
  fields: [
    defineField({
      name: "images",
      title: "이미지",
      type: "array",
      of: [{ type: "image" }],
    }),
  ],
});
