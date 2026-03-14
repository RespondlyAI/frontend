"use client"

import { FAQ } from "@/components/ui/faq-tabs"

export function FAQSection() {
  const categories = {
    platform: "Platform",
    security: "Security",
    integration: "Integration",
  }

  const faqData = {
  platform: [
    {
      question: "What does your AI platform provide?",
      answer:
        "Our platform delivers real-time conversational AI that combines intelligent chat processing and voice automation within a unified architecture."
    },
    {
      question: "Is the AI system context-aware?",
      answer:
        "Yes. The AI maintains contextual understanding across sessions, enabling adaptive and personalized conversational responses."
    },
    {
      question: "How fast are responses generated?",
      answer:
        "The system is optimized for low-latency processing, ensuring near real-time responses for both chat and voice interactions."
    },
    {
      question: "Is the platform suitable for enterprise use?",
      answer:
        "Absolutely. The architecture is built for enterprise-grade reliability, scalability, and structured deployment."
    },
    {
      question: "Can the AI be customized for different industries?",
      answer:
        "Yes. The platform can be configured for customer support, automation, internal tools, or industry-specific conversational workflows."
    },
  ],

  security: [
    {
      question: "How is user data protected?",
      answer:
        "All API communication layers are secured using authentication protocols and encrypted data transmission standards."
    },
    {
      question: "Does the system support role-based access control?",
      answer:
        "Yes. The architecture supports structured access management, enabling controlled permissions for users and administrators."
    },
    {
      question: "Is conversation data stored permanently?",
      answer:
        "Data storage is configurable. The platform supports both session-based memory and persistent database storage depending on deployment needs."
    },
    {
      question: "How are APIs secured?",
      answer:
        "APIs are protected using token-based authentication and structured middleware validation."
    },
    {
      question: "Is the backend architecture secure for scaling?",
      answer:
        "Yes. The modular backend is designed with security layers that remain stable and protected even under high load."
    },
  ],

  integration: [
    {
      question: "Can the platform integrate with existing systems?",
      answer:
        "Yes. The platform is API-first and can be integrated into existing web applications, CRM systems, or enterprise tools."
    },
    {
      question: "Does it support both voice and text communication?",
      answer:
        "Yes. The system seamlessly switches between chat-based AI and voice-based automation without disrupting workflow."
    },
    {
      question: "Is it compatible with frontend frameworks?",
      answer:
        "Yes. The platform can integrate with modern frontend frameworks including Next.js and React-based applications."
    },
    {
      question: "Can third-party services be connected?",
      answer:
        "Yes. The modular architecture allows integration with third-party APIs and external automation services."
    },
    {
      question: "Is deployment flexible?",
      answer:
        "The system supports cloud-based deployment and scalable hosting environments depending on project requirements."
    },
  ],
}
  return (
    <FAQ
      title="Frequently Asked Questions"
      subtitle="AI Platform Insights"
      categories={categories}
      faqData={faqData}
    />
  )
}