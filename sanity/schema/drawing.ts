import { defineField, defineType } from "sanity";
import { format } from "date-fns";

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
      options: {
        layout: "grid",
      },
    }),
  ],
  preview: {
    select: {
      updatedAt: "_updatedAt",
    },
    prepare(select) {
      return {
        title: `그림_${format(select.updatedAt, "yyyy-MM-dd")}`,
      };
    },
  },
});
