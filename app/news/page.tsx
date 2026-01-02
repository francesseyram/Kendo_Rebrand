import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"

const events = [
  {
    id: 1,
    title: "National Kendo Championship 2025",
    date: "March 15, 2025",
    location: "National Sports Stadium, Accra",
    description: "Join us for the annual National Kendo Championship featuring competitions across all skill levels.",
    image: "/kendo-tournament-competition.jpg",
  },
  {
    id: 2,
    title: "Beginner Workshop Series",
    date: "February 20-22, 2025",
    location: "Various Locations",
    description: "Three-day intensive workshop for beginners interested in starting their Kendo journey.",
    image: "/kendo-workshop-beginners-training.jpg",
  },
  {
    id: 3,
    title: "International Sensei Visit",
    date: "April 10, 2025",
    location: "Accra Convention Center",
    description: "Special training session with renowned sensei from Japan. Open to all federation members.",
    image: "/japanese-kendo-sensei-teaching.jpg",
  },
  {
    id: 4,
    title: "Youth Kendo Festival",
    date: "May 5, 2025",
    location: "Independence Square, Accra",
    description: "Annual festival celebrating youth participation in Kendo with demonstrations and competitions.",
    image: "/youth-kendo-festival-children.jpg",
  },
]

export const metadata = {
  title: "News & Events - Ghana Kendo Federation",
  description: "Stay updated with the latest news and upcoming events from Ghana Kendo Federation",
}

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">News & Events</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Stay updated with upcoming events, competitions, and news from the Ghana Kendo Federation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  {event.date}
                </div>
                <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                <p className="text-muted-foreground mb-2 text-sm">{event.location}</p>
                <p className="text-muted-foreground leading-relaxed mb-6">{event.description}</p>
                <Button variant="outline" className="gap-2 bg-transparent">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
