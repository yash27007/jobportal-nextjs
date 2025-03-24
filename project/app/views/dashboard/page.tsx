"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { BriefcaseIcon, MapPinIcon, Clock, Building2Icon } from "lucide-react";
import Image from "next/image";

interface JobListing {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  skills: string[];
  logo: string;
}

const jobListings: JobListing[] = [
  {
    id: 1,
    title: "Front-End Developer",
    company: "XYZ Labs",
    location: "Remote",
    type: "Full-time",
    salary: "5 000 - 10 000$",
    skills: ["JavaScript", "React", "TypeScript", "Tailwind"],
    logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop"
  },
  {
    id: 2,
    title: "Web3 Developer",
    company: "Acme Inc",
    location: "San Francisco",
    type: "Full-time",
    salary: "9 000 - 18 000$",
    skills: ["Solidity", "JavaScript", "React", "Blockchain"],
    logo: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?w=100&h=100&fit=crop"
  },
  {
    id: 3,
    title: "ReactJS Developer",
    company: "The Nano Foundation",
    location: "New York",
    type: "Full-time",
    salary: "35 000 - 48 000$",
    skills: ["JavaScript", "React", "Node.js"],
    logo: "https://images.unsplash.com/photo-1572177812156-58036aae439c?w=100&h=100&fit=crop"
  }
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Are you looking for your dream <span className="text-primary">job</span>?
          </h1>
          <p className="text-xl text-muted-foreground">We can help you with that!</p>
          <Button className="bg-primary hover:bg-primary/90 w-fit">Search a job</Button>
        </div>

        {/* Search Filters */}
        <div className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Filter your search results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <Label>JOB TITLE</Label>
              <Input placeholder="e.g. Frontend, Product..." />
            </div>
            <div className="space-y-2">
              <Label>LOCATION</Label>
              <Input placeholder="City, Country..." />
            </div>
            <div className="space-y-2">
              <Label>DISTANCE</Label>
              <Slider defaultValue={[50]} max={100} step={1} className="py-4" />
            </div>
            <div className="space-y-2">
              <Label>BUDGET ($)</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5-10">5 000 - 10 000</SelectItem>
                  <SelectItem value="10-20">10 000 - 20 000</SelectItem>
                  <SelectItem value="20-35">20 000 - 35 000</SelectItem>
                  <SelectItem value="35-50">35 000 - 50 000</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>LEVEL</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="junior">Junior</SelectItem>
                  <SelectItem value="mid">Mid-Level</SelectItem>
                  <SelectItem value="senior">Senior</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>PROJECT TYPE</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="short">Short Term</SelectItem>
                  <SelectItem value="long">Long Term</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>COMPANY SIZE</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">Small (1-10)</SelectItem>
                  <SelectItem value="medium">Medium (11-50)</SelectItem>
                  <SelectItem value="large">Large (50+)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>AVAILABILITY</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select availability" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full">Full Time</SelectItem>
                  <SelectItem value="part">Part Time</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-center justify-end gap-2 mt-4">
            <Label htmlFor="remote">REMOTE ONLY</Label>
            <Switch id="remote" />
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">We found 25 jobs available for you</p>
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Sort by: Date of publication" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">Date of publication</SelectItem>
                <SelectItem value="salary">Salary</SelectItem>
                <SelectItem value="relevance">Relevance</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {jobListings.map((job) => (
            <Card key={job.id} className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-lg overflow-hidden relative flex-shrink-0">
                    <Image
                      src={job.logo}
                      alt={job.company}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{job.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <BriefcaseIcon className="h-4 w-4" />
                      <span>{job.company}</span>
                      <MapPinIcon className="h-4 w-4 ml-2" />
                      <span>{job.location}</span>
                      <Clock className="h-4 w-4 ml-2" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="rounded-full">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="font-semibold">{job.salary}</span>
                  <Button>Apply</Button>
                </div>
              </div>
            </Card>
          ))}

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <Button variant="outline" size="icon">1</Button>
            <Button variant="outline" size="icon">2</Button>
            <Button variant="outline" size="icon">3</Button>
            <span>...</span>
            <Button variant="outline" size="icon">12</Button>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-muted/30 rounded-lg p-8 mt-16">
          <h2 className="text-2xl font-bold mb-8">What the users said about us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full overflow-hidden relative">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                    alt="User"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Adam Garner</h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    "I just wanted to let you know that you guys do a really good job. I found here my dream job!"
                  </p>
                </div>
              </div>
            </Card>
            {/* Add more testimonials as needed */}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary/10 rounded-lg p-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Does your company need great employees?</h2>
            <p className="text-muted-foreground mt-2">To post a job offer visit our subpage For Employer</p>
          </div>
          <Button variant="outline">Post a Job</Button>
        </div>
      </div>
    </div>
  );
}