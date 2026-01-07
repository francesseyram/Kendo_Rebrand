import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Calendar, ExternalLink, Newspaper } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const events = [
  {
    id: 1,
    title: "Tunis International Open",
    date: "28th - 30th November 2025",
    image: "/kendo-seminar-with-visiting-instructor.jpg",
  },
  {
    id: 2,
    title: "Japanese Ambassador Championship",
    date: "March 2025",
    image: "/kendo-tournament-competition.jpg",
  },
  {
    id: 3,
    title: "National Kendo Referees Seminar",
    date: "May 2025",
    image: "/kendo-tournament-match-with-referee.jpg",
  },
  {
    id: 4,
    title: "1st National Inter-Club Kendo Championships",
    date: "June 2025",
    image: "/kendo-championship-trophy-presentation.jpg",
  },
  {
    id: 5,
    title: "National Kendo Senior Challenge",
    date: "August 2025",
    image: "/kendo-participants-group-photo-at-event.jpg",
  },
  {
    id: 6,
    title: "National Team Training",
    date: "Ongoing",
    image: "/kendo-training-session-with-practitioners-in-bogu-.jpg",
  },
  {
    id: 7,
    title: "National Kendo Seniors Challenge Registered Players",
    date: "2025",
    image: "/kendo-club-members-celebrating-together.jpg",
  },
]

const newsLinks = [
  { 
    id: 1,
    title: "The National Seniors Kendo Challenge!! Excerpts of Strength and Honour", 
    url: "https://web.facebook.com/61571301195088/videos/1337358874447072/?rdid=cPLUWiLL4rcazUso#"
  },
  {
    id: 2,
    title: "Ghana Kendo Federation Announces National Team Selection",
    url: "https://obusports.org/2025/07/12/ghana-kendo-federation-announces-national-team-selection/",
  },
  {
    id: 3,
    title: "1st National Inter-Club Kendo Championships",
    url: "https://youtu.be/ArRtLgqO7VY?si=KADfwEp0F9UudfJI",
  },
  {
    id: 4,
    title: "Japanese Ambassador Kendo Championship Hosts 5th Edition",
    url: "https://obusports.org/2025/03/16/japanese-ambassador-kendo-championship-hosts-5th-edition/",
  },
  {
    id: 5,
    title: "Ghana Kendo Federation Hosts Referees Seminar to Enhance Officiating",
    url: "https://obusports.org/2025/04/07/ghana-kendo-association-hosts-referees-seminar-to-enhance-officiating/",
  },
]

export const metadata = {
  title: "News / Events - Ghana Kendo Federation",
  description: "Stay updated with the latest news and upcoming events from Ghana Kendo Federation",
}

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-background via-background/95 to-background py-32 md:py-40">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              News / Events
            </h1>
            <div className="w-40 h-0.5 bg-primary mx-auto" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Main Content - Events Grid */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-3 gap-6">
              {events.map((event) => (
                <Card
                  key={event.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading={event.id <= 3 ? "eager" : "lazy"}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <Calendar className="h-3 w-3" />
                      {event.date}
                    </div>
                    <h3 className="text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar - News Links */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Newspaper className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">News / Events</h2>
              </div>

              <div className="space-y-3">
                {newsLinks.map((news, index) => (
                  <Link
                    key={news.id}
                    href={news.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="relative p-4 rounded-lg border border-border bg-card hover:bg-gradient-to-br hover:from-accent/30 hover:to-accent/10 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 overflow-hidden">
                      {/* Shimmer effect on hover */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                      
                      {/* Number badge */}
                      <div className="absolute top-2 right-2 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        {index + 1}
                      </div>

                      <div className="flex items-start gap-3 relative z-10">
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <ExternalLink className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0 pr-6">
                          <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-all duration-300 leading-relaxed group-hover:translate-x-1">
                            {news.title}
                          </p>
                        </div>
                      </div>
                      
                      {/* Animated underline on hover */}
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary/80 to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                      
                      {/* Corner accent */}
                      <div className="absolute top-0 right-0 w-12 h-12 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </Link>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
