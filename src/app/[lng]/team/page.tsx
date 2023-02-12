import Person from "../../person";
import PictureBlock from "../../picture-block";
import sethAndAnaOutside from "../../assets/seth-and-ana-outside.png";
import trevAndBell from "../../assets/trev-and-bell.jpg";
import instrumentsOrange from "../../assets/instruments-orange.png";
import EmailLink from "../../email-link";
import Section from "../../section";
import graceTiengwelieu from "../../assets/grace-tiengwelieu.jpg";
import michaelObed from "../../assets/michael-obed.jpg";
import jasonLeeJones from "../../assets/jason-lee-jones.jpg";
import fernando from "../../assets/fernandinho.jpg";
import i18n from "./team.yml";
import { StaticImageData } from "next/image";
import Translate, { t } from "../translate";

interface TeamPersonProps {
  lng: string;
  code: string;
  image: StaticImageData;
}

function TeamPerson({ lng, code, image }: TeamPersonProps) {
  return (
    <Person
      name={t({ i18n, lng, code: `${code}.title` })}
      image={image}
      alt={t({ i18n, lng, code: `${code}.alt` })}
    >
      <Translate i18n={i18n} lng={lng} code={`${code}.bio`} formatted />
    </Person>
  );
}

export default function Team({ params: { lng } }: { params: { lng: string } }) {
  return (
    <>
      <PictureBlock
        image={instrumentsOrange}
        alt="Instruments and people"
        title={t({ code: "team", lng, i18n })}
        priority
      />

      <TeamPerson lng={lng} code="sethAndAna" image={sethAndAnaOutside} />
      <TeamPerson lng={lng} code="trevAndBell" image={trevAndBell} />
      <TeamPerson lng={lng} code="grace" image={graceTiengwelieu} />
      <TeamPerson lng={lng} code="michael" image={michaelObed} />
      <TeamPerson lng={lng} code="fernando" image={fernando} />
      <TeamPerson lng={lng} code="jason" image={jasonLeeJones} />

      <Section center container="lg" className="text-xl md:text-3xl">
        <Translate lng={lng} i18n={i18n} code="interested_in_joining" />{" "}
        <EmailLink>
          <Translate lng={lng} i18n={i18n} code="write_to_us" />
        </EmailLink>
      </Section>
    </>
  );
}

export const config = {
  runtime: "experimental-edge",
};
