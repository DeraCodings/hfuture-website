import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const events = [
  {
    title: "Web3 Builders Bootcamp Showcase",
    date: "Nov 30, 2025",
    time: "10:00 AM WAT",
    location: "Lagos, Nigeria",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop",
    description:
      "A showcase of projects from our latest Web3 bootcamp cohort with demos, networking and mentorship.",
    lumaEventId: "evt-YiuUX15qW2gcm4T",
  },
  {
    title: "Intro to Smart Contracts Workshop",
    date: "Dec 14, 2025",
    time: "2:00 PM WAT",
    location: "Online",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
    description:
      "Hands-on session covering Solidity basics and security best practices for beginners.",
    lumaEventId: "evt-YiuUX15qW2gcm4T",
  },
  {
    title: "Community Meetup: Web3 Careers",
    date: "Jan 10, 2026",
    time: "5:30 PM WAT",
    location: "Abuja, Nigeria",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop",
    description:
      "Panel and open Q&A with mentors on pathways into blockchain careers across Africa.",
    lumaEventId: "evt-YiuUX15qW2gcm4T",
  },
];

export default function Events() {
  return (
    <>
      <SEO
        title="Events | HFutureHub"
        description="Upcoming programs and events."
      />
      <main className="py-16 lg:py-24">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-10 text-center">
            <Badge className="mb-4 bg-brand-green-light text-brand-green border-brand-green/20">
              Upcoming Programs
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Events</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse and register for our upcoming bootcamps, workshops and
              community meetups.
            </p>
          </header>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((ev) => (
              <Card
                key={ev.title}
                className="overflow-hidden border-0 shadow-lg"
              >
                <div className="relative h-48">
                  <img
                    src={ev.image}
                    alt={ev.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{ev.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {ev.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> {ev.date} · {ev.time}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {ev.location}
                    </span>
                  </div>

                  <div className="pt-2">
                    <a
                      href={`https://luma.com/event/${ev.lumaEventId}`}
                      className="luma-checkout--button inline-flex items-center justify-center rounded-md bg-brand-purple px-4 py-2 text-white hover:brightness-110 transition"
                      data-luma-action="checkout"
                      data-luma-event-id={ev.lumaEventId}
                      target="_blank"
                    >
                      Register for Event
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
