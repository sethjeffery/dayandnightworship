import StepContact from "./step_contact";
import StepIntroduction from "./step_introduction";
import StepMinistry from "./step_ministry";
import StepMotivation from "./step_motivation";
import StepSkills from "./step_skills";
import StepStay from "./step_stay";
import StepThankyou from "./step_thankyou";
import useMultistep from "./use-multistep";

interface MultistepProps {
  lng: string;
  onClose: () => void;
}

const noop = () => {};

function Multistep({ lng, onClose }: MultistepProps) {
  const { step, values, moveNext, moveBack } = useMultistep();
  const stepProps = { onBack: moveBack, lng, onNext: moveNext, values };

  switch (step) {
    case 0:
      return <StepIntroduction {...stepProps} onBack={onClose} />;
    case 1:
      return <StepStay {...stepProps} />;
    case 2:
      return <StepMinistry {...stepProps} />;
    case 3:
      return <StepSkills {...stepProps} />;
    case 4:
      return <StepMotivation {...stepProps} />;
    case 5:
      return <StepContact {...stepProps} />;
    case 6:
      return <StepThankyou {...stepProps} onBack={noop} onNext={onClose} />;
    default:
      return null;
  }
}

export default Multistep;
