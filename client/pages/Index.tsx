import { ArrowRight, Users, Globe, MapPin, Target, Award, TrendingUp, BookOpen, Code, Zap, Camera, Calendar, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Index() {
  const achievements = [
    {
      icon: Users,
      number: "500+",
      label: "Individuals Onboarded",
      description: "Through comprehensive free training programs"
    },
    {
      icon: Globe,
      number: "Multiple",
      label: "Global Partnerships",
      description: "With leading blockchain networks worldwide"
    },
    {
      icon: TrendingUp,
      number: "Ongoing",
      label: "IRL Meetups",
      description: "Building strong community connections"
    }
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Education First",
      description: "Comprehensive blockchain and Web3 training programs designed for beginners"
    },
    {
      icon: Code,
      title: "Hands-on Development",
      description: "Practical coding experience with real-world blockchain projects"
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Foster inclusive communities of Web3 builders across Nigeria"
    },
    {
      icon: Target,
      title: "Sustainable Impact",
      description: "Create long-term contributors to global blockchain ecosystems"
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
              <span className="text-xl font-bold bg-brand-gradient bg-clip-text text-transparent">
                HFUTURETECH
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#mission" className="text-sm font-medium hover:text-brand-purple transition-colors">
                Mission
              </a>
              <a href="#achievements" className="text-sm font-medium hover:text-brand-purple transition-colors">
                Achievements
              </a>
              <a href="#impact" className="text-sm font-medium hover:text-brand-purple transition-colors">
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
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-brand-gradient opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-brand-green-light text-brand-green border-brand-green/20">
              <MapPin className="w-3 h-3 mr-1" />
              Based in Nigeria, Impacting Globally
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Empowering Africa's{' '}
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Web3 Future
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              HfuturelHub is a psycho-tech blockchain educational platform onboarding 
              underrepresented communities into sustainable Web3 careers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-brand-gradient hover:opacity-90 text-white text-lg px-8">
                Learn About Our Impact
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple/5 text-lg px-8">
                Partner With Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-brand-purple">Achievements</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Measurable impact in building Nigeria's blockchain ecosystem
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 mx-auto bg-brand-gradient rounded-full flex items-center justify-center mb-4">
                      <achievement.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-brand-purple mb-2">
                      {achievement.number}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{achievement.label}</h3>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-brand-green">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To onboard, create, design and develop models that train and incubate 
                local Web3 builders from underrepresented regions to become sustainable 
                contributors to blockchain ecosystems.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We believe in democratizing access to blockchain technology and creating 
                pathways for African talent to participate meaningfully in the global Web3 economy.
              </p>
              <Button className="bg-brand-green hover:bg-brand-green/90 text-white">
                Read Our Full Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <feature.icon className="h-8 w-8 text-brand-purple mb-4" />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-16 lg:py-24 bg-brand-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Driving Sustainable Impact
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Through strategic partnerships, comprehensive education, and community building, 
              we're creating a sustainable pipeline of African Web3 talent ready to contribute 
              to the global blockchain ecosystem.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <Award className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-lg font-semibold mb-2">Recognition</h3>
                <p className="opacity-80">Building credibility through measurable outcomes</p>
              </div>
              <div className="text-center">
                <Globe className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-lg font-semibold mb-2">Global Reach</h3>
                <p className="opacity-80">Connecting local talent to international opportunities</p>
              </div>
              <div className="text-center">
                <TrendingUp className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-lg font-semibold mb-2">Growth</h3>
                <p className="opacity-80">Scaling impact across underrepresented regions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Support Our Mission?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join us in building a more inclusive and diverse Web3 ecosystem. 
              Your support enables us to continue our impactful work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-brand-gradient hover:opacity-90 text-white">
                Become a Partner
              </Button>
              <Button size="lg" variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple/5">
                Grant Opportunities
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-brand-gradient flex items-center justify-center">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-brand-gradient bg-clip-text text-transparent">
                  HFUTURETECH
                </span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Empowering underrepresented communities through blockchain education 
                and sustainable Web3 career development.
              </p>
              <p className="text-sm text-muted-foreground">
                📍 Based in Nigeria, Impacting Globally
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Programs</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Blockchain Education</li>
                <li>Web3 Development</li>
                <li>Community Building</li>
                <li>IRL Meetups</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Partnership Inquiries</li>
                <li>Grant Applications</li>
                <li>Community Support</li>
                <li>Media Kit</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 HFUTURETECH. Building the future of Web3 in Africa.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
