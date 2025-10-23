"use client";

import { ReactNode } from "react";
import Theme from "@/components/providers/ThemeProvider";
import ToastProvider from "@/components/providers/ToastProvider";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <Theme>
      <ToastProvider>
        {children}
      </ToastProvider>
    </Theme>
  );
}