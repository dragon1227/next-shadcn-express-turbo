'use client'

import { ReactNode } from "react";
import { TooltipProvider } from "@ui/components/ui/tooltip";

export default function ShadcnProvider({ children }: { children: ReactNode }) {
  return <TooltipProvider>{children}</TooltipProvider>
}