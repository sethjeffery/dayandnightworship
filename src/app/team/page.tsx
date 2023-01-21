import Person from "../person";
import PictureBlock from "../picture-block";
import sethAndAnaOutside from "../assets/seth-and-ana-outside.png";
import instrumentsOrange from "../assets/instruments-orange.png";
import EmailLink from "../email-link";

export default function Team() {
  return (
    <>
      <PictureBlock
        image={instrumentsOrange}
        alt="Instruments and people"
        title="Équipe"
      />

      <Person
        name="Seth & Ana Jeffery"
        image={sethAndAnaOutside}
        alt="Seth and Ana outside"
      >
        <p>
          Seth et Ana, originaires d&rsquo;Angleterre et de Colombie, sont
          missionnaires en France depuis 2020. Ils ont fait partie de
          l&rsquo;équipe de France Élève-Toi à Paris en 2021, et ont un grand
          cœur pour les maisons de prière et les rassemblements de culte 24h/24
          et intercession.
        </p>
        <p className="mt-8">
          Seth est connu pour son créativité et sa sensibilité au fleuve de
          l&rsquo;Esprit pendant le culte. Ana a un fort don prophétique et
          apporte une passion pour l&rsquo;intercession, les bannières et la
          danse.
        </p>
      </Person>

      <div className="mt-16 py-16 border-t-2 border-stone-300 text-center px-8 text-xl md:text-3xl">
        Vous êtes intéressé à rejoindre notre équipe ?{" "}
        <EmailLink>Écrivez-nous!</EmailLink>
      </div>
    </>
  );
}
