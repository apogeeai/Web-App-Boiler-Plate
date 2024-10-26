"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StatusCards } from "./components/status-cards"
import { PerformanceChart } from "./components/performance-chart"
import { UserDistribution } from "./components/user-distribution"
import { ReportsList } from "./components/reports-list"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back to your dashboard.</p>
        </div>
        <Badge variant="secondary" className="px-4 py-1">Pro Plan</Badge>
      </div>

      <StatusCards />

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <PerformanceChart />
            <UserDistribution />
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Detailed Analytics</CardTitle>
              <CardDescription>
                In-depth analysis of system performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Page Views</p>
                    <p className="text-2xl font-bold">12,543</p>
                    <p className="text-xs text-muted-foreground">+15% from last week</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Bounce Rate</p>
                    <p className="text-2xl font-bold">42%</p>
                    <p className="text-xs text-muted-foreground">-3% from last week</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <ReportsList />
        </TabsContent>
      </Tabs>
    </div>
  )
}