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
<<<<<<< HEAD
    sensei: "SESI DZAKPASU",
    location: "First Blade Kendo Dojo, Nungua, 246 Beach Drive",
    trainingDays: "Sunday",
    trainingTime: "3.00pm – 6.00pm",
    email: "info@kendoghana.com",
    phone: "+233 266 000 201",
=======
    sensei: "Sensei Kwame Mensah",
    location: "East Legon, Accra",
    trainingDays: "Tuesday, Thursday, Saturday",
    trainingTime: "6:00 PM - 8:00 PM",
    email: "firstblade@kendoghana.com",
    phone: "+233 XX XXX XXXX",
>>>>>>> 604e8331dc6888eebdf3e73908b9235ecec41119
    description:
      "First Blade Kendo Dojo is one of the founding clubs of the Ghana Kendo Federation. We offer comprehensive training for beginners and advanced practitioners in a supportive environment.",
  },
  "great-sword": {
    name: "Great Sword - Sage Kendo Club",
<<<<<<< HEAD
    sensei: "RANDOLPH PHILIP DARKU",
    location: "Accra Sports Stadium",
    trainingDays: "Saturday",
    trainingTime: "12:00pm – 3:00pm",
    email: "info@kendoghana.com",
    phone: "+233553644551",
    description: "Training by appointment available",
  },
  datus: {
    name: "Datus International School Kendo Club",
    sensei: "Bruce Adjaho",
    location: "Tema comm 7",
    trainingDays: "Monday, Wednesday, Friday & Saturday",
    trainingTime: "3:00pm – 5:00pm (MWF), 9:00am – 12:00pm (Sat)",
    email: "info@kendoghana.com",
    phone: "+233553644551",
    description: "Training by appointment available",
  },
  milespotens: {
    name: "MilesPotens Kendo Club",
    sensei: "Lord Ishaken",
    location: "Ablekuma CP",
    trainingDays: "Thursday",
    trainingTime: "6:00pm – 7:00pm",
    email: "info@kendoghana.com",
    phone: "+233243957780",
    description: "Training by appointment available",
  },
  aviation: {
    name: "Aviation Social Center Kendo Club",
    sensei: "Bruce and Sesi",
    location: "Aviation Social Center",
    trainingDays: "Wednesday, Saturday & Sunday",
    trainingTime: "6:00pm - 8:00pm (Wed), 1:00pm – 3:00pm (Sat), 2:00pm – 4:00pm (Sun)",
    email: "info@kendoghana.com",
    phone: "+233500450430",
    description: "Training by appointment available",
  },
  kensei: {
    name: "Kensei Kendo Dojo",
    sensei: "Dickson EK Acolatse",
    location: "California fitness gym, Palace mall - spintex",
    trainingDays: "Saturday",
    trainingTime: "2:00pm – 3:00pm",
    email: "info@kendoghana.com",
    phone: "+233544094922 / +233548220291",
    description: "Professional kendo training facility",
  },
  "ashanti-north": {
    name: "Ashanti North Kendo Club",
    sensei: "FRANK AGYEI",
    location: "State Boys School near Suame Police Station",
    trainingDays: "Saturday & Sunday",
    trainingTime: "6:00am – 8:00am",
    email: "info@kendoghana.com",
    phone: "+233574859545",
    description: "Training by appointment available",
  },
  cove: {
    name: "Cove Kendo Club",
    sensei: "FRANK AGYEI",
    location: "Palestra Gym, Kaase",
    trainingDays: "Saturday & Sunday",
    trainingTime: "6:00am – 7:30am (Sat), 6:00am – 8:00am (Sun)",
    email: "info@kendoghana.com",
    phone: "+233574859545",
    description: "Training by appointment available",
=======
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
>>>>>>> 604e8331dc6888eebdf3e73908b9235ecec41119
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

<<<<<<< HEAD
  // Map club slugs to their logo images
  const clubLogos: Record<string, string> = {
    "first-blade": "/logo_blade.jpg",
    "great-sword": "/logo_sword.jpg",
    datus: "/logo_datus.jpg",
    milespotens: "/logo_miles.jpg",
    aviation: "/logo_aviation2.jpg",
    kensei: "/kenseilogo.png",
    "ashanti-north": "/ashanti_north.jpeg",
    cove: "/cove_kendo.jpeg",
  }

  const clubImageSrc = clubLogos[slug] || `/kendo-dojo-training-.jpg?height=600&width=900&query=kendo+dojo+training+${club.name}`

=======
>>>>>>> 604e8331dc6888eebdf3e73908b9235ecec41119
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
<<<<<<< HEAD
                src={clubImageSrc}
                alt={club.name}
                width={900}
                height={600}
                className="rounded-xl shadow-2xl w-full object-contain"
=======
                src={`/kendo-dojo-training-.jpg?height=600&width=900&query=kendo+dojo+training+${club.name}`}
                alt={club.name}
                width={900}
                height={600}
                className="rounded-xl shadow-2xl w-full"
>>>>>>> 604e8331dc6888eebdf3e73908b9235ecec41119
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
