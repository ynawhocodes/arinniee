import { defineField, defineType } from "sanity";
import { format } from "date-fns";
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
      validation: (Rule) => Rule.unique(),
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
        title: `컴피카드_${format(select.updatedAt, "yyyy-MM-dd")}`,
      };
    },
  },
});
