import React from "react";
import Image from "next/image";

import { Breed } from "@/types/Image.interface";

interface BreedCardProps {
  breed: Breed;
  priority?: boolean;
}

const BreedCard: React.FC<BreedCardProps> = ({ breed, priority = false }) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-lime-500 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
      <div className="relative h-64 overflow-hidden bg-slate-100">
        <Image
          src={breed.image?.url || "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg"}
          alt={breed.name}
          width={600}
          height={420}
          loading={priority ? "eager" : "lazy"}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between gap-3">
          <h5 className="text-xl font-bold text-slate-800">{breed.name}</h5>
          <span className="rounded-full bg-amber-100 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-amber-700">
            {breed.breed_group || "Mixed"}
          </span>
        </div>

        <div className="space-y-2 text-sm text-slate-600">
          <p><span className="font-semibold text-slate-700">Bred for:</span> {breed.bred_for || "Companionship"}</p>
          <p><span className="font-semibold text-slate-700">Life span:</span> {breed.life_span || "N/A"}</p>
          <p className="leading-6"><span className="font-semibold text-slate-700">Temperament:</span> {breed.temperament}</p>
        </div>
      </div>
    </div>
  );
};

export default BreedCard;
