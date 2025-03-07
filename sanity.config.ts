"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { koKRLocale } from "@sanity/locale-ko-kr";
import { colorInput } from "@sanity/color-input";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import { structure } from "./sanity/structure";
import { myTheme } from "./sanity/theme";
import { Logo } from "./sanity/components/Logo";

export default defineConfig({
  name: "default",
  title: "Arinniee",
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  icon: Logo,
  theme: myTheme,
  plugins: [
    structureTool({ structure }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    koKRLocale(),
    colorInput(),
  ],
});
