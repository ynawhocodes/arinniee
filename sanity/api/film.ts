"use server";

import { FilmQueryResult } from "@sanity/types/sanity.types";
import { client } from "@sanity/lib/client";
import { defaultOptions } from "@sanity/lib/next";
import { filmQuery } from "@sanity/queries/film";

export const getFilm = async () =>
  client.fetch<FilmQueryResult>(filmQuery, {}, defaultOptions);
