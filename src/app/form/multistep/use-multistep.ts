import { useCallback, useState } from "react";
import { MultistepFormValues, MultistepState } from "./types";

const omitNulls = <T extends Record<string, any>>(obj: T) =>
  Object.fromEntries(
    Object.entries(obj).filter(
      (_, value) => value !== null && value !== undefined
    )
  );

export default function useMultistep() {
  const [{ step, history, values }, setState] = useState<MultistepState>({
    step: 0,
    history: [],
    values: {
      fullName: "",
      age: "",
      stay: "",
      ministry: "",
      skills: [],
      skillsOther: "",
      motivation: "",
      email: "",
      phone: "",
    },
  });

  const moveNext = useCallback(
    (newValues: Partial<MultistepFormValues>) => {
      setState(({ values }) => ({
        values: { ...values, ...omitNulls(newValues) },
        history: [...history, step],
        step: step + 1,
      }));
    },
    [step, history]
  );

  const moveBack = useCallback(() => {
    setState({
      values,
      history: history.slice(0, history.length - 1),
      step: history[history.length - 1],
    });
  }, [history, values]);

  return {
    step,
    values,
    moveNext,
    moveBack,
  };
}
