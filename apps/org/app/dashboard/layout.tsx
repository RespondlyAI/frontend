export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="dashboard-theme min-h-screen bg-black text-zinc-100">{children}</div>
}
