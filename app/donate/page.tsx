import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { PaystackPaymentButton } from "@/components/donate/paystack-payment-button"
import { CustomAmountForm } from "@/components/donate/custom-amount-form"
import Link from "next/link"

const impactAreas = [
  {
    title: "Grassroots Training",
    description: "Support beginner programs, dojo maintenance, and youth outreach across Ghana.",
    amount: "₵50",
  },
  {
    title: "Athlete Development",
    description: "Help fund equipment, national training camps, and tournament participation.",
    amount: "₵200",
  },
  {
    title: "Legacy Support",
    description: "Sustain the federation's long-term mission and international representation.",
    amount: "₵500",
  },
]

export const metadata = {
  title: "Donate - Ghana Kendo Federation",
  description: "Support the growth of Kendo in Ghana through your generous donation",
}

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* ACT I — WHY THIS MATTERS (Emotion First) */}
      <div className="relative py-20 sm:py-24 md:py-32 border-b border-border/60 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <p className="uppercase tracking-widest text-xs sm:text-sm text-muted-foreground mb-4" data-aos="fade-up">
            Preserve the Way of the Sword
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance text-gradient" data-aos="fade-up" data-aos-delay="100">
            Support the Growth of Kendo in Ghana
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            Your contribution helps train youth, provide equipment, and sustain the discipline, character, and tradition of Kendo for the next generation.
          </p>
        </div>
      </div>

      {/* ACT II — IMPACT, NOT TIERS */}
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {impactAreas.map((area, index) => (
            <Card
              key={area.title}
              className="p-6 sm:p-8 glass border border-primary/10 hover:border-primary/30 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-xl font-semibold mb-4 text-gradient">{area.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">
                {area.description}
              </p>
              <PaystackPaymentButton
                amount={parseFloat(area.amount.replace("₵", ""))}
                label={`Donate ${area.amount}`}
                description={area.title}
                className="w-full bg-primary hover:bg-primary/90"
              />
            </Card>
          ))}
        </div>

        {/* ACT III — SIMPLE, RESPECTFUL DONATION ACTION */}
        <Card className="p-8 sm:p-10 mt-16 sm:mt-20 md:mt-24 max-w-3xl mx-auto text-center glass border border-primary/10" data-aos="fade-up">
          <h3 className="text-2xl font-semibold mb-4 text-gradient">Make a Custom Contribution</h3>
          <p className="text-muted-foreground mb-8 leading-relaxed text-sm sm:text-base">
            Every contribution, regardless of amount, strengthens the future of Kendo in Ghana.
          </p>
          <CustomAmountForm />
        </Card>

        {/* Trust Signal */}
        <p className="text-xs text-muted-foreground text-center mt-12 sm:mt-16 max-w-2xl mx-auto leading-relaxed" data-aos="fade-up">
          Ghana Kendo Federation is a recognized sporting body. Donations are used solely for training, development, and federation activities.
        </p>

        {/* Corporate Sponsorship — Quiet Link */}
        <p className="mt-8 text-center text-xs sm:text-sm text-muted-foreground" data-aos="fade-up">
          Interested in institutional or corporate sponsorship?{" "}
          <Link href="/contact" className="underline hover:text-primary transition-colors">
            Contact the Federation
          </Link>
        </p>
      </div>

      <Footer />
    </div>
  )
}
