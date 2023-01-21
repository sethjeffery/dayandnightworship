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
          The full cost per student is <strong>€ 500</strong> for the week. We
          also have a reduced rate for attendees that do not need accommodation.
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
              <th>Meals</th>
              <td>3</td>
              <td>2</td>
              <td>3</td>
              <td>3</td>
            </tr>
            <tr>
              <th>Accommodation</th>
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
          Young children are welcomed at half price, and there is a play room,
          but please note that we do not have dedicated child care.
        </p>
      </div>

      <div className="my-16">
        <Cta />
      </div>
    </>
  );
}
