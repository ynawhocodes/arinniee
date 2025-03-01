import { getArtwork } from "@sanity/api/artwork";
import Artwork from "./Artwork";

export default async function ArtworkPage() {
  const artwork = await getArtwork();
  console.log(artwork);

  return <Artwork artwork={artwork} />;
}
