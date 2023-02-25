import { FormValues as FV } from "../model/form-values";
import { Condition } from "./types";

export default function match<T extends FV>(
  conditions: Record<string, Condition>,
  values: T
) {
  const entries = Object.entries(conditions);
  return entries.every(([key, condition]) => {
    const value = values[key];

    if (Array.isArray(value)) {
      if (condition.includes !== undefined) {
        return value.includes(condition.includes);
      }
      if (condition.excludes !== undefined) {
        return !value.includes(condition.excludes);
      }
    } else {
      const intValue = parseInt(value);

      if (condition.in !== undefined) {
        return condition.in.includes(value);
      }
      if (condition.eq !== undefined) {
        return condition.eq === value;
      }
      if (condition.gt !== undefined && condition.lt !== undefined) {
        return intValue > condition.gt && intValue < condition.lt;
      }
      if (condition.gte !== undefined && condition.lte !== undefined) {
        return intValue > condition.gte && intValue < condition.lte;
      }
      if (condition.gt !== undefined) {
        return intValue > condition.gt;
      }
      if (condition.lt !== undefined) {
        return intValue < condition.lt;
      }
      if (condition.gte !== undefined) {
        return intValue >= condition.gte;
      }
      if (condition.lte !== undefined) {
        return intValue <= condition.lte;
      }
      if (condition.nin !== undefined) {
        return !condition.nin.includes(value);
      }
      if (condition.ne !== undefined) {
        return condition.ne !== value;
      }
    }
    return false;
  });
}
