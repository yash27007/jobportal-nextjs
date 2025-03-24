"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BriefcaseIcon, Building2Icon, CalendarIcon } from "lucide-react";

interface AppliedJob {
  id: number;
  title: string;
  company: string;
  appliedDate: string;
  status: "pending" | "interview" | "rejected";
}

const appliedJobs: AppliedJob[] = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tech Corp",
    appliedDate: "2024-03-15",
    status: "interview"
  },
  {
    id: 2,
    title: "Full Stack Engineer",
    company: "StartUp Inc",
    appliedDate: "2024-03-14",
    status: "pending"
  },
  {
    id: 3,
    title: "React Developer",
    company: "Big Tech Ltd",
    appliedDate: "2024-03-10",
    status: "rejected"
  }
];

const statusStyles = {
  pending: "bg-yellow-100 text-yellow-800",
  interview: "bg-green-100 text-green-800",
  rejected: "bg-red-100 text-red-800"
};

const statusLabels = {
  pending: "Application Under Review",
  interview: "Selected for Interview",
  rejected: "Application Rejected"
};

export default function AppliedJobsPage() {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold">Applied Jobs</h1>
        
        <div className="space-y-4">
          {appliedJobs.map((job) => (
            <Card key={job.id} className="p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{job.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Building2Icon className="h-4 w-4" />
                    <span>{job.company}</span>
                    <CalendarIcon className="h-4 w-4 ml-2" />
                    <span>Applied on {job.appliedDate}</span>
                  </div>
                </div>
                <Badge className={statusStyles[job.status]}>
                  {statusLabels[job.status]}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}