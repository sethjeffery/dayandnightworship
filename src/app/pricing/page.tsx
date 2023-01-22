import buildingOrange from "../assets/building-orange.png";
import PictureBlock from "../picture-block";
import Tick from "../assets/icon-tick.svg";
import Cross from "../assets/icon-cross.svg";
import Cta from "../cta";
import Section from "../section";

function PricingMobileItem({
  accommodation,
  meals,
  price,
}: {
  accommodation?: boolean;
  meals: number;
  price: number;
}) {
  return (
    <div className="flex gap-4 text-xl justify-center py-8 px-4 bg-stone-200 my-8 rounded-lg">
      <h3 className="font-bold text-right text-3xl">{price} €</h3>
      <div className="grid gap-1 grid-cols-[fit-content(2rem)_fit-content(12rem)] items-center justify-center grid-flow-row-dense justify-self-start">
        <div>
          <Tick width="24" height="24" className="mx-auto" />
        </div>
        <div>Formation</div>
        <div>
          {accommodation ? (
            <Tick width="24" height="24" className="mx-auto" />
          ) : (
            <Cross width="24" height="24" className="mx-auto" />
          )}
        </div>
        <div>Hébergement</div>
        <div className="font-bold text-center">{meals}</div>
        <div>Repas</div>
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <>
      <PictureBlock
        image={buildingOrange}
        title="Prix"
        alt="Domaine de Laouenekaat building"
      />

      <Section container="md" className="text-xl md:text-3xl">
        <p>
          Le coût total par étudiant est de{" "}
          <strong className="whitespace-nowrap">500 €</strong> pour la semaine.
          Nous avons également un tarif réduit pour les participants qui
          n&rsquo;auront pas besoin d&rsquo;hébergement.
        </p>
      </Section>

      <Section container="md">
        <div className="md:hidden">
          <PricingMobileItem price={500} accommodation meals={3} />
          <PricingMobileItem price={350} meals={2} />
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
              <th>Formation</th>
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
              <th>Repas</th>
              <td>3</td>
              <td>2</td>
              <td>3</td>
              <td>3</td>
            </tr>
            <tr>
              <th>Hébergement</th>
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
            <td></td>
            <td></td>
            <td></td>
            <td>3-12 ans</td>
            <td>0-2 ans</td>
          </tfoot>
        </table>
      </Section>

      <Section container="md" className="text-xl md:text-2xl">
        <p>
          Les jeunes enfants sont accueillis à moitié prix, et il y a une salle
          de jeux, mais veuillez noter que nous n&rsquo;avons pas de garderie
          dédiée.
        </p>
      </Section>

      <Section>
        <Cta />
      </Section>
    </>
  );
}
