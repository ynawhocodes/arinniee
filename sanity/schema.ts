import { type SchemaTypeDefinition } from "sanity";

import siteSetting from "./schema/siteSetting";
import artwork from "./schema/artwork";
import drawing from "./schema/drawing";
import compcard from "./schema/compcard";
import film from "./schema/film";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Document types
    siteSetting,
    artwork,
    drawing,
    compcard,
    film,
  ],
};
