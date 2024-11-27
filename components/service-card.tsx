import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  features: string[]
}

export function ServiceCard({ title, description, icon: Icon, features }: ServiceCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all">
      <CardHeader className="p-6">
        <div className="flex items-start gap-4">
          <Icon className="h-8 w-8 text-primary mt-1" />
          <div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}