"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ReportsList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Generated Reports</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <p className="font-medium">Monthly Performance Report</p>
              <p className="text-sm text-muted-foreground">Generated on April 1, 2024</p>
            </div>
            <Button variant="outline">Download</Button>
          </div>
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <p className="font-medium">User Activity Summary</p>
              <p className="text-sm text-muted-foreground">Generated on March 31, 2024</p>
            </div>
            <Button variant="outline">Download</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}