import { MessageSquare, Mic } from "lucide-react"

type ChatbotPanelProps = {
  compact?: boolean
}

export function ChatbotPanel({ compact = false }: ChatbotPanelProps) {
  return (
    <section className="rounded-xl border border-zinc-900 bg-black/70 p-4">
      <h3 className="mb-3 text-lg font-semibold text-zinc-100">Configured Channels</h3>
      <div className={compact ? "grid grid-cols-1 gap-3" : "grid grid-cols-1 gap-3 md:grid-cols-2"}>
        <div className="rounded-lg border border-zinc-900 bg-zinc-950/60 p-4">
          <div className="mb-2 flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-blue-400" />
            <p className="font-semibold text-zinc-100">Text Chatbot</p>
          </div>
          <p className="text-xs text-zinc-400">Manage conversations across web and mobile channels.</p>
        </div>
        <div className="rounded-lg border border-zinc-900 bg-zinc-950/60 p-4">
          <div className="mb-2 flex items-center gap-2">
            <Mic className="h-4 w-4 text-blue-400" />
            <p className="font-semibold text-zinc-100">Voice AI</p>
          </div>
          <p className="text-xs text-zinc-400">Handle voice-based support interactions in real time.</p>
        </div>
      </div>
    </section>
  )
}
