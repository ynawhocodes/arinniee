import type { StructureBuilder, StructureResolver } from "sanity/structure";

// todo: 아이콘 수정
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Admin")
    .items([
      singletonListItem(S, "compcard", "컴피카드"),
      singletonListItem(S, "artwork", "아트워크"),
      singletonListItem(S, "film", "필름"),
      singletonListItem(S, "drawing", "그림"),
      S.divider(),
      singletonListItem(S, "siteSetting", "사이트 설정"),
    ]);

const singletonListItem = (
  S: StructureBuilder,
  typeName: string,
  title?: string
) =>
  S.listItem()
    .title(title || typeName)
    .id(typeName)
    .child(S.document().schemaType(typeName).documentId(typeName));
