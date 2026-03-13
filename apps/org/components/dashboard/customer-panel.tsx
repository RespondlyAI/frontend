type CustomerRow = {
  name: string
  subtitle: string
  status: string
  isOnline?: boolean
}

type CustomerPanelProps = {
  title: string
  rows: CustomerRow[]
  actionLabel?: string
}

export function CustomerPanel({ title, rows, actionLabel }: CustomerPanelProps) {
  return (
    <section className="rounded-xl border border-zinc-900 bg-black/70">
      <div className="border-b border-zinc-900 px-4 py-3">
        <h3 className="text-lg font-semibold text-zinc-100">{title}</h3>
      </div>
      <div className="space-y-3 p-4">
        {rows.map((row) => (
          <div key={row.name} className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-zinc-100">{row.name}</p>
              <p className="text-xs text-zinc-400">{row.subtitle}</p>
            </div>
            <span
              className={
                row.isOnline
                  ? "rounded bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-400"
                  : "rounded bg-zinc-800/50 px-2 py-0.5 text-[10px] font-semibold text-zinc-400"
              }
            >
              {row.status}
            </span>
          </div>
        ))}
        {actionLabel ? <button className="mt-2 w-full text-sm font-semibold text-blue-400">{actionLabel}</button> : null}
      </div>
    </section>
  )
}
