import { client } from "@sanity/lib/client";
import { defaultOptions } from "@sanity/lib/next";
import { siteSettingQuery } from "@sanity/queries/siteSetting";
import { SiteSettingQueryResult } from "@sanity/types/sanity.types";

export const getSiteSetting = async () =>
  client.fetch<SiteSettingQueryResult>(siteSettingQuery, {}, defaultOptions);
