import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, ExternalLink } from "lucide-react"

const resources = [
  {
    title: "Ghana Kendo Federation Calendar 2025",
    description:
      "Official calendar outlining federation events, trainings, and competitions for 2025.",
    type: "PDF",
    href: "/Documents/Calendar - 2025.pdf",
    category: "Events",
    intendedFor: ["Members", "Instructors", "Officials"],
  },
  {
    title: "Kendo Application Form",
    description:
      "Application form for membership, grading, or participation in Ghana Kendo Federation activities.",
    type: "PDF",
    href: "/Documents/kendo_application_form.pdf",
    category: "Administration",
    intendedFor: ["Members", "Instructors"],
  },
  {
    title: "European Kendo Federation Grading Rules",
    description:
      "Official grading rules as defined by the European Kendo Federation (EKF).",
    type: "PDF",
    href: "/Documents/European Kendo Federation(EKF)grading rules.pdf",
    category: "Grading",
    intendedFor: ["Members", "Instructors", "Officials"],
  },
  {
    title: "Ghana Kendo Federation Constitution",
    description:
      "The governing constitution outlining the structure, mandate, and regulations of the Ghana Kendo Federation.",
    type: "PDF",
    href: "/Documents/Ghana Kendo Federation -Constitution-updated - Dec-2024.pdf",
    category: "Administration",
    intendedFor: ["Officials", "Instructors"],
  },
]

const externalLinks = [
  {
    title: "International Kendo Federation",
    url: "https://www.kendo-fik.org/",
    description: "The global governing body for Kendo",
  },
  {
    title: "All Japan Kendo Federation",
    url: "https://www.kendo.or.jp/en/",
    description: "Japan's national Kendo federation",
  },
  {
    title: "Kendo World Magazine",
    url: "https://kendoworld.com/",
    description: "International Kendo publication and resources",
  },
]

export const metadata = {
  title: "Resources - Ghana Kendo Federation",
  description:
    "Download and view official documents, guides, and external resources for Kendo practitioners",
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
        {/* Page Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="inline-block mb-4 sm:mb-6 px-4 py-2 rounded-full glass border border-primary/20">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Official Federation Resources
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance text-gradient">
            Resources
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            Official documents, forms, and trusted external references approved
            for use by the Ghana Kendo Federation.
          </p>
        </div>

        {/* Documents by Category */}
        <div className="max-w-5xl mb-12 sm:mb-16 md:mb-20 space-y-12 sm:space-y-16 md:space-y-20">
          {["Events", "Administration", "Grading"].map((category) => {
            const categoryResources = resources.filter((r) => r.category === category)
            if (categoryResources.length === 0) return null

            return (
              <section key={category} className="space-y-6 sm:space-y-8">
                <h2
                  className="text-2xl sm:text-3xl font-bold text-gradient"
                  data-aos="fade-right"
                >
                  {category}
                </h2>
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  {categoryResources.map((resource, index) => (
                    <Card
                      key={resource.title}
                      data-aos="fade-up"
                      data-aos-delay={index * 80}
                      className="p-5 sm:p-6 border border-transparent hover:border-primary/20 hover:shadow-xl transition-all duration-300 glass"
                    >
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold mb-2 text-base sm:text-lg">
                            {resource.title}
                          </h3>

                          {/* Intended For badges */}
                          {resource.intendedFor && resource.intendedFor.length > 0 && (
                            <div className="flex gap-2 mb-3 flex-wrap">
                              {resource.intendedFor.map((role) => (
                                <span
                                  key={role}
                                  className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium"
                                >
                                  {role}
                                </span>
                              ))}
                            </div>
                          )}

                          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                            {resource.description}
                          </p>

                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">
                              {resource.type}
                            </span>

                            <Button
                              size="sm"
                              variant="outline"
                              asChild
                              className="gap-2 bg-transparent hover:bg-primary/10"
                            >
                              <a
                                href={resource.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                              >
                                <FileText className="h-4 w-4" />
                                View
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>
            )
          })}
        </div>

        {/* How to Use These Resources */}
        <section className="max-w-4xl mb-12 sm:mb-16 md:mb-24 mx-auto">
          <Card className="p-8 sm:p-10 glass border border-primary/20" data-aos="fade-up">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gradient">
              Using Federation Resources
            </h3>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              All documents provided here are official references of the Ghana Kendo Federation.
              Members and instructors are encouraged to consult the appropriate documents
              before events, grading, or administrative submissions.
            </p>

            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Use the Calendar to plan trainings and competitions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Refer to EKF grading rules before examinations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Submit official forms through federation channels</span>
              </li>
            </ul>
          </Card>
        </section>

        {/* International Affiliations & References */}
        <div className="max-w-5xl">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gradient"
            data-aos="fade-right"
          >
            International Affiliations & References
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {externalLinks.map((link, index) => (
              <Card
                key={link.title}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="p-5 sm:p-6 hover:shadow-lg transition-all duration-300 glass border border-primary/10 hover:border-primary/20"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold mb-1 text-base sm:text-lg">{link.title}</h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      {link.description}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Opens external federation website
                    </p>
                  </div>

                  <Button variant="ghost" size="icon" asChild className="ml-4 shrink-0">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}