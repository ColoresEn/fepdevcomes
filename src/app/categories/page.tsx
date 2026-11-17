import Image from "next/image";
import Link from "next/link";

import { api } from "@/lib/axios";
import { Category } from "@/types/Image.interface";

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const descriptions: Record<string, string> = {
  Toy: "Small, playful and affectionate companions with huge personalities.",
  Hound: "Brilliant scent hounds with a curious and independent temperament.",
  Working: "Strong, capable dogs bred for jobs, protection and teamwork.",
  Terrier: "Feisty, bold and energetic dogs with lots of character.",
  Sporting: "Active, friendly dogs built for movement, play and companionship.",
  Herding: "Smart and agile workers that excel at guiding and controlling.",
  "Non-Sporting": "A diverse group with charming personalities and unique looks.",
  Mixed: "A mix of traits, personality and charm in every dog.",
};

const fallbackCategories: Category[] = [
  { id: 1, name: "Toy", species_id: 2, image_url: "https://cdn2.thedogapi.com/images/rkVlblc6V_1280.jpg", count: 1 },
  { id: 2, name: "Hound", species_id: 2, image_url: "https://cdn2.thedogapi.com/images/S1i3Qeqe1_1280.jpg", count: 1 },
  { id: 3, name: "Working", species_id: 2, image_url: "https://cdn2.thedogapi.com/images/7-3ztE1Qx_1280.jpg", count: 1 },
  { id: 4, name: "Terrier", species_id: 2, image_url: "https://cdn2.thedogapi.com/images/r1ifZl5E7_1280.jpg", count: 1 },
  { id: 5, name: "Sporting", species_id: 2, image_url: "https://cdn2.thedogapi.com/images/9BXwUeCcV.jpg", count: 1 },
  { id: 6, name: "Herding", species_id: 2, image_url: "https://cdn2.thedogapi.com/images/SkP8ex5N7_1280.jpg", count: 1 },
  { id: 7, name: "Non-Sporting", species_id: 2, image_url: "https://cdn2.thedogapi.com/images/xs0V8P7Yg.jpg", count: 1 },
  { id: 8, name: "Mixed", species_id: 2, image_url: "https://cdn2.thedogapi.com/images/4DgJqkMj0_1280.jpg", count: 1 },
];

async function loadCategories(): Promise<Category[]> {
  try {
    const { data } = await api.get<
      {
        breed_group?: string | null;
        image?: { url?: string | null } | null;
      }[]
    >("/breeds");

    const groupedCategories = data.reduce<Record<string, Category>>((acc, breed) => {
      const groupName = breed.breed_group?.trim();

      if (!groupName) return acc;

      if (!acc[groupName]) {
        acc[groupName] = {
          id: groupName,
          name: groupName,
          species_id: 2,
          image_url: breed.image?.url ?? "",
          count: 1,
        };
        return acc;
      }

      acc[groupName].count = (acc[groupName].count ?? 0) + 1;

      if (!acc[groupName].image_url && breed.image?.url) {
        acc[groupName].image_url = breed.image.url;
      }

      return acc;
    }, {});

    const categories = Object.values(groupedCategories);

    return categories.length > 0 ? categories : fallbackCategories;
  } catch (error) {
    console.error("Error loading dog categories", error);
    return fallbackCategories;
  }
}

async function CategoriesPage() {
  const categories = await loadCategories();

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6">
      <h1>Dogs by categories</h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={String(category.id)}
            href={`/categories/${slugify(category.name)}`}
            className="group block overflow-hidden rounded-3xl border border-lime-500 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
          >
            <div className="relative h-52 overflow-hidden bg-gradient-to-br from-amber-50 via-slate-100 to-slate-200 ">
              <Image
                src={
                  category.image_url ||
                  "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg"
                }
                alt={category.name}
                width={600}
                height={420}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-sm">
                {category.count ?? 1}
              </span>
            </div>

            <div className="space-y-3 p-5">
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-xl font-bold text-slate-800">{category.name}</h2>
              </div>
              <p className="text-sm leading-6 text-slate-600">
                {descriptions[category.name] ||
                  `Explore ${category.name.toLowerCase()} dogs and their most iconic traits.`}
              </p>
              <div className="flex items-center justify-between pt-2 text-sm font-medium text-amber-700">
                <span>View breeds</span>
                <span aria-hidden="true">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoriesPage;
