import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Bamboo Shinai",
    price: "₵150",
    image: "/shop/bamboo-shinai-kendo-sword.jpg",
    description: "Professional grade bamboo sword for training",
  },
  {
    id: 2,
    name: "Complete Bogu Set",
    price: "₵2,500",
    image: "/shop/kendo-bogu-armor-set.jpg",
    description: "Full protective armor set including men, kote, do, and tare",
  },
  {
    id: 3,
    name: "Kendo Gi & Hakama",
    price: "₵400",
    image: "/shop/kendo-gi-hakama-uniform.jpg",
    description: "Traditional training uniform set",
  },
  {
    id: 4,
    name: "Tenugui (Headcloth)",
    price: "₵30",
    image: "/shop/kendo-tenugui-headcloth.jpg",
    description: "Traditional cotton headcloth worn under men",
  },
  {
    id: 5,
    name: "Bokuto (Wooden Sword)",
    price: "₵120",
    image: "/shop/bokuto-wooden-sword-kendo.jpg",
    description: "Solid oak practice sword",
  },
  {
    id: 6,
    name: "Shinai Bag",
    price: "₵80",
    image: "/shop/kendo-shinai-bag-equipment.jpg",
    description: "Durable bag for transporting shinai",
  },
]

export const metadata = {
  title: "Shop - Ghana Kendo Federation",
  description: "Purchase Kendo equipment and gear from Ghana Kendo Federation",
}

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Kendo Equipment Shop</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Quality Kendo gear and equipment for practitioners of all levels. All products are carefully selected to
            ensure authenticity and durability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square relative bg-muted">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-kendo-red">{product.price}</span>
                  <Button>Add to Cart</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl">
          <Card className="p-8 bg-muted/50">
            <h3 className="text-2xl font-bold mb-4">Need Help Choosing Equipment?</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our experienced instructors can help you select the right equipment for your level and training needs.
              Contact us for personalized recommendations.
            </p>
            <Button variant="outline">Contact Us</Button>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
