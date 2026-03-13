import { Button } from "@repo/ui/components/ui/button"

export function AcceptRejectChat() {
  return (
    <div className="fixed bottom-4 left-[300px] right-4 z-40 rounded-xl border border-blue-500/70 bg-slate-900/90 p-3 shadow-2xl shadow-blue-500/10 backdrop-blur lg:p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-blue-400">New Chat Request</p>
      <p className="mb-3 text-xl font-semibold text-slate-100">Priority: High Support</p>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <Button variant="secondary" className="h-10 bg-slate-800 text-slate-100 hover:bg-slate-700">
          Reject
        </Button>
        <Button className="h-10 bg-blue-500 text-white hover:bg-blue-400">Accept Chat</Button>
      </div>
    </div>
  )
}
