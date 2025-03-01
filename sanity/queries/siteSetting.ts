import { defineQuery } from "next-sanity";

export const siteSettingQuery = defineQuery(`*[
  _type == "siteSetting"
][0]{
  _id,
  title,
  "seo": seo{
    description,
    keywords,
    ogImage,
  }
}`);
