import { defineField, defineType } from "sanity";
import { format } from "date-fns";

export default defineType({
  name: "artwork",
  title: "아트워크",
  type: "document",
  fields: [
    defineField({
      name: "images",
      title: "이미지",
      type: "array",
      of: [{ type: "image" }],
    }),
  ],
  preview: {
    select: {
      updatedAt: "_updatedAt",
    },
    prepare(select) {
      return {
        title: `아트워크_${format(select.updatedAt, "yyyy-MM-dd")}`,
      };
    },
  },
});
