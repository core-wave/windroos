export type Accommodation = {
  title: string;
  description: string;
  image: string;
  capacity: number;
  size: number;
  href: string;
};

export const accommodations: Accommodation[] = [
  {
    capacity: 2,
    description:
      "Prachtig ingericht appartement gelegen op het oosten met overgebleven details van de oude schuur.",
    image: "/img/oost.jpeg",
    size: 30,
    title: "Appartement Oost",
    href: "https://www.airbnb.com/rooms/841165679056770234",
  },
  {
    capacity: 2,
    description:
      "Recent verbouwd appartement met karakteristieke details van de oude boerderij, gelegen op het westen.",
    image: "/img/west.avif",
    size: 30,
    title: "Appartement West",
    href: "https://www.airbnb.com/rooms/821576617184843619",
  },
];
