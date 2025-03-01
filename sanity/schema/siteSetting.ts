import { defineField, defineType } from "sanity";
import { format } from "date-fns";

export default defineType({
  name: "siteSetting",
  title: "사이트 설정",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "사이트 이름",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "seo",
      title: "SEO 설정",
      type: "object",
      fields: [
        {
          name: "description",
          title: "사이트 설명",
          type: "text",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "ogImage",
          title: "OG 이미지",
          description: "소셜 미디어에서 공유될 때 표시되는 이미지",
          type: "image",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "keywords",
          title: "키워드",
          description: "검색 엔진 최적화(SEO)를 위한 키워드",
          type: "array",
          of: [{ type: "string" }],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      createdAt: "_createdAt",
      media: "ogImage",
    },
    prepare(selection) {
      const date =
        selection.createdAt && format(selection.createdAt, "yyyy.MM.dd");

      return {
        title: `사이트 설정_${date}`,
        media: selection.media,
      };
    },
  },
});
