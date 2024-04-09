import { ReactNode } from "react";
import AuthLayoutComponent from "@/components/layout/auth";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <AuthLayoutComponent>{children}</AuthLayoutComponent>
  )
}