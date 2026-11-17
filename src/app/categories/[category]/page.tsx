import Link from "next/link";
import { notFound } from "next/navigation";

import { api } from "@/lib/axios";
import { Breed } from "@/types/Image.interface";
import BreedCard from "@/components/BreedCard";

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

async function loadBreedsByCategory(categorySlug: string) {
  try {
    const { data } = await api.get<Breed[]>("/breeds");

    const breeds = data.filter((breed) => {
      const breedGroup = breed.breed_group?.trim();
      return breedGroup ? slugify(breedGroup) === categorySlug : false;
    });

    if (breeds.length === 0) {
      return null;
    }

    return {
      categoryName: breeds[0].breed_group,
      breeds,
    };
  } catch (error) {
    console.error("Error loading breeds by category", error);
    return null;
  }
}

export default async function CategoryBreedsPage({
  params,
}: {
  params: { category: string };
}) {
  const categorySlug = params.category;
  const categoryData = await loadBreedsByCategory(categorySlug);

  if (!categoryData) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-5">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
        
          <h1 className="text-3xl font-bold text-slate-800">
            {categoryData.categoryName}
          </h1>
        </div>

        <Link
          href="/categories"
          className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
        >
          Back to categories
        </Link>
      </div>

 <div className="grid md:grid-cols-3   sm:grid-cols-2  xs:grid-cols-1 lg:grid-cols-4 gap-3 w-full  ">
        {categoryData.breeds.map((breed) => (
          <BreedCard key={breed.id} breed={breed} />
        ))}
      </div>
    </div>
  );
}
