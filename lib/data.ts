export type Card = {
  id: string;
  title: string;
  category: string;
  summary: string;
  meaning: string;
  keywords: string[];
  questions: string[];
};

export type Spread = {
  id: string;
  title: string;
  description: string;
  positions: string[];
};

export const cards: Card[] = [
  {
    id: "symptom",
    title: "Symptom",
    category: "Major",
    summary: "A visible formation carrying hidden conflict.",
    meaning: "The symptom is not meaningless. It is a compromise formation: something speaks, but indirectly. It asks to be read through tension rather than solved too quickly.",
    keywords: ["conflict", "return", "signal"],
    questions: ["What is being said indirectly?", "What conflict keeps returning here?"],
  },
  {
    id: "repression",
    title: "Repression",
    category: "Defense",
    summary: "The active keeping-away of what cannot yet be held.",
    meaning: "Repression does not erase. It organizes absence. What is kept out of awareness may still shape the field through detours, symptoms, and repetitions.",
    keywords: ["absence", "defense", "return"],
    questions: ["What feels missing but active?", "What cannot yet be thought directly?"],
  },
  {
    id: "transference",
    title: "Transference",
    category: "Relation",
    summary: "An old relation entering the present scene.",
    meaning: "Transference suggests that the present may be carrying the emotional weight of an earlier relational arrangement. The feeling may be real, but its time may be layered.",
    keywords: ["relation", "past", "repetition"],
    questions: ["Who else is present in this relation?", "What older need is being repeated?"],
  },
  {
    id: "dreamwork",
    title: "Dreamwork",
    category: "Process",
    summary: "Disguised meaning, condensation, displacement.",
    meaning: "Dreamwork turns psychic material into symbolic form. It does not explain directly; it stages, folds, hides, and reveals through image and distortion.",
    keywords: ["symbol", "disguise", "movement"],
    questions: ["What image carries more than it says?", "Where has meaning shifted form?"],
  },
  {
    id: "working-through",
    title: "Working Through",
    category: "Process",
    summary: "The slow return to material until it can move differently.",
    meaning: "Working through is not a sudden insight. It is the repeated encounter with something difficult until it becomes less compulsory and more thinkable.",
    keywords: ["time", "repetition", "change"],
    questions: ["What needs time rather than force?", "What becomes different through return?"],
  }
];

export const spreads: Spread[] = [
  {
    id: "single",
    title: "The Present Moment",
    description: "One card. One question. Full attention.",
    positions: ["What is most active now"],
  },
  {
    id: "triad",
    title: "Surface / Conflict / Opening",
    description: "Three cards for what appears, what organizes it, and what may open.",
    positions: ["Surface", "Conflict", "Opening"],
  },
  {
    id: "inner-map",
    title: "Inner Map",
    description: "Five cards for conscious material, what is held away, defense, repetition, and opening.",
    positions: ["Conscious", "Held Away", "Defense", "Repetition", "Opening"],
  }
];

export function drawCards(count: number) {
  const shuffled = [...cards].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
