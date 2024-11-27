import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution built with Next.js and Stripe integration.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    link: "/projects/e-commerce",
  },
  {
    title: "Task Management App",
    description: "Real-time task management application with team collaboration features.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    link: "/projects/task-manager",
  },
  {
    title: "AI Content Generator",
    description: "AI-powered content generation tool using OpenAI's GPT-3 API.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    tags: ["OpenAI", "Next.js", "TypeScript", "Tailwind"],
    link: "/projects/ai-generator",
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management and monitoring.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    tags: ["React", "D3.js", "Firebase", "Material-UI"],
    link: "/projects/dashboard",
  },
  {
    title: "Weather App",
    description: "Real-time weather forecasting with interactive maps.",
    image: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8",
    tags: ["React", "OpenWeather API", "Mapbox", "CSS Modules"],
    link: "/projects/weather",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website built with modern technologies.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    link: "/projects/portfolio",
  },
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Personal Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden group">
            <CardHeader className="p-0">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}