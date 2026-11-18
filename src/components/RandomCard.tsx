"use client";
import axios from "axios";
import Image from "next/image";
import { api } from "@/lib/axios";
import { Favourite, ImageB } from "@/types/Image.interface";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type ApiErrorBody = {
  message?: unknown;
  error?: unknown;
};

async function saveFavourite(imageId: string): Promise<"saved" | "already-saved"> {
  try {
    await api.post("/favourites", { image_id: imageId });
    return "saved";
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 400) {
      const { data: favourites } = await api.get<Favourite[]>("/favourites");

      if (
        Array.isArray(favourites) &&
        favourites.some((favourite) => favourite.image_id === imageId)
      ) {
        return "already-saved";
      }
    }

    throw error;
  }
}

function getSaveErrorMessage(error: unknown): string {
  if (axios.isAxiosError<ApiErrorBody | string>(error)) {
    const body = error.response?.data;
    if (typeof body === "string" && body.trim()) return body;
    if (body && typeof body === "object") {
      if (typeof body.message === "string") return body.message;
      if (typeof body.error === "string") return body.error;
    }
  }

  return "Could not add this image to favourites. Please try again.";
}

interface RandomCardProps {
  image: ImageB; // Definimos la prop 'task' y su tipo
}
const RandomCard: React.FC<RandomCardProps> = ({ image }) => {
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [feedback, setFeedback] = useState<{
    kind: "success" | "error";
    message: string;
  } | null>(null);

  const onSaveFavorite = async () => {
    setIsSaving(true);
    setFeedback(null);

    try {
      const result = await saveFavourite(image.id);
      setIsSaved(true);
      setFeedback({
        kind: "success",
        message:
          result === "already-saved"
            ? "This image is already in your favourites."
            : "Added to favourites.",
      });
    } catch (error) {
      const message = getSaveErrorMessage(error);
      console.error("Could not add image to favourites:", message);
      setFeedback({ kind: "error", message });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="w-full min-w-0">
      <Image
        src={image.url}
        alt={image.id}
        width={320}
        height={320}
        loading="eager"
        unoptimized
        className="aspect-square h-auto w-full rounded-sm border border-double border-black object-cover shadow-md shadow-black"
      />
      <div className="mx-auto mt-2 flex justify-center">
        <Button onClick={onSaveFavorite} disabled={isSaving || isSaved}>
          {isSaving
            ? "Adding..."
            : isSaved
              ? "Added to favourite"
              : "Add to favourite"}
        </Button>
      </div>
      {feedback && (
        <p
          className="mt-2 text-center text-sm"
          role={feedback.kind === "error" ? "alert" : "status"}
        >
          {feedback.message}
        </p>
      )}
    </div>
  );
};

export default RandomCard