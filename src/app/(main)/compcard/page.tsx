import { getCompcard } from "@sanity/api/compcard";
import Compcard from "./Compcard";

export default async function ComcardPage() {
  const compcard = await getCompcard();
  console.log(compcard);

  return <Compcard compcard={compcard} />;
}
