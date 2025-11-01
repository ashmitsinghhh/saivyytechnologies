'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { 
  Lightbulb, 
  Shield, 
  Users, 
  Trophy, 
  Target, 
  Eye, 
  Heart,
  Handshake,
  Star,
  ArrowRight,
  Award,
  Globe,
  Briefcase
} from 'lucide-react'

const AboutPage = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly pushing boundaries and exploring new possibilities in AI technology to create breakthrough solutions.",
      color: "yellow"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Building unwavering trust through transparency, ethical practices, and reliable AI solutions that respect user privacy.",
      color: "blue"
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description: "Working hand-in-hand with clients to understand their vision and exceed expectations through partnership.",
      color: "green"
    },
    {
      icon: Trophy,
      title: "Excellence",
      description: "Delivering world-class quality in every project, interaction, and AI solution we create.",
      color: "purple"
    }
  ]

  const team = [
    {
      name: "Keshav Madan",
      role: "Founder & CEO",
      description: "Visionary Leader with 10+ years orchestrating AI transformations and pioneering machine learning solutions across global enterprises.",
      image: "/KESHAV.jpeg",
      expertise: ["AI Strategy", "Machine Learning", "Business Development"]
    },
    {
      name: "Lakshay Gupta",
      role: "Founding Team Member",
      description: "Strategic Catalyst driving revenue optimization and operational excellence through innovative sales automation and growth strategies.",
      image: "/LAKSHAY.jpg",
      expertise: ["Sales Optimization", "Revenue Growth", "Operations"]
    },
    {
      name: "Manas Saxena",
      role: "Marketing",
      description: "Brand Architect orchestrating digital marketing symphonies that amplify our AI revolution message across global markets.",
      image: "/MAN.jpg",
      expertise: ["Digital Marketing", "Brand Strategy", "Content Creation"]
    },
    {
      name: "Raikant Chaudhary",
      role: "Developer",
      description: "Code Virtuoso crafting robust, scalable AI applications that power tomorrow's intelligent enterprises with precision and innovation.",
      image: "/RAI.jpg",
      expertise: ["AI Development", "Software Engineering", "System Architecture"]
    }
  ]

  const achievements = [
    { number: "500+", label: "AI Projects Delivered", icon: Briefcase },
    { number: "98%", label: "Client Satisfaction Rate", icon: Star },
    { number: "35+", label: "Industries Served", icon: Globe },
    { number: "43+", label: "Sectors Automated with AI", icon: Target }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      yellow: { bg: 'bg-yellow-100', text: 'text-yellow-600', border: 'border-yellow-200' },
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
      green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 px-4 py-2">
              Pioneering AI Innovation
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6 leading-tight">
              Pioneering the{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Revolution
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
              From visionary concept to AI revolution leader – our mission is to democratize 
              artificial intelligence and make it accessible to businesses of all sizes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full">
                Our Journey
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold rounded-full">
                Meet Our Visionaries
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              Revolutionizing Business Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our mission and vision guide everything we do, from the solutions we build to the partnerships we forge
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <Card className="border-0 bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To empower businesses with cutting-edge AI solutions that drive innovation, efficiency, and growth. 
                  We believe in making artificial intelligence accessible, practical, and transformative for organizations across all industries.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="border-0 bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To be the global leader in AI-driven business transformation, creating a world where intelligent 
                  automation enhances human potential and drives unprecedented economic growth and innovation.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Innovation at Core */}
          <div className="mt-16 text-center">
            <Card className="border-0 bg-gradient-to-r from-gray-50 to-blue-50 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <Award className="w-8 h-8 text-blue-600" />
                  <h3 className="text-2xl font-heading font-bold text-gray-900">Innovation at Core</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  We're not just following AI trends – we're setting them. Our team of visionaries and technologists 
                  work tirelessly to push the boundaries of what's possible.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">2024</div>
                    <div className="text-sm text-gray-600">FOUNDED</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">50+</div>
                    <div className="text-sm text-gray-600">INNOVATORS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">∞</div>
                    <div className="text-sm text-gray-600">POSSIBILITIES</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              OUR CORE VALUES
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              Values That Drive Innovation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles shape our culture, guide our decisions, and inspire 
              our approach to revolutionizing AI solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              const colorClasses = getColorClasses(value.color)
              
              return (
                <Card key={index} className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 ${colorClasses.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-8 h-8 ${colorClasses.text}`} />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mt-16 text-center">
            <Card className="border-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white max-w-3xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-bold mb-4">
                  These values aren't just words on a wall
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  They're the foundation of every AI solution we build, every partnership we forge, 
                  and every innovation we bring to life in our mission to pioneer the AI revolution.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              OUR VISIONARIES
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              Meet the Revolutionaries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The brilliant minds behind Saivyy Technologies – where innovation meets expertise, 
              and where your AI revolution begins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {team.map((member, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-white to-gray-50 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <Avatar className="w-24 h-24 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="bg-blue-100 text-blue-600 text-lg font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-bold text-gray-900 mb-1">{member.name}</h3>
                      <div className="text-blue-600 font-semibold mb-3">{member.role}</div>
                      <p className="text-gray-600 leading-relaxed mb-4">{member.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs px-3 py-1">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="border-0 bg-gradient-to-r from-gray-50 to-blue-50 max-w-3xl mx-auto">
              <CardContent className="p-8">
                <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                  United in Innovation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Together, we're not just colleagues – we're AI revolutionaries committed to transforming your business landscape 
                  through intelligent automation, strategic innovation, and relentless pursuit of excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that speak to our commitment and success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <Card key={index} className="text-center border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <CardContent className="p-8">
                    <IconComponent className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <div className="text-4xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                    <div className="text-gray-600 font-medium">{achievement.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI solutions can help you achieve your goals. Contact us today to get started.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8"
                >
                  View Our Work
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default AboutPage