'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Globe, MapPin, Clock, Shield, Users, Server } from 'lucide-react'

const GlobalReachSection = () => {
  const features = [
    {
      icon: Server,
      title: "Strategic Data Centers",
      description: "Distributed infrastructure across major continents"
    },
    {
      icon: Users,
      title: "Global Development Network",
      description: "Expert teams working around the clock"
    },
    {
      icon: Clock,
      title: "24/7 Support Coverage",
      description: "Round-the-clock assistance in multiple time zones"
    },
    {
      icon: Shield,
      title: "Regional Compliance Expertise",
      description: "Meeting local regulations and standards"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Our Global Reach
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
            Providing AI solutions worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI solutions empower businesses in more than 35 countries, with dedicated 
            support and infrastructure on all major continents.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image placeholder */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-white/50">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-24 h-24 text-blue-600" />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                  Saivyy Technologies Global AI Solutions
                </h3>
                <p className="text-gray-600">Serving 35+ Countries</p>
              </div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-blue-100">
              <div className="text-2xl font-bold text-blue-600">35+</div>
              <div className="text-sm text-gray-600">Countries</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg border border-purple-100">
              <div className="text-2xl font-bold text-purple-600">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
          </div>

          {/* Right side - Features */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                Serving Clients Across Continents
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our AI solutions empower businesses in more than 35 countries, with dedicated 
                support and infrastructure on all major continents.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <Card key={index} className="border-0 bg-white/70 backdrop-blur-sm hover:bg-white/90 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                          <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GlobalReachSection