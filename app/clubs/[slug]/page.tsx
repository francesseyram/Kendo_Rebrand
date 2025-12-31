import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Clock, User, Mail, Phone, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import Image from "next/image"

const clubsData: Record<
  string,
  {
    name: string
    sensei?: string
    location: string
    trainingDays: string
    trainingTime: string
    email: string
    phone: string
    description: string
  }
> = {
  "first-blade": {
    name: "First Blade Kendo Dojo",
    sensei: "Sensei Kwame Mensah",
    location: "East Legon, Accra",
    trainingDays: "Tuesday, Thursday, Saturday",
    trainingTime: "6:00 PM - 8:00 PM",
    email: "firstblade@kendoghana.com",
    phone: "+233 XX XXX XXXX",
    description:
      "First Blade Kendo Dojo is one of the founding clubs of the Ghana Kendo Federation. We offer comprehensive training for beginners and advanced practitioners in a supportive environment.",
  },
  "great-sword": {
    name: "Great Sword - Sage Kendo Club",
    sensei: "Sensei Ama Darko",
    location: "Osu, Accra",
    trainingDays: "Monday, Wednesday, Friday",
    trainingTime: "5:30 PM - 7:30 PM",
    email: "greatsword@kendoghana.com",
    phone: "+233 XX XXX XXXX",
    description:
      "Great Sword - Sage Kendo Club focuses on traditional Kendo training with emphasis on form, discipline, and competitive excellence.",
  },
  datus: {
    name: "Datus International School Kendo Club",
    location: "Airport Residential Area, Accra",
    trainingDays: "Wednesday, Friday",
    trainingTime: "4:00 PM - 6:00 PM",
    email: "datus@kendoghana.com",
    phone: "+233 XX XXX XXXX",
    description:
      "Our school-based club introduces young students to the principles and practice of Kendo, building character and discipline from an early age.",
  },
  milespotens: {
    name: "Milespotens Kendo Club",
    sensei: "Sensei Yaw Boateng",
    location: "Tema, Accra",
    trainingDays: "Tuesday, Saturday",
    trainingTime: "6:30 PM - 8:30 PM",
    email: "milespotens@kendoghana.com",
    phone: "+233 XX XXX XXXX",
    description:
      "Milespotens Kendo Club offers dedicated training in a modern facility, welcoming practitioners of all levels.",
  },
  aviation: {
    name: "Aviation Social Center Kendo Club",
    location: "Airport, Accra",
    trainingDays: "Monday, Thursday",
    trainingTime: "6:00 PM - 8:00 PM",
    email: "aviation@kendoghana.com",
    phone: "+233 XX XXX XXXX",
    description:
      "Located at the Aviation Social Center, our club provides excellent facilities and experienced instruction for Kendo enthusiasts.",
  },
  kensei: {
    name: "Kensei Kendo Dojo",
    sensei: "Sensei Akua Asante",
    location: "Madina, Accra",
    trainingDays: "Wednesday, Friday, Sunday",
    trainingTime: "5:00 PM - 7:00 PM",
    email: "kensei@kendoghana.com",
    phone: "+233 XX XXX XXXX",
    description:
      "Kensei Kendo Dojo emphasizes the spiritual aspects of Kendo alongside technical proficiency, creating well-rounded practitioners.",
  },
  "ashanti-north": {
    name: "Ashanti North Kendo Club",
    sensei: "Sensei Kofi Owusu",
    location: "Kumasi",
    trainingDays: "Tuesday, Thursday, Saturday",
    trainingTime: "6:00 PM - 8:00 PM",
    email: "ashantinorth@kendoghana.com",
    phone: "+233 XX XXX XXXX",
    description:
      "Serving the Ashanti region, our club brings quality Kendo instruction to Kumasi and surrounding areas.",
  },
  cove: {
    name: "Cove Kendo Club",
    location: "Kumasi",
    trainingDays: "Monday, Wednesday, Friday",
    trainingTime: "5:30 PM - 7:30 PM",
    email: "cove@kendoghana.com",
    phone: "+233 XX XXX XXXX",
    description:
      "Cove Kendo Club offers traditional Kendo training in a welcoming atmosphere for all ages and skill levels.",
  },
}

export function generateStaticParams() {
  return Object.keys(clubsData).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const club = clubsData[slug]
  if (!club) return { title: "Club Not Found" }
  return {
    title: `${club.name} - Ghana Kendo Federation`,
    description: club.description,
  }
}

export default async function ClubPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const club = clubsData[slug]

  if (!club) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-16">
        <Button variant="ghost" asChild className="mb-8 gap-2">
          <Link href="/clubs">
            <ArrowLeft className="h-4 w-4" /> Back to Clubs
          </Link>
        </Button>

        <div className="max-w-5xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-balance">{club.name}</h1>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <Image
                src={`/kendo-dojo-training-.jpg?height=600&width=900&query=kendo+dojo+training+${club.name}`}
                alt={club.name}
                width={900}
                height={600}
                className="rounded-xl shadow-2xl w-full"
              />
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-4">Training Information</h3>
                <div className="space-y-4">
                  {club.sensei && (
                    <div className="flex items-start gap-3">
                      <User className="h-5 w-5 text-kendo-red shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm text-muted-foreground">Sensei</div>
                        <div className="font-medium">{club.sensei}</div>
                      </div>
                    </div>
                  )}
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-kendo-red shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm text-muted-foreground">Location</div>
                      <div className="font-medium">{club.location}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-kendo-red shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm text-muted-foreground">Training Days</div>
                      <div className="font-medium">{club.trainingDays}</div>
                      <div className="text-sm mt-1">{club.trainingTime}</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-lg mb-4">Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-kendo-red shrink-0" />
                    <a href={`mailto:${club.email}`} className="text-sm hover:underline">
                      {club.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-kendo-red shrink-0" />
                    <span className="text-sm">{club.phone}</span>
                  </div>
                </div>
              </Card>

              <Button asChild className="w-full gap-2">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">About This Club</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{club.description}</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
