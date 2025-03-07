import { accommodations } from "@/data/accommodations";
import AccommodationCard from "./accommodation-card";

export default async function AccommodationSection() {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-6 px-4 pb-16">
      {accommodations.map((accommodation, index) => {
        return <AccommodationCard key={index} accommodation={accommodation} />;
      })}
    </div>
  );
}
