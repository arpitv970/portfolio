import { SectionWrapper } from "@/components/section-wrapper"
import { ServiceCard } from "@/components/service-card"
import { 
  Layout, 
  Database, 
  Server, 
  CloudCog 
} from "lucide-react"

const services = [
  {
    title: "SEO Friendly & Responsive Frontend",
    description: "Creating elegant, mobile-first web applications with a focus on performance and user experience.",
    icon: Layout,
    features: [
      "Responsive design across all devices",
      "SEO optimization for better visibility",
      "Performance-optimized applications",
      "Modern UI/UX implementation",
      "Accessibility compliance",
      "Cross-browser compatibility"
    ]
  },
  {
    title: "Robust Backend Development",
    description: "Building scalable and secure backend systems that power your applications.",
    icon: Server,
    features: [
      "RESTful API development",
      "Microservices architecture",
      "Authentication & authorization",
      "Rate limiting & caching",
      "API documentation",
      "Server-side validation"
    ]
  },
  {
    title: "Database Management",
    description: "Designing and maintaining highly available database systems for optimal performance.",
    icon: Database,
    features: [
      "Database design & optimization",
      "Data migration & scaling",
      "Backup & recovery solutions",
      "Query optimization",
      "Data security implementation",
      "Real-time data processing"
    ]
  },
  {
    title: "Efficient DevOps",
    description: "Implementing modern DevOps practices for continuous delivery and deployment.",
    icon: CloudCog,
    features: [
      "CI/CD pipeline setup",
      "Container orchestration",
      "Cloud infrastructure management",
      "Monitoring & logging",
      "Security best practices",
      "Automated testing"
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="py-24">
      <SectionWrapper>
        <h1 className="text-4xl font-bold mb-6">Services</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
          Comprehensive full-stack development services tailored to your needs, 
          from frontend design to backend infrastructure.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </SectionWrapper>
    </div>
  )
}