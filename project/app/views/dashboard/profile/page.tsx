"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  "React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS",
  "GraphQL", "PostgreSQL", "AWS"
];

export default function ProfilePage() {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center gap-6">
          <Avatar className="h-24 w-24">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-muted-foreground">Senior Frontend Developer</p>
          </div>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">About Me</h2>
          <p className="text-muted-foreground">
            Passionate frontend developer with 5+ years of experience building modern web applications.
            Specialized in React and TypeScript, with a strong focus on creating beautiful and performant user interfaces.
          </p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Skills</h2>
            <Button variant="outline" size="sm">Edit Skills</Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p>john.doe@example.com</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Phone</p>
              <p>+1 (555) 123-4567</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p>San Francisco, CA</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}