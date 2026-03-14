"use client"

import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"

type FAQItemType = {
  question: string
  answer: string
}

type FAQDataType = {
  [key: string]: FAQItemType[]
}

type CategoriesType = {
  [key: string]: string
}

interface FAQProps {
  title?: string
  subtitle?: string
  categories: CategoriesType
  faqData: FAQDataType
  className?: string
}

export const FAQ: React.FC<FAQProps> = ({
  title = "FAQs",
  subtitle = "Frequently Asked Questions",
  categories,
  faqData,
  className,
}) => {
  const categoryKeys = Object.keys(categories) as string[]
  const [selectedCategory, setSelectedCategory] = useState<string>(
    Object.keys(categories)[0]
  )

  return (
    <section
      className={cn(
        "relative overflow-hidden px-6 py-32 text-white",
        className
      )}
    >

      {/* BLUE RADIAL BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.08),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.05),transparent_50%)]" />

      <div className="relative z-10">
        <FAQHeader title={title} subtitle={subtitle} />

        <FAQTabs
        categories={categories}
        selected={selectedCategory}
        setSelected={setSelectedCategory}
      />

      <FAQList faqData={faqData} selected={selectedCategory} />
      </div>
    </section>
  )
}

interface FAQHeaderProps {
  title: string
  subtitle: string
}

const FAQHeader: React.FC<FAQHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="relative flex flex-col items-center justify-center mb-16 text-center">
      <span className="mb-6 text-sm uppercase tracking-wider text-neutral-400">
        {subtitle}
      </span>

      <h2 className="text-5xl md:text-6xl font-semibold tracking-tight">
        {title}
      </h2>

      <div className="absolute -top-[200px] h-[400px] w-[600px] rounded-full bg-white/5 blur-3xl" />
    </div>
  )
}

interface FAQTabsProps {
  categories: CategoriesType
  selected: string
  setSelected: React.Dispatch<React.SetStateAction<string>>
}

const FAQTabs: React.FC<FAQTabsProps> = ({
  categories,
  selected,
  setSelected,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
      {Object.entries(categories).map(([key, label]) => (
        <button
          key={key}
          onClick={() => {
            console.log(key)
            setSelected(key)
          }}
          className={cn(
            "rounded-md border px-4 py-2 text-sm transition-all duration-300",
            selected === key
              ? "bg-primary text-white border-primary"
              : "border-primary/30 text-primary/70 hover:text-primary hover:border-primary/50 hover:bg-primary/10"
          )}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

interface FAQListProps {
  faqData: FAQDataType
  selected: string
}

const FAQList: React.FC<FAQListProps> = ({ faqData, selected }) => {
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      <AnimatePresence mode="wait">
        {Object.entries(faqData).map(([category, questions]) => {
          if (selected === category) {
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                {questions.map((faq: FAQItemType, index: number) => (
                  <FAQItem key={index} {...faq} />
                ))}
              </motion.div>
            )
          }
          return null
        })}
      </AnimatePresence>
    </div>
  )
}

const FAQItem: React.FC<FAQItemType> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <motion.div
      className={cn(
        "rounded-xl border border-primary/40 transition-all",
        isOpen ? "bg-neutral-900/50" : "bg-neutral-950/50"
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 p-6 text-left"
      >
        <span
          className={cn(
            "text-lg font-medium transition-colors",
            isOpen ? "text-white" : "text-white/80"
          )}
        >
          {question}
        </span>

        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Plus
            className={cn(
              "h-5 w-5",
              isOpen ? "text-white" : "text-neutral-500"
            )}
          />
        </motion.span>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden px-6"
      >
        <p className="pb-6 text-primary/80">{answer}</p>
      </motion.div>
    </motion.div>
  )
}