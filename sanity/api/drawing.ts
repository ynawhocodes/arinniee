"use server";

import { DrawingQueryResult } from "@sanity/types/sanity.types";
import { client } from "@sanity/lib/client";
import { defaultOptions } from "@sanity/lib/next";
import { drawingQuery } from "@sanity/queries/drawing";

export const getDrawing = async () =>
  client.fetch<DrawingQueryResult>(drawingQuery, {}, defaultOptions);
