"use client";
import avatarPlaceholder from "@/assets/images/avatar_placeholder.png";
import { Lock,  Settings , MessageCircle, Dog} from "lucide-react";
import { User } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "../ui/dropdown-menu";
import LogoutButton from "./logout-button";

interface UserButtonProps {
  user: User;
}

const UserButton: React.FC<UserButtonProps> = ({ user }) => {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-border/80 bg-card/70"
          aria-label="Abrir menú de cuenta"
        >
          <Image
            src={user.image || avatarPlaceholder}
            alt=""
            width={36}
            height={36}
            priority
            className="aspect-square rounded-full object-cover"
          />
        </Button>
      </DropdownMenuTrigger>
      {user && (
        <DropdownMenuContent className="w-56 ">
          <DropdownMenuLabel>{user.name || "User"}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
          {/*   <DropdownMenuItem >
              <Link href="/admin/profile">
                <UserRound className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </Link>
            </DropdownMenuItem> */}
            <DropdownMenuItem asChild>
              <Link
                href="/admin/settings"
                className="flex w-full items-center gap-2"
              >
                <Settings className="h-4 w-4 shrink-0" />
                Perfil
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link
                href="/admin/todos"
                className="flex w-full items-center gap-2"
              >
                <Settings className="h-4 w-4 shrink-0" />
                Todos
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link
                href="/favourites"
                className="flex w-full items-center gap-2"
              >
                <Dog className="h-4 w-4 shrink-0" />
                Favourites
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link
                href="/uploadDogs"
                className="flex w-full items-center gap-2"
              >
                <Dog className="h-4 w-4 shrink-0" />
                Uploads
              </Link>
            </DropdownMenuItem>
            {user.role === "ADMIN" && (
              <>
                <DropdownMenuItem asChild>
                  <Link
                    href="/admin/dashboard"
                    className="flex w-full items-center gap-2"
                  >
                    <Lock className="h-4 w-4 shrink-0" />
                    Panel de control
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/admin/users"
                    className="flex w-full items-center gap-2"
                  >
                    <Lock className="h-4 w-4 shrink-0" />
                    Usuarios
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/admin/messages"
                    className="flex w-full items-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0" />
                    Mensajes
                  </Link>
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem >
            <div
               onClick={() => {

                signOut({ redirect: false }).then(() => {
                  router.push("/");
                  router.refresh();
                });
              }}
              className="flex w-full items-center"
            >
              <LogoutButton/>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
};
export default UserButton;
