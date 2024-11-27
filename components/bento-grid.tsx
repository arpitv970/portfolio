import { Card, CardContent } from "@/components/ui/card"
import { Code2, Rocket, Clock, MessageSquare, Sparkles, Shield } from "lucide-react"

const benefits = [
  {
    title: "Clean, Modern Code",
    description: "Writing maintainable, scalable code using the latest technologies and best practices.",
    icon: Code2,
  },
  {
    title: "Fast Delivery",
    description: "Quick turnaround times without compromising on quality.",
    icon: Rocket,
  },
  {
    title: "Timely Communication",
    description: "Regular updates and transparent communication throughout the project.",
    icon: Clock,
  },
  {
    title: "Collaborative Approach",
    description: "Working closely with you to understand and achieve your vision.",
    icon: MessageSquare,
  },
  {
    title: "Innovation Focus",
    description: "Bringing creative solutions and fresh perspectives to every project.",
    icon: Sparkles,
  },
  {
    title: "Security First",
    description: "Implementing robust security measures to protect your applications.",
    icon: Shield,
  },
]

export function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {benefits.map((benefit, index) => {
        const Icon = benefit.icon
        return (
          <Card key={index} className="group hover:shadow-lg transition-all">
            <CardContent className="p-6">
              <Icon className="h-8 w-8 mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}