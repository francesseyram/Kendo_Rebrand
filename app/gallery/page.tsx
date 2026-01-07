import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function GalleryPage() {
  const galleries = [
    {
      title: "Training Sessions",
      images: [
        {
          src: "/kendo-training-session-with-practitioners-in-bogu-.jpg",
          alt: "Kendo training session",
        },
        {
          src: "/kendo-practitioners-practicing-men-strikes.jpg",
          alt: "Men strikes practice",
        },
        {
          src: "/kendo-dojo-with-students-in-formation.jpg",
          alt: "Dojo formation",
        },
        {
          src: "/kendo-instructor-demonstrating-technique.jpg",
          alt: "Technique demonstration",
        },
      ],
    },
    {
      title: "Tournaments & Events",
      images: [
        {
          src: "/kendo-tournament-match-with-referee.jpg",
          alt: "Tournament match",
        },
        {
          src: "/kendo-championship-trophy-presentation.jpg",
          alt: "Championship trophy",
        },
        {
          src: "/kendo-participants-group-photo-at-event.jpg",
          alt: "Event group photo",
        },
        {
          src: "/kendo-opening-ceremony-with-flags.jpg",
          alt: "Opening ceremony",
        },
      ],
    },
    {
      title: "Community",
      images: [
        {
          src: "/young-kendo-students-learning-basics.jpg",
          alt: "Youth training",
        },
        {
          src: "/kendo-club-members-celebrating-together.jpg",
          alt: "Club celebration",
        },
        {
          src: "/kendo-seminar-with-visiting-instructor.jpg",
          alt: "Special seminar",
        },
        {
          src: "/kendo-demonstration-for-public-audience.jpg",
          alt: "Public demonstration",
        },
      ],
    },
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden">
          {/* Grid background pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />

          <div className="container mx-auto relative z-10">
            <div className="max-w-3xl">
              <div className="inline-block mb-6 px-4 py-2 rounded-full glass border border-primary/20 animate-pulse-glow">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">Gallery</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-balance text-gradient">
                Moments in the Way of the Sword
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Explore our collection of memorable moments, training sessions, tournaments, and community events that
                showcase the spirit of Kendo in Ghana.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Sections */}
        <section className="py-20 px-6 lg:px-12">
          <div className="container mx-auto space-y-32">
            {galleries.map((gallery, index) => (
              <div key={index} className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                  <h2 className="text-3xl lg:text-4xl font-bold text-gradient">{gallery.title}</h2>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {gallery.images.map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-primary/10 glass hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20"
                    >
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        loading={index === 0 && imgIndex < 2 ? "eager" : "lazy"}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <p className="text-sm font-medium text-foreground">{image.alt}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 lg:px-12">
          <div className="container mx-auto">
            <div className="glass rounded-3xl p-12 lg:p-20 text-center border border-primary/20 relative overflow-hidden animate-pulse-glow">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/30 rounded-tl-3xl" />
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary/30 rounded-tr-3xl" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-primary/30 rounded-bl-3xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/30 rounded-br-3xl" />

              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gradient">Join Our Journey</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Be part of these memorable moments. Find a club near you and start your Kendo journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/clubs"
                  className="px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all hover:scale-105 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50"
                >
                  Find a Club
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 rounded-full border border-primary/30 hover:bg-primary/10 font-medium transition-all hover:scale-105"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
