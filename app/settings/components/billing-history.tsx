"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function BillingHistory() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-4 border-b">
            <div>
              <p className="font-medium">Pro Plan - Monthly</p>
              <p className="text-sm text-muted-foreground">April 1, 2024</p>
            </div>
            <div className="text-right">
              <p className="font-medium">$19.00</p>
              <Button variant="link" className="text-sm">Download</Button>
            </div>
          </div>
          <div className="flex items-center justify-between pb-4 border-b">
            <div>
              <p className="font-medium">Pro Plan - Monthly</p>
              <p className="text-sm text-muted-foreground">March 1, 2024</p>
            </div>
            <div className="text-right">
              <p className="font-medium">$19.00</p>
              <Button variant="link" className="text-sm">Download</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}