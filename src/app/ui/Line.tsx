"use client"
import { HTMLAttributes } from "react"
import { motion } from "framer-motion"

interface ILine extends HTMLAttributes<HTMLDivElement> {
  vertical?: boolean
  className?: string
  duration?: number
  delay?: number
}

const Line = ({ 
  vertical = false, 
  className = "", 
  duration = 1, 
  delay = 0,
}: ILine) => {
  const currentInitial = vertical ? { height: 0 } : { width: 0 }
  const currentAnimate = vertical ? { height: "100%" } : { width: "100%" }
  
  return (
    <motion.div
      initial={currentInitial}
      whileInView={currentAnimate}
      transition={{ duration, delay, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className={`bg-gray-300 ${vertical ? 'w-[1px] h-full' : 'h-[1px] w-full'} ${className}`}
    />
  )
}

export default Line