"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"
import { SubscriptionPlans } from "./components/subscription-plans"
import { BillingHistory } from "./components/billing-history"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  notifications: z.boolean().default(true),
})

export default function SettingsPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      notifications: true,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success("Settings updated successfully!")
  }

  return (
    <div className="space-y-6 min-w-[420px] max-w-[1260px] mx-auto px-4">
      <div>
        <h3 className="text-lg font-medium">Settings</h3>
        <p className="text-sm text-muted-foreground">
          Manage your account settings and subscription.
        </p>
      </div>
      <Separator />
      
      <div className="grid gap-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="email@example.com" {...field} />
                    </FormControl>
                    <FormDescription>
                      Your email address for notifications.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="notifications"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        Enable notifications
                      </FormLabel>
                      <FormDescription>
                        Receive notifications about updates and announcements.
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit">Save changes</Button>
          </form>
        </Form>

        <div className="space-y-4">
          <h4 className="text-lg font-medium">Subscription Plan</h4>
          <SubscriptionPlans />
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-medium">Billing History</h4>
          <BillingHistory />
        </div>
      </div>
    </div>
  )
}