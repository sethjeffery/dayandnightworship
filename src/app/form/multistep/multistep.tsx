import { useCallback } from "react";
import StepContact from "./step_contact";
import StepIntroduction from "./step_introduction";
import StepMinistry from "./step_ministry";
import StepMotivation from "./step_motivation";
import StepSkills from "./step_skills";
import StepStay from "./step_stay";
import StepThankyou from "./step_thankyou";
import { MultistepFormValues } from "./types";
import useMultistep from "./use-multistep";

interface MultistepProps {
  lng: string;
  onClose: () => void;
}

const noop = () => {};

function Multistep({ lng, onClose }: MultistepProps) {
  const { step, values, moveNext, moveBack, moveTo } = useMultistep();
  const stepProps = { onBack: moveBack, lng, onNext: moveNext, values };

  const moveNextFromStay = (newValues: Partial<MultistepFormValues>) => {
    if (parseInt(values.age) < 13) {
      moveTo(5, newValues);
    } else {
      moveNext(newValues);
    }
  };

  switch (step) {
    case 0:
      return <StepIntroduction {...stepProps} onBack={onClose} />;
    case 1:
      return <StepStay {...stepProps} onNext={moveNextFromStay} />;
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
