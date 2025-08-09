import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Code, Terminal, Rocket, Globe, Target, CheckCircle, Zap, Github, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Web3Development() {
  const techStack = [
    { name: "Solidity", description: "Smart contract development language", level: "Core" },
    { name: "React", description: "Frontend development framework", level: "Core" },
    { name: "Web3.js/Ethers.js", description: "Blockchain interaction libraries", level: "Core" },
    { name: "Hardhat", description: "Ethereum development environment", level: "Tools" },
    { name: "IPFS", description: "Decentralized storage solution", level: "Storage" },
    { name: "MetaMask", description: "Wallet integration", level: "Integration" }
  ];

  const projects = [
    {
      title: "DeFi Token Exchange",
      description: "Build a decentralized exchange with AMM functionality",
      tech: ["Solidity", "React", "Web3.js"],
      difficulty: "Advanced"
    },
    {
      title: "NFT Marketplace", 
      description: "Create a full-featured NFT trading platform",
      tech: ["Solidity", "IPFS", "React"],
      difficulty: "Intermediate"
    },
    {
      title: "DAO Governance",
      description: "Implement decentralized governance mechanisms",
      tech: ["Solidity", "Hardhat", "React"],
      difficulty: "Advanced"
    },
    {
      title: "Web3 Social Platform",
      description: "Decentralized social media with token rewards",
      tech: ["Solidity", "React", "IPFS"],
      difficulty: "Expert"
    }
  ];

  const learningPath = [
    {
      phase: "Foundation",
      duration: "Weeks 1-3",
      focus: "Blockchain basics, Solidity fundamentals, development environment setup"
    },
    {
      phase: "Development",
      duration: "Weeks 4-7", 
      focus: "Smart contract development, testing, security best practices"
    },
    {
      phase: "Integration",
      duration: "Weeks 8-10",
      focus: "Frontend integration, Web3 libraries, wallet connections"
    },
    {
      phase: "Deployment",
      duration: "Weeks 11-12",
      focus: "Mainnet deployment, optimization, production considerations"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-brand-gradient flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <Link to="/" className="text-xl font-bold bg-brand-gradient bg-clip-text text-transparent">
                HFUTURETECH
              </Link>
            </div>
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-brand-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto text-white">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              <Code className="w-3 h-3 mr-1" />
              Advanced Program
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Web3 Development Bootcamp
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto">
              Master full-stack Web3 development through intensive hands-on training. Build production-ready 
              decentralized applications and smart contracts that solve real-world problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-brand-purple hover:bg-white/90">
                <Rocket className="mr-2 h-4 w-4" />
                Start Building
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Projects
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
                Build the <span className="text-brand-purple">Future of Web</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our intensive 12-week Web3 development program transforms beginners into skilled blockchain 
                developers. Through project-based learning and expert mentorship, you'll master the complete 
                Web3 development stack.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-green" />
                  <span>12-week intensive bootcamp</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-green" />
                  <span>4+ real-world projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-green" />
                  <span>1-on-1 mentorship</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-green" />
                  <span>Job placement assistance</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="p-6 border-l-4 border-l-brand-purple">
                <div className="flex items-center space-x-3 mb-3">
                  <Terminal className="h-6 w-6 text-brand-purple" />
                  <h3 className="font-semibold">Hands-on Learning</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Learn by building real dApps from day one. No theoretical fluff, just practical coding experience.
                </p>
              </Card>
              <Card className="p-6 border-l-4 border-l-brand-green">
                <div className="flex items-center space-x-3 mb-3">
                  <Globe className="h-6 w-6 text-brand-green" />
                  <h3 className="font-semibold">Industry Mentors</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Get guidance from working professionals at top Web3 companies and DeFi protocols.
                </p>
              </Card>
              <Card className="p-6 border-l-4 border-l-brand-blue">
                <div className="flex items-center space-x-3 mb-3">
                  <Target className="h-6 w-6 text-brand-blue" />
                  <h3 className="font-semibold">Career Support</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Portfolio development, interview prep, and direct connections to hiring partners.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Master the <span className="text-brand-purple">Web3 Tech Stack</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn industry-standard tools and frameworks used by top Web3 companies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{tech.name}</CardTitle>
                    <Badge variant="outline" className={
                      tech.level === 'Core' ? 'border-brand-purple text-brand-purple' :
                      tech.level === 'Tools' ? 'border-brand-green text-brand-green' :
                      tech.level === 'Storage' ? 'border-brand-blue text-brand-blue' :
                      'border-muted-foreground text-muted-foreground'
                    }>
                      {tech.level}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your <span className="text-brand-green">Learning Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Structured 12-week program designed to take you from beginner to job-ready developer
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningPath.map((phase, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-brand-gradient text-white flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <Badge variant="outline">{phase.duration}</Badge>
                  </div>
                  <CardTitle className="text-xl">{phase.phase}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{phase.focus}</p>
                </CardContent>
                {index < learningPath.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-brand-gradient"></div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Portfolio */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Build Your <span className="text-brand-purple">Project Portfolio</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Create impressive dApps that showcase your skills to potential employers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge variant={
                      project.difficulty === 'Advanced' ? 'destructive' :
                      project.difficulty === 'Expert' ? 'default' :
                      'secondary'
                    }>
                      {project.difficulty}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-brand-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Launch Your Web3 Development Career
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join the next generation of blockchain developers building the decentralized future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-brand-purple hover:bg-white/90">
                <Github className="mr-2 h-4 w-4" />
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Layers className="mr-2 h-4 w-4" />
                View Alumni Projects
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
            Building Tomorrow's Blockchain Developers Today
          </p>
        </div>
      </footer>
    </div>
  );
}
