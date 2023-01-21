import buildingOrange from "../assets/building-orange.png";
import PictureBlock from "../picture-block";
import Tick from "../assets/icon-tick.svg";
import Cross from "../assets/icon-cross.svg";
import Cta from "../cta";

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
      <h3 className="font-bold text-right text-3xl">€ {price}</h3>
      <div className="grid gap-1 grid-cols-[fit-content(2rem)_fit-content(12rem)] items-center justify-center grid-flow-row-dense justify-self-start">
        <div>
          <Tick width="24" height="24" className="mx-auto" />
        </div>
        <div>Teaching</div>
        <div>
          {accommodation ? (
            <Tick width="24" height="24" className="mx-auto" />
          ) : (
            <Cross width="24" height="24" className="mx-auto" />
          )}
        </div>
        <div>Accommodation</div>
        <div className="font-bold text-center">{meals}</div>
        <div>Meals</div>
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <>
      <PictureBlock
        image={buildingOrange}
        title="Pricing"
        alt="Domaine de Laouenekaat building"
      />

      <div className="my-16 max-w-screen-md mx-auto px-8 text-xl md:text-3xl">
        <p>
          Le coût total par étudiant est de <strong>€ 500</strong> pour la
          semaine. Nous avons également un tarif réduit pour les participants
          qui n&rsquo;auront pas besoin d&rsquo;hébergement.
        </p>
      </div>

      <div className="my-16 max-w-screen-md mx-auto px-8">
        <div className="md:hidden">
          <PricingMobileItem price={500} accommodation meals={3} />
          <PricingMobileItem price={350} meals={2} />
        </div>

        <table className="table-pricing hidden md:table">
          <thead>
            <tr>
              <th></th>
              <th>€ 500</th>
              <th>€ 350</th>
              <th>€ 250</th>
              <th>€ 0</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Teaching</th>
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
            <td>3-12 years</td>
            <td>0-2 years</td>
          </tfoot>
        </table>
      </div>

      <div className="my-16 max-w-screen-md mx-auto px-8 text-xl md:text-2xl">
        <p>
          Les jeunes enfants sont accueillis à moitié prix, et il y a une salle
          de jeux, mais veuillez noter que nous n&rsquo;avons pas de garderie
          dédiée.
        </p>
      </div>

      <div className="my-16">
        <Cta />
      </div>
    </>
  );
}
