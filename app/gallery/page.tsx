import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GalleryMasonry } from "@/components/gallery/gallery-masonry"
import { JumpNavigator } from "@/components/gallery/jump-navigator"
import Link from "next/link"
import Image from "next/image"

export default function GalleryPage() {
  const galleries = [{
    title: "Tunis International Open",
    date: "November 28-30, 2025",
    location: "Tunis, Tunisia",
    description: "Ghana's national team competing on the international stage, building exposure and experience in global Kendo competition.",
    signatureImage: 0,
    signatureQuote: "Discipline meets opportunity on the world stage.",
    images: [
      {
        src: "/gallery_images/tunisia/kendo_4.jpeg",
        alt: "Tunis International Open - Image 4",
      },
      {
        src: "/gallery_images/tunisia/kendo_5.jpeg",
        alt: "Tunis International Open - Image 5",
      },
      {
        src: "/gallery_images/tunisia/kendo_6.jpeg",
        alt: "Tunis International Open - Image 6",
      },
      {
        src: "/gallery_images/tunisia/kendo_7.jpeg",
        alt: "Tunis International Open - Image 7",
      },
      {
        src: "/gallery_images/tunisia/kendo_8.jpeg",
        alt: "Tunis International Open - Image 8",
      },
      {
        src: "/gallery_images/tunisia/kendo_9.jpeg",
        alt: "Tunis International Open - Image 9",
      },
      {
        src: "/gallery_images/tunisia/kendo_10.jpeg",
        alt: "Tunis International Open - Image 10",
      },
      {
        src: "/gallery_images/tunisia/kendo_11.jpeg",
        alt: "Tunis International Open - Image 11",
      },
      {
        src: "/gallery_images/tunisia/kendo_12.jpeg",
        alt: "Tunis International Open - Image 12",
      },
      {
        src: "/gallery_images/tunisia/kendo_13.jpeg",
        alt: "Tunis International Open - Image 13",
      },
      {
        src: "/gallery_images/tunisia/kendo_14.jpeg",
        alt: "Tunis International Open - Image 14",
      },
      {
        src: "/gallery_images/tunisia/kendo_15.jpeg",
        alt: "Tunis International Open - Image 15",
      },
    ],
  },
    {
      title: "Saturday Training Sessions",
      date: "Ongoing",
      location: "Various Dojos, Ghana",
      description: "Regular training sessions building technique, discipline, and community bonds among practitioners.",
      signatureImage: 2,
      signatureQuote: "Consistent practice is the foundation of mastery.",
      images: [
        {
          src: "/gallery_images/saturday_training/practice_1.jpeg",
          alt: "Saturday Training Session - Practice 1",
        },
        {
          src: "/gallery_images/saturday_training/practice_2.jpeg",
          alt: "Saturday Training Session - Practice 2",
        },
        {
          src: "/gallery_images/saturday_training/practice_3.jpeg",
          alt: "Saturday Training Session - Practice 3",
        },
        {
          src: "/gallery_images/saturday_training/practice_4.jpeg",
          alt: "Saturday Training Session - Practice 4",
        },
        {
          src: "/gallery_images/saturday_training/practice_5.jpeg",
          alt: "Saturday Training Session - Practice 5",
        },
        {
          src: "/gallery_images/saturday_training/practice_6.jpeg",
          alt: "Saturday Training Session - Practice 6",
        },
      ],
    },
    {
      title: "1st National Inter-Club Kendo Championships",
      date: "June 28, 2025",
      location: "Accra Sports Stadium, Ghana",
      description: "A historic milestone marking Ghana's first nationwide Kendo championship, bringing together clubs, referees, and national selectors.",
      signatureImage: 7,
      signatureQuote: "Final Match – Accra, 2024. Discipline, spirit, unity.",
      images: [
        {
          src: "/gallery_images/1st_national_inter_kendo/newpic1.jpeg",
          alt: "1st National Inter-Club Kendo Championships - Image 1",
        },
        {
          src: "/gallery_images/1st_national_inter_kendo/newpic2.jpeg",
          alt: "1st National Inter-Club Kendo Championships - Image 2",
        },
        {
          src: "/gallery_images/1st_national_inter_kendo/newpic3.jpeg",
          alt: "1st National Inter-Club Kendo Championships - Image 3",
        },
        {
          src: "/gallery_images/1st_national_inter_kendo/newpic4.jpeg",
          alt: "1st National Inter-Club Kendo Championships - Image 4",
        },
        {
          src: "/gallery_images/1st_national_inter_kendo/newpic5.jpeg",
          alt: "1st National Inter-Club Kendo Championships - Image 5",
        },
        {
          src: "/gallery_images/1st_national_inter_kendo/newpic6.jpeg",
          alt: "1st National Inter-Club Kendo Championships - Image 6",
        },
        {
          src: "/gallery_images/1st_national_inter_kendo/newpic7.jpeg",
          alt: "1st National Inter-Club Kendo Championships - Image 7",
        },
        {
          src: "/gallery_images/1st_national_inter_kendo/newpic8.jpeg",
          alt: "Final Match – Accra, 2024",
        },
      ],
    },
    {
      title: "4th Japanese Ambassador Championship",
      date: "March 2025",
      location: "Accra, Ghana",
      description: "Reinforcing cultural and diplomatic ties while offering competition experience to Ghanaian kenshi.",
      signatureImage: 0,
      signatureQuote: "Cultural exchange through the way of the sword.",
      images: [
        {
          src: "/gallery_images/4th_japanese_ambassador/kendo_1.jpg",
          alt: "4th Japanese Ambassador Championship - Image 1",
        },
        {
          src: "/gallery_images/4th_japanese_ambassador/kendo_2.jpg",
          alt: "4th Japanese Ambassador Championship - Image 2",
        },
        {
          src: "/gallery_images/4th_japanese_ambassador/kendo_3.jpg",
          alt: "4th Japanese Ambassador Championship - Image 3",
        },
        {
          src: "/gallery_images/4th_japanese_ambassador/kendo_4.jpg",
          alt: "4th Japanese Ambassador Championship - Image 4",
        },
        {
          src: "/gallery_images/4th_japanese_ambassador/kendo_5.jpg",
          alt: "4th Japanese Ambassador Championship - Image 5",
        },
        {
          src: "/gallery_images/4th_japanese_ambassador/kendo_6.jpg",
          alt: "4th Japanese Ambassador Championship - Image 6",
        },
        {
          src: "/gallery_images/4th_japanese_ambassador/kendo_7.jpg",
          alt: "4th Japanese Ambassador Championship - Image 7",
        },
        {
          src: "/gallery_images/4th_japanese_ambassador/kendo_8.jpg",
          alt: "4th Japanese Ambassador Championship - Image 8",
        },
        {
          src: "/gallery_images/4th_japanese_ambassador/kendo_9.jpg",
          alt: "4th Japanese Ambassador Championship - Image 9",
        },
        {
          src: "/gallery_images/4th_japanese_ambassador/kendo_10.jpg",
          alt: "4th Japanese Ambassador Championship - Image 10",
        },
        {
          src: "/gallery_images/4th_japanese_ambassador/kendo_11.jpg",
          alt: "4th Japanese Ambassador Championship - Image 11",
        },
        {
          src: "/gallery_images/4th_japanese_ambassador/kendo_12.jpg",
          alt: "4th Japanese Ambassador Championship - Image 12",
        },
      ],
    },
    {
      title: "5th Japanese Ambassador Championship",
      date: "November 2025",
      location: "Accra, Ghana",
      description: "Continuing the tradition of Japanese-Ghanaian cultural exchange through competitive Kendo.",
      signatureImage: 0,
      signatureQuote: "Building bridges through martial excellence.",
      images: [
        {
          src: "/gallery_images/5th_japanese_ambasador/kendo_13.jpg",
          alt: "5th Japanese Ambassador Championship - Image 13",
        },
        {
          src: "/gallery_images/5th_japanese_ambasador/kendo_14.jpg",
          alt: "5th Japanese Ambassador Championship - Image 14",
        },
        {
          src: "/gallery_images/5th_japanese_ambasador/kendo_15.jpg",
          alt: "5th Japanese Ambassador Championship - Image 15",
        },
        {
          src: "/gallery_images/5th_japanese_ambasador/kendo_16.jpg",
          alt: "5th Japanese Ambassador Championship - Image 16",
        },
        {
          src: "/gallery_images/5th_japanese_ambasador/kendo_17.jpg",
          alt: "5th Japanese Ambassador Championship - Image 17",
        },
        {
          src: "/gallery_images/5th_japanese_ambasador/kendo_18.jpg",
          alt: "5th Japanese Ambassador Championship - Image 18",
        },
        {
          src: "/gallery_images/5th_japanese_ambasador/kendo_19.jpg",
          alt: "5th Japanese Ambassador Championship - Image 19",
        },
        {
          src: "/gallery_images/5th_japanese_ambasador/kendo_20.jpg",
          alt: "5th Japanese Ambassador Championship - Image 20",
        },
        {
          src: "/gallery_images/5th_japanese_ambasador/kendo_21.jpg",
          alt: "5th Japanese Ambassador Championship - Image 21",
        },
        {
          src: "/gallery_images/5th_japanese_ambasador/kendo_22.jpg",
          alt: "5th Japanese Ambassador Championship - Image 22",
        },
        {
          src: "/gallery_images/5th_japanese_ambasador/kendo_23.jpg",
          alt: "5th Japanese Ambassador Championship - Image 23",
        },
        {
          src: "/gallery_images/5th_japanese_ambasador/kendo_24.jpg",
          alt: "5th Japanese Ambassador Championship - Image 24",
        },
      ],
    },
    {
      title: "Ghana Kendo Federation Referee Seminar",
      date: "May 2025",
      location: "Accra, Ghana",
      description: "Strengthening officiating standards and enhancing competitive structure within the federation.",
      signatureImage: 0,
      signatureQuote: "Excellence in officiating ensures fairness in competition.",
      images: [
        {
          src: "/gallery_images/GKF_referee_seminar/kendo_25.jpg",
          alt: "GKF Referee Seminar - Image 25",
        },
        {
          src: "/gallery_images/GKF_referee_seminar/kendo_27.jpg",
          alt: "GKF Referee Seminar - Image 27",
        },
        {
          src: "/gallery_images/GKF_referee_seminar/kendo_28.jpg",
          alt: "GKF Referee Seminar - Image 28",
        },
        {
          src: "/gallery_images/GKF_referee_seminar/kendo_29.jpg",
          alt: "GKF Referee Seminar - Image 29",
        },
        {
          src: "/gallery_images/GKF_referee_seminar/kendo_31.jpg",
          alt: "GKF Referee Seminar - Image 31",
        },
        {
          src: "/gallery_images/GKF_referee_seminar/kendo_32.jpg",
          alt: "GKF Referee Seminar - Image 32",
        },
      ],
    },
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 text-balance text-gradient">
                Moments in the Way of the Sword
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
                Explore our collection of memorable moments, training sessions, tournaments, and community events that
                showcase the spirit of Kendo in Ghana.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Sections */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-12 relative">
          {/* Floating Jump Navigator */}
          <JumpNavigator galleries={galleries} />

          <div className="container mx-auto space-y-20 sm:space-y-24 md:space-y-32">
            {galleries.map((gallery, index) => {
              const signatureImg = gallery.images[gallery.signatureImage]
              
              return (
                <div
                  key={index}
                  id={`gallery-${index}`}
                  className="space-y-6 sm:space-y-8"
                  data-aos="fade-up"
                  data-aos-delay={index * 120}
                >
                  {/* Title */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                    <h2
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gradient text-center px-2"
                      data-aos="zoom-in"
                    >
                      {gallery.title}
                    </h2>
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                  </div>

                  {/* Context Metadata */}
                  <div className="text-center max-w-2xl mx-auto space-y-2">
                    <p className="text-xs sm:text-sm uppercase tracking-wider text-primary/80">
                      {gallery.date} · {gallery.location}
                    </p>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed px-4">
                      {gallery.description}
                    </p>
                  </div>

                  {/* Cross-page Navigation Links */}
                  <div className="flex justify-center gap-4 text-sm flex-wrap">
                    <Link
                      href="/about#timeline"
                      className="underline text-primary hover:text-primary/80 transition-colors"
                    >
                      View in Timeline
                    </Link>
                    <span className="text-muted-foreground">·</span>
                    <Link
                      href="/news"
                      className="underline text-primary hover:text-primary/80 transition-colors"
                    >
                      Related News
                    </Link>
                  </div>

                  {/* Signature Moment */}
                  {signatureImg && (
                    <div className="relative rounded-2xl overflow-hidden glass border border-primary/20 hover:border-primary/40 transition-all group">
                      <div className="relative aspect-[16/9] sm:aspect-[21/9]">
                        <Image
                          src={signatureImg.src}
                          alt={signatureImg.alt}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          priority={index === 0}
                          sizes="(max-width: 768px) 100vw, 90vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                          <p className="text-sm sm:text-base text-white italic max-w-2xl">
                            "{gallery.signatureQuote}"
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* All Gallery Images */}
                  <GalleryMasonry images={gallery.images} />
                </div>
              )
            })}
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
