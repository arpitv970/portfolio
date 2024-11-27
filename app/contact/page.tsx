"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, GithubIcon, TwitterIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

const contactDetails = [
  {
    icon: <Mail className="h-5 w-5 text-primary" />,
    label: "Email",
    value: "arpitv970@gmail.com",
    href: "mailto:arpitv970@gmail.com",
  },
  {
    icon: <GithubIcon className="h-5 w-5 text-primary" />,
    label: "GitHub",
    value: "@arpitv970",
    href: "https://github.com/arpitv970",
  },
  {
    icon: <TwitterIcon className="h-5 w-5 text-primary" />,
    label: "X",
    value: "@arpitv970",
    href: "https://twitter.com/arpitv970",
  },
  {
    icon: <LinkedinIcon className="h-5 w-5 text-primary" />,
    label: "LinkedIn",
    value: "@arpitv970",
    href: "https://www.linkedin.com/in/arpitv970",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              {`Let's discuss your project and see how I can help bring your ideas to life.`}
            </p>

            <div className="flex gap-4 flex-col">
              {contactDetails.map((detail, index) => (
                <Link href={detail.href} key={index}>
                  <Card className="p-4">
                    <div className="flex items-center gap-4">
                      {detail.icon}
                      <div>
                        <p className="font-medium">{detail.label}</p>
                        <p className="text-muted-foreground">{detail.value}</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your project..."
                  className="min-h-[150px]"
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
