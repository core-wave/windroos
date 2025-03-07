export type Accommodation = {
  title: string;
  description: string;
  image: string;
  capacity: number;
  size: number;
};

export const accommodations: Accommodation[] = [
  {
    capacity: 2,
    description:
      "Prachtig ingericht appartement gelegen op het oosten met overgebleven details van de oude schuur.",
    image: "/img/oost.jpeg",
    size: 30,
    title: "Appartement Oost",
  },
  {
    capacity: 2,
    description:
      "Recent verbouwd appartement met karakteristieke details van de oude boerderij, gelegen op het westen.",
    image: "/img/west.avif",
    size: 30,
    title: "Appartement West",
  },
];
