import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Bot, 
  Brain, 
  Database, 
  Shield, 
  Zap, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Users,
  BarChart3,
  Cloud,
  Cpu,
  Eye,
  MessageSquare,
  Target,
  TrendingUp,
  Globe,
  Lock,
  Smartphone,
  Monitor
} from "lucide-react"

const products = [
  {
    id: 1,
    name: "SaivyyAI Assistant",
    category: "AI Automation",
    description: "Intelligent virtual assistant that automates customer support, handles inquiries, and provides 24/7 assistance with human-like interactions.",
    image: "/api/placeholder/400/300",
    features: [
      "Natural Language Processing",
      "Multi-language Support", 
      "Integration APIs",
      "Analytics Dashboard",
      "Custom Training"
    ],
    pricing: {
      starter: { price: "$299", period: "/month", features: ["Up to 1,000 conversations", "Basic NLP", "Email support"] },
      professional: { price: "$599", period: "/month", features: ["Up to 10,000 conversations", "Advanced NLP", "Priority support", "Custom integrations"] },
      enterprise: { price: "Custom", period: "", features: ["Unlimited conversations", "Full customization", "Dedicated support", "On-premise deployment"] }
    },
    rating: 4.9,
    reviews: 234,
    icon: Bot,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    name: "DataMind Analytics",
    category: "Data Intelligence",
    description: "Advanced analytics platform that transforms raw data into actionable insights with real-time dashboards and predictive modeling.",
    image: "/api/placeholder/400/300",
    features: [
      "Real-time Analytics",
      "Predictive Modeling",
      "Custom Dashboards",
      "Data Visualization", 
      "API Integration"
    ],
    pricing: {
      starter: { price: "$199", period: "/month", features: ["Up to 100GB data", "5 dashboards", "Basic analytics"] },
      professional: { price: "$499", period: "/month", features: ["Up to 1TB data", "Unlimited dashboards", "Advanced analytics", "API access"] },
      enterprise: { price: "Custom", period: "", features: ["Unlimited data", "Custom models", "White-label option", "Dedicated infrastructure"] }
    },
    rating: 4.8,
    reviews: 189,
    icon: BarChart3,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    name: "VisionAI Recognition",
    category: "Computer Vision",
    description: "Powerful computer vision solution for object detection, quality control, and automated visual inspection in manufacturing and security.",
    image: "/api/placeholder/400/300",
    features: [
      "Object Detection",
      "Quality Control",
      "Real-time Processing",
      "Custom Model Training",
      "Edge Computing"
    ],
    pricing: {
      starter: { price: "$399", period: "/month", features: ["Up to 10,000 images", "Pre-trained models", "Cloud processing"] },
      professional: { price: "$799", period: "/month", features: ["Up to 100,000 images", "Custom training", "Edge deployment", "Priority support"] },
      enterprise: { price: "Custom", period: "", features: ["Unlimited processing", "On-premise deployment", "Custom hardware", "24/7 support"] }
    },
    rating: 4.7,
    reviews: 156,
    icon: Eye,
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    name: "SecureAI Guardian",
    category: "AI Security",
    description: "Comprehensive AI-powered security platform that detects threats, prevents cyber attacks, and protects digital assets in real-time.",
    image: "/api/placeholder/400/300",
    features: [
      "Threat Detection",
      "Anomaly Detection",
      "Real-time Monitoring",
      "Automated Response",
      "Compliance Reporting"
    ],
    pricing: {
      starter: { price: "$499", period: "/month", features: ["Up to 1,000 endpoints", "Basic threat detection", "Email alerts"] },
      professional: { price: "$999", period: "/month", features: ["Up to 10,000 endpoints", "Advanced detection", "Automated response", "24/7 monitoring"] },
      enterprise: { price: "Custom", period: "", features: ["Unlimited endpoints", "Custom rules", "Dedicated SOC", "Compliance tools"] }
    },
    rating: 4.9,
    reviews: 298,
    icon: Shield,
    color: "from-red-500 to-orange-500"
  }
]

