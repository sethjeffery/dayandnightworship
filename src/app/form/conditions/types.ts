type OnlyCondition<T> = {
  [P in keyof T]: T[P];
} & {
  [P in keyof Omit<
    {
      in: never;
      eq: never;
      gt: never;
      lt: never;
      gte: never;
      lte: never;
      nin: never;
      ne: never;
      includes: never;
      excludes: never;
    },
    keyof T
  >]?: never;
};

type InCondition = OnlyCondition<{ in: (string | number)[] }>;
type EqCondition = OnlyCondition<{ eq: string | number }>;
type GtCondition = OnlyCondition<{ gt: number }>;
type LtCondition = OnlyCondition<{ lt: number }>;
type GteCondition = OnlyCondition<{ gte: number }>;
type LteCondition = OnlyCondition<{ lte: number }>;
type BetweenCondition = OnlyCondition<{ gt: number; lt: number }>;
type BetweenEqCondition = OnlyCondition<{ gte: number; lte: number }>;
type NinCondition = OnlyCondition<{ nin: (string | number)[] }>;
type NeCondition = OnlyCondition<{ ne: string | number }>;
type IncludesCondition = OnlyCondition<{ includes: string }>;
type ExcludesCondition = OnlyCondition<{ excludes: string }>;

export type Condition =
  | InCondition
  | EqCondition
  | GtCondition
  | LtCondition
  | GteCondition
  | LteCondition
  | NinCondition
  | NeCondition
  | BetweenCondition
  | BetweenEqCondition
  | IncludesCondition
  | ExcludesCondition;
