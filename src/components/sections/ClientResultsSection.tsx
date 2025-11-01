'use client'

import React, { useState, useEffect } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { TrendingUp, TrendingDown, DollarSign, Zap } from 'lucide-react'

const ClientResultsSection = () => {
  const [counters, setCounters] = useState({
    efficiency: 0,
    cost: 0,
    revenue: 0,
    automation: 0
  })

  const targetValues = {
    efficiency: 45,
    cost: 30,
    revenue: 25,
    automation: 60
  }

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60 // 60 steps for smooth animation
    const stepDuration = duration / steps

    const intervals = Object.keys(targetValues).map(key => {
      const target = targetValues[key as keyof typeof targetValues]
      const increment = target / steps
      let current = 0

      return setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(intervals.find(interval => interval === this))
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }))
      }, stepDuration)
    })

    return () => {
      intervals.forEach(interval => clearInterval(interval))
    }
  }, [])

  const metrics = [
    {
      icon: TrendingUp,
      title: "Efficiency Gain",
      value: counters.efficiency,
      suffix: "%",
      prefix: "+",
      color: "green",
      description: "Average productivity improvement"
    },
    {
      icon: TrendingDown,
      title: "Cost Reduction",
      value: counters.cost,
      suffix: "%",
      prefix: "-",
      color: "red",
      description: "Operational cost savings"
    },
    {
      icon: DollarSign,
      title: "Revenue Growth",
      value: counters.revenue,
      suffix: "%",
      prefix: "+",
      color: "blue",
      description: "Business revenue increase"
    },
    {
      icon: Zap,
      title: "Process Automation",
      value: counters.automation,
      suffix: "%",
      prefix: "+",
      color: "purple",
      description: "Automated workflows"
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      green: { bg: 'bg-green-100', text: 'text-green-600', accent: 'text-green-600' },
      red: { bg: 'bg-red-100', text: 'text-red-600', accent: 'text-red-600' },
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', accent: 'text-blue-600' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', accent: 'text-purple-600' },
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Proven Client Results
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
            Our AI solutions deliver measurable impact across key metrics
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the real-world results our clients achieve with our AI implementations
          </p>
        </div>

        {/* Key Performance Improvements */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-bold text-gray-900 mb-8 text-center">
            Key Performance Improvements
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => {
              const IconComponent = metric.icon
              const colorClasses = getColorClasses(metric.color)
              
              return (
                <Card key={index} className="text-center border-0 bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 ${colorClasses.bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`w-8 h-8 ${colorClasses.text}`} />
                    </div>
                    <div className={`text-3xl font-bold ${colorClasses.accent} mb-2`}>
                      {metric.prefix}{metric.value}{metric.suffix}
                    </div>
                    <div className="font-semibold text-gray-900 mb-2">{metric.title}</div>
                    <div className="text-sm text-gray-600">{metric.description}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Resource Allocation Optimization */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-bold text-gray-900 mb-8 text-center">
            Resource Allocation Optimization
          </h3>
          <Card className="max-w-4xl mx-auto border-0 bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-6xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="font-semibold text-gray-900 mb-2">Optimized Operations</div>
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time Savings</span>
                      <span className="font-semibold text-blue-600">(35%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Cost Efficiency</span>
                      <span className="font-semibold text-green-600">(40%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Personnel Reallocation</span>
                      <span className="font-semibold text-purple-600">(25%)</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-4">Performance Improvement Trend</div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Start</span>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-gray-400 h-2 rounded-full w-1/4"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Current</span>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mt-4">Consistent Growth</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-4">AI Impact Score</div>
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <div className="absolute inset-0 rounded-full border-8 border-purple-200"></div>
                    <div className="absolute inset-0 rounded-full border-8 border-purple-500 border-t-transparent animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-purple-600">92%</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">Overall Satisfaction</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ClientResultsSection