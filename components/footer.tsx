import Link from "next/link";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4">
          <div className="text-lg font-semibold">
            <span className="text-primary">&lt;</span>
            Arpit
            <span className="text-primary">/&gt;</span>
          </div>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/arpitv970"
              className="hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.instagram.com/arpitv970"
              className="hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="https://x.com/arpitv970"
              className="hover:text-primary transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/arpitv970"
              className="hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Arpit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
