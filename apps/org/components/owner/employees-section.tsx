import { Search } from "lucide-react"

const employees = [
  { name: "Alex Johnson", role: "Employee", activeChats: 12, status: "Active", joinDate: "Jan 15, 2024" },
  { name: "Sarah Smith", role: "Admin", activeChats: 24, status: "Active", joinDate: "Dec 10, 2023" },
  { name: "Mike Davis", role: "Employee", activeChats: 8, status: "Away", joinDate: "Feb 20, 2024" },
  { name: "Emma Wilson", role: "Employee", activeChats: 15, status: "Active", joinDate: "Jan 5, 2024" },
]

export function EmployeesSection() {
  return (
    <section className="rounded-2xl border border-zinc-900 bg-black/70 p-4 md:p-6">
      <h2 className="text-2xl font-semibold text-zinc-100">Employees</h2>
      <p className="mt-1 text-sm text-zinc-500">Manage your team members</p>

      <div className="relative mt-4 max-w-xl">
        <Search className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
        <input
          type="text"
          placeholder="Search employees..."
          className="h-10 w-full rounded-xl border border-zinc-800 bg-zinc-900/60 px-3.5 pr-10 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-zinc-700 focus:outline-none"
        />
      </div>

      <div className="mt-3 overflow-x-auto rounded-2xl border border-zinc-900">
        <table className="w-full min-w-[840px] border-collapse text-left">
          <thead className="bg-black/80 text-zinc-500">
            <tr>
              <th className="px-4 py-3 text-sm font-semibold uppercase tracking-[0.04em]">Name</th>
              <th className="px-4 py-3 text-sm font-semibold uppercase tracking-[0.04em]">Role</th>
              <th className="px-4 py-3 text-sm font-semibold uppercase tracking-[0.04em]">Active Chats</th>
              <th className="px-4 py-3 text-sm font-semibold uppercase tracking-[0.04em]">Status</th>
              <th className="px-4 py-3 text-sm font-semibold uppercase tracking-[0.04em]">Join Date</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.name} className="border-t border-zinc-900 bg-zinc-950/40">
                <td className="px-4 py-3 text-base font-medium text-zinc-100">{employee.name}</td>
                <td className="px-4 py-3 text-sm text-zinc-400">{employee.role}</td>
                <td className="px-4 py-3 text-sm text-zinc-200">{employee.activeChats}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                      employee.status === "Active"
                        ? "bg-emerald-950/70 text-emerald-400"
                        : "bg-amber-950/70 text-amber-400"
                    }`}
                  >
                    {employee.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-zinc-400">{employee.joinDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
