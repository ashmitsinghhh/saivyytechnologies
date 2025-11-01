'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight,
  ExternalLink,
  Calendar,
  Users,
  TrendingUp,
  Award,
  Filter,
  Search,
  Bot,
  Brain,
  BarChart3,
  Shield,
  Eye,
  Zap,
  Building2,
  Factory,
  ShoppingCart,
  Heart,
  GraduationCap,
  Plane
} from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    title: "RetailAI Customer Insights",
    category: "Retail",
    industry: "E-commerce",
    description: "AI-powered customer behavior analysis system that increased conversion rates by 45% and reduced cart abandonment by 30%.",
    image: "/api/placeholder/600/400",
    tags: ["Machine Learning", "Customer Analytics", "Real-time Processing"],
    metrics: {
      conversion: "+45%",
      revenue: "$2.3M",
      efficiency: "+60%",
      satisfaction: "94%"
    },
    duration: "6 months",
    teamSize: "8 experts",
    technologies: ["Python", "TensorFlow", "AWS", "React"],
    challenges: [
      "Processing 10M+ daily transactions",
      "Real-time recommendation engine",
      "Multi-channel data integration"
    ],
    solutions: [
      "Implemented scalable ML pipeline",
      "Built real-time recommendation system",
      "Created unified customer data platform"
    ],
    results: [
      "45% increase in conversion rates",
      "30% reduction in cart abandonment", 
      "$2.3M additional revenue in first quarter"
    ],
    clientTestimonial: "SaivyyAI transformed our understanding of customer behavior. The insights we gained led to immediate improvements in our conversion rates.",
    clientName: "Sarah Johnson, VP of Digital Strategy",
    icon: ShoppingCart,
    color: "from-blue-500 to-cyan-500",
    featured: true
  },
  {
    id: 2,
    title: "MedAI Diagnostic Assistant",
    category: "Healthcare",
    industry: "Medical Technology",
    description: "Advanced AI system for medical image analysis that improved diagnostic accuracy by 35% and reduced processing time by 70%.",
    image: "/api/placeholder/600/400",
    tags: ["Computer Vision", "Medical AI", "Deep Learning"],
    metrics: {
      accuracy: "+35%",
      speed: "+70%",
      cost: "-40%",
      satisfaction: "96%"
    },
    duration: "8 months",
    teamSize: "12 experts",
    technologies: ["PyTorch", "OpenCV", "DICOM", "Node.js"],
    challenges: [
      "High accuracy requirements for medical diagnosis",
      "HIPAA compliance and data security",
      "Integration with existing hospital systems"
    ],
    solutions: [
      "Developed custom CNN architecture",
      "Implemented secure data processing pipeline",
      "Created seamless EHR integration"
    ],
    results: [
      "35% improvement in diagnostic accuracy",
      "70% faster image processing",
      "40% reduction in operational costs"
    ],
    clientTestimonial: "The AI diagnostic assistant has revolutionized our radiology department. We can now process more cases with higher accuracy.",
    clientName: "Dr. Michael Chen, Chief of Radiology",
    icon: Heart,
    color: "from-red-500 to-pink-500",
    featured: true
  },
  {
    id: 3,
    title: "FinanceAI Risk Assessment",
    category: "Finance",
    industry: "Financial Services",
    description: "Intelligent risk assessment platform that reduced loan default rates by 25% and automated 80% of credit decisions.",
    image: "/api/placeholder/600/400",
    tags: ["Risk Analytics", "Credit Scoring", "Fraud Detection"],
    metrics: {
      accuracy: "+25%",
      automation: "80%",
      processing: "+90%",
      fraud: "-60%"
    },
    duration: "10 months",
    teamSize: "10 experts",
    technologies: ["Python", "Scikit-learn", "PostgreSQL", "FastAPI"],
    challenges: [
      "Complex regulatory compliance requirements",
      "Real-time fraud detection",
      "Legacy system integration"
    ],
    solutions: [
      "Built ML-powered risk scoring engine",
      "Implemented real-time fraud detection",
      "Created API-first integration layer"
    ],
    results: [
      "25% reduction in loan default rates",
      "80% automation of credit decisions",
      "60% decrease in fraudulent transactions"
    ],
    clientTestimonial: "Our risk assessment capabilities have been transformed. We can now make faster, more accurate lending decisions.",
    clientName: "Robert Kim, Chief Risk Officer",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-500",
    featured: false
  },
  {
    id: 4,
    title: "ManufactureAI Quality Control",
    category: "Manufacturing",
    industry: "Industrial",
    description: "Computer vision system for automated quality control that reduced defects by 90% and increased production efficiency by 40%.",
    image: "/api/placeholder/600/400",
    tags: ["Computer Vision", "Quality Control", "Industrial IoT"],
    metrics: {
      defects: "-90%",
      efficiency: "+40%",
      downtime: "-50%",
      savings: "$1.8M"
    },
    duration: "7 months",
    teamSize: "9 experts",
    technologies: ["OpenCV", "TensorFlow", "Edge Computing", "MQTT"],
    challenges: [
      "Real-time defect detection on production line",
      "Harsh industrial environment conditions",
      "Integration with legacy machinery"
    ],
    solutions: [
      "Deployed edge AI for real-time processing",
      "Built ruggedized vision systems",
      "Created industrial IoT integration platform"
    ],
    results: [
      "90% reduction in product defects",
      "40% increase in production efficiency",
      "$1.8M annual cost savings"
    ],
    clientTestimonial: "The quality control system exceeded our expectations. We've achieved unprecedented defect detection rates.",
    clientName: "Lisa Zhang, Operations Director",
    icon: Factory,
    color: "from-orange-500 to-red-500",
    featured: false
  },
  {
    id: 5,
    title: "EduAI Learning Platform",
    category: "Education",
    industry: "EdTech",
    description: "Personalized learning AI that improved student performance by 55% and engagement by 70% through adaptive content delivery.",
    image: "/api/placeholder/600/400",
    tags: ["Personalized Learning", "NLP", "Adaptive AI"],
    metrics: {
      performance: "+55%",
      engagement: "+70%",
      completion: "+65%",
      satisfaction: "92%"
    },
    duration: "9 months",
    teamSize: "11 experts",
    technologies: ["Python", "NLP Libraries", "React", "MongoDB"],
    challenges: [
      "Personalization at scale for 100K+ students",
      "Real-time adaptive content generation",
      "Multi-language support requirements"
    ],
    solutions: [
      "Built scalable recommendation engine",
      "Implemented adaptive learning algorithms",
      "Created multi-language NLP pipeline"
    ],
    results: [
      "55% improvement in student performance",
      "70% increase in engagement rates",
      "65% higher course completion rates"
    ],
    clientTestimonial: "Our students are more engaged than ever. The personalized learning paths have transformed educational outcomes.",
    clientName: "Prof. Amanda Taylor, Academic Director",
    icon: GraduationCap,
    color: "from-purple-500 to-indigo-500",
    featured: false
  },
  {
    id: 6,
    title: "TravelAI Optimization Engine",
    category: "Travel",
    industry: "Travel & Tourism",
    description: "Smart travel optimization platform that reduced booking processing time by 80% and increased customer satisfaction by 45%.",
    image: "/api/placeholder/600/400",
    tags: ["Route Optimization", "Price Prediction", "Customer Service"],
    metrics: {
      processing: "+80%",
      satisfaction: "+45%",
      bookings: "+35%",
      revenue: "$3.2M"
    },
    duration: "5 months",
    teamSize: "7 experts",
    technologies: ["Python", "GraphQL", "Redis", "Vue.js"],
    challenges: [
      "Complex multi-city route optimization",
      "Real-time price fluctuation handling",
      "Peak season scalability requirements"
    ],
    solutions: [
      "Implemented advanced routing algorithms",
      "Built predictive pricing engine",
      "Created auto-scaling infrastructure"
    ],
    results: [
      "80% faster booking processing",
      "45% increase in customer satisfaction",
      "$3.2M additional revenue generated"
    ],
    clientTestimonial: "The optimization engine has streamlined our entire booking process. Customers love the intelligent recommendations.",
    clientName: "Carlos Rodriguez, CTO",
    icon: Plane,
    color: "from-cyan-500 to-blue-500",
    featured: false
  }
]

