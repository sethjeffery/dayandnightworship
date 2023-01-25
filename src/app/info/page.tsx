import questionsOrange from "../assets/questions-orange.png";
import PictureBlock from "../picture-block";
import Section from "../section";
import Link from "next/link";
import Cta from "../cta";

export default function Info() {
  return (
    <>
      <PictureBlock
        image={questionsOrange}
        title="Information"
        alt="Question marks"
      />

      <Section container="lg" className="text-xl md:text-2xl">
        <div className="my-8">
          <h2 className="text-2xl md:text-3xl mb-2 text-primary">
            C&rsquo;est quand l&rsquo;école ?
          </h2>
          <p>
            L&rsquo;école ouvre le <strong>21 Avril à 19h00</strong> et se
            termine le <strong>28 Avril à 9h00</strong>.
          </p>
        </div>

        <div className="my-8">
          <h2 className="text-2xl md:text-3xl mb-2 text-primary">
            Où cela se passe-t-il?
          </h2>
          <p>
            <a
              href="https://goo.gl/maps/mSkaePUd2t6moEXh7"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-primary"
            >
              Domaine de Laouenekaat
            </a>
            , 29 Route de Kergoff, 56730 Saint-Gildas-de-Rhuys.
          </p>
        </div>

        <div className="my-8">
          <h2 className="text-2xl md:text-3xl mb-2 text-primary">
            Combien est-ce et comment dois-je payer ?
          </h2>
          <p>
            Veuillez consulter la page <Link href="/pricing">tarifs</Link> pour
            plus d&rsquo;informations sur les prix.
          </p>
        </div>

        <div className="my-8">
          <h2 className="text-2xl md:text-3xl mb-2 text-primary">
            Quel sera l&rsquo;enseignement ?
          </h2>
          <p>
            L&rsquo;enseignement se concentrera sur six catégories tout au long
            de la semaine, avec des ateliers et des séances spécifiques :
          </p>
          <ul className="mx-4 pt-4 text-xl [&>li]:break-inside-avoid md:columns-2 [&>li]:prose [&>li]:mb-4 [&>li]:border-l-4 [&>li]:border-stone-200 [&>li]:dark:border-stone-700 [&>li]:pl-4">
            <li>
              <h3 className="text-primary">Intimité</h3>
              <ul>
                <li>Adorer en esprit et en vérité</li>
                <li>Vivre sous la conduite du Saint-Esprit</li>
                <li>&laquo;Soaking&raquo; et le silence</li>
              </ul>
            </li>
            <li>
              <h3 className="text-primary">Équipes</h3>
              <ul>
                <li>Construire une équipe forte</li>
                <li>Louange à travers la communauté</li>
                <li>Leadership et l&rsquo;autorité</li>
              </ul>
            </li>
            <li>
              <h3 className="text-primary">Ministère</h3>
              <ul>
                <li>Intercession et combat spirituel</li>
                <li>Discernement et changement d&rsquo;atmosphères</li>
                <li>La prophétie</li>
              </ul>
            </li>
            <li>
              <h3 className="text-primary">Créativité</h3>
              <ul>
                <li>Écriture de chansons</li>
                <li>Improvisation</li>
                <li>Danse, bannières et mouvement</li>
              </ul>
            </li>
            <li>
              <h3 className="text-primary">Percée</h3>
              <ul>
                <li>Barrières personnelles et collectives</li>
                <li>Briser les barrières et atteindre de nouveaux niveaux</li>
                <li>Les clés du pouvoir spirituel</li>
              </ul>
            </li>
            <li>
              <h3 className="text-primary">Événements</h3>
              <ul>
                <li>Organiser de événements de louange</li>
                <li>Maisons de prière</li>
                <li>Travailler à travers les dénominations</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="my-8">
          <h2 className="text-2xl md:text-3xl mb-2 text-primary">
            Que dois-je apporter avec moi ?
          </h2>
          <p>
            Si vous êtes un musicien avec un instrument portable, nous vous
            encourageons à l&rsquo;apporter - bien que nous fournissions
            également un piano, une guitare et une batterie. Il est également
            conseillé d&rsquo;apporter un ordinateur portable ou une tablette.
          </p>
          <p className="mt-4">
            La literie et les draps seront fournis, ainsi que les machines à
            laver.
          </p>
        </div>

        <div className="my-8">
          <h2 className="text-2xl md:text-3xl mb-2 text-primary">
            Aurai-je ma propre chambre ?
          </h2>
          <p>
            Nous aurons accès à de nombreuses chambres avec lits simples et
            doubles, de quoi respecter les besoins de couchage de chacun. Mais
            si vous avez des exigences particulières, nous vous recommandons de
            nous contacter.
          </p>
        </div>
      </Section>

      <Section>
        <Cta />
      </Section>
    </>
  );
}
