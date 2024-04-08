"use client"

import { Button } from "ui/components/ui/button"
import AdminLayoutNavbarComponent from "./navbar"
import AdminLayoutSidebarComponent from "./sidebar"
import { ReactNode } from "react"

export function AdminLayoutComponent({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <AdminLayoutSidebarComponent />
      <div className="flex flex-col">
        <AdminLayoutNavbarComponent />
        <main className="flex flex-col flex-1 gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
