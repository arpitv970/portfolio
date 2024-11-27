import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

const featuredProjects = [
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
]

export function FeaturedProjects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {featuredProjects.map((project, index) => (
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
          <CardFooter className="p-6 pt-0">
            <Link
              href={project.link}
              className="text-sm font-medium text-primary hover:underline"
            >
              View Project →
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}