"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const plans = [
  {
    id: "free",
    name: "Free",
    description: "For personal projects and learning",
    price: "$0/month",
    features: ["Up to 3 projects", "Basic analytics", "Community support"],
  },
  {
    id: "pro",
    name: "Pro",
    description: "For professional developers",
    price: "$19/month",
    features: ["Unlimited projects", "Advanced analytics", "Priority support", "Custom domains"],
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For large teams and organizations",
    price: "Contact us",
    features: [
      "Everything in Pro",
      "Custom integrations",
      "24/7 phone support",
      "SLA guarantee",
      "Dedicated account manager",
    ],
  },
]

export function SubscriptionPlans() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {plans.map((plan) => (
        <Card key={plan.id} className={plan.popular ? "border-primary" : ""}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>{plan.name}</CardTitle>
              {plan.popular && <Badge>Popular</Badge>}
            </div>
            <CardDescription>{plan.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-3xl font-bold">{plan.price}</div>
            <RadioGroup defaultValue="free" className="space-y-1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value={plan.id} id={plan.id} />
                <label htmlFor={plan.id} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Select {plan.name} Plan
                </label>
              </div>
            </RadioGroup>
            <ul className="space-y-2 text-sm">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <svg
                    className="h-4 w-4 flex-shrink-0 text-primary"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="ml-2">{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
              {plan.id === "enterprise" ? "Contact Sales" : "Upgrade"}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}