const customers = [
  {
    customer: "John Doe",
    issue: "Refund Request",
    status: "In Progress",
    assignedTo: "Alex J.",
    priority: "High",
  },
  {
    customer: "Maria Garcia",
    issue: "Order Status",
    status: "Resolved",
    assignedTo: "Sarah S.",
    priority: "Medium",
  },
  {
    customer: "Alex Chen",
    issue: "Billing Issue",
    status: "Pending",
    assignedTo: "Unassigned",
    priority: "High",
  },
  {
    customer: "Emma White",
    issue: "Technical Support",
    status: "In Progress",
    assignedTo: "John D.",
    priority: "Medium",
  },
]

export function CustomersSection() {
  return (
    <section className="rounded-2xl border border-zinc-900 bg-black/70 p-4 md:p-6">
      <h2 className="text-2xl font-semibold text-zinc-100">Customers</h2>
      <p className="mt-1 text-sm text-zinc-500">Customer queries and requests</p>

      <div className="mt-3 overflow-x-auto rounded-2xl border border-zinc-900">
        <table className="w-full min-w-[840px] border-collapse text-left">
          <thead className="bg-black/80 text-zinc-500">
            <tr>
              <th className="px-4 py-3 text-sm font-semibold uppercase tracking-[0.04em]">Customer</th>
              <th className="px-4 py-3 text-sm font-semibold uppercase tracking-[0.04em]">Issue</th>
              <th className="px-4 py-3 text-sm font-semibold uppercase tracking-[0.04em]">Status</th>
              <th className="px-4 py-3 text-sm font-semibold uppercase tracking-[0.04em]">Assigned To</th>
              <th className="px-4 py-3 text-sm font-semibold uppercase tracking-[0.04em]">Priority</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((item) => (
              <tr key={item.customer} className="border-t border-zinc-900 bg-zinc-950/40">
                <td className="px-4 py-3 text-base font-medium text-zinc-100">{item.customer}</td>
                <td className="px-4 py-3 text-sm text-zinc-400">{item.issue}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                      item.status === "Resolved"
                        ? "bg-emerald-950/70 text-emerald-400"
                        : item.status === "In Progress"
                          ? "bg-blue-950/70 text-blue-400"
                          : "bg-amber-950/70 text-amber-400"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-zinc-400">{item.assignedTo}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                      item.priority === "High" ? "bg-red-950/70 text-red-400" : "bg-amber-950/70 text-amber-400"
                    }`}
                  >
                    {item.priority}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
