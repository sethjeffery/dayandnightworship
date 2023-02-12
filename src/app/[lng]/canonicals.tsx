export default function Canonicals({
  lng,
  path,
}: {
  lng: string;
  path: string;
}) {
  return (
    <>
      <link
        rel="canonical"
        href={`https://www.dayandnightworship.fr/${lng}${path}`}
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href={`https://www.dayandnightworship.fr/fr${path}`}
      />
      <link
        rel="alternate"
        hrefLang="en"
        href={`https://www.dayandnightworship.fr/en${path}`}
      />
    </>
  );
}
