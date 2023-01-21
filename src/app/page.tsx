import Image from "next/image";
import Person from "./person";
import SevenDaysHeader from "./seven-days-header";
import PictureBlock from "./picture-block";
import Cta from "./cta";
import sethAndAnaOrange from "./assets/seth-and-ana-orange.png";
import sethAndAnaOutside from "./assets/seth-and-ana-outside.png";
import tableOrange from "./assets/table-orange.png";
import lakeOrange from "./assets/lake-orange.png";
import house from "./assets/house.png";
import beachHouse from "./assets/beach-house.jpg";

export default function Home() {
  return (
    <>
      <PictureBlock
        image={sethAndAnaOrange}
        alt="Seth and Ana"
        title="Day and Night Worship"
      />

      <SevenDaysHeader title="7 jours de formation approfondie">
        en louange, prophétie, intercession, sensibilité
      </SevenDaysHeader>

      <Person
        name="Seth & Ana Jeffery"
        image={sethAndAnaOutside}
        alt="Seth and Ana outside"
        quote
      >
        <p>
          Nous croyons qu&rsquo;à travers la louange, nous rencontrons Dieu
          d&rsquo;une manière qui nous transforme radicalement et lui apporte
          beaucoup de gloire. Notre désir est de montrer aux autres comment
          arriver à ce lieu de rencontre avec Dieu par la louange.
        </p>
        <p className="mt-8">
          Ces moments de rencontre permettent de recevoir de merveilleux dons,
          une habilitation et une onction qui béniront les autres. Mais notre
          objectif principal sera toujours Lui seul.
        </p>
      </Person>

      <PictureBlock image={tableOrange} alt="Friends at table" />

      <SevenDaysHeader title="7 jours de communauté">
        vivre ensemble, grandir ensemble
      </SevenDaysHeader>

      <div className="flex mx-auto items-center justify-center flex-col md:flex-row px-4">
        <ul
          className="flex-1 text-xl text-center md:text-right border-b-4 md:border-r-4 md:border-b-0 border-stone-200 p-4 leading-8 relative
            before:absolute before:left-0 before:right-0 before:bottom-0 md:before:left-[inherit] md:before:top-0 before:border-x-4 md:before:border-x-0 md:before:border-y-4 before:border-stone-200 before:h-8 md:before:h-[inherit] md:before:w-8"
        >
          <li>Hébergement inclus</li>
          <li>Repas inclus</li>
        </ul>
        <div className="border-l-4 md:border-t-4 md:border-l-0 border-stone-200 h-8 md:w-4 lg:w-16 md:h-0"></div>
        <div className="rounded-full bg-stone-200 p-8">
          <Image src={house} alt="House" width="196" height="196" />
        </div>
        <div className="border-l-4 md:border-t-4 md:border-l-0 border-stone-200 h-8 md:w-4 lg:w-16 md:h-0"></div>
        <ul
          className="flex-1 text-xl text-center md:text-left border-t-4 md:border-t-0 md:border-l-4 border-stone-200 p-4 leading-8 relative
            before:absolute before:left-0 before:right-0 before:bottom-0 md:before:right-[inherit] before:top-0 before:border-x-4 md:before:border-x-0 md:before:border-y-4 before:border-stone-200 before:h-8 md:before:h-[inherit] md:before:w-8"
        >
          <li>Temps de louange</li>
          <li>Amitiés divines</li>
          <li>Vivre en communauté</li>
          <li>Honorer le Saint-Esprit</li>
        </ul>
      </div>

      <blockquote className="my-16 max-w-screen-lg text-2xl mx-auto text-center px-4">
        <div>
          &ldquo;Quand le jour de la Pentecôte arriva, ils étaient tous{" "}
          <strong>ensemble au même endroit</strong>.&rdquo;
        </div>
        <cite className="text-4xl">Acts 2:1</cite>
      </blockquote>

      <PictureBlock image={lakeOrange} alt="Peaceful lake" />

      <SevenDaysHeader title="7 jours de rafraîchissement">
        pour rafraîchir notre louange à Dieu
      </SevenDaysHeader>

      <div className="my-16 text-2xl max-w-screen-md px-8 mx-auto">
        <p>
          Le Seigneur est à la fois une langue de feu et une petite voix douce,
          et nous le rencontrons à la fois dans le bruit et dans le silence, en
          temps de forte communauté et en temps de solitude.
        </p>
        <p className="mt-8">
          Pour cela, nous avons choisi un endroit où nous pouvons non seulement
          louer ensemble, mais aussi passer des moments calmes en développant
          notre connexion personnelle avec le Saint-Esprit.
        </p>
        <div className="relative my-8">
          <div className="absolute rotate-1 top-0 left-0 w-full h-full shadow-lg bg-stone-100"></div>
          <div className="absolute -rotate-2 top-0 left-0 w-full h-full shadow-lg bg-stone-100"></div>
          <div className="relative p-4 md:p-8 shadow bg-white">
            <Image src={beachHouse} alt="House near Plage de Kercambre" />
            <p className="text-center mt-2 font-handwriting">
              <a
                href="https://goo.gl/maps/U9MvHGUnZd1sNdnVA"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-primary"
              >
                Plage de Kercambre
              </a>{" "}
              n&rsquo;est qu&rsquo;à 10 min à pied de{" "}
              <a
                href="https://goo.gl/maps/hZfbibhZd2DmKcry8"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-primary"
              >
                Domaine de Laouenekaat
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="my-16 text-center">
        <Cta />
      </div>
    </>
  );
}
