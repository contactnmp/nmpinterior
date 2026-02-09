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
                        className="text-[#424346CC] text-xs md:text-sm tracking-[0.2em] uppercase mb-10 font-medium"
                    >
                        {tagline}
                    </motion.span>
                    
                    <motion.h2 
                        variants={textVariant}
                        initial='hidden'
                        whileInView='visible'
                        className="font-serif text-[#021A62] text-4xl md:text-[56px] leading-[1.1] mb-5"
                    >
                        {heading}
                    </motion.h2>
                    
                    <motion.p 
                        variants={textVariant}
                        initial='hidden'
                        whileInView='visible'
                        className="text-[#021A62] text-lg md:text-xl font-light leading-relaxed max-w-[700px]"
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