'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Sparkles, Zap, Globe } from 'lucide-react'
import Link from 'next/link'

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-50"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23000000' fill-opacity='0.4'%3e%3ccircle cx='30' cy='30' r='1'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* AI Badge */}
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Badge 
              variant="secondary" 
              className="px-4 py-2 text-sm font-medium bg-white/60 backdrop-blur-sm border border-blue-200/50 text-blue-700 hover:bg-white/80 transition-all duration-300"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Solutions Available
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Enhance the Future with{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Harness the power of artificial intelligence to transform your business
            operations and unlock unprecedented growth opportunities.
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              asChild
            >
              <Link href="#contact" className="flex items-center">
                Start Your AI Journey
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-4 text-lg font-semibold rounded-full border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
              asChild
            >
              <Link href="/portfolio">View Case Studies</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600 font-medium">Projects Delivered</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
                <div className="text-gray-600 font-medium">Client Satisfaction</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-gray-600 font-medium">AI Support</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 hidden lg:block animate-bounce">
          <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <Zap className="w-8 h-8 text-blue-600" />
          </div>
        </div>

        <div className="absolute bottom-32 left-20 hidden lg:block animate-bounce" style={{ animationDelay: '1s' }}>
          <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <Globe className="w-8 h-8 text-purple-600" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection