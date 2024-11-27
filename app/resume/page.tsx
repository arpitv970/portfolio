"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Briefcase, GraduationCap, Code } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">Resume</h1>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>

        {/* Experience */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="h-5 w-5" />
            <h2 className="text-2xl font-semibold">Experience</h2>
          </div>
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold">Full Stack Developer</h3>
              <p className="text-muted-foreground">
                EHR Logic • March 2023 – Present
              </p>
              <ul className="mt-4 space-y-2 list-disc list-inside text-muted-foreground">
                <li>
                  Designed and implemented efficient user interfaces and APIs
                  for blood bank projects using Next.js, React.js, Node.js, and
                  Express.js.
                </li>
                <li>
                  Managed data with MySQL and Sequelize ORM for streamlined
                  performance.
                </li>
                <li>
                  Handled DevOps tasks with Docker, Kubernetes, and Terraform,
                  ensuring smooth deployments.
                </li>
                <li>
                  Utilized AWS services for scalable and reliable applications.
                </li>
                <li>
                  Built CI/CD pipelines with Jenkins, ensuring fast and
                  automated workflows.
                </li>
                <li>
                  Conducted monitoring and logging using Prometheus and Grafana
                  for performance reliability.
                </li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold">Frontend Developer</h3>
              <p className="text-muted-foreground">
                JUMakerSpace, JECRC University • June 2022 - Jan 2023
              </p>
              <ul className="mt-4 space-y-2 list-disc list-inside text-muted-foreground">
                <li>
                  Developed dynamic and responsive landing pages using Next.js
                  and TypeScript.
                </li>
                <li>
                  Increased user engagement by attracting 500+ new users with
                  enhanced interfaces.
                </li>
                <li>
                  Streamlined hackathon organization, improving event management
                  efficiency.
                </li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold">
                Frontend Developer Intern
              </h3>
              <p className="text-muted-foreground">
                Eventia Pro • Jan 2022 – April 2022
              </p>
              <ul className="mt-4 space-y-2 list-disc list-inside text-muted-foreground">
                <li>
                  Followed clean code practices to ensure high-quality
                  development.
                </li>
                <li>
                  Optimized user interfaces with Next.js and TypeScript,
                  improving SEO performance.
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Skills */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Code className="h-5 w-5" />
            <h2 className="text-2xl font-semibold">Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Full Stack</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>React.js, Next.js, TypeScript</p>
                <p>Node.js, Express.js, Nest.js</p>
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">DevOps & Database</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Docker, Jenkins, Kubernetes</p>
                <p>MySQL, PostgreSQL, MongoDB</p>
                <p>Terraform, Prometheus, Grafana</p>
              </div>
            </Card>
          </div>
        </section>

        {/* Education */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="h-5 w-5" />
            <h2 className="text-2xl font-semibold">Education</h2>
          </div>
          <Card className="p-6">
            <h3 className="text-xl font-semibold">
              B.Tech in Computer Science & Engineering
            </h3>
            <p className="text-muted-foreground">
              JECRC University, Jaipur • 2020 - 2024
            </p>
            <p className="mt-2 text-muted-foreground">
              Coursework: Data Structures and Algorithms, Operating Systems,
              System Design, Advanced Networking, DBMS.
            </p>
          </Card>
        </section>
      </div>
    </div>
  );
}
