import { Circle } from "lucide-react"

const activeChats = [
  {
    name: "Alex Johnson",
    message: "Is there a discount for annual billing?",
    time: "2m",
  },
  {
    name: "Sarah Miller",
    message: "My API key is returning 401 errors.",
    time: "5m",
  },
]

export function ChatsSection() {
  return (
    <section className="space-y-4">
      <div>
        <h3 className="text-2xl font-semibold text-slate-100">Active Chats</h3>
      </div>
      <div className="grid gap-3 lg:grid-cols-2">
        {activeChats.map((chat) => (
          <div key={chat.name} className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Circle className="h-2.5 w-2.5 fill-emerald-400 text-emerald-400" />
                <p className="font-semibold text-slate-100">{chat.name}</p>
              </div>
              <span className="text-xs text-slate-500">{chat.time}</span>
            </div>
            <p className="mt-1 text-sm text-slate-400">
              &ldquo;{chat.message}&rdquo;
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
