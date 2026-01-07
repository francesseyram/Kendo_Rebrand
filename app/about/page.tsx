import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"

export const metadata = {
  title: "About Us - Ghana Kendo Federation",
  description: "Learn about the history, mission, and governance of the Ghana Kendo Federation",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-16 md:py-22 lg:py-24 max-w-6xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 text-balance">
          About the Ghana Kendo Federation
        </h1>

        <div className="prose prose-lg max-w-none">
          <div className="mb-12">
            <Image
              src="/newpic3.jpeg"
              alt="Kendo training in Ghana"
              width={1200}
              height={600}
              className="rounded-xl shadow-2xl w-full"
            />
          </div>

          {/* ABOUT GKF */}
          <h2 className="text-3xl font-bold mb-6 mt-12">About the Federation</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            The Ghana Kendo Federation (GKF) was established in 2024 as a non-profit organization
            dedicated to promoting the practice and spirit of Kendo in alignment with its
            traditional values. The federation serves as the national body responsible for the
            development, regulation, and representation of Kendo in Ghana.
          </p>

          {/* INTRODUCTION OF KENDO – LEFT AS IS */}
          <h2 className="text-3xl font-bold mb-6 mt-12">The Introduction of Kendo to Ghana</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            In 2015, His Excellency Kaoru Yoshimura, the Japanese Ambassador to Ghana, played a pivotal role in introducing 
            the traditional Japanese martial art of Kendo to the Ghanaian community. This initiative was part of a broader 
            effort to promote cultural exchange and foster stronger ties between Japan and Ghana. 
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Kendo, often referred to as "the way of the sword," is a modern martial art deeply rooted in the traditions
            of the samurai. It emphasizes discipline, respect, and the pursuit of self-improvement, values that align
            closely with the philosophies underpinning Japanese culture.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            The introduction of Kendo in Ghana was marked by demonstrations, workshops, and training sessions conducted
            by experienced practitioners, with support from the Japanese Embassy and Ghanaian sports bodies.
          </p>

          {/* OBJECTIVES */}
          <h2 className="text-3xl font-bold mb-6 mt-12">Objectives & Mandate</h2>
          <ul className="space-y-3 mb-8">
            <li className="text-lg text-muted-foreground leading-relaxed">
              1. Foster and develop the practice and ethos of Kendo while organizing and regulating
              its activities both nationally and internationally.
            </li>
            <li className="text-lg text-muted-foreground leading-relaxed">
              2. Represent Ghana at international Kendo events and oversee the promotion of members
              to higher ranks.
            </li>
            <li className="text-lg text-muted-foreground leading-relaxed">
              3. Encourage the highest ethical standards and cultivate self-discipline, character,
              and respect through regular practice.
            </li>
            <li className="text-lg text-muted-foreground leading-relaxed">
              4. Uphold democratic principles in all federation operations and decision-making.
            </li>
          </ul>

          {/* RECOGNITION & AFFILIATION */}
          <h2 className="text-3xl font-bold mb-6 mt-12">Recognition & Affiliations</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            The Ghana Kendo Federation is the sole recognized body for Kendo, Iaido, and Jodo in
            Ghana. It is officially accredited by the Registrar General’s Department and the
            National Sports Authority of Ghana.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            As a newly established federation, the GKF is committed to expanding the practice of
            Kendo nationwide and aims to affiliate with both the European Kendo Federation and the
            International Kendo Federation by 2025.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            The federation currently benefits from training support provided by the Embassy of
            Japan, helping to develop skilled instructors with backgrounds in Judo, Aikido,
            Karate-Do, and Taekwondo.
          </p>

          {/* GOVERNANCE */}
          <h2 className="text-3xl font-bold mb-6 mt-12">Governance</h2>
          <ul className="space-y-2 mb-8">
            <li className="text-lg text-muted-foreground">President & Acting Secretary – Sesinam Don Dzakpasu</li>
            <li className="text-lg text-muted-foreground">Vice President – Dickson Enam Kwame Acolatse</li>
            <li className="text-lg text-muted-foreground">Technical Director – Promise Bruce Adjaho</li>
            <li className="text-lg text-muted-foreground">Deputy Technical Director – Daniel Barnes</li>
            <li className="text-lg text-muted-foreground">Chief Instructor – Russo Thierry Rusman De-Roch</li>
            <li className="text-lg text-muted-foreground">Executive Member & Instructor – Randolph Darku</li>
            <li className="text-lg text-muted-foreground">Executive Member – Wahab El Housseini</li>
            <li className="text-lg text-muted-foreground">Executive Member – Tetteh Ocloo</li>
          </ul>

          {/* WHAT IS KENDO – LEFT AS IS */}
          <h2 className="text-3xl font-bold mb-6 mt-12">What is Kendo?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Kendo is a modern Japanese martial art that descended from traditional swordsmanship
            (kenjutsu) and uses bamboo swords (shinai) and protective armor (bogu). The name Kendo 
            translates to "the way of the sword" in English.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Beyond physical technique, Kendo emphasizes character development, mental discipline, and the pursuit 
            of continuous self-improvement. Practitioners learn not just how to wield a sword, but how to cultivate 
            a strong spirit, respect for others, and integrity in all aspects of life.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}