const features = [
  {
    title: "Cloud-Native Architecture",
    description: "Built on modern cloud infrastructure for maximum scalability and reliability",
    icon: Cloud
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade security with end-to-end encryption and compliance certifications",
    icon: Lock
  },
  {
    title: "Real-time Processing",
    description: "Lightning-fast processing with sub-second response times",
    icon: Zap
  },
  {
    title: "Mobile & Desktop",
    description: "Native apps and responsive web interfaces for all platforms",
    icon: Smartphone
  },
  {
    title: "API Integration", 
    description: "Comprehensive APIs for seamless integration with existing systems",
    icon: Cpu
  },
  {
    title: "Global Deployment",
    description: "Worldwide availability with edge computing for optimal performance",
    icon: Globe
  }
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechCorp",
    company: "TechCorp Inc.",
    content: "SaivyyAI Assistant transformed our customer support. We've seen a 70% reduction in response time and 85% customer satisfaction improvement.",
    rating: 5,
    avatar: "/api/placeholder/60/60"
  },
  {
    name: "Michael Chen",
    role: "Data Director",
    company: "DataFlow Solutions",
    content: "DataMind Analytics gave us insights we never knew existed. The predictive models helped us increase revenue by 35% this quarter.",
    rating: 5,
    avatar: "/api/placeholder/60/60"
  },
  {
    name: "Emily Rodriguez",
    role: "Operations Manager",
    company: "Manufacturing Plus",
    content: "VisionAI Recognition revolutionized our quality control process. Defect detection improved by 90% and production efficiency increased significantly.",
    rating: 5,
    avatar: "/api/placeholder/60/60"
  }
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-cyan-50/50" />
        <div className="container-custom relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
              AI Products & Platforms
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6">
              Powerful AI Products{" "}
              <span className="gradient-text">Ready to Deploy</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover our suite of intelligent products designed to solve real-world business challenges. 
              From AI assistants to advanced analytics, our solutions are built for scale and performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Explore Products <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-20 lg:py-32">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800">Featured Products</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
              Our Product Portfolio
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive range of AI products, each designed to address specific business needs 
              with cutting-edge technology and user-friendly interfaces.
            </p>
          </div>

          <div className="space-y-16">
            {products.map((product, index) => {
              const IconComponent = product.icon
              const isEven = index % 2 === 0
              
              return (
                <div key={product.id} className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Product Image */}
                  <div className={`${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="relative group">
                      <div className={`absolute inset-0 bg-gradient-to-br ${product.color} rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300`} />
                      <Card className="relative overflow-hidden border-2 shadow-xl">
                        <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                          <IconComponent className="h-24 w-24 text-gray-400" />
                        </div>
                      </Card>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <Badge className="mb-4 bg-blue-100 text-blue-800">
                      {product.category}
                    </Badge>
                    <h3 className="text-3xl lg:text-4xl font-bold font-heading mb-4">
                      {product.name}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-6">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="font-semibold">{product.rating}</span>
                      <span className="text-muted-foreground">({product.reviews} reviews)</span>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="font-semibold mb-4">Key Features:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        View Pricing <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button size="lg" variant="outline">
                        Try Free Demo
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800">Pricing Plans</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
              Choose Your Perfect Plan
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your business. Start with our starter plan 
              and upgrade as you grow.
            </p>
          </div>

          {/* Featured Product Pricing - SaivyyAI Assistant */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold font-heading mb-2">SaivyyAI Assistant</h3>
              <p className="text-muted-foreground">Most popular product</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(products[0].pricing).map(([plan, details], index) => (
                <Card key={plan} className={`relative ${plan === 'professional' ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
                  {plan === 'professional' && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-blue-500 text-white">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl font-heading capitalize">{plan}</CardTitle>
                    <div className="text-3xl font-bold">
                      {details.price}
                      <span className="text-lg font-normal text-muted-foreground">{details.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {details.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${plan === 'professional' ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                      variant={plan === 'professional' ? 'default' : 'outline'}
                    >
                      {plan === 'enterprise' ? 'Contact Sales' : 'Get Started'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-800">Product Features</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
              Built for Performance & Scale
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our products are engineered with enterprise-grade features to ensure reliability, 
              security, and optimal performance at any scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-heading group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </CardTitle>
                    <CardDescription>
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Customer Stories</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what industry leaders are saying about our AI products 
              and the impact they've made on their businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                      <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container-custom">
          <Card className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 border-0">
            <CardContent className="p-12 text-center text-white">
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
                  Ready to Transform Your Operations?
                </h2>
                <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                  Join thousands of companies already using our AI products to drive growth, 
                  improve efficiency, and stay ahead of the competition.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                    Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Schedule Demo
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