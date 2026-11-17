"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Dog,
  Heart,
  Images,
  LayoutGrid,
  PawPrint,
  Sparkles,
} from "lucide-react";
import RandomCard from "@/components/RandomCard";
import { api } from "@/lib/axios";
import { ImageB } from "@/types/Image.interface";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

async function loadImages() {
  try {
    const { data } = await api.get<ImageB[]>("/images/search?limit=1");
    return data;
  } catch (error) {
    console.log(error);
  }
}

function getRandomImage(imagesArray: ImageB[]) {
  const randomIndex = Math.floor(Math.random() * imagesArray.length);
  return imagesArray[randomIndex];
}

const features = [
  {
    icon: Dog,
    title: "Explora las razas",
    description:
      "Cientos de fotos de perros de distintas razas: descubre su historia y sus características únicas.",
    href: "/breeds",
    cta: "Ver razas",
  },
  {
    icon: LayoutGrid,
    title: "Navega por categorías",
    description:
      "Imágenes organizadas por categorías para que encuentres rápido el tipo de perro que te gusta.",
    href: "/categories",
    cta: "Ver categorías",
  },
  {
    icon: PawPrint,
    title: "Sorpréndete al azar",
    description:
      "Una foto aleatoria en cada visita: la forma más divertida de conocer caras nuevas.",
    href: "/random",
    cta: "Sorpréndeme",
  },
  {
    icon: Heart,
    title: "Guarda tus favoritos",
    description:
      "Marca tus fotos preferidas para volver a ellas y enseñárselas a tu familia y amigos.",
    href: "/favourites",
    cta: "Ver favoritos",
  },
];

const stats = [
  { value: "+170", label: "razas de perros" },
  { value: "Miles", label: "de fotos disponibles" },
  { value: "100%", label: "gratis para ti" },
];

function HomePage() {
  const [randomImg, setRandomImage] = useState<ImageB | null>(null);
  useEffect(() => {
    async function fetchRandomImage() {
      const images: ImageB[] | undefined = (await loadImages()) ?? [];
      if (images?.length !== 0) {
        const randomImg = getRandomImage(images);
        setRandomImage(randomImg);
      }
    }

    fetchRandomImage();
  }, []);

  return (
    <main className="bg-lime-50 ">
      <section className="relative overflow-hidden bg-gradient-to-br from-lime-900  via-lime-600 to-emerald-600 text-black p-8">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl" />

        <div className="container relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div className="space-y-6">
            <Badge
              variant="secondary"
              className="gap-2 border border-lime-900 bg-white/15 px-4 py-1.5 text-sm text-black hover:text-lime-300 hover:bg-black/20 backdrop-blur"
            >
              <Sparkles className="h-4 w-4" />
              Con datos de The Dog API
            </Badge>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl text-black"> 
              Descubre el maravilloso mundo de los perros
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-black">
              Somos apasionados de estos increíbles compañeros y hemos creado
              esta app como tributo a ellos. Explora cientos de fotos de razas
              de todo el mundo, aprende sobre su historia y guarda tus imágenes
              favoritas para enseñárselas a quien quieras.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                
                size="lg"
                className="border border-lime-900 bg-transparent hover:text-lime-300 px-4 py-1.5 text-sm text-black hover:bg-black/20 backdrop-blur"
              >
                <Link href="/breeds">
                  Explorar razas
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                
                size="lg"
                variant="outline"
                className="border-white/60 bg-transparent text-black hover:text-lime-300 hover:bg-black/20 hover:text-black"
              >
                <Link href="/register">Crear cuenta gratis</Link>
              </Button>
            </div>

            <dl className="flex flex-wrap gap-x-10 gap-y-4 pt-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-3xl font-bold text-black">
                    {stat.value}
                  </dd>
                  <dd className="text-sm text-black">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-sm  ">
            <div className="  absolute -inset-3 rotate-3 rounded-[2rem] border border-white/20 bg-white/10 backdrop-blur-sm " />
            <div className="relative  rounded-[1.75rem] bg-lime-300 pl-8 text-stone-900 shadow-2xl">
              <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-lime-800">
                <PawPrint className="h-4 w-4" />
                Foto destacada de hoy
              </p>
              {randomImg ? (
                <RandomCard image={randomImg} />
              ) : (
                <div className="flex h-64 w-full animate-pulse flex-col items-center justify-center gap-3 rounded-xl bg-stone-100 text-stone-400">
                  <Dog className="h-10 w-10" />
                  Buscando un peludo…
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-lime-300">
        <div className="container mx-auto py-16 lg:py-24 lg:py-24">
          <div className="mx-auto mb-12 max-w-2xl text-center ">
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              Todo lo que buscas en un solo lugar
            </h2>
            <p className="mt-4 text-lg text-stone-800">
              Gracias por elegirnos para explorar el mundo de los perros: estas
              son las secciones que preparamos para ti.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 px-4">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="group border border-lime-900 shadow-md transition-all duration-200 hover:-translate-y-1 hover:border-lime-600 hover:shadow-lg hover:bg-lime-400 bg-lime-300 hover:backdrop-blur-sm"
              >
                <CardContent className="flex h-full flex-col gap-4 p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-lime-900 bg-lime-700 px-4 py-1.5 text-sm text-lime-300 hover:text-lime-900 hover:bg-black/20 backdrop-blur ">
                    <feature.icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-semibold text-stone-900">
                    {feature.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-stone-800">
                    {feature.description}
                  </p>
                  <Link
                    href={feature.href}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-lime-900  transition-colors hover:text-lime-900"
                  >
                    {feature.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-lime-300">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 py-5 px-4 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">
              ¿Tienes una foto especial de tu peludo?
            </h2>
            <p className="text-stone-800">
              Súbelas a la galería y comparte esa sonrisa con toda la
              comunidad.
            </p>
          </div>
          <Button  size="lg" className="bg-lime-800 text-lime-200 hover:bg-lime-400 hover:text-lime-900 object-containborder border-lime-900 px-4 py-8 text-sm hover:backdrop-blur">
            <Link href="/uploadDogs">
             <Images className="mx-auto h-7 w-7" />
              Subir mi foto
            </Link>
          </Button>
        </div>
      </section>

      <section className="bg-lime-300 py-16 lg:py-24">
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-lime-900  via-lime-600 to-emerald-600 px-8 py-14 text-center text-black shadow-xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl ">
              ¿Listo para encontrar a tu nuevo favorito?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg ">
              Crea tu cuenta gratuita y empieza a guardar todas las fotos que te
              hagan sonreír tanto como a nosotros.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="border border-lime-900 hover:text-lime-300 bg-transparent px-4 py-1.5 text-sm text-black hover:bg-black/20 backdrop-blur"
              >
                <Link href="/register">Registrarme ahora</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border border-lime-900 hover:text-lime-300 bg-transparent px-4 py-1.5 text-sm text-black hover:bg-black/20 backdrop-blur"
              >
                <Link href="/login">Ya tengo cuenta</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
