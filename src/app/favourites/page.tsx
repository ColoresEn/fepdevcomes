import { Favourite} from "@/types/Image.interface";
import { api } from "@/lib/axios";
import FavouriteCard from "@/components/FavouriteCard";
async function loadFavoriteBobbys (){
  
  try {
  const {data} = await api.get<Favourite[]>("/favourites");

  return data;
} catch (error) {
  console.log(error);
}
};
async function FavouritesPage() {
const favourites:Favourite[] | undefined = await loadFavoriteBobbys();


  return (
   
    <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1>Favourites</h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {favourites?.map((favourite) => (
      favourite && <FavouriteCard favourite={favourite} key={favourite.id} />
       ))}
     </div>
   </div>
   )}
export default FavouritesPage