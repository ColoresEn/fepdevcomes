"use client";
import {  LogOut} from "lucide-react";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  const handleClick = async () => {
    await signOut({
      redirect: false,
      callbackUrl: "/",
      
    });
  };

  return (
    <Button
      className="w-full justify-start gap-2"
      onClick={handleClick}
    >
      <LogOut className="h-4 w-4 shrink-0" />
      Sign Out
    </Button>
  );
};
export default LogoutButton;
