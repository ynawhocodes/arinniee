import { defineField, defineType } from "sanity";

export default defineType({
  name: "compcard",
  title: "컴피카드",
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
