import { ReactNode } from "react";
import ThemeProvider from "@ui/providers/theme-provider"
import ShadcnProvider from "@ui/providers/shadcn-provider"

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <ShadcnProvider>
        {children}
      </ShadcnProvider>
    </ThemeProvider>
  );
}