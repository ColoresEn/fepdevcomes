"use client"

import { Toaster } from "react-hot-toast"
import { Toaster as UiToaster } from "@/components/ui/toaster"

export const  TProvider = () => {
  return (
    <>
      <Toaster />
      <UiToaster />
    </>
  )
}
