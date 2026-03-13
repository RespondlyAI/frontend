import { NotificationPanel } from "../dashboard/notification-panel"

export function EmployeeNotifications() {
  return (
    <NotificationPanel
      title="Notifications"
      items={[
        { title: "Queue updated", detail: "4 high-priority chats assigned", time: "1m" },
        { title: "Policy update", detail: "Refund script revised", time: "20m" },
      ]}
    />
  )
}
