"use client"

import { BarChart3, MessageCircle, Smile, TrendingUp, Users } from "lucide-react"
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import { DashboardHeader } from "../../../components/dashboard/header"
import { Sidebar } from "../../../components/dashboard/sidebar"
import { ownerSidebar } from "../../../lib/roles"

const stats = [
  {
    label: "TOTAL EMPLOYEES",
    value: "34",
    subtext: "+4 this week",
    icon: Users,
  },
  {
    label: "ACTIVE CHATS",
    value: "128",
    subtext: "+12 today",
    icon: MessageCircle,
  },
  {
    label: "AI RESOLUTION RATE",
    value: "92%",
    subtext: "+3% from last week",
    icon: TrendingUp,
  },
  {
    label: "CUSTOMER SATISFACTION",
    value: "4.8/5",
    subtext: "Based on 342 reviews",
    icon: Smile,
  },
]

const growthData = [
  { day: "Mon", chats: 45 },
  { day: "Tue", chats: 52 },
  { day: "Wed", chats: 60 },
  { day: "Thu", chats: 74 },
  { day: "Fri", chats: 90 },
  { day: "Sat", chats: 70 },
  { day: "Sun", chats: 110 },
]

export default function OwnerDashboardPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar
        sections={ownerSidebar}
        activeLabel="Design Corp"
        ctaLabel="Add Admin"
        userName="Alex Rivera"
        userRole="Owner"
      />

      <main className="flex-1 p-4 md:p-6">
        <DashboardHeader title="Organization Overview" />

        <section className="mb-4">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-100 md:text-3xl">
            Welcome Back, Khushi
          </h1>
        </section>

        <section className="grid gap-2.5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="group rounded-lg border border-zinc-900 bg-black/70 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-[10px] font-semibold tracking-[0.08em] text-zinc-500">{stat.label}</p>
                  <div className="rounded-lg bg-blue-500/20 p-1.5 text-blue-400 transition-colors duration-300 group-hover:bg-blue-500/25 group-hover:text-blue-300">
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                </div>
                <p className="text-3xl font-bold leading-none text-zinc-100">{stat.value}</p>
                <p className="mt-2 text-sm font-semibold text-emerald-400">{stat.subtext}</p>
              </div>
            )
          })}
        </section>

        <section className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4 md:p-5">
          <div className="mb-4 flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-zinc-100">Conversation Growth</h3>
              <p className="mt-1 text-sm text-zinc-500">Daily chat volume and resolution trends</p>
            </div>
            <div className="rounded-xl p-2 text-blue-400">
              <BarChart3 className="h-6 w-6" />
            </div>
          </div>

          <div className="h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={growthData} margin={{ top: 10, right: 10, left: -18, bottom: 0 }}>
                <CartesianGrid stroke="#1f2937" strokeDasharray="4 4" vertical />
                <XAxis dataKey="day" stroke="#a1a1aa" tickLine={false} axisLine={{ stroke: "#52525b" }} />
                <YAxis
                  stroke="#a1a1aa"
                  tickLine={false}
                  axisLine={{ stroke: "#52525b" }}
                  domain={[0, 120]}
                  ticks={[0, 30, 60, 90, 120]}
                />
                <Tooltip
                  cursor={{ stroke: "#d4d4d8", strokeWidth: 1 }}
                  contentStyle={{
                    backgroundColor: "#09090b",
                    border: "1px solid #27272a",
                    borderRadius: "12px",
                    color: "#e4e4e7",
                  }}
                  labelStyle={{ color: "#f4f4f5", fontWeight: 600 }}
                  formatter={(value) => [`Chats : ${value}`, ""]}
                />
                <Line
                  type="monotone"
                  dataKey="chats"
                  stroke="#3b82f6"
                  strokeWidth={4}
                  dot={{ r: 0 }}
                  activeDot={{ r: 6, stroke: "#dbeafe", strokeWidth: 3, fill: "#3b82f6" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-xl border border-zinc-900 bg-black/70 p-3.5">
              <p className="text-sm text-zinc-500">Avg Messages/Day</p>
              <p className="mt-2.5 text-4xl font-semibold text-zinc-100">456</p>
            </div>
            <div className="rounded-xl border border-zinc-900 bg-black/70 p-3.5">
              <p className="text-sm text-zinc-500">Avg Response Time</p>
              <p className="mt-2.5 text-4xl font-semibold text-zinc-100">2.3s</p>
            </div>
            <div className="rounded-xl border border-zinc-900 bg-black/70 p-3.5">
              <p className="text-sm text-zinc-500">Total Conversations</p>
              <p className="mt-2.5 text-4xl font-semibold text-zinc-100">1.2k</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
