import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Users,
  Coffee,
  Handshake,
  CheckCircle,
  Zap,
  Camera,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function IRLMeetups() {
  const upcomingEvents = [
    {
      title: "Lagos Web3 Workshop",
      date: "March 15, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Lagos Tech Hub, Victoria Island",
      attendees: 85,
      maxAttendees: 100,
      type: "Workshop",
      status: "Open",
    },
    {
      title: "Abuja Blockchain Networking",
      date: "March 22, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Abuja Innovation Center",
      attendees: 45,
      maxAttendees: 60,
      type: "Networking",
      status: "Open",
    },
    {
      title: "Port Harcourt DeFi Meetup",
      date: "March 29, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "PH Tech Park",
      attendees: 32,
      maxAttendees: 50,
      type: "Meetup",
      status: "Open",
    },
  ];

  const pastEvents = [
    {
      title: "Smart Contract Bootcamp - Lagos",
      date: "February 10, 2024",
      attendees: 120,
      photos: 45,
      highlights: [
        "50+ smart contracts deployed",
        "3 winning projects",
        "Industry expert speakers",
      ],
    },
    {
      title: "Women in Web3 Conference",
      date: "January 20, 2024",
      attendees: 200,
      photos: 78,
      highlights: [
        "40% female attendance",
        "12 female speakers",
        "Mentorship program launch",
      ],
    },
    {
      title: "DeFi Developer Hackathon",
      date: "December 15, 2023",
      attendees: 80,
      photos: 32,
      highlights: [
        "48-hour coding challenge",
        "$5000 in prizes",
        "3 startup ideas born",
      ],
    },
  ];

  const eventTypes = [
    {
      icon: Coffee,
      title: "Casual Meetups",
      description:
        "Informal networking sessions to connect and share experiences",
      frequency: "Bi-weekly",
    },
    {
      icon: Users,
      title: "Technical Workshops",
      description: "Hands-on coding sessions and skill development workshops",
      frequency: "Monthly",
    },
    {
      icon: Handshake,
      title: "Networking Events",
      description:
        "Professional networking with industry leaders and investors",
      frequency: "Monthly",
    },
    {
      icon: Camera,
      title: "Conference & Summits",
      description:
        "Large-scale events with keynote speakers and panel discussions",
      frequency: "Quarterly",
    },
  ];

  const cities = [
    { name: "Lagos", events: 24, members: 450 },
    { name: "Abuja", events: 18, members: 320 },
    { name: "Port Harcourt", events: 12, members: 180 },
    { name: "Kano", events: 8, members: 120 },
    { name: "Ibadan", events: 10, members: 150 },
    { name: "Enugu", events: 6, members: 90 },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}

      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg flex items-center justify-center">
                <img src="https://res.cloudinary.com/dwzebmtzq/image/upload/v1754947289/IMG-20250811-WA0047-removebg-preview_chrb8l.png" />
              </div>
              <Link to="/">
                <span className="text-xl font-bold bg-brand-gradient bg-clip-text text-transparent">
                  HFUTUREHUB
                </span>
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#mission"
                className="text-sm font-medium hover:text-brand-purple transition-colors"
              >
                Mission
              </a>
              <a
                href="#achievements"
                className="text-sm font-medium hover:text-brand-purple transition-colors"
              >
                Achievements
              </a>
              <a
                href="#impact"
                className="text-sm font-medium hover:text-brand-purple transition-colors"
              >
                Impact
              </a>
              <Button className="bg-brand-gradient hover:opacity-90 text-white">
                Support Us
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-brand-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto text-white">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              <MapPin className="w-3 h-3 mr-1" />
              In-Person Events
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              IRL Meetups & Events
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto">
              Connect face-to-face with Nigeria's Web3 community. Join
              workshops, networking events, and conferences that bring
              blockchain enthusiasts together in real life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-brand-purple hover:bg-white/90"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Find Events Near You
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Host an Event
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Upcoming <span className="text-brand-purple">Events</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join us at these upcoming IRL events across Nigeria
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant={
                        event.type === "Workshop"
                          ? "default"
                          : event.type === "Networking"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {event.type}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-brand-green border-brand-green"
                    >
                      {event.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Attendees</span>
                      <span className="font-medium">
                        {event.attendees}/{event.maxAttendees}
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-brand-gradient h-2 rounded-full"
                        style={{
                          width: `${(event.attendees / event.maxAttendees) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>

                  <Button className="w-full bg-brand-purple hover:bg-brand-purple-dark text-white">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Types of <span className="text-brand-green">Events</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We host various types of events to cater to different learning
              styles and networking preferences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventTypes.map((type, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="p-3 rounded-full bg-brand-gradient w-fit mx-auto mb-4">
                    <type.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{type.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {type.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline">{type.frequency}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Highlights */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Past Event <span className="text-brand-purple">Highlights</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Look back at some of our successful community gatherings
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{event.date}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-brand-purple">
                        {event.attendees}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Attendees
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-brand-green">
                        {event.photos}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Photos
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Event Highlights:</h4>
                    <ul className="space-y-1">
                      {event.highlights.map((highlight, highlightIndex) => (
                        <li
                          key={highlightIndex}
                          className="flex items-center space-x-2 text-sm"
                        >
                          <CheckCircle className="h-3 w-3 text-brand-green flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-brand-purple text-brand-purple hover:bg-brand-purple/5"
                  >
                    <Camera className="mr-2 h-4 w-4" />
                    View Photos
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cities & Locations */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              We're in Your <span className="text-brand-green">City</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              HFUTURETECH events are happening across Nigeria. Find or start a
              chapter in your city.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="p-3 rounded-full bg-brand-green/10 w-fit mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-brand-green" />
                  </div>
                  <CardTitle className="text-xl">{city.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-brand-purple">
                        {city.events}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Events Hosted
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-brand-green">
                        {city.members}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Members
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-brand-green text-brand-green hover:bg-brand-green/5"
                  >
                    Join {city.name} Chapter
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Host an Event */}
      <section className="py-16 lg:py-24 bg-brand-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to Host an Event?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Bring the HFUTURETECH community to your city. We provide support,
              resources, and guidance to help you organize successful Web3
              events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-brand-purple hover:bg-white/90"
              >
                <Users className="mr-2 h-4 w-4" />
                Become Event Host
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <MapPin className="mr-2 h-4 w-4" />
                Start New Chapter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link to="/" className="inline-flex items-center space-x-2 mb-4">
            <div className="h-6 w-6 rounded-lg bg-brand-gradient flex items-center justify-center">
              <Zap className="h-3 w-3 text-white" />
            </div>
            <span className="font-bold bg-brand-gradient bg-clip-text text-transparent">
              HFUTURETECH
            </span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Connecting Communities, Creating Opportunities
          </p>
        </div>
      </footer>
    </div>
  );
}
