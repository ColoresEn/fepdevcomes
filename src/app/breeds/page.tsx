import React from "react";

import { api } from "@/lib/axios";
import { Breed } from "@/types/Image.interface";
import BreedCard from "@/components/BreedCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// La API de The Dog API pagina con ?limit= y ?page= (índice base cero) y
// devuelve la cabecera "pagination-count" con el total de registros.
// https://docs.thedogapi.com/docs/examples/pagination
const BREEDS_PER_PAGE = 12;

type PageItem = number | "dots";

// Genera las páginas a mostrar: primera, última y una ventana alrededor de
// la página actual, con puntos suspensivos en los huecos.
function getPageItems(current: number, total: number): PageItem[] {
  const items: PageItem[] = [];
  const windowSize = 5;

  let start = Math.max(1, current - Math.floor(windowSize / 2));
  const end = Math.min(total, start + windowSize - 1);
  start = Math.max(1, end - windowSize + 1);

  if (start > 1) {
    items.push(1);
    if (start > 2) items.push("dots");
  }
  for (let i = start; i <= end; i++) items.push(i);
  if (end < total) {
    if (end < total - 1) items.push("dots");
    items.push(total);
  }
  return items;
}

async function loadBreeds(page: number) {
  try {
    const { data, headers } = await api.get<Breed[]>("/breeds", {
      params: { limit: BREEDS_PER_PAGE, page },
    });
    const count = Number(headers["pagination-count"]);
    const total = Number.isNaN(count)
      ? page * BREEDS_PER_PAGE + data.length
      : count;
    return { breeds: data, total };
  } catch (error) {
    console.log(error);
    return { breeds: [] as Breed[], total: 0 };
  }
}

interface BreedsPageProps {
  searchParams?: Promise<{ page?: string | string[] }>;
}

async function BreedsPage({ searchParams }: BreedsPageProps) {
  const raw = (await searchParams)?.page;
  const rawPage = Array.isArray(raw) ? raw[0] : raw;
  const parsed = Number.parseInt(rawPage ?? "1", 10);
  let page = Number.isNaN(parsed) || parsed < 1 ? 0 : parsed - 1;

  let { breeds, total } = await loadBreeds(page);

  // Si se pide una página fuera de rango volvemos a la primera.
  if (!breeds.length && page > 0) {
    page = 0;
    ({ breeds, total } = await loadBreeds(page));
  }

  const totalPages = Math.max(1, Math.ceil(total / BREEDS_PER_PAGE));
  const currentPage = page + 1;

  return (
    <div className="mx-auto max-w-6xl px-4 py-5">
      <div className="mb-5 text-center">
        <h1>Todas las razas de perros </h1>
      </div>

      <div className="grid md:grid-cols-3   sm:grid-cols-2  xs:grid-cols-1 lg:grid-cols-4 gap-3 w-full  ">
        {breeds.map((breed) => breed && <BreedCard breed={breed} key={breed.id} />)}
      </div>

      {totalPages > 1 && (
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              {currentPage === 1 ? (
                <PaginationPrevious
                  href="#"
                  aria-disabled
                  className="pointer-events-none opacity-50"
                />
              ) : (
                <PaginationPrevious href={`/breeds?page=${currentPage - 1}`} />
              )}
            </PaginationItem>

            {getPageItems(currentPage, totalPages).map((item, index) =>
              item === "dots" ? (
                <PaginationItem key={`dots-${index}`}>
                  <PaginationEllipsis />
                </PaginationItem>
              ) : (
                <PaginationItem key={item}>
                  <PaginationLink
                    href={`/breeds?page=${item}`}
                    isActive={item === currentPage}
                  >
                    {item}
                  </PaginationLink>
                </PaginationItem>
              )
            )}

            <PaginationItem>
              {currentPage === totalPages ? (
                <PaginationNext
                  href="#"
                  aria-disabled
                  className="pointer-events-none opacity-50"
                />
              ) : (
                <PaginationNext href={`/breeds?page=${currentPage + 1}`} />
              )}
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}

export default BreedsPage;
