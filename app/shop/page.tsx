import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Mail } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Bamboo Shinai",
    image: "/shop/bamboo-shinai-kendo-sword.jpg",
    description: "Professional grade bamboo sword for training",
    category: "Weapons",
    recommendedFor: ["Beginner", "Intermediate", "Advanced"],
  },
  {
    id: 2,
    name: "Men",
    image: "/shop/kendo-men-helmet.jpg",
    description: "The helmet part of the protective armor (bogu)",
    category: "Armor",
    recommendedFor: ["Intermediate", "Advanced"],
  },
  {
    id: 3,
    name: "Kendo Gi & Hakama",
    image: "/shop/kendo-gi-hakama-uniform.jpg",
    description: "Traditional training uniform set",
    category: "Clothing",
    recommendedFor: ["Beginner", "Intermediate", "Advanced"],
  },
  {
    id: 4,
    name: "Tenugui (Headcloth)",
    image: "/shop/kendo-tenugui-headcloth.jpg",
    description: "Traditional cotton headcloth worn under men",
    category: "Accessories",
    recommendedFor: ["Intermediate", "Advanced"],
  },
  {
    id: 5,
    name: "Kendo Do",
    image: "/shop/dou.jpg",
    description: "Rigid chest protector designed to protect the torso and encourage proper posture and striking form",
    category: "Armor",
    recommendedFor: ["Intermediate", "Advanced"],
  },
  {
    id: 6,
    name: "Kendo Tare",
    image: "/shop/kendo-tare-waist-protection.jpg",
    description: "Waist and hip protector that guards the lower body and displays the kendoka's name and dojo affiliation",
    category: "Armor",
    recommendedFor: ["Intermediate", "Advanced"],
  },
  {
    id: 7,
    name: "Kote",
    image: "/shop/kote.jpeg",
    description: "Protective gloves for the hands and wrists",
    category: "Armor",
    recommendedFor: ["Intermediate", "Advanced"],
  },
  {
    id: 8,
    name: "Complete Bogu Set",
    image: "/shop/kendo-bogu-complete-set.jpg",
    description: "Full protective armor set including men, kote, dō, and tare for safe and proper Kendo practice",
    category: "Armor",
    recommendedFor: ["Intermediate", "Advanced"],
  },
  {
    id: 9,
    name: "Bokuto (Wooden Sword)",
    image: "/shop/bokuto-wooden-sword-kendo.jpg",
    description: "Solid oak practice sword",
    category: "Weapons",
    recommendedFor: ["Beginner", "Intermediate", "Advanced"],
  },
]

export const metadata = {
  title: "Shop - Ghana Kendo Federation",
  description: "Kendo equipment catalogue – request authentic gear through Ghana Kendo Federation",
}

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
        {/* Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="inline-block mb-4 sm:mb-6 px-4 py-2 rounded-full glass border border-primary/20">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Equipment Catalogue
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance text-gradient">
            Kendo Equipment
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            A curated catalogue of authentic Kendo equipment approved by the Ghana Kendo Federation.
            Items are supplied on request to ensure correct sizing, safety, and suitability for your
            level of practice.
          </p>
        </div>

        {/* Products by Category */}
        <div className="space-y-16 sm:space-y-20 md:space-y-24 max-w-7xl">
          {["Weapons", "Armor", "Clothing", "Accessories"].map((category) => {
            const categoryProducts = products.filter((p) => p.category === category)
            if (categoryProducts.length === 0) return null

            return (
              <section key={category} className="space-y-6 sm:space-y-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gradient">{category}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {categoryProducts.map((product) => (
                    <Card
                      key={product.id}
                      data-aos="fade-up"
                      data-aos-delay={product.id * 60}
                      className="overflow-hidden hover:shadow-xl transition-all duration-300 group glass border border-primary/10 hover:border-primary/30"
                    >
                      {/* Image Hero */}
                      <div className="relative h-[260px] sm:h-[280px] bg-muted overflow-hidden">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                        {/* Availability badge */}
                        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur px-2.5 py-1 rounded-full text-xs font-semibold text-white z-10">
                          Available on request
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4 flex flex-col gap-3">
                        <h3 className="text-lg font-semibold leading-tight">
                          {product.name}
                        </h3>
                        
                        {/* Recommended For badges */}
                        {product.recommendedFor && product.recommendedFor.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {product.recommendedFor.map((level) => (
                              <span
                                key={level}
                                className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium"
                              >
                                {level}
                              </span>
                            ))}
                          </div>
                        )}

                        <p className="text-sm text-muted-foreground leading-snug">
                          {product.description}
                        </p>

                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="w-full gap-2 mt-3"
                        >
                          <a
                            href={`mailto:info@kendoghana.com?subject=Equipment Request – ${encodeURIComponent(
                              product.name
                            )}`}
                          >
                            <Mail className="h-4 w-4" />
                            Request via Federation
                          </a>
                        </Button>
                        <p className="text-xs text-muted-foreground text-center">
                          Our technical team will guide sizing and suitability.
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>
            )
          })}
        </div>

        {/* Beginner Equipment Guide */}
        <section className="mt-16 sm:mt-20 md:mt-24 max-w-5xl mx-auto">
          <Card className="p-8 sm:p-10 glass border border-primary/20" data-aos="fade-up">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gradient">
              New to Kendo?
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
              Beginners do not need full armor immediately. Our instructors will help you
              determine what equipment is appropriate for your stage of training.
            </p>

            <ul className="space-y-3 text-muted-foreground mb-6 sm:mb-8">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Shinai (practice sword) – Essential from day one</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Gi & Hakama – Required for all training sessions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Bokuto (for kata) – Introduced as training progresses</span>
              </li>
            </ul>

            <Button asChild variant="default" className="w-full sm:w-auto">
              <a href="/contact">Talk to an Instructor</a>
            </Button>
          </Card>
        </section>

        {/* Info Section */}
        <div className="mt-12 sm:mt-16 md:mt-20 max-w-4xl mx-auto">
          <Card className="p-6 sm:p-8 glass border border-primary/20" data-aos="fade-up">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              How Equipment Requests Work
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
              To maintain quality and ensure proper fit, all equipment is supplied
              through direct request. Send us an email indicating the item you're
              interested in, your experience level, and any sizing details if applicable.
            </p>

            <Button asChild variant="default" className="w-full sm:w-auto">
              <a href="mailto:info@kendoghana.com">
                Contact info@kendoghana.com
              </a>
            </Button>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}