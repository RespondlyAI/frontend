import { Bell, ShieldCheck } from "lucide-react"

import { QueriesAi } from "../../../components/admin/queries-ai"
import { QueriesEmployees } from "../../../components/admin/queries-employees"
import { CustomersSection } from "../../../components/admin/customers-section"
import { DashboardHeader } from "../../../components/dashboard/header"
import { Sidebar } from "../../../components/dashboard/sidebar"
import { adminSidebar } from "../../../lib/roles"

export default function AdminDashboardPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar
        sections={adminSidebar}
        activeLabel="Global Solutions Org"
        userName="Alex Thompson"
        userRole="Admin"
      />

      <main className="flex-1 p-4 md:p-6">
        <DashboardHeader title="Queries Performance" />

        <section className="mb-4 rounded-xl border border-zinc-900 bg-black/70 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-md bg-blue-500/15 p-2 text-blue-400">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-zinc-100">Welcome back, Alex</h2>
                <p className="text-sm text-zinc-400">
                  Review AI automation efficiency and employee handling across your organization.
                </p>
              </div>
            </div>
            <button className="inline-flex items-center gap-2 rounded-md border border-zinc-800 px-3 py-2 text-xs font-semibold text-zinc-200 hover:bg-zinc-900">
              <Bell className="h-4 w-4" />
              Refresh Data
            </button>
          </div>
        </section>

        <section className="mb-4 space-y-3">
          <h3 className="text-xl font-semibold text-zinc-100">Resolution Overview</h3>
          <div className="grid gap-3 md:grid-cols-2">
            <QueriesAi />
            <QueriesEmployees />
          </div>
        </section>

        <section className="mb-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl border border-zinc-900 bg-black/70 p-4">
            <p className="text-xs text-zinc-500">Success Rate</p>
            <p className="text-4xl font-bold text-zinc-100">94.2%</p>
            <p className="text-xs text-emerald-400">High accuracy</p>
          </div>
          <div className="rounded-xl border border-zinc-900 bg-black/70 p-4">
            <p className="text-xs text-zinc-500">Hand-offs Saved</p>
            <p className="text-4xl font-bold text-zinc-100">8,102</p>
            <p className="text-xs text-blue-400">Automation ROI: High</p>
          </div>
          <div className="rounded-xl border border-zinc-900 bg-black/70 p-4">
            <p className="text-xs text-zinc-500">Avg. Response Time</p>
            <p className="text-4xl font-bold text-zinc-100">0.8s</p>
            <p className="text-xs text-emerald-400">Instant delivery</p>
          </div>
          <div className="rounded-xl border border-zinc-900 bg-black/70 p-4">
            <p className="text-xs text-zinc-500">Open Tickets</p>
            <p className="text-4xl font-bold text-zinc-100">37</p>
            <p className="text-xs text-zinc-400">Within SLA</p>
          </div>
        </section>

        <CustomersSection />
      </main>
    </div>
  )
}
