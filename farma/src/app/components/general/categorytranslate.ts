export const categories: Record<CategorySlug, string> = {
  implantology: "Имплантология",
  surgery: "Хирургия",
  periodontology: "Пародонтология",
  orthodontics: "Ортодонтия",
  consumables: "Расходные материалы",
  prosthodontics: "Ортопедия",
  "therapy-diagnostics": "Терапия и диагностика",
};

export type CategorySlug =
  | "implantology"
  | "surgery"
  | "periodontology"
  | "orthodontics"
  | "consumables"
  | "prosthodontics"
  | "therapy-diagnostics";