const categories = ["All", "Healthcare", "Finance", "Retail", "Manufacturing", "Education", "Travel"]

const industries = [
  { name: "E-commerce", icon: ShoppingCart, count: 12 },
  { name: "Healthcare", icon: Heart, count: 8 },
  { name: "Finance", icon: TrendingUp, count: 15 },
  { name: "Manufacturing", icon: Factory, count: 10 },
  { name: "Education", icon: GraduationCap, count: 6 },
  { name: "Technology", icon: Bot, count: 20 }
]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProjects = portfolioItems.filter(item => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredProjects = portfolioItems.filter(item => item.featured)

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-cyan-50/50" />
        <div className="container-custom relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Our Portfolio
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6">
              Success Stories &{" "}
              <span className="gradient-text">Case Studies</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Explore our portfolio of successful AI implementations across various industries. 
              Each project showcases our expertise in delivering transformative solutions 
              that drive real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                View Case Studies <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Discuss Your Project
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 lg:py-32">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800">Featured Work</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
              Highlighted Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our most impactful projects that demonstrate the transformative power of AI 
              across different industries and use cases.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {featuredProjects.map((project, index) => {
              const IconComponent = project.icon
              return (
                <Card key={project.id} className="group relative overflow-hidden border-2 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <IconComponent className="h-16 w-16 text-gray-400" />
                    </div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="secondary" size="sm">
                        View Details <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-blue-100 text-blue-800">{project.category}</Badge>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {project.duration}
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-heading group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">{value}</div>
                          <div className="text-sm text-muted-foreground capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800">Industries</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our AI solutions span across multiple industries, each with unique challenges 
              and requirements that we address with tailored approaches.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon
              return (
                <Card key={index} className="group text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-heading group-hover:text-blue-600 transition-colors">
                      {industry.name}
                    </CardTitle>
                    <CardDescription>
                      {industry.count} successful projects delivered
                    </CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 lg:py-32">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-800">All Projects</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
              Complete Portfolio
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Browse through our complete portfolio of AI projects and discover how we've helped 
              businesses across various industries achieve their goals.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap lg:flex-nowrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="flex-shrink-0"
                >
                  <Filter className="mr-2 h-4 w-4" />
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
              const IconComponent = project.icon
              return (
                <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <IconComponent className="h-12 w-12 text-gray-400" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-gray-800">{project.category}</Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-lg font-heading group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
                        <div key={key} className="text-center p-2 bg-gray-50 rounded">
                          <div className="text-lg font-bold text-blue-600">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {project.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {project.teamSize}
                      </span>
                    </div>

                    <Button variant="outline" className="w-full group-hover:bg-blue-50 group-hover:border-blue-200">
                      View Details <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No projects found matching your criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSelectedCategory("All")
                  setSearchTerm("")
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container-custom">
          <Card className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 border-0">
            <CardContent className="p-12 text-center text-white">
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
                  Ready to Create Your Success Story?
                </h2>
                <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                  Join our portfolio of successful AI implementations. Let's discuss how we can help 
                  you achieve similar transformative results for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                    Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Download Case Studies
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}