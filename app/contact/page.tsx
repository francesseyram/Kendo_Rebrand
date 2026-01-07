"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-background via-background/95 to-background py-32 md:py-40">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Get in touch with us
            </h1>
            <div className="w-40 h-0.5 bg-primary mx-auto" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Form and Map */}
          <div className="lg:col-span-2 space-y-8">
            {/* Google Maps */}
            <Card className="p-0 overflow-hidden">
              <div className="w-full h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.8361082789584!2d-0.17915052452556374!3d5.591223033293497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9aefb8485fa7%3A0xc0ff6bbede1c6ad5!2sAviation%20Social%20Centre!5e0!3m2!1sen!2sgh!4v1752323253741!5m2!1sen!2sgh"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </Card>

            {/* Contact Form */}
            <Card className="p-8">
              <form 
                action="https://formsubmit.co/info@kendoghana.com" 
                method="POST"
                className="space-y-6"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="/contact?success=true" />
                
                <div className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="text"
                      name="contact"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto uppercase">
                  Send
                </Button>
              </form>
            </Card>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Image
                    src="/Logos/kendo_logo.png"
                    alt="Ghana Kendo Federation"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold mb-4 text-lg">Info</h3>
                  
                  <div className="flex items-start gap-4 mb-4">
                    <Phone className="h-5 w-5 text-foreground mt-0.5 shrink-0" />
                    <div>
                      <p className="text-foreground">+233 266 000 201</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 mb-4">
                    <MapPin className="h-5 w-5 text-foreground mt-0.5 shrink-0" />
                    <div>
                      <p className="text-foreground">Aviation social center</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-foreground mt-0.5 shrink-0" />
                    <div>
                      <a 
                        href="mailto:Info@kendoghana.com" 
                        className="text-foreground hover:text-primary"
                      >
                        Info@kendoghana.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <Clock className="h-5 w-5 text-foreground mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-bold mb-2 text-lg">Working Hours</h3>
                  <p className="text-muted-foreground">(By Appointment)</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
