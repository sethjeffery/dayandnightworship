import questionsOrange from "../../assets/questions-orange.png";
import PictureBlock from "../../picture-block";
import Section from "../../section";
import Cta from "../../cta";
import Translate, { t, tArray } from "../translate";
import i18n from "./info.yml";
import I18nLink from "../i18n-link";
import Link from "next/link";

function Teaching({ lng, code }: { lng: string; code: string }) {
  return (
    <li>
      <h3 className="text-primary">
        <Translate i18n={i18n} lng={lng} code={`${code}.title`} />
      </h3>
      <ul>
        {tArray({ lng, code: `${code}.points`, i18n }).map((item: string) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </li>
  );
}

export default function Info({ params: { lng } }: { params: { lng: string } }) {
  return (
    <>
      <PictureBlock
        image={questionsOrange}
        title={t({ lng, code: "info", i18n })}
        alt="Question marks"
      />

      <Section container="lg" className="text-xl md:text-2xl">
        <div className="my-8">
          <h2 className="text-2xl md:text-3xl mb-2 text-primary">
            <Translate code="when.question" i18n={i18n} lng={lng} />
          </h2>
          <div className="space-y-8">
            <Translate code="when.answer" i18n={i18n} lng={lng} formatted />
          </div>
        </div>

        <div className="my-8">
          <h2 className="text-2xl md:text-3xl mb-2 text-primary">
            <Translate code="where.question" i18n={i18n} lng={lng} />
          </h2>
          <p>
            <Link
              href="https://goo.gl/maps/mSkaePUd2t6moEXh7"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-primary"
            >
              Domaine de Laouenekaat
            </Link>
            , 29 Route de Kergoff, 56730 Saint-Gildas-de-Rhuys.
          </p>
        </div>

        <div className="my-8">
          <h2 className="text-2xl md:text-3xl mb-2 text-primary">
            <Translate code="how_much.question" i18n={i18n} lng={lng} />
          </h2>
          <div className="space-y-8">
            <Translate
              code="how_much.answer"
              i18n={i18n}
              lng={lng}
              interpolate={{
                pricing: (
                  <I18nLink
                    lng={lng}
                    href="/pricing"
                    className="underline hover:text-primary"
                  >
                    <Translate lng={lng} i18n={i18n} code="how_much.pricing" />
                  </I18nLink>
                ),
              }}
              formatted
            />
          </div>
        </div>

        <div className="my-8">
          <h2 className="text-2xl md:text-3xl mb-2 text-primary">
            <Translate code="what_teaching.question" i18n={i18n} lng={lng} />
          </h2>
          <div className="space-y-8">
            <Translate
              code="what_teaching.answer"
              i18n={i18n}
              lng={lng}
              formatted
            />
          </div>
          <ul className="mx-4 pt-4 text-xl [&>li]:break-inside-avoid md:columns-2 [&>li]:prose [&>li]:mb-4 [&>li]:border-l-4 [&>li]:border-stone-200 [&>li]:dark:border-stone-700 [&>li]:pl-4">
            <Teaching lng={lng} code="intimacy" />
            <Teaching lng={lng} code="teams" />
            <Teaching lng={lng} code="ministry" />
            <Teaching lng={lng} code="creativity" />
            <Teaching lng={lng} code="breakthrough" />
            <Teaching lng={lng} code="events" />
          </ul>
        </div>

        <div className="my-8">
          <h2 className="text-2xl md:text-3xl mb-2 text-primary">
            <Translate code="what_to_bring.question" i18n={i18n} lng={lng} />
          </h2>
          <div className="space-y-8">
            <Translate
              code="what_to_bring.answer"
              i18n={i18n}
              lng={lng}
              formatted
            />
          </div>
        </div>

        <div className="my-8">
          <h2 className="text-2xl md:text-3xl mb-2 text-primary">
            <Translate code="own_room.question" i18n={i18n} lng={lng} />
          </h2>
          <div className="space-y-8">
            <Translate code="own_room.answer" i18n={i18n} lng={lng} formatted />
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
