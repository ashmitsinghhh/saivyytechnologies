'use client'

import React, { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Amit Singh",
      role: "CTO",
      company: "Innovate Solutions",
      image: "/api/placeholder/100/100",
      rating: 5,
      text: "Saivyy Technologies delivered a bespoke AI solution that significantly improved our data analysis capabilities. Their expertise is unmatched.",
      achievement: "94% accuracy improvement"
    },
    {
      id: 2,
      name: "Meera Desai",
      role: "Marketing Director",
      company: "Creative Hub",
      image: "/api/placeholder/100/100",
      rating: 5,
      text: "The Gen-AI tools developed by Saivyy have revolutionized our content creation process. Highly recommended for their innovative approach.",
      achievement: "60% faster content creation"
    },
    {
      id: 3,
      name: "Dr. Sarah Chen",
      role: "Research Lead",
      company: "MedTech Innovations",
      image: "/api/placeholder/100/100",
      rating: 5,
      text: "Their healthcare AI solutions have transformed our diagnostic processes. The accuracy and speed improvements are remarkable.",
      achievement: "85% diagnostic accuracy"
    },
    {
      id: 4,
      name: "Michael Rodriguez",
      role: "Operations Manager",
      company: "Global Logistics Corp",
      image: "/api/placeholder/100/100",
      rating: 5,
      text: "Saivyy's automation solutions reduced our operational costs by 40% while improving efficiency. Outstanding results!",
      achievement: "40% cost reduction"
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentClient = testimonials[currentTestimonial]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Success Stories
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
            See how we've helped businesses thrive with AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real testimonials from clients who have transformed their operations with our AI solutions
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-xl">
            <CardContent className="p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left side - Testimonial */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(currentClient.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <div className="relative">
                    <Quote className="absolute -top-4 -left-4 w-8 h-8 text-blue-200" />
                    <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium">
                      "{currentClient.text}"
                    </blockquote>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={currentClient.image} alt={currentClient.name} />
                      <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                        {currentClient.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">{currentClient.name}</div>
                      <div className="text-blue-600 font-medium">{currentClient.role}</div>
                      <div className="text-gray-600">{currentClient.company}</div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                    <div className="text-sm text-blue-600 font-medium mb-1">Achievement</div>
                    <div className="text-blue-800 font-bold text-lg">{currentClient.achievement}</div>
                  </div>
                </div>

                {/* Right side - Client showcase */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 text-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <div className="text-2xl font-bold text-blue-600">
                        {currentClient.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{currentClient.company}</h3>
                    <p className="text-gray-600 mb-4">AI Implementation Success</p>
                    
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-white/70 rounded-xl p-4">
                        <div className="text-2xl font-bold text-green-600">✓</div>
                        <div className="text-sm text-gray-600">Project Completed</div>
                      </div>
                      <div className="bg-white/70 rounded-xl p-4">
                        <div className="text-2xl font-bold text-blue-600">⚡</div>
                        <div className="text-sm text-gray-600">AI Powered</div>
                      </div>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={prevTestimonial}
                      className="w-12 h-12 rounded-full border-2"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </Button>
                    
                    <div className="flex space-x-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentTestimonial(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentTestimonial
                              ? 'bg-blue-600 w-8'
                              : 'bg-gray-300 hover:bg-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                    
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={nextTestimonial}
                      className="w-12 h-12 rounded-full border-2"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* All testimonials preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => setCurrentTestimonial(index)}
                className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                  index === currentTestimonial
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-gray-100 text-gray-600 text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-sm text-gray-900">{testimonial.name}</div>
                    <div className="text-xs text-gray-600">{testimonial.company}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection