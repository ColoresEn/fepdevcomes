

import avatarPlaceholder from "@/assets/images/avatar_placeholder.png";
import {  UserRound, UserRoundPlus , MessageCircle, Dog , PawPrint } from "lucide-react";
import Image from "next/image";
import getCurrentUser from "@/actions/getCurrentUser";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "../ui/dropdown-menu";
import UserButton from "./UserButton";

const Navbar = async () => {
  const currentUser = await getCurrentUser();


  // Opcional: Si deseas ver cuando se ejecuta la llamada a /api/auth/session

  return (
    <nav className="bg-lime-800">
      <div className="container mx-auto flex min-h-20 items-center gap-4 px-4 sm:px-6">
      <Link href="/">
          <div className="flex flex-shrink-0 items-center">
            <Image
              src="/img/pnglogoxs.fw.png"
              alt="Qep"
              width={44}
              height={44}
              className="navbar-brand w-auto"
            />

            {currentUser ? (
              <h3 className="px-3 py-6">Hola, {currentUser.name}</h3>
            ) : (
              <h3 className="px-3 py-6">FEP Dogs App</h3>
            )}
          </div>
        </Link>

        <div className="ml-auto flex items-center">
          {currentUser ? <UserButton user={currentUser} /> : <SignInButton />}
        </div>
      </div>
    </nav>
  );
};
function SignInButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" className="flex-none rounded-full  ">
          <Image
            src={avatarPlaceholder}
            alt="User profile picture"
            width={50}
            height={50}
            className="aspect-square rounded-full  object-cover "
          />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56 ">
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/login">
              <UserRound className="mr-2 h-4 w-4" />
              Acceso
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link href="/register">
              <UserRoundPlus className="mr-2 h-4 w-4" />
              Registro
            </Link>
          </DropdownMenuItem>
      
      
        <DropdownMenuItem asChild>
            <Link href="/contact">
            <MessageCircle  className="mr-2 h-4 w-4" />
              Contacto
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/breeds">
            <Dog   className="mr-2 h-4 w-4" />
              Razas
            </Link>
          </DropdownMenuItem>
              <DropdownMenuItem asChild>
            <Link href="/categories">
            <Dog   className="mr-2 h-4 w-4" />
              Categorias
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/random">
            <PawPrint   className="mr-2 h-4 w-4" />
              Aleatorio
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default Navbar;
