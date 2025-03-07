import type { StructureBuilder, StructureResolver } from "sanity/structure";
import { FaImage, FaTags, FaFilm, FaPencilRuler, FaCog } from "react-icons/fa";

// todo: 아이콘 수정
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Admin")
    .items([
      singletonListItem(S, "compcard", "컴피카드").icon(FaImage),
      singletonListItem(S, "artwork", "아트워크").icon(FaTags),
      singletonListItem(S, "film", "필름").icon(FaFilm),
      singletonListItem(S, "drawing", "그림").icon(FaPencilRuler),
      S.divider(),
      singletonListItem(S, "siteSetting", "사이트 설정").icon(FaCog),
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
