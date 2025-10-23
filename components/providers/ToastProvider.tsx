"use client";

import { ReactNode } from "react";
import { Toaster } from "sonner";

export default function ToastProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
}