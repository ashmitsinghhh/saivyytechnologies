'use client'

import React, { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      content: "Serving clients globally",
      subtitle: "Contact us for local presence details"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 9318381279",
      subtitle: "Mon-Fri, 9am-6pm"
    },
    {
      icon: Mail,
      title: "Email Support",
      content: "founder@saivyytechnologies.in",
      subtitle: "Response within 24 hours"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "24/7 AI Support",
      subtitle: "Always available for urgent matters"
    }
  ]

  const services = [
    "AI Automation",
    "Generative AI",
    "Machine Learning",
    "Data Analytics",
    "Custom AI Solutions",
    "AI Consulting",
    "Other"
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Get in Touch
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
            Ready to transform your business with AI?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI experts are ready to help you leverage the power of artificial intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left side - Contact info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                Let's Discuss Your Project
              </h3>
              <p className="text-gray-600">
                Our AI experts are ready to help you leverage the power of artificial intelligence.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                      <div className="text-gray-900 font-medium">{info.content}</div>
                      <div className="text-sm text-gray-600">{info.subtitle}</div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Social links */}
            <div className="pt-8">
              <h4 className="font-semibold text-gray-900 mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://x.com/SaivyyTech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors"
                >
                  <span className="font-bold text-sm">X</span>
                </a>
                <a
                  href="https://www.instagram.com/saivyy_technologies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center text-pink-600 hover:bg-pink-200 transition-colors"
                >
                  <span className="font-bold text-sm">IG</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/saivyy-technologies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors"
                >
                  <span className="font-bold text-sm">LI</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="lg:col-span-2">
            <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-heading font-bold text-gray-900">
                    Send Us a Message
                  </h3>
                </div>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you shortly
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+1 (555) 123-4567"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interested In
                      </label>
                      <Select onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message / Project Details *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your project, goals, and how we can help..."
                      rows={6}
                      required
                      className="w-full"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Ready to Start Your AI Journey?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of companies already transforming their operations with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8"
              >
                Schedule a Demo
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection