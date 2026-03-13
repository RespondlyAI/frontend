"use client"

import Image from "next/image"
import { Button } from "@repo/ui/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/components/ui/card"
import { Input } from "@repo/ui/components/ui/input"
import { Label } from "@repo/ui/components/ui/label"
import { Textarea } from "@repo/ui/components/ui/textarea"
import { ThemeToggle } from "@repo/ui/components/ui/theme-toggle"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/ui/select"

export default function OrgPage() {
  return (
    <main className="min-h-screen overflow-y-auto px-3 py-4 sm:px-5 sm:py-5 lg:h-screen lg:overflow-hidden">
      <ThemeToggle className="fixed right-4 top-4 z-50 border-zinc-600 bg-zinc-900 text-zinc-100 hover:bg-zinc-800" />
      <div className="mx-auto w-full max-w-5xl space-y-4 lg:space-y-3">
        <div className="mx-auto w-fit px-1 py-1">
          <Image
            src="/DARK_LOGO.png"
            alt="Respondly AI"
            width={460}
            height={160}
            className="brand-logo-dark h-24 w-auto"
            priority
          />
          <Image
            src="/LIGHT_LOGO.png"
            alt="Respondly AI"
            width={460}
            height={160}
            className="brand-logo-light h-24 w-auto"
            priority
          />
        </div>

        <div className="space-y-1 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            New Organization
          </h1>
          <p className="text-sm text-zinc-400">
            Set up your workspace and initial credentials
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-3">
          {/* Organization Details */}
          <Card className="border-zinc-800/80 bg-zinc-900/70 text-white shadow-xl backdrop-blur">
            <CardHeader className="px-4 pb-2 pt-4">
              <CardTitle className="text-xl">Organization Details</CardTitle>
            </CardHeader>

            <CardContent className="space-y-3 px-4 pb-4 pt-0">
              <div className="space-y-1.5">
                <Label className="text-zinc-200">Organization Name</Label>
                <Input
                  className="h-9 border-zinc-700 bg-zinc-950/70 text-zinc-100 placeholder:text-zinc-500"
                  placeholder="e.g. Acme Corp"
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-zinc-200">Description</Label>
                <Textarea
                  className="min-h-20 border-zinc-700 bg-zinc-950/70 text-zinc-100 placeholder:text-zinc-500"
                  placeholder="Briefly describe your organization..."
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-zinc-200">Domain</Label>
                <Input
                  className="h-9 border-zinc-700 bg-zinc-950/70 text-zinc-100 placeholder:text-zinc-500"
                  placeholder="Enter domain"
                />
              </div>
            </CardContent>
          </Card>

          {/* User Credentials */}
          <Card className="border-zinc-800/80 bg-zinc-900/70 text-white shadow-xl backdrop-blur">
            <CardHeader className="px-4 pb-2 pt-4">
              <CardTitle className="text-xl">User Credentials</CardTitle>
            </CardHeader>

            <CardContent className="space-y-3 px-4 pb-4 pt-0">
              <div className="space-y-1.5">
                <Label className="text-zinc-200">Email</Label>
                <Input
                  className="h-9 border-zinc-700 bg-zinc-950/70 text-zinc-100 placeholder:text-zinc-500"
                  placeholder="name@company.com"
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-zinc-200">Password</Label>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-[1fr_auto]">
                  <Input
                    className="h-9 border-zinc-700 bg-zinc-950/70 text-zinc-100 placeholder:text-zinc-500"
                    type="password"
                    placeholder="Enter password"
                  />
                  <Button
                    type="button"
                    variant="secondary"
                    className="h-9 border border-zinc-700 bg-zinc-800 text-zinc-100 hover:bg-zinc-700"
                  >
                    Auto-generate
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-zinc-200">Initial Role</Label>

                <Select>
                  <SelectTrigger className="h-10 border-zinc-700 bg-zinc-950/70 px-3 text-zinc-100">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>

                  <SelectContent className="border-zinc-700 bg-zinc-900 p-1 text-zinc-100">
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="employee">Employee</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bulk Upload */}
        <Card className="border-zinc-800/80 bg-zinc-900/70 text-white shadow-xl backdrop-blur">
          <CardHeader className="px-4 pb-2 pt-4">
            <CardTitle className="text-xl">Bulk Upload</CardTitle>
          </CardHeader>

          <CardContent className="grid grid-cols-1 gap-3 px-4 pb-4 pt-0 sm:grid-cols-2">
            <button
              type="button"
              className="rounded-lg border border-dashed border-zinc-700 bg-zinc-950/40 p-4 text-left transition hover:border-zinc-500"
            >
              <p className="font-semibold text-zinc-200">Add Admin (JSON)</p>
              <p className="mt-2 text-sm text-zinc-500">Click to upload JSON</p>
            </button>

            <button
              type="button"
              className="rounded-lg border border-dashed border-zinc-700 bg-zinc-950/40 p-4 text-left transition hover:border-zinc-500"
            >
              <p className="font-semibold text-zinc-200">Add Employee (JSON)</p>
              <p className="mt-2 text-sm text-zinc-500">Click to upload JSON</p>
            </button>
          </CardContent>
        </Card>

        {/* Submit */}
        <Button className="h-10 w-full bg-blue-500 text-sm font-semibold text-white hover:bg-blue-400">
          Create Organization
        </Button>
        <button type="button" className="mx-auto block text-sm text-zinc-400 hover:text-zinc-200">
          Cancel
        </button>
      </div>
    </main>
  )
}