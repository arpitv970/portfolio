import { Button } from "@/components/ui/button";
import { ClientTestimonials } from "@/components/client-testimonials";
import { BentoGrid } from "@/components/bento-grid";
import { FeaturedProjects } from "@/components/featured-projects";
import { SectionWrapper } from "@/components/section-wrapper";
import Link from "next/link";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/20 relative z-10">
        <div className="space-y-6 text-center">
          <p className="text-3xl md:text-4xl font-semibold tracking-wide">
            {`I'm`} <span className="italic font-serif font-black">Arpit</span>{" "}
            👋
          </p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            Crafting seamless web experiences with precision and creativity.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {`A Full Stack Developer passionate about building exceptional digital experiences that make a difference.`}
          </p>
          <Button asChild size="lg" className="mt-8 z-10">
            <Link href="/contact">{`Let's Work Together`}</Link>
          </Button>
        </div>
        <GridPattern
          width={50}
          height={50}
          x={-1}
          y={-1}
          strokeDasharray={"4 2"}
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
          )}
        />
      </SectionWrapper>

      {/* Testimonials Section */}
      <SectionWrapper background="muted">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Clients Say
        </h2>
        <ClientTestimonials />
      </SectionWrapper>

      {/* Benefits Section */}
      <SectionWrapper>
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Work With Me
        </h2>
        <BentoGrid />
      </SectionWrapper>

      {/* Featured Projects Section */}
      <SectionWrapper background="muted">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <FeaturedProjects />
        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
