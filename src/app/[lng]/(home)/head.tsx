import Canonicals from "../canonicals";
import { PageProps } from "../page-props";

export default function Head({ params: { lng } }: PageProps) {
  return (
    <>
      <title>Day and Night Worship</title>
      <Canonicals lng={lng} path="" />
    </>
  );
}
