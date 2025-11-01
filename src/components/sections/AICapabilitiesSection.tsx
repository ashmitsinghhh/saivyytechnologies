'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Brain, 
  Heart, 
  Users, 
  Search, 
  Cog, 
  MessageSquare,
  ArrowRight 
} from 'lucide-react'

const AICapabilitiesSection = () => {
  const capabilities = [
    {
      icon: Cog,
      title: "AI Automation",
      description: "We help businesses eliminate repetitive manual tasks and boost productivity with intelligent automation.",
      color: "blue",
      features: ["Process Automation", "Workflow Optimization", "Task Scheduling"]
    },
    {
      icon: Heart,
      title: "Healthcare & Medical Solutions",
      description: "Leveraging technology to improve healthcare accessibility, efficiency, and patient outcomes.",
      color: "red",
      features: ["Medical Imaging", "Diagnostic Tools", "Patient Care"]
    },
    {
      icon: Users,
      title: "HR Automation Solutions",
      description: "Empowering organizations with smart tools to streamline HR operations and enhance employee experiences.",
      color: "green",
      features: ["Recruitment", "Performance", "Analytics"]
    },
    {
      icon: Search,
      title: "Recruitment Solutions",
      description: "Transforming recruitment with AI-driven tools that speed up hiring and improve candidate quality.",
      color: "purple",
      features: ["Candidate Matching", "Skill Assessment", "Interview Automation"]
    },
    {
      icon: Brain,
      title: "Custom AI Solutions",
      description: "Providing tailor-made AI-driven solutions to fit unique industry challenges.",
      color: "orange",
      features: ["Custom Models", "Industry-Specific", "Scalable Solutions"]
    },
    {
      icon: MessageSquare,
      title: "AI Consulting",
      description: "Expert guidance to strategize and implement your AI initiatives.",
      color: "teal",
      features: ["Strategy Planning", "Implementation", "Optimization"]
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
      red: { bg: 'bg-red-100', text: 'text-red-600', border: 'border-red-200' },
      green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200' },
      teal: { bg: 'bg-teal-100', text: 'text-teal-600', border: 'border-teal-200' },
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Our AI Capabilities
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
            End-to-end AI solutions tailored to your needs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From automation to advanced analytics, we deliver comprehensive AI solutions 
            that transform how businesses operate and compete.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => {
            const IconComponent = capability.icon
            const colorClasses = getColorClasses(capability.color)
            
            return (
              <div key={index}>
                <Card className="h-full group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 hover:from-white hover:to-blue-50">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 ${colorClasses.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-8 h-8 ${colorClasses.text}`} />
                    </div>
                    
                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">
                      {capability.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {capability.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {capability.features.map((feature, featureIndex) => (
                        <Badge 
                          key={featureIndex}
                          variant="secondary"
                          className="text-xs px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      className="group/btn p-0 h-auto text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      Learn More 
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <a href="/solutions">
              Explore All Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default AICapabilitiesSection