import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"

const regions = [
  {
    name: "Greater Accra Regional Kendo Association",
    clubs: [
      { name: "Nungua Kendo Dojo", slug: "nungua" },
      { name: "Great Sword - Sage Kendo Club", slug: "great-sword" },
      { name: "Datus International School Kendo Club", slug: "datus" },
      { name: "Aviation Social Center Kendo Club", slug: "aviation" },
      { name: "Kensei Kendo Dojo", slug: "kensei" },
    ],
  },
  {
    name: "Ashanti Regional Kendo Association",
    clubs: [
      { name: "Ashanti North Kendo Club", slug: "ashanti-north" },
      { name: "Cove Kendo Club", slug: "cove" },
    ],
  },
  {
    name: "Volta Regional Kendo Association",
    comingSoon: true,
  },
  {
    name: "Central Regional Kendo Association",
    comingSoon: true,
  },
  {
    name: "Eastern Regional Kendo Association",
    comingSoon: true,
  },
]

export const metadata = {
  title: "Member Clubs - Ghana Kendo Federation",
  description: "Find a Kendo club near you in Ghana",
}

export default function ClubsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Member Clubs</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Find a Kendo club near you and start your journey. Our member clubs are located across Ghana, offering
            training for all skill levels.
          </p>
        </div>

        <div className="space-y-12 max-w-5xl">
          {regions.map((region) => (
            <div key={region.name}>
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-6 w-6 text-kendo-red" />
                <h2 className="text-3xl font-bold">{region.name}</h2>
              </div>

              {region.comingSoon ? (
                <Card className="p-8 bg-muted/50">
                  <p className="text-muted-foreground text-lg">Coming Soon</p>
                </Card>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {region.clubs?.map((club) => (
                    <Card key={club.slug} className="p-6 hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-bold mb-4">{club.name}</h3>
                      <Button asChild variant="outline" className="gap-2 bg-transparent">
                        <Link href={`/clubs/${club.slug}`}>
                          View Details <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
