'use client'

import Link from "next/link"
import {
  CircleUser,
  Menu,
  Package2,
  Search,
} from "ui/icons"

import { Button } from "ui/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "ui/components/ui/dropdown-menu"
import { Input } from "ui/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "ui/components/ui/sheet"
import { siteRoutes } from "../../../config/routes"

export default function DefaultLayoutNavbarComponent() {
  return (
    <header className="sticky top-0 flex items-center h-16 gap-4 px-4 border-b bg-background md:px-6">
      <nav className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Package2 className="w-6 h-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        {siteRoutes.map(route =>
          <Link
            key={route.href}
            href={route.href}
            className="transition-colors text-muted-foreground active:text-foreground hover:text-foreground"
          >
            {route.title}
          </Link>
        )}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 md:hidden"
          >
            <Menu className="w-5 h-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="w-6 h-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            {siteRoutes.map(route => <Link
              key={route.href}
              href={route.href}
              className="active:text-muted-foreground hover:text-foreground"
            >
              {route.title}
            </Link>)}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="flex-1 ml-auto sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="w-5 h-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}