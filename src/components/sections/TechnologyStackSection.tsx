'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

const TechnologyStackSection = () => {
  const technologies = [
    {
      name: "Python",
      description: "Primary language for AI/ML development",
      icon: "🐍",
      category: "Language"
    },
    {
      name: "TensorFlow",
      description: "Deep learning framework",
      icon: "🧠",
      category: "ML Framework"
    },
    {
      name: "PyTorch",
      description: "Neural network library",
      icon: "🔥",
      category: "ML Framework"
    },
    {
      name: "AWS",
      description: "Cloud infrastructure",
      icon: "☁️",
      category: "Cloud"
    },
    {
      name: "Docker",
      description: "Containerization platform",
      icon: "🐳",
      category: "DevOps"
    },
    {
      name: "MongoDB",
      description: "NoSQL database",
      icon: "🗃️",
      category: "Database"
    }
  ]

  const getCategoryColor = (category: string) => {
    const colors = {
      "Language": "bg-blue-100 text-blue-700",
      "ML Framework": "bg-purple-100 text-purple-700",
      "Cloud": "bg-green-100 text-green-700",
      "DevOps": "bg-orange-100 text-orange-700",
      "Database": "bg-red-100 text-red-700"
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-700"
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Our Technology Stack
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
            Cutting-edge tools and frameworks powering our AI solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage the latest technologies to build robust, scalable, and efficient AI solutions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <Card key={index} className="border-0 bg-gradient-to-br from-white to-gray-50 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
                  {tech.name}
                </h3>
                <p className="text-gray-600 mb-4">{tech.description}</p>
                <Badge className={`${getCategoryColor(tech.category)} text-xs px-3 py-1`}>
                  {tech.category}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
              Always Innovating
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our tech stack evolves with the latest advancements in AI and machine learning. 
              We continuously evaluate and integrate cutting-edge tools to deliver the best results for our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnologyStackSection