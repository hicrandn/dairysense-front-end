export type FarmSuccessItem = {
  label: string;
  values: number[]; // 1: dolu, 0.5: yarı dolu, 0: boş
};

export const farmSuccessData: FarmSuccessItem[] = [
  {
    label: "Tohumlama",
    values: [0.5, 0.5, 0, 0],
  },
  {
    label: "Sağım Süresi",
    values: [1, 1, 0, 0],
  },
  {
    label: "Tedaviler",
    values: [1, 0.5, 0, 0],
  },
  {
    label: "Protokoller",
    values: [1, 1, 0, 0],
  },
  {
    label: "Veri Girişi",
    values: [1, 0.5, 0.5, 0],
  },
  {
    label: "Kızgınlıklar",
    values: [1, 0.5, 1, 0],
  },
];
