"use client"

import * as React from "react"
import { toast as toastManager } from "@/components/ui/toast"

type ToastInput = {
  title?: React.ReactNode
  description?: React.ReactNode
  variant?: "default" | "destructive"
}

function getManagerOptions({ title, description, variant }: ToastInput) {
  return {
    title,
    description,
    type: variant === "destructive" ? "error" : "success",
  }
}

function toast(options: ToastInput) {
  const id = toastManager.add(getManagerOptions(options))

  return {
    id,
    dismiss: () => toastManager.close(id),
    update: (nextOptions: ToastInput) =>
      toastManager.update(id, getManagerOptions(nextOptions)),
  }
}

function useToast() {
  return {
    toast,
    dismiss: (toastId?: string) => toastManager.close(toastId),
  }
}

export { useToast, toast }
