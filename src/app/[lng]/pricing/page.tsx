import buildingOrange from "../../assets/building-orange.png";
import PictureBlock from "../../picture-block";
import Tick from "../../assets/icon-tick.svg";
import Cross from "../../assets/icon-cross.svg";
import Section from "../../section";
import Translate, { t } from "../translate";
import i18n from "./pricing.yml";
import Canonicals from "../canonicals";
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

      <Section container="md" className="text-xl md:text-3xl">
        <div className="spacing-y-8">
          <Translate i18n={i18n} code="total_cost_is" lng={lng} formatted />
        </div>
      </Section>

      <Section container="md">
        <div className="md:hidden">
          <PricingMobileItem lng={lng} price={500} accommodation meals={3} />
          <PricingMobileItem lng={lng} price={350} meals={2} />
        </div>

        <table className="table-pricing hidden md:table">
          <thead>
            <tr>
              <th></th>
              <th>500 €</th>
              <th>350 €</th>
              <th>250 €</th>
              <th>0 €</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <Translate code="training" lng={lng} i18n={i18n} />
              </th>
              <td>
                <Tick width="32" height="32" />
              </td>
              <td>
                <Tick width="32" height="32" />
              </td>
              <td>
                <Tick width="32" height="32" />
              </td>
              <td>
                <Tick width="32" height="32" />
              </td>
            </tr>
            <tr>
              <th>
                <Translate code="meals" lng={lng} i18n={i18n} />
              </th>
              <td>3</td>
              <td>2</td>
              <td>3</td>
              <td>3</td>
            </tr>
            <tr>
              <th>
                <Translate code="training" lng={lng} i18n={i18n} />
              </th>
              <td>
                <Tick width="32" height="32" />
              </td>
              <td>
                <Cross width="32" height="32" />
              </td>
              <td>
                <Tick width="32" height="32" />
              </td>
              <td>
                <Tick width="32" height="32" />
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Translate code="3_12_years" lng={lng} i18n={i18n} />
              </td>
              <td>
                <Translate code="0_2_years" lng={lng} i18n={i18n} />
              </td>
            </tr>
          </tfoot>
        </table>
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
