import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, ExternalLink } from "lucide-react"

const resources = [
  {
    title: "Ghana Kendo Federation Constitution",
    description: "Official governing document outlining the federation's structure, rules, and regulations.",
    type: "PDF",
    size: "2.5 MB",
  },
  {
    title: "Beginner's Guide to Kendo",
    description: "Comprehensive introduction to Kendo principles, etiquette, and basic techniques.",
    type: "PDF",
    size: "4.1 MB",
  },
  {
    title: "Training Schedule Template",
    description: "Template for clubs to organize and plan their training sessions.",
    type: "PDF",
    size: "1.2 MB",
  },
  {
    title: "Competition Rules & Regulations",
    description: "Official rules for Kendo competitions sanctioned by the federation.",
    type: "PDF",
    size: "3.8 MB",
  },
  {
    title: "Equipment Care Guide",
    description: "Best practices for maintaining and caring for your Kendo equipment.",
    type: "PDF",
    size: "2.0 MB",
  },
  {
    title: "Kata Reference Manual",
    description: "Detailed guide to Kendo kata with illustrations and instructions.",
    type: "PDF",
    size: "5.5 MB",
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
  description: "Download guides, documents, and access helpful resources for Kendo practitioners",
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Resources</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Access important documents, guides, and helpful resources for your Kendo journey.
          </p>
        </div>

        <div className="max-w-5xl">
          <h2 className="text-3xl font-bold mb-8">Downloads</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {resources.map((resource) => (
              <Card key={resource.title} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-kendo-red/10 rounded-lg flex items-center justify-center shrink-0">
                    <FileText className="h-6 w-6 text-kendo-red" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold mb-2 text-lg">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{resource.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {resource.type} • {resource.size}
                      </span>
                      <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-8">External Resources</h2>
          <div className="space-y-4">
            {externalLinks.map((link) => (
              <Card key={link.title} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold mb-1">{link.title}</h3>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                  </div>
                  <Button variant="ghost" size="icon" asChild>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
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
