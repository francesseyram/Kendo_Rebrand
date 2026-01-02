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
          <Link
            href="/"
            className="flex items-center gap-3 text-xl font-bold tracking-tight hover:scale-105 transition-transform group"
          >
            <img
              src="/kendo_logo.png"
              alt="Ghana Kendo Federation Logo"
              className="h-8 w-8 object-contain"
            />
            <span className="text-foreground group-hover:text-gradient transition-all">
              Ghana Kendo Federation
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>

<<<<<<< HEAD
            <NavigationMenu viewport={false}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium bg-transparent">Clubs</NavigationMenuTrigger>
                  <NavigationMenuContent className="!bg-background !text-foreground z-50">
                    <div className="w-[500px] p-6 bg-background text-foreground backdrop-blur-xl border border-primary/10 shadow-xl rounded-md">
=======
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium bg-transparent">Clubs</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[500px] p-6 bg-card/95 backdrop-blur-xl border border-primary/10">
>>>>>>> 604e8331dc6888eebdf3e73908b9235ecec41119
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                            Greater Accra
                          </h4>
                          <div className="space-y-2">
                            <NavigationMenuLink asChild>
                              <Link
                                href="/clubs/first-blade"
<<<<<<< HEAD
                                className="block text-sm text-foreground hover:text-foreground hover:bg-primary/20 transition-colors py-1 px-2 rounded"
=======
                                className="block text-sm hover:text-primary transition-colors"
>>>>>>> 604e8331dc6888eebdf3e73908b9235ecec41119
                              >
                                First Blade Kendo Dojo
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Link
                                href="/clubs/great-sword"
<<<<<<< HEAD
                                className="block text-sm text-foreground hover:text-foreground hover:bg-primary/20 transition-colors py-1 px-2 rounded"
=======
                                className="block text-sm hover:text-primary transition-colors"
>>>>>>> 604e8331dc6888eebdf3e73908b9235ecec41119
                              >
                                Great Sword - Sage Kendo Club
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
<<<<<<< HEAD
                              <Link href="/clubs/datus" className="block text-sm text-foreground hover:text-foreground hover:bg-primary/20 transition-colors py-1 px-2 rounded">
=======
                              <Link href="/clubs/datus" className="block text-sm hover:text-primary transition-colors">
>>>>>>> 604e8331dc6888eebdf3e73908b9235ecec41119
                                Datus International School
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Link
                                href="/clubs/milespotens"
<<<<<<< HEAD
                                className="block text-sm text-foreground hover:text-foreground hover:bg-primary/20 transition-colors py-1 px-2 rounded"
=======
                                className="block text-sm hover:text-primary transition-colors"
>>>>>>> 604e8331dc6888eebdf3e73908b9235ecec41119
                              >
                                Milespotens Kendo Club
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Link
                                href="/clubs/aviation"
<<<<<<< HEAD
                                className="block text-sm text-foreground hover:text-foreground hover:bg-primary/20 transition-colors py-1 px-2 rounded"
=======
                                className="block text-sm hover:text-primary transition-colors"
>>>>>>> 604e8331dc6888eebdf3e73908b9235ecec41119
                              >
                                Aviation Social Center
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
<<<<<<< HEAD
                              <Link href="/clubs/kensei" className="block text-sm text-foreground hover:text-foreground hover:bg-primary/20 transition-colors py-1 px-2 rounded">
=======
                              <Link href="/clubs/kensei" className="block text-sm hover:text-primary transition-colors">
>>>>>>> 604e8331dc6888eebdf3e73908b9235ecec41119
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
<<<<<<< HEAD
                                className="block text-sm text-foreground hover:text-foreground hover:bg-primary/20 transition-colors py-1 px-2 rounded"
=======
                                className="block text-sm hover:text-primary transition-colors"
>>>>>>> 604e8331dc6888eebdf3e73908b9235ecec41119
                              >
                                Ashanti North Kendo Club
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
<<<<<<< HEAD
                              <Link href="/clubs/cove" className="block text-sm text-foreground hover:text-foreground hover:bg-primary/20 transition-colors py-1 px-2 rounded">
=======
                              <Link href="/clubs/cove" className="block text-sm hover:text-primary transition-colors">
>>>>>>> 604e8331dc6888eebdf3e73908b9235ecec41119
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
