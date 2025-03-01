"use server";

import { ArtworkQueryResult } from "@sanity/types/sanity.types";
import { client } from "@sanity/lib/client";
import { defaultOptions } from "@sanity/lib/next";
import { artworkQuery } from "@sanity/queries/artwork";

export const getArtwork = async () =>
  client.fetch<ArtworkQueryResult>(artworkQuery, {}, defaultOptions);
