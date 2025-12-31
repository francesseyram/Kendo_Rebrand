import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Link href="/" className="text-xl font-bold tracking-tight inline-block mb-4 group">
              <span className="group-hover:text-gradient transition-all">Ghana Kendo</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Promoting the way of the sword through discipline, respect, and personal growth.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="hover:text-foreground/80 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/clubs" className="hover:text-foreground/80 transition-colors">
                  Clubs
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-foreground/80 transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-foreground/80 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-foreground/80 transition-colors">
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Support</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/resources" className="hover:text-foreground/80 transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground/80 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/donate" className="hover:text-foreground/80 transition-colors">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-4">Connect</h4>
            <div className="flex gap-3 mb-6">
              <a
                href="#"
                className="h-10 w-10 border border-primary/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all hover:scale-110 hover:shadow-lg hover:shadow-primary/30"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="h-10 w-10 border border-primary/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all hover:scale-110 hover:shadow-lg hover:shadow-primary/30"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="h-10 w-10 border border-primary/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all hover:scale-110 hover:shadow-lg hover:shadow-primary/30"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground">info@kendoghana.com</p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Ghana Kendo Federation. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
