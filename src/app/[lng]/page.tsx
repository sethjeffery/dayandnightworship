import Image from "next/image";
import Link from "next/link";
import beachHouse from "../assets/beach-house.jpg";
import house from "../assets/house.png";
import lakeOrange from "../assets/lake-orange.png";
import sethAndAnaOrange from "../assets/seth-and-ana-orange.png";
import tableOrange from "../assets/table-orange.png";
import Cta from "../cta";
import PictureBlock from "../picture-block";
import Section from "../section";
import SevenDaysHeader from "../seven-days-header";
import i18n from "./page.yml";
import Translate from "./translate";
import Video from "./video";

function HouseDiagram({ lng }: { lng: string }) {
  return (
    <div className="flex mx-auto items-center justify-center flex-col md:flex-row px-4">
      <ul
        className="flex-1 text-xl text-center md:text-right border-b-4 md:border-r-4 md:border-b-0 border-stone-200 dark:border-stone-600 p-4 leading-8 relative
        before:absolute before:left-0 before:right-0 before:bottom-0 md:before:left-[inherit] md:before:top-0 before:border-x-4 md:before:border-x-0 md:before:border-y-4 before:border-stone-200 dark:before:border-stone-600 before:h-8 md:before:h-[inherit] md:before:w-8"
      >
        <li>
          <Translate i18n={i18n} code="diagram.accommodation" lng={lng} />
        </li>
        <li>
          <Translate i18n={i18n} code="diagram.meals" lng={lng} />
        </li>
      </ul>
      <div className="border-l-4 md:border-t-4 md:border-l-0 border-stone-200 dark:border-stone-600 h-8 md:w-4 lg:w-16 md:h-0"></div>
      <div className="rounded-full bg-stone-200 p-8 dark:bg-stone-600">
        <Image src={house} alt="House" width="196" height="196" />
      </div>
      <div className="border-l-4 md:border-t-4 md:border-l-0 border-stone-200 dark:border-stone-600 h-8 md:w-4 lg:w-16 md:h-0"></div>
      <ul
        className="flex-1 text-xl text-center md:text-left border-t-4 md:border-t-0 md:border-l-4 border-stone-200 dark:border-stone-600 p-4 leading-8 relative
        before:absolute before:left-0 before:right-0 before:bottom-0 md:before:right-[inherit] before:top-0 before:border-x-4 md:before:border-x-0 md:before:border-y-4 before:border-stone-200 dark:before:border-stone-600 before:h-8 md:before:h-[inherit] md:before:w-8"
      >
        <li>
          <Translate i18n={i18n} code="diagram.worship" lng={lng} />
        </li>
        <li>
          <Translate i18n={i18n} code="diagram.friendships" lng={lng} />
        </li>
        <li>
          <Translate i18n={i18n} code="diagram.community" lng={lng} />
        </li>
        <li>
          <Translate i18n={i18n} code="diagram.holy_spirit" lng={lng} />
        </li>
      </ul>
    </div>
  );
}

export default function Home({ params: { lng } }: { params: { lng: string } }) {
  return (
    <>
      <PictureBlock
        image={sethAndAnaOrange}
        alt="Seth and Ana"
        title="Day and Night Worship"
        priority
      />

      <SevenDaysHeader lng={lng} i18n={i18n} code="deep_training_section" />

      <Section
        container="md"
        center
        className="border-b-2 pb-16 border-stone-300 dark:border-stone-600"
      >
        <p className="text-4xl">
          <Translate i18n={i18n} code="date" lng={lng} />
        </p>
        <p className="text-xl mt-4">
          Domaine de Laouenekaat
          <br />
          29 B Rte de Kergoff
          <br />
          56730 Saint-Gildas-de-Rhuys
        </p>
      </Section>

      <Video />

      <PictureBlock image={tableOrange} alt="Friends at table" />

      <SevenDaysHeader lng={lng} i18n={i18n} code="community_section" />

      <Section>
        <HouseDiagram lng={lng} />
      </Section>

      <Section container="xl" center className="text-2xl px-4" tag="blockquote">
        <div>
          &ldquo;
          <Translate
            code="community_section.pentecost_quote_1"
            i18n={i18n}
            lng={lng}
          />{" "}
          <strong>
            <Translate
              code="community_section.pentecost_quote_2"
              i18n={i18n}
              lng={lng}
            />
          </strong>
          .&rdquo;
        </div>
        <cite className="text-4xl">Acts 2:1</cite>
      </Section>

      <PictureBlock
        image={lakeOrange}
        alt="Peaceful lake"
        objectPosition="right"
      />

      <SevenDaysHeader lng={lng} i18n={i18n} code="refreshment_section" />

      <Section container="md" className="text-2xl">
        <div className="space-y-8">
          <Translate
            code="refreshment_section.content"
            i18n={i18n}
            lng={lng}
            formatted
          />
        </div>
        <div className="relative my-8">
          <div className="absolute rotate-1 top-0 left-0 w-full h-full shadow-lg bg-stone-100"></div>
          <div className="absolute -rotate-2 top-0 left-0 w-full h-full shadow-lg bg-stone-100"></div>
          <div className="relative p-4 md:p-8 shadow bg-white text-black">
            <Image src={beachHouse} alt="House near Plage de Kercambre" />
            <p className="text-center mt-2 font-handwriting">
              <Link
                href="https://goo.gl/maps/U9MvHGUnZd1sNdnVA"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-primary"
              >
                Plage de Kercambre
              </Link>{" "}
              <Translate
                i18n={i18n}
                lng={lng}
                code="refreshment_section.is_a_short_distance_from"
              />{" "}
              <Link
                href="https://goo.gl/maps/hZfbibhZd2DmKcry8"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-primary"
              >
                Domaine de Laouenekaat
              </Link>
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <Cta lng={lng} />
      </Section>
    </>
  );
}

export const config = {
  runtime: "experimental-edge",
};
