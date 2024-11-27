import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const clientProjects = [
  {
    title: "FinTech Dashboard",
    client: "Global Finance Corp",
    description: "Enterprise-grade financial analytics dashboard with real-time data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    tags: ["React", "TypeScript", "D3.js", "WebSocket"],
    year: "2023",
  },
  {
    title: "E-Learning Platform",
    client: "EduTech Solutions",
    description: "Comprehensive learning management system with video streaming capabilities.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    tags: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    year: "2022",
  },
  {
    title: "Healthcare Portal",
    client: "MedCare Systems",
    description: "HIPAA-compliant patient management system with telemedicine features.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
    tags: ["React", "Express", "MongoDB", "Socket.io"],
    year: "2022",
  },
]

export default function ClientProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Client Projects</h1>
      <div className="space-y-8">
        {clientProjects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-64 md:h-auto">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 flex flex-col justify-center">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    <p className="text-primary">{project.client}</p>
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">Completed in {project.year}</p>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}