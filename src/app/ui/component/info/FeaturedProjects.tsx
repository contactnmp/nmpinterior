"use client"

import { motion } from "framer-motion"
import Line from "../../Line"
import { textVariant, textContainer } from "../../anim/text.anim"

interface featuredProps {
    tagline: string
    heading: string
    description: string
}

const FeaturedProjects = ({tagline, heading, description}: featuredProps) => {
    return (
        <section className="bg-[#FFFFF4] pb-5 md:pb-10">
            <div className="flex flex-col gap-12">
                <motion.div 
                    variants={textContainer}
                    initial='hidden'
                    whileInView='visible'
                    className="flex flex-col max-w-[850px] mb-15"
                >
                    <motion.span 
                        variants={textVariant}
                        initial='hidden'
                        whileInView='visible'
                        className="font-sans text-[#424346]/80 font-medium text-sm md:tracking-[0.2em] uppercase mb-10"
                    >
                        {tagline}
                    </motion.span>
                    
                    <motion.h2 
                        variants={textVariant}
                        initial='hidden'
                        whileInView='visible'
                        className="font-serif font-semibold text-[#021A62] text-4xl md:text-[40px] leading-[1.1] mb-5"
                    >
                        {heading}
                    </motion.h2>
                    
                    <motion.p 
                        variants={textVariant}
                        initial='hidden'
                        whileInView='visible'
                        className="font-sans text-[#424346]/80 font-medium text-lg md:leading-relaxed max-w-[700px]"
                    >
                        {description}
                    </motion.p>
                </motion.div>
                <Line/>
            </div>
        </section>
    )
}

export default FeaturedProjects