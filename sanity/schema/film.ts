import { defineField, defineType } from "sanity";

export default defineType({
  name: "film",
  title: "필름",
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
