"use server";

import { CompcardQueryResult } from "@sanity/types/sanity.types";
import { client } from "@sanity/lib/client";
import { defaultOptions } from "@sanity/lib/next";
import { compcardQuery } from "@sanity/queries/compcard";

export const getCompcard = async () =>
  client.fetch<CompcardQueryResult>(compcardQuery, {}, defaultOptions);
