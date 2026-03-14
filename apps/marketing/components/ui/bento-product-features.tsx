"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 10,
    },
  },
};

interface BentoGridShowcaseProps {
  integration: React.ReactNode;
  trackers: React.ReactNode;
  statistic: React.ReactNode;
  focus: React.ReactNode;
  productivity: React.ReactNode;
  shortcuts: React.ReactNode;
  className?: string;
}

export const BentoGridShowcase = ({
  integration,
  trackers,
  statistic,
  focus,
  productivity,
  shortcuts,
  className,
}: BentoGridShowcaseProps) => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn(
        "grid w-full grid-cols-1 gap-6 md:grid-cols-3",
        "md:grid-rows-3 auto-rows-[minmax(180px,auto)]",
        className
      )}
    >
      <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-3">
        {integration}
      </motion.div>

      <motion.div variants={itemVariants}>
        {trackers}
      </motion.div>

      <motion.div variants={itemVariants}>
        {statistic}
      </motion.div>

      <motion.div variants={itemVariants}>
        {focus}
      </motion.div>

      <motion.div variants={itemVariants}>
        {productivity}
      </motion.div>

      <motion.div variants={itemVariants} className="md:col-span-2">
        {shortcuts}
      </motion.div>
    </motion.section>
  );
};