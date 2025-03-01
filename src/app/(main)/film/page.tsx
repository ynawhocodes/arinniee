import { getFilm } from "@sanity/api/film";
import Film from "./Film";

export default async function FilmPage() {
  const film = await getFilm();
  console.log(film);

  return <Film film={film} />;
}
