import Person from "../person";
import PictureBlock from "../picture-block";
import sethAndAnaOutside from "../assets/seth-and-ana-outside.png";
import instrumentsOrange from "../assets/instruments-orange.png";
import EmailLink from "../email-link";
import Section from "../section";
import graceTiengwelieu from "../assets/grace-tiengwelieu.jpg";
import michaelObed from "../assets/michael-obed.jpg";

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
          cœur pour les maisons de prière et les rassemblements de louange et
          intercession 24h/24.
        </p>
        <p className="mt-8">
          Seth est connu pour sa sensibilité au fleuve de l&rsquo;Esprit et sa
          capacité à le communiquer à travers la musique. Ana a un fort don
          prophétique et apporte une passion pour l&rsquo;intercession, les
          bannières et la danse.
        </p>
      </Person>

      <Person
        name="Grace Tiengwelieu"
        image={graceTiengwelieu}
        alt="Grace Tiengwelieu profile"
      >
        <p>
          Grace est une adoratrice passionnée, qui aime voir chacun-e entrer
          dans sa relation intime avec Dieu et marcher dans sa plénitude. Elle
          aime enseigner les pépites que Dieu lui donne d&rsquo;expérimenter
          pour entrer dans les victoires qu&rsquo;il a préparé pour nous.
        </p>
        <p className="mt-8">
          Dans ses propres mots:{" "}
          <q className="text-primary before:content-['«'] after:content-['»']">
            Le Royaume des cieux est a porté de main, à nous de le saisir et de
            l&rsquo;apporter au monde.
          </q>
        </p>
      </Person>

      <Person
        name="Michael Obed"
        image={michaelObed}
        alt="Michael Obed profile"
      >
        <p>
          Michael est un adorateur doué et passionné de Londres. Il aime voir
          les gens rencontrer Dieu dans l&rsquo;adoration et les voir
          transformés par la puissance du Saint-Esprit.
        </p>
        <p className="mt-8">
          Michael apporte sa joie contagieuse dans la louange, son cœur pur et
          ses compétences professionnelles en tant que musicien et
          auteur-compositeur. Il apporte également son expérience dans le
          soutien de nombreuses équipes de louanges britanniques.
        </p>
      </Person>

      <Section center container="lg" className="text-xl md:text-3xl">
        Vous êtes intéressé à rejoindre notre équipe ?{" "}
        <EmailLink>Écrivez-nous!</EmailLink>
      </Section>
    </>
  );
}
