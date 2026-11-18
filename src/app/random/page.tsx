import RandomCard from "@/components/RandomCard";
import { api } from "@/lib/axios";
import { ImageB, Favourite, Breed } from "@/types/Image.interface";

async function loadImages() {
  try {
    const { data } = await api.get<ImageB[]>("/images/search?limit=30");
    await  new Promise((resolve)=> setTimeout(resolve, 3000))
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function RandomPage() {
  const images: ImageB[] | undefined = await loadImages();

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1>Dogs at random</h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {images?.map(
          (image, index) => image && <RandomCard image={image} key={image.id} />
        )}
      </div>
    </div>
  );
}

export default RandomPage;
