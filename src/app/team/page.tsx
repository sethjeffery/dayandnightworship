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
        title="Team"
      />

      <Person
        name="Seth & Ana Jeffery"
        image={sethAndAnaOutside}
        alt="Seth and Ana outside"
      >
        <p>
          Seth and Ana, originally from England and Colombia, are missionaries
          to France since 2020. They were part of the team for France Élève-Toi
          in Paris in 2021, and have a strong heart for houses of prayer and
          gatherings of 24-hour worship and intercession.
        </p>
        <p className="mt-8">
          Seth is known for his skill and sensitivity to the river of the Spirit
          during worship. Ana has a strong prophetic gift and brings a passion
          for intercession, flags and dance.
        </p>
      </Person>

      <div className="mt-16 py-16 border-t-2 border-stone-300 text-center px-8 text-xl md:text-3xl">
        Are you interested in joining our team?{" "}
        <EmailLink>Write to us!</EmailLink>
      </div>
    </>
  );
}
