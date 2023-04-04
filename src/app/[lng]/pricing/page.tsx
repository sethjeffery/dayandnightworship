import buildingOrange from "../../assets/building-orange.png";
import PictureBlock from "../../picture-block";
import Tick from "../../assets/icon-tick.svg";
import Cross from "../../assets/icon-cross.svg";
import Section from "../../section";
import Translate, { t } from "../translate";
import i18n from "./pricing.yml";
import { PageProps } from "../page-props";

function PricingMobileItem({
  accommodation,
  meals,
  price,
  lng,
}: {
  accommodation?: boolean;
  meals: number;
  price: number;
  lng: string;
}) {
  return (
    <div className="flex gap-4 text-xl justify-center py-8 px-4 bg-stone-200 dark:bg-[rgba(18,17,17,0.25)] my-8 rounded-lg">
      <h3 className="font-bold text-right text-3xl">{price} €</h3>
      <div className="grid gap-1 grid-cols-[fit-content(2rem)_fit-content(12rem)] items-center justify-center grid-flow-row-dense justify-self-start">
        <div>
          <Tick width="24" height="24" className="mx-auto" />
        </div>
        <div>
          <Translate lng={lng} i18n={i18n} code="training" />
        </div>
        <div>
          {accommodation ? (
            <Tick width="24" height="24" className="mx-auto" />
          ) : (
            <Cross width="24" height="24" className="mx-auto" />
          )}
        </div>
        <div>
          <Translate lng={lng} i18n={i18n} code="accommodation" />
        </div>
        <div className="font-bold text-center">{meals}</div>
        <div>
          <Translate lng={lng} i18n={i18n} code="meals" />
        </div>
      </div>
    </div>
  );
}

export default function Pricing({ params: { lng } }: PageProps) {
  return (
    <>
      <PictureBlock
        image={buildingOrange}
        title={t({ lng, i18n, code: "pricing" })}
        alt="Domaine de Laouenekaat building"
        priority
      />

      <Section container="md">
        <dl className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] grid-flow-row text-lg sm:text-2xl gap-px">
          <dd className="px-3 py-2 lg:py-3 rounded-tl-xl font-semibold bg-stone-200 text-right">
            <Translate code="weekly_rate.price" i18n={i18n} lng={lng} />
          </dd>
          <dt className="px-3 py-2 lg:py-3 rounded-tr-xl bg-stone-200">
            <Translate code="weekly_rate.label" i18n={i18n} lng={lng} />
          </dt>
          <dd className="px-3 py-2 lg:py-3 font-semibold bg-stone-200 text-right">
            <Translate code="daily_rate.price" i18n={i18n} lng={lng} />
          </dd>
          <dt className="px-3 py-2 lg:py-3 bg-stone-200">
            <Translate code="daily_rate.label" i18n={i18n} lng={lng} />
          </dt>
          <dd className="px-3 py-2 lg:py-3 font-semibold bg-stone-200 text-right">
            <Translate code="weekly_rate_kids.price" i18n={i18n} lng={lng} />
          </dd>
          <dt className="px-3 py-2 lg:py-3 bg-stone-200">
            <Translate code="weekly_rate_kids.label" i18n={i18n} lng={lng} />
          </dt>
          <dd className="px-3 py-2 lg:py-3 font-semibold bg-stone-200 text-right">
            <Translate code="daily_rate_kids.price" i18n={i18n} lng={lng} />
          </dd>
          <dt className="px-3 py-2 lg:py-3 bg-stone-200">
            <Translate code="daily_rate_kids.label" i18n={i18n} lng={lng} />
          </dt>
          <dd className="px-3 py-2 lg:py-3 rounded-bl-xl font-semibold bg-stone-200 text-right">
            <Translate code="baby_rate.price" i18n={i18n} lng={lng} />
          </dd>
          <dt className="px-3 py-2 lg:py-3 rounded-br-xl bg-stone-200">
            <Translate code="baby_rate.label" i18n={i18n} lng={lng} />
          </dt>
        </dl>
      </Section>

      <Section container="md" className="text-xl md:text-2xl">
        <div className="spacing-y-8">
          <Translate code="children_info" lng={lng} i18n={i18n} formatted />
        </div>

        <h2 className="text-2xl md:text-3xl mt-8 mb-2 text-primary">
          <Translate code="how_to_pay.title" lng={lng} i18n={i18n} />
        </h2>
        <div className="spacing-y-8">
          <Translate
            code="how_to_pay.content"
            lng={lng}
            i18n={i18n}
            formatted
          />
        </div>
      </Section>
    </>
  );
}

export const config = {
  runtime: "experimental-edge",
};
