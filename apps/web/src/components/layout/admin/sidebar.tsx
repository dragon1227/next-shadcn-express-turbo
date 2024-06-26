"use client"
import Link from "next/link"
import {
  Bell,
  Home,
  LineChart,
  Package,
  Package2,
  ShoppingCart,
  Users,
} from "ui/icons"

import { Badge } from "ui/components/ui/badge"
import { Button } from "ui/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "ui/components/ui/card"

export default function AdminLayoutSidebarComponent() {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex flex-col h-full max-h-screen gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="w-6 h-6" />
            <span className="">Acme Inc</span>
          </Link>
          <Button variant="outline" size="icon" className="w-8 h-8 ml-auto">
            <Bell className="w-4 h-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link
              href="#"
              className="flex items-center gap-3 px-3 py-2 transition-all rounded-lg text-muted-foreground hover:text-primary"
            >
              <Home className="w-4 h-4" />
              Dashboard
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-3 py-2 transition-all rounded-lg text-muted-foreground hover:text-primary"
            >
              <ShoppingCart className="w-4 h-4" />
              Orders
              <Badge className="flex items-center justify-center w-6 h-6 ml-auto rounded-full shrink-0">
                6
              </Badge>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-3 py-2 transition-all rounded-lg bg-muted text-primary hover:text-primary"
            >
              <Package className="w-4 h-4" />
              Products{" "}
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-3 py-2 transition-all rounded-lg text-muted-foreground hover:text-primary"
            >
              <Users className="w-4 h-4" />
              Customers
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-3 py-2 transition-all rounded-lg text-muted-foreground hover:text-primary"
            >
              <LineChart className="w-4 h-4" />
              Analytics
            </Link>
          </nav>
        </div>
        <div className="p-4 mt-auto">
          <Card x-chunk="dashboard-02-chunk-0">
            <CardHeader className="p-2 pt-0 md:p-4">
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support
                team.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
              <Button size="sm" className="w-full">
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}