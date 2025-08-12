import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  Users,
  Clock,
  Award,
  Target,
  CheckCircle,
  Zap,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function BlockchainEducation() {
  const curriculumModules = [
    {
      week: "Week 1-2",
      title: "Blockchain Fundamentals",
      topics: [
        "What is Blockchain?",
        "Decentralization Concepts",
        "Cryptocurrency Basics",
        "Bitcoin & Ethereum Overview",
      ],
    },
    {
      week: "Week 3-4",
      title: "Smart Contracts",
      topics: [
        "Introduction to Smart Contracts",
        "Solidity Basics",
        "Contract Deployment",
        "Testing Smart Contracts",
      ],
    },
    {
      week: "Week 5-6",
      title: "DeFi Protocols",
      topics: [
        "Decentralized Finance",
        "AMMs & Liquidity Pools",
        "Yield Farming",
        "Protocol Governance",
      ],
    },
    {
      week: "Week 7-8",
      title: "NFTs & Web3",
      topics: [
        "Non-Fungible Tokens",
        "Metadata Standards",
        "Web3 Integration",
        "dApp Development",
      ],
    },
  ];

  const benefits = [
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description:
        "8-week structured program covering blockchain fundamentals to advanced concepts",
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description:
        "Learn from experienced blockchain developers and industry professionals",
    },
    {
      icon: Target,
      title: "Practical Projects",
      description:
        "Build real-world blockchain applications and smart contracts",
    },
    {
      icon: Award,
      title: "Certification",
      description:
        "Receive verified certificates upon successful program completion",
    },
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
              <BookOpen className="w-3 h-3 mr-1" />
              Flagship Program
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Blockchain Education Program
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto">
              Master the fundamentals of blockchain technology through our
              comprehensive 8-week program. From basic concepts to advanced
              smart contract development, build the skills needed for a Web3
              career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-brand-purple hover:bg-white/90"
              >
                Enroll Now - Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                View Curriculum
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Our{" "}
                <span className="text-brand-purple">Blockchain Education</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our blockchain education program is specifically designed for
                beginners from underrepresented regions. We provide
                comprehensive training that bridges the knowledge gap and
                prepares you for sustainable careers in the Web3 ecosystem.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-green" />
                  <span>100% Free for all participants</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-green" />
                  <span>Beginner-friendly curriculum</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-green" />
                  <span>Hands-on practical projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-green" />
                  <span>Industry-recognized certification</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow"
                >
                  <benefit.icon className="h-8 w-8 text-brand-purple mb-4" />
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Program <span className="text-brand-purple">Curriculum</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our 8-week structured curriculum takes you from blockchain basics
              to advanced smart contract development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {curriculumModules.map((module, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="outline"
                      className="text-brand-purple border-brand-purple"
                    >
                      {module.week}
                    </Badge>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-xl">{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li
                        key={topicIndex}
                        className="flex items-center space-x-2"
                      >
                        <CheckCircle className="h-4 w-4 text-brand-green flex-shrink-0" />
                        <span className="text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Stats */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-brand-purple mb-2">
                500+
              </div>
              <p className="text-muted-foreground">Graduates</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-purple mb-2">8</div>
              <p className="text-muted-foreground">Weeks Duration</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-purple mb-2">
                95%
              </div>
              <p className="text-muted-foreground">Completion Rate</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-purple mb-2">
                Free
              </div>
              <p className="text-muted-foreground">Program Cost</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-brand-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Blockchain Journey?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join hundreds of others who have launched successful Web3 careers
              through our program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-brand-purple hover:bg-white/90"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Apply Now - Next Cohort
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Download Syllabus
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
            Empowering Africa's Web3 Future Through Education
          </p>
        </div>
      </footer>
    </div>
  );
}
