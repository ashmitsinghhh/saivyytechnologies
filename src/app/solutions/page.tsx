import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Brain, 
  Bot, 
  Database, 
  Cpu, 
  Shield, 
  Cloud, 
  Zap, 
  Target, 
  BarChart3, 
  Globe,
  ArrowRight,
  CheckCircle,
  Sparkles,
  TrendingUp,
  Users,
  Clock,
  Lightbulb,
  Code
} from "lucide-react"

const aiSolutions = [
  {
    title: "Intelligent Automation",
    description: "Streamline operations with AI-powered workflow automation and intelligent process optimization.",
    icon: Bot,
    features: ["Process Automation", "Workflow Optimization", "Smart Decision Making", "Resource Allocation"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Machine Learning Models",
    description: "Custom ML models tailored to your business needs for predictive analytics and pattern recognition.",
    icon: Brain,
    features: ["Predictive Analytics", "Pattern Recognition", "Anomaly Detection", "Recommendation Systems"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Data Intelligence",
    description: "Transform raw data into actionable insights with advanced analytics and visualization tools.",
    icon: Database,
    features: ["Data Processing", "Real-time Analytics", "Business Intelligence", "Custom Dashboards"],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Computer Vision",
    description: "Advanced image and video analysis for quality control, security, and content recognition.",
    icon: Target,
    features: ["Object Detection", "Image Classification", "Quality Control", "Security Monitoring"],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Natural Language Processing",
    description: "Understand and process human language for chatbots, sentiment analysis, and content generation.",
    icon: Sparkles,
    features: ["Chatbots & Virtual Assistants", "Sentiment Analysis", "Content Generation", "Language Translation"],
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Cloud AI Solutions",
    description: "Scalable AI infrastructure deployed on cloud platforms for maximum performance and reliability.",
    icon: Cloud,
    features: ["Scalable Infrastructure", "Global Deployment", "High Availability", "Cost Optimization"],
    color: "from-teal-500 to-blue-500"
  }
]

const technologies = [
  {
    name: "TensorFlow",
    category: "Machine Learning",
    description: "Deep learning framework for building and deploying ML models"
  },
  {
    name: "PyTorch",
    category: "Machine Learning", 
    description: "Dynamic neural network framework for research and production"
  },
  {
    name: "AWS SageMaker",
    category: "Cloud AI",
    description: "Fully managed service for building ML models at scale"
  },
  {
    name: "Azure Cognitive Services",
    category: "Cloud AI",
    description: "Pre-built AI services for vision, speech, and language"
  },
  {
    name: "OpenAI GPT",
    category: "Language Models",
    description: "Advanced language models for text generation and understanding"
  },
  {
    name: "Docker & Kubernetes",
    category: "DevOps",
    description: "Containerization and orchestration for AI workloads"
  }
]

const processSteps = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description: "We analyze your business requirements and identify AI opportunities",
    icon: Lightbulb
  },
  {
    step: "02", 
    title: "Strategy & Planning",
    description: "Develop a comprehensive AI strategy aligned with your business goals",
    icon: BarChart3
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Build and rigorously test AI solutions using cutting-edge technologies",
    icon: Code
  },
  {
    step: "04",
    title: "Deployment & Integration",
    description: "Deploy solutions seamlessly into your existing infrastructure",
    icon: Zap
  },
  {
    step: "05",
    title: "Monitoring & Optimization",
    description: "Continuously monitor performance and optimize for better results",
    icon: TrendingUp
  }
]

const benefits = [
  {
    title: "Increased Efficiency",
    description: "Automate repetitive tasks and optimize workflows for 50% productivity gains",
    icon: Clock
  },
  {
    title: "Data-Driven Decisions",
    description: "Make informed decisions based on real-time insights and predictive analytics", 
    icon: BarChart3
  },
  {
    title: "Enhanced Customer Experience",
    description: "Deliver personalized experiences through AI-powered recommendations",
    icon: Users
  },
  {
    title: "Competitive Advantage",
    description: "Stay ahead of competition with cutting-edge AI technologies",
    icon: TrendingUp
  }
]

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-cyan-50/50" />
        <div className="container-custom relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
              AI Solutions & Services
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6">
              Transform Your Business with{" "}
              <span className="gradient-text">Intelligent Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Harness the power of artificial intelligence to drive innovation, automate processes, 
              and unlock new opportunities for growth. Our comprehensive AI solutions are designed 
              to meet your unique business challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Explore Solutions <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions Grid */}
      <section className="py-20 lg:py-32">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800">Our Expertise</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
              Comprehensive AI Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From machine learning models to intelligent automation, we deliver end-to-end AI solutions 
              that transform how you operate and compete in the digital age.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiSolutions.map((solution, index) => {
              const IconComponent = solution.icon
              return (
                <Card 
                  key={index} 
                  className="group relative overflow-hidden border-2 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-blue-200"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  <CardHeader className="relative">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${solution.color} flex items-center justify-center mb-4`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-heading group-hover:text-blue-600 transition-colors">
                      {solution.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant="ghost" 
                      className="w-full mt-4 group-hover:bg-blue-50 group-hover:text-blue-600"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800">Our Process</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
              How We Deliver AI Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our proven methodology ensures successful AI implementation from concept to deployment, 
              with continuous optimization for maximum business impact.
            </p>
          </div>

          <div className="relative">
            {/* Process Steps */}
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon
                return (
                  <div key={index} className="relative text-center">
                    {/* Connector Line */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 transform translate-x-4" />
                    )}
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="mb-2">
                        <span className="text-sm font-mono text-blue-600 font-semibold">
                          {step.step}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold font-heading mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 lg:py-32">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-800">Technology Stack</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
              Cutting-Edge Technologies
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We leverage the latest AI frameworks, cloud platforms, and development tools 
              to build robust, scalable solutions that deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-heading">{tech.name}</CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {tech.category}
                    </Badge>
                  </div>
                  <CardDescription>
                    {tech.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Benefits</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
              Why Choose Our AI Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Transform your business with measurable results and sustainable competitive advantages 
              through our comprehensive AI solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold font-heading mb-4 group-hover:text-blue-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
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
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                  Partner with us to implement AI solutions that drive growth, efficiency, and innovation. 
                  Let's discuss how we can help you achieve your business objectives.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                    Start Your AI Journey <ArrowRight className="ml-2 h-4 w-4" />
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