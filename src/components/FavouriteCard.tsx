"use client";
import Image from "next/image";
import { api } from "@/lib/axios";
import { Favourite } from "@/types/Image.interface";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
async function deleteFavouriteBobby(id: number) {
  await api.delete(`/favourites/${id}`);

  console.log("Delete");
}
interface RandomCardProps {
  favourite: Favourite; // Definimos la prop 'task' y su tipo
}

const FavouriteCard: React.FC<RandomCardProps> = ({ favourite }) => {
  const router = useRouter();
  const onDeleteFavorite = async (id: number) => {
    await deleteFavouriteBobby(id);
    router.refresh();
  };
  return (
    <div className="w-full min-w-0" key={favourite.id}>
      <Image
        src={favourite.image.url}
        width="320"
        alt={favourite.image_id}
        height="320"
        key={favourite.id}
        className="aspect-square h-auto w-full rounded-sm border border-double border-black object-cover object-top shadow-md shadow-black"
      />
      <div className=" mx-auto flex  justify-center mt-6">
        <Button onClick={() => onDeleteFavorite(favourite.id)} className="cursor-pointer bg-lime-600 hover:bg-lime-400 text-lime-900 hover:text-lime-800 font-bold py-2 px-4 rounded">
          Delete from favourite
        </Button>
      </div>
    </div>
  );
};

export default FavouriteCard;
