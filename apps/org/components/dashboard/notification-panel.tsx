import { Bell } from "lucide-react"

type Notification = {
  title: string
  detail: string
  time: string
}

type NotificationPanelProps = {
  title: string
  items: Notification[]
}

export function NotificationPanel({ title, items }: NotificationPanelProps) {
  return (
    <section className="rounded-xl border border-zinc-900 bg-black/70 p-4">
      <h3 className="mb-3 text-lg font-semibold text-zinc-100">{title}</h3>
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.title} className="rounded-lg border border-zinc-900 bg-zinc-950/60 p-3">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-2">
                <Bell className="mt-0.5 h-4 w-4 text-blue-400" />
                <div>
                  <p className="text-sm font-semibold text-zinc-100">{item.title}</p>
                  <p className="text-xs text-zinc-400">{item.detail}</p>
                </div>
              </div>
              <span className="text-[11px] text-zinc-500">{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
