"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-primary/20 shadow-2xl shadow-primary/5" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-xl font-bold tracking-tight hover:scale-105 transition-transform group">
            <span className="text-foreground group-hover:text-gradient transition-all">Ghana Kendo</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium bg-transparent">Clubs</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[500px] p-6 bg-card/95 backdrop-blur-xl border border-primary/10">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                            Greater Accra
                          </h4>
                          <div className="space-y-2">
                            <NavigationMenuLink asChild>
                              <Link
                                href="/clubs/first-blade"
                                className="block text-sm hover:text-primary transition-colors"
                              >
                                First Blade Kendo Dojo
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Link
                                href="/clubs/great-sword"
                                className="block text-sm hover:text-primary transition-colors"
                              >
                                Great Sword - Sage Kendo Club
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Link href="/clubs/datus" className="block text-sm hover:text-primary transition-colors">
                                Datus International School
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Link
                                href="/clubs/milespotens"
                                className="block text-sm hover:text-primary transition-colors"
                              >
                                Milespotens Kendo Club
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Link
                                href="/clubs/aviation"
                                className="block text-sm hover:text-primary transition-colors"
                              >
                                Aviation Social Center
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Link href="/clubs/kensei" className="block text-sm hover:text-primary transition-colors">
                                Kensei Kendo Dojo
                              </Link>
                            </NavigationMenuLink>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                            Ashanti Region
                          </h4>
                          <div className="space-y-2">
                            <NavigationMenuLink asChild>
                              <Link
                                href="/clubs/ashanti-north"
                                className="block text-sm hover:text-primary transition-colors"
                              >
                                Ashanti North Kendo Club
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Link href="/clubs/cove" className="block text-sm hover:text-primary transition-colors">
                                Cove Kendo Club
                              </Link>
                            </NavigationMenuLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link href="/news" className="text-sm font-medium hover:text-primary transition-colors">
              News
            </Link>
            <Link href="/gallery" className="text-sm font-medium hover:text-primary transition-colors">
              Gallery
            </Link>
            <Link href="/shop" className="text-sm font-medium hover:text-primary transition-colors">
              Shop
            </Link>
            <Link href="/resources" className="text-sm font-medium hover:text-primary transition-colors">
              Resources
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
            <Button
              size="sm"
              asChild
              className="rounded-full bg-primary hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50"
            >
              <Link href="/donate">Donate</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 space-y-4 border-t border-primary/20">
            <Link
              href="/about"
              className="block text-lg hover:text-foreground/80 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/clubs"
              className="block text-lg hover:text-foreground/80 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Clubs
            </Link>
            <Link
              href="/news"
              className="block text-lg hover:text-foreground/80 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              News
            </Link>
            <Link
              href="/gallery"
              className="block text-lg hover:text-foreground/80 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/shop"
              className="block text-lg hover:text-foreground/80 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/resources"
              className="block text-lg hover:text-foreground/80 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/contact"
              className="block text-lg hover:text-foreground/80 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button
              asChild
              className="w-full rounded-full bg-primary hover:bg-primary/90 transition-all hover:scale-105 shadow-lg hover:shadow-primary/50"
            >
              <Link href="/donate" onClick={() => setMobileMenuOpen(false)}>
                Donate
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
