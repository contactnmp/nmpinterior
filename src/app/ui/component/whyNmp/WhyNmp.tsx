"use client"

import { motion } from "framer-motion"
import Line from "../../Line"
import { textContainer, textVariant } from "../../anim/text.anim"

interface CardItem {
    title: string;
    subtitle: string;
    description: string;
}

interface WhyNmpProps {
    data?: {
        heading: string;
        subheading: string;
        cards: CardItem[];
    }
}

const WhyNmp = ({ data }: WhyNmpProps) => {
    if (!data) return null;

    return (
        <section className="pb-20 md:pb-30">
            <div className="flex flex-col gap-12 mb-15">
                <motion.span 
                    variants={textVariant}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    className="font-sans text-[#424346]/80 font-medium text-xs md:text-sm tracking-[0.2em] uppercase"
                >
                    {data.heading}
                </motion.span>
                
                <motion.h2 
                    variants={textVariant}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    className="font-serif text-[#021A62] font-semibold text-3xl md:text-[50px] leading-[1.1]"
                >
                    {data.subheading}
                </motion.h2>
            </div>

            <div className="font-sans grid grid-cols-1 md:grid-flow-col md:auto-cols-fr md:grid-rows-[auto_auto_1fr] mb-10 md:mb-15">
                {data.cards?.map((service, index) => (
                    <motion.div 
                        key={index}
                        variants={textContainer}
                        initial='hidden'
                        whileInView='visible'
                        className="relative flex flex-col md:grid md:grid-rows-subgrid md:row-span-3 pb-10 md:pb-0" 
                    >
                        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[1px]">
                            <Line vertical className="h-full" delay={0.3} />
                        </div>
                        
                        <div className="md:hidden w-full mb-8">
                            <Line className="w-full" />
                        </div>

                        <motion.h3
                            variants={textVariant}
                            className="text-[#021A62] font-semibold text-2xl mb-5 md:pl-8 md:pr-10"
                        >
                            {service.title}
                        </motion.h3>
                        
                        <motion.p
                            variants={textVariant}
                            className="text-[#021A62] text-lg mb-6 md:mb-10 md:pl-8 md:pr-10"
                        >
                            {service.subtitle}
                        </motion.p>
                        
                        <motion.p
                            variants={textVariant}
                            className="text-[#424346]/80 text-[15px] leading-relaxed font-medium md:pl-8 md:pr-10"
                        >
                            {service.description} 
                        </motion.p>
                    </motion.div>
                ))}
            </div>
            <Line />
        </section>
    )
}

export default WhyNmp