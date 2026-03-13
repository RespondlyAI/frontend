import { NotificationPanel } from "../dashboard/notification-panel"

export function OwnerNotifications() {
  return (
    <NotificationPanel
      title="Notifications"
      items={[
        { title: "12 new chats in queue", detail: "Peak load in support inbox", time: "2m" },
        { title: "3 escalations marked urgent", detail: "Billing and refund issues need review", time: "6m" },
        { title: "Voice channel latency normal", detail: "Service health stable", time: "12m" },
        { title: "AI fallback rate improved", detail: "Dropped by 9% after latest prompt update", time: "18m" },
        { title: "2 unresolved tickets approaching SLA", detail: "Follow-up required before deadline", time: "25m" },
        { title: "Customer satisfaction trend updated", detail: "Weekly CSAT moved to 4.8/5", time: "40m" },
      ]}
    />
  )
}
