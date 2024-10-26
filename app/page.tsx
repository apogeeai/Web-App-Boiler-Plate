"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Cpu, Globe, LineChart, Lock, Rocket, Shield, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Animated Gradient */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient-x"></div>
        <div className="relative max-w-[1260px] min-w-[420px] mx-auto px-4 py-24">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-100">
                Build Faster, Scale Better
              </span>
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Enterprise-grade solutions with modern architecture and powerful features
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20">
                Live Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-[1260px] min-w-[420px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Powered by Modern Tech</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Rocket className="h-6 w-6" />, label: "Next.js" },
              { icon: <Code className="h-6 w-6" />, label: "TypeScript" },
              { icon: <Shield className="h-6 w-6" />, label: "Security" },
              { icon: <Globe className="h-6 w-6" />, label: "Global Edge" },
            ].map((tech, i) => (
              <Card key={i} className="group hover:shadow-lg transition-all">
                <CardContent className="p-6 flex flex-col items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </div>
                  <p className="font-semibold">{tech.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Tabs Section */}
      <section className="py-20">
        <div className="max-w-[1260px] min-w-[420px] mx-auto px-4">
          <Tabs defaultValue="performance" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3 lg:w-[600px] mx-auto">
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            {[
              {
                value: "performance",
                icon: <Zap className="h-12 w-12 text-blue-500" />,
                title: "Lightning Fast",
                description: "Optimized for speed and efficiency",
              },
              {
                value: "security",
                icon: <Lock className="h-12 w-12 text-green-500" />,
                title: "Enterprise Security",
                description: "Bank-grade protection for your data",
              },
              {
                value: "analytics",
                icon: <LineChart className="h-12 w-12 text-purple-500" />,
                title: "Deep Insights",
                description: "Comprehensive analytics and reporting",
              },
            ].map((tab) => (
              <TabsContent key={tab.value} value={tab.value}>
                <Card>
                  <CardHeader className="space-y-1 flex flex-row items-start gap-4">
                    {tab.icon}
                    <div>
                      <CardTitle className="text-2xl">{tab.title}</CardTitle>
                      <CardDescription>{tab.description}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="grid grid-cols-2 gap-6">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Badge variant="secondary" className="w-8 h-8 rounded-full" />
                          <p className="text-sm">Feature {i + 1}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-[1260px] min-w-[420px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "99.9%", label: "Uptime" },
              { value: "24/7", label: "Support" },
              { value: "100+", label: "Countries" },
              { value: "1M+", label: "Users" },
            ].map((stat, i) => (
              <Card key={i} className="group hover:scale-105 transition-transform">
                <CardContent className="p-6 text-center">
                  <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-[1260px] min-w-[420px] mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of developers building better applications
          </p>
          <Button size="lg" className="group">
            Start Building
            <Cpu className="ml-2 group-hover:rotate-180 transition-transform duration-500" />
          </Button>
        </div>
      </section>
    </div>
  )
}