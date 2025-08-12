import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Users,
  Heart,
  MessageCircle,
  Handshake,
  Network,
  CheckCircle,
  Zap,
  Crown,
  Megaphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CommunityBuilding() {
  const initiatives = [
    {
      icon: MessageCircle,
      title: "Discord Community",
      description: "24/7 support and networking hub with 1000+ active members",
      members: "1000+",
      status: "Active",
    },
    {
      icon: Handshake,
      title: "Mentorship Program",
      description:
        "Pair experienced developers with newcomers for guided learning",
      members: "200+",
      status: "Growing",
    },
    {
      icon: Network,
      title: "Regional Chapters",
      description: "Local communities across major Nigerian cities",
      members: "500+",
      status: "Expanding",
    },
    {
      icon: Crown,
      title: "Ambassador Program",
      description: "Train community leaders to spread Web3 education",
      members: "50+",
      status: "Elite",
    },
  ];

  const communityValues = [
    {
      title: "Inclusivity",
      description: "Welcoming environment for all backgrounds and skill levels",
      icon: Heart,
    },
    {
      title: "Knowledge Sharing",
      description: "Open source approach to learning and development",
      icon: Users,
    },
    {
      title: "Mutual Support",
      description: "Members helping members succeed in their Web3 journey",
      icon: Handshake,
    },
    {
      title: "Innovation",
      description: "Encouraging creative solutions and breakthrough ideas",
      icon: Zap,
    },
  ];

  const programs = [
    {
      name: "Study Groups",
      description: "Weekly collaborative learning sessions on specific topics",
      frequency: "Weekly",
      participants: "15-20 per group",
    },
    {
      name: "Code Reviews",
      description: "Peer-to-peer code review sessions to improve code quality",
      frequency: "Bi-weekly",
      participants: "8-12 per session",
    },
    {
      name: "Tech Talks",
      description:
        "Expert presentations on cutting-edge blockchain technologies",
      frequency: "Monthly",
      participants: "100+ attendees",
    },
    {
      name: "Hackathons",
      description: "Competitive coding events to build innovative solutions",
      frequency: "Quarterly",
      participants: "50-100 developers",
    },
  ];

  const impact = [
    { metric: "1,000+", label: "Community Members" },
    { metric: "15", label: "Regional Chapters" },
    { metric: "50+", label: "Monthly Events" },
    { metric: "95%", label: "Member Satisfaction" },
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
              <span className="text-xl font-bold bg-brand-gradient bg-clip-text text-transparent">
                HFUTUREHUB
              </span>
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
              <Users className="w-3 h-3 mr-1" />
              Community Focus
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Building Stronger Communities
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto">
              Connect, collaborate, and grow together. Our community building
              initiatives create lasting networks that support Web3 careers and
              foster innovation across Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-brand-purple hover:bg-white/90"
              >
                <Heart className="mr-2 h-4 w-4" />
                Join Our Community
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Start a Chapter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Overview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why <span className="text-brand-green">Community</span> Matters
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                In the rapidly evolving Web3 space, having a strong support
                network is crucial. Our community building initiatives ensure no
                one learns alone, creating bonds that last beyond any single
                program or course.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-green" />
                  <span>Peer-to-peer learning and support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-green" />
                  <span>Industry networking opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-green" />
                  <span>Collaborative project development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-green" />
                  <span>Career advancement through connections</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {communityValues.map((value, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow text-center"
                >
                  <value.icon className="h-8 w-8 text-brand-green mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-xs text-muted-foreground">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Initiatives */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our{" "}
              <span className="text-brand-purple">Community Initiatives</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Multiple touchpoints to connect, learn, and grow together in the
              Web3 ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-brand-gradient">
                        <initiative.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">
                        {initiative.title}
                      </CardTitle>
                    </div>
                    <Badge
                      variant={
                        initiative.status === "Active"
                          ? "default"
                          : initiative.status === "Growing"
                            ? "secondary"
                            : initiative.status === "Elite"
                              ? "destructive"
                              : "outline"
                      }
                    >
                      {initiative.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">
                    {initiative.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Members
                    </span>
                    <span className="font-semibold text-brand-purple">
                      {initiative.members}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Programs */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Regular{" "}
              <span className="text-brand-green">Community Programs</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Structured activities that bring our community together for
              learning and collaboration
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{program.name}</CardTitle>
                  <p className="text-muted-foreground">{program.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Frequency:
                      </span>
                      <span className="text-sm font-medium">
                        {program.frequency}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Participants:
                      </span>
                      <span className="text-sm font-medium">
                        {program.participants}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-16 lg:py-24 bg-brand-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Community Impact
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto text-white">
              Measurable results from our community building efforts
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            {impact.map((item, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {item.metric}
                </div>
                <p className="opacity-90">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Involved */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get <span className="text-brand-purple">Involved</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to contribute to and benefit from our growing
              community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-brand-purple mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Join as Member</h3>
              <p className="text-muted-foreground mb-6">
                Connect with peers, access resources, and participate in
                community events
              </p>
              <Button className="bg-brand-purple hover:bg-brand-purple-dark text-white">
                Join Community
              </Button>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <Crown className="h-12 w-12 text-brand-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Become Ambassador</h3>
              <p className="text-muted-foreground mb-6">
                Lead initiatives, mentor newcomers, and shape the community's
                future
              </p>
              <Button
                variant="outline"
                className="border-brand-green text-brand-green hover:bg-brand-green/5"
              >
                Apply Now
              </Button>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <Megaphone className="h-12 w-12 text-brand-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Start Chapter</h3>
              <p className="text-muted-foreground mb-6">
                Bring HFUTURETECH to your city and build local Web3 communities
              </p>
              <Button
                variant="outline"
                className="border-brand-blue text-brand-blue hover:bg-brand-blue/5"
              >
                Start Chapter
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-brand-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Together?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join a community that's shaping the future of Web3 in Africa, one
              connection at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-brand-purple hover:bg-white/90"
              >
                <Heart className="mr-2 h-4 w-4" />
                Join Our Community
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Network className="mr-2 h-4 w-4" />
                Connect with Leaders
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
            Growing Together, Building the Future
          </p>
        </div>
      </footer>
    </div>
  );
}
