import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"

export const metadata = {
  title: "About Us - Ghana Kendo Federation",
  description: "Learn about the history and mission of the Ghana Kendo Federation",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 text-balance">About the Ghana Kendo Federation</h1>

        <div className="prose prose-lg max-w-none">
          <div className="mb-12">
            <Image
              src="/kendo-training-in-ghana-with-traditional-armor.jpg"
              alt="Kendo training in Ghana"
              width={1200}
              height={600}
              className="rounded-xl shadow-2xl w-full"
            />
          </div>

          <h2 className="text-3xl font-bold mb-6 mt-12">The Introduction of Kendo to Ghana</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            In 2015, His Excellency Kaoru Yoshimura, the Japanese Ambassador to Ghana, played a pivotal role in
            introducing the traditional Japanese martial art of Kendo to the Ghanaian community. This initiative was
            part of a broader effort to promote cultural exchange and foster stronger ties between Japan and Ghana.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Kendo, often referred to as "the way of the sword," is a modern martial art deeply rooted in the traditions
            of the samurai. It emphasizes discipline, respect, and the pursuit of self-improvement, values that align
            closely with the philosophies underpinning Japanese culture. Ambassador Yoshimura's initiative aimed to
            share these principles with the Ghanaian people, offering them a new avenue for physical activity, personal
            development, and intercultural understanding.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            The introduction of Kendo in Ghana was marked by a series of events, including demonstrations, workshops,
            and training sessions conducted by experienced Kendo practitioners. These activities were supported by the
            Japanese Embassy in collaboration with Ghana Karate Federation, Ghana Judo Federation and the National
            Sports Authority of Ghana. The events attracted significant interest, particularly among the youth, who were
            inspired by the combination of physical rigor and mental discipline inherent in the practice of Kendo.
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-12">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            The Ghana Kendo Federation is dedicated to promoting and developing the practice of Kendo throughout Ghana.
            We strive to:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="text-lg text-muted-foreground leading-relaxed">
              Foster discipline, respect, and personal growth through traditional Kendo training
            </li>
            <li className="text-lg text-muted-foreground leading-relaxed">
              Provide accessible training opportunities across all regions of Ghana
            </li>
            <li className="text-lg text-muted-foreground leading-relaxed">
              Promote cultural exchange between Ghana and Japan
            </li>
            <li className="text-lg text-muted-foreground leading-relaxed">
              Support our member clubs with resources, training, and guidance
            </li>
            <li className="text-lg text-muted-foreground leading-relaxed">
              Organize competitions and events to showcase Kendo excellence
            </li>
          </ul>

          <h2 className="text-3xl font-bold mb-6 mt-12">What is Kendo?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Kendo is a modern Japanese martial art that descended from traditional swordsmanship (kenjutsu) and uses
            bamboo swords (shinai) and protective armor (bogu). The name Kendo translates to "the way of the sword" in
            English.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Beyond physical technique, Kendo emphasizes character development, mental discipline, and the pursuit of
            continuous self-improvement. Practitioners learn not just how to wield a sword, but how to cultivate a
            strong spirit, respect for others, and integrity in all aspects of life.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}
