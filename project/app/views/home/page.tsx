"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { BriefcaseIcon, Rocket, Users, Trophy } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      
      <nav className="fixed w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
        <div className="container max-w-6xl mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            {/* <BriefcaseIcon className="h-6 w-6 text-primary" /> */}
            <span className="text-xl font-bold">JobSeek</span>
          </div>
          <div className="flex gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Sign In</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogTitle>Sign In to Your Account</DialogTitle>
                <div className="grid gap-6 py-4">
                  <div className="flex flex-col space-y-4 text-center">
                    <h3 className="text-2xl font-semibold tracking-tight">Sign In</h3>
                    <p className="text-sm text-muted-foreground">Enter your credentials to access your account</p>
                  </div>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Image src="/google.svg" alt="Google" width={20} height={20} />
                    Sign in with Google
                  </Button>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <Separator />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                    </div>
                  </div>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="m@example.com" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" />
                    </div>
                    <Button className="bg-primary hover:bg-primary/90">Sign In</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90">Sign Up</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogTitle>Sign Up to Your Account</DialogTitle>
                <div className="grid gap-6 py-4">
                  <div className="flex flex-col space-y-4 text-center">
                    <h3 className="text-2xl font-semibold tracking-tight">Sign Up</h3>
                    <p className="text-sm text-muted-foreground">Enter your credentials to create your account</p>
                  </div>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Image src="/google.svg" alt="Google" width={20} height={20} />
                    Sign up with Google
                  </Button>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <Separator />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                    </div>
                  </div>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="signupEmail">Email</Label>
                      <Input id="signupEmail" type="email" placeholder="m@example.com" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="signupPassword">Password</Label>
                      <Input id="signupPassword" type="password" />
                    </div>
                    <Button className="bg-primary hover:bg-primary/90">Sign Up</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-8 max-w-xl">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                Unlock Your Career
                <span className="text-primary"> Potential</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Your journey to professional success begins here. Connect with leading companies and discover opportunities that match your ambitions.
              </p>
              <Button className="bg-primary hover:bg-primary/90 w-fit text-lg px-8 py-6">Get Started</Button>
            </div>
            <div className="relative h-[400px] w-full max-w-lg mx-auto">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000"
                alt="Professional team meeting"
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">About JobSeek</h2>
            <p className="text-lg text-muted-foreground">
              We're more than just a job portal. We're your career partner, committed to connecting talented professionals with opportunities that matter.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] w-full max-w-lg mx-auto">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000"
                alt="Team collaboration"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="space-y-8 max-w-xl">
              <h3 className="text-2xl font-semibold">Our Mission</h3>
              <p className="text-muted-foreground">
                At JobSeek, we believe everyone deserves a fulfilling career. Our platform leverages cutting-edge technology to match talented individuals with companies that share their values and ambitions.
              </p>
              <ul className="space-y-6">
                <li className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-lg">Connect with industry leaders</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-lg">Accelerate your career growth</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-lg">Achieve your professional goals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose JobSeek</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center gap-4 p-8 bg-card rounded-lg shadow-sm">
              <div className="p-4 bg-primary/10 rounded-full">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Professional Network</h3>
              <p className="text-muted-foreground">
                Build meaningful connections with industry professionals and leading companies.
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-4 p-8 bg-card rounded-lg shadow-sm">
              <div className="p-4 bg-primary/10 rounded-full">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Career Growth</h3>
              <p className="text-muted-foreground">
                Access resources and opportunities that accelerate your professional development.
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-4 p-8 bg-card rounded-lg shadow-sm">
              <div className="p-4 bg-primary/10 rounded-full">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Success Stories</h3>
              <p className="text-muted-foreground">
                Join thousands of professionals who found their dream careers through JobSeek.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}