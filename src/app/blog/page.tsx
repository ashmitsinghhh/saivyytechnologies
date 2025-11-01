'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight,
  Search,
  Calendar,
  Clock,
  User,
  Eye,
  BookOpen,
  TrendingUp,
  Filter,
  ChevronRight,
  Brain,
  Bot,
  Database,
  Shield,
  Zap,
  Globe,
  Code,
  Lightbulb,
  Target,
  Cpu,
  Lock
} from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Healthcare: Transforming Patient Care",
    excerpt: "Explore how artificial intelligence is revolutionizing healthcare delivery, from diagnostic tools to personalized treatment plans.",
    content: "AI is transforming healthcare in unprecedented ways...",
    category: "Healthcare",
    tags: ["AI", "Healthcare", "Machine Learning", "Innovation"],
    author: "Dr. Sarah Johnson",
    authorRole: "Chief AI Researcher",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    views: 2450,
    image: "/api/placeholder/600/400",
    featured: true,
    icon: Brain,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Building Scalable AI Infrastructure: Best Practices and Lessons Learned",
    excerpt: "Learn from our experience in building AI systems that scale to millions of users while maintaining performance and reliability.",
    content: "Scaling AI infrastructure requires careful planning...",
    category: "Technology",
    tags: ["Infrastructure", "Scalability", "DevOps", "Cloud"],
    author: "Michael Chen",
    authorRole: "Lead DevOps Engineer",
    publishDate: "2024-01-12",
    readTime: "12 min read",
    views: 1890,
    image: "/api/placeholder/600/400",
    featured: true,
    icon: Cpu,
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 3,
    title: "Ethical AI: Ensuring Responsible Development and Deployment",
    excerpt: "Dive deep into the principles and practices of ethical AI development, addressing bias, fairness, and transparency.",
    content: "Ethical considerations in AI development are crucial...",
    category: "Ethics",
    tags: ["Ethics", "Responsible AI", "Bias", "Fairness"],
    author: "Dr. Emily Rodriguez",
    authorRole: "AI Ethics Lead",
    publishDate: "2024-01-10",
    readTime: "10 min read",
    views: 1650,
    image: "/api/placeholder/600/400",
    featured: false,
    icon: Shield,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 4,
    title: "Computer Vision in Manufacturing: Quality Control Revolution",
    excerpt: "Discover how computer vision technologies are transforming quality control processes in modern manufacturing.",
    content: "Computer vision has become a game-changer...",
    category: "Manufacturing",
    tags: ["Computer Vision", "Manufacturing", "Quality Control", "Automation"],
    author: "Robert Kim",
    authorRole: "Computer Vision Engineer",
    publishDate: "2024-01-08",
    readTime: "7 min read",
    views: 1340,
    image: "/api/placeholder/600/400",
    featured: false,
    icon: Eye,
    color: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    title: "Natural Language Processing: Breaking Down Language Barriers",
    excerpt: "Explore the latest advances in NLP and how they're enabling seamless communication across languages and cultures.",
    content: "Natural Language Processing has evolved significantly...",
    category: "NLP",
    tags: ["NLP", "Language Models", "Translation", "Communication"],
    author: "Lisa Zhang",
    authorRole: "NLP Research Scientist",
    publishDate: "2024-01-05",
    readTime: "9 min read",
    views: 1120,
    image: "/api/placeholder/600/400",
    featured: false,
    icon: Bot,
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 6,
    title: "Data Privacy in AI: Protecting User Information",
    excerpt: "Learn about the latest techniques and regulations for maintaining data privacy while developing AI applications.",
    content: "Data privacy is a fundamental concern...",
    category: "Privacy",
    tags: ["Privacy", "Data Protection", "Compliance", "Security"],
    author: "Alex Thompson",
    authorRole: "Security Architect",
    publishDate: "2024-01-03",
    readTime: "11 min read",
    views: 980,
    image: "/api/placeholder/600/400",
    featured: false,
    icon: Lock,
    color: "from-red-500 to-orange-500"
  },
  {
    id: 7,
    title: "AI-Driven Analytics: Turning Data into Actionable Insights",
    excerpt: "Understand how AI-powered analytics platforms are helping businesses make data-driven decisions faster than ever.",
    content: "AI-driven analytics represents a paradigm shift...",
    category: "Analytics",
    tags: ["Analytics", "Business Intelligence", "Data Science", "Insights"],
    author: "Maria Santos",
    authorRole: "Data Science Lead",
    publishDate: "2024-01-01",
    readTime: "6 min read",
    views: 1560,
    image: "/api/placeholder/600/400",
    featured: false,
    icon: TrendingUp,
    color: "from-teal-500 to-blue-500"
  },
  {
    id: 8,
    title: "The Rise of Edge AI: Computing at the Source",
    excerpt: "Explore how edge computing is bringing AI capabilities closer to data sources for real-time processing and reduced latency.",
    content: "Edge AI is transforming how we think about computation...",
    category: "Edge Computing",
    tags: ["Edge AI", "IoT", "Real-time Processing", "Latency"],
    author: "David Park",
    authorRole: "Edge Computing Specialist",
    publishDate: "2023-12-28",
    readTime: "8 min read",
    views: 890,
    image: "/api/placeholder/600/400",
    featured: false,
    icon: Zap,
    color: "from-yellow-500 to-orange-500"
  }
]

const categories = ["All", "Healthcare", "Technology", "Ethics", "Manufacturing", "NLP", "Privacy", "Analytics", "Edge Computing"]

const trendingTopics = [
  { name: "Generative AI", count: 23 },
  { name: "Machine Learning", count: 18 },
  { name: "Computer Vision", count: 15 },
  { name: "NLP", count: 12 },
  { name: "Edge Computing", count: 9 },
  { name: "AI Ethics", count: 7 }
]

const recentPosts = blogPosts.slice(0, 4)

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogPosts.filter(post => post.featured)

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-cyan-50/50" />
        <div className="container-custom relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
              AI Insights & Research
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6">
              Stay Ahead with{" "}
              <span className="gradient-text">AI Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover the latest trends, insights, and breakthroughs in artificial intelligence. 
              Our expert team shares knowledge, best practices, and real-world applications 
              to keep you at the forefront of AI innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Explore Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 lg:py-32">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800">Featured Articles</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
              Editor's Picks
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our most popular and impactful articles covering the latest developments 
              in AI technology and its applications across industries.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {featuredPosts.map((post, index) => {
              const IconComponent = post.icon
              return (
                <Card key={post.id} className="group relative overflow-hidden border-2 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                  <div className={`absolute inset-0 bg-gradient-to-br ${post.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* Article Image */}
                  <div className="relative overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <IconComponent className="h-16 w-16 text-gray-400" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-gray-800">{post.category}</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-black/50 text-white">
                        Featured
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.publishDate).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-heading group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-base line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Eye className="h-4 w-4" />
                        {post.views.toLocaleString()} views
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {post.authorRole}
                      </div>
                    </div>

                    <Button className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      Read Article <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800">All Articles</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
              Explore Our Knowledge Base
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Browse through our comprehensive collection of articles, tutorials, and insights 
              covering every aspect of AI development and implementation.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or keywords..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => {
              const IconComponent = post.icon
              return (
                <Card key={post.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <IconComponent className="h-12 w-12 text-gray-400" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-gray-800">{post.category}</Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.publishDate).toLocaleDateString()}
                      <span>•</span>
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                    <CardTitle className="text-lg font-heading group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-sm line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <span>{post.author}</span>
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {post.views.toLocaleString()}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button variant="outline" className="w-full group-hover:bg-blue-50 group-hover:border-blue-200">
                      Read More <ChevronRight className="ml-2 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-lg text-muted-foreground mb-4">No articles found matching your criteria.</p>
              <Button 
                variant="outline" 
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

      {/* Sidebar Content */}
      <section className="py-20 lg:py-32">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Recent Posts */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold font-heading mb-6">Recent Posts</h3>
              <div className="space-y-6">
                {recentPosts.map((post) => (
                  <Card key={post.id} className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                          <post.icon className="h-8 w-8 text-gray-400" />
                        </div>
                        <div className="flex-1">
                          <Badge className="mb-2 text-xs">{post.category}</Badge>
                          <h4 className="font-semibold group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                            {post.title}
                          </h4>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            {new Date(post.publishDate).toLocaleDateString()}
                            <span>•</span>
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Trending Topics */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold font-heading mb-6">Trending Topics</h3>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {trendingTopics.map((topic, index) => (
                      <div key={topic.name} className="flex items-center justify-between group cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                            {index + 1}
                          </div>
                          <span className="group-hover:text-blue-600 transition-colors">{topic.name}</span>
                        </div>
                        <Badge variant="secondary">{topic.count} articles</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="mt-8">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold font-heading mb-2">Stay Updated</h4>
                  <p className="text-muted-foreground mb-4">
                    Get the latest AI insights delivered to your inbox weekly.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Subscribe Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
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
                  Ready to Implement AI Solutions?
                </h2>
                <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                  Have questions about AI implementation? Our experts are here to help you navigate 
                  the complexities of AI adoption and find the right solutions for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                    Contact Our Experts <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Download Resources
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