'use client';

import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";

interface ProviderProps {
  children: React.ReactNode
}

export default function Providers({ children } : Readonly<ProviderProps>) {
  return (
    <SessionProvider>
      <NextUIProvider>
       {children}
      </NextUIProvider>
    </SessionProvider>
  )
}