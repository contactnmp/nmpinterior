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
                    className="text-[#424346CC]/60 text-xs md:text-sm tracking-[0.2em] uppercase font-medium"
                >
                    {/* Маленький заголовок из админки */}
                    {data.heading}
                </motion.span>
                
                <motion.h2 
                    variants={textVariant}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    className="font-serif text-[#021A62] text-3xl md:text-[50px] leading-[1.1]"
                >
                    {/* Большой заголовок из админки */}
                    {data.subheading}
                </motion.h2>
            </div>
            
            <div className="flex flex-col mb-10 md:flex-row mb-15">
                {/* Перебираем карточки из Sanity (data.cards) вместо SERVICES */}
                {data.cards?.map((service, index) => (
                    <div key={index} className="flex flex-col md:flex-row flex-1">
                        <div className="hidden md:block w-[1px] self-stretch relative mr-8 shrink-0">
                            <Line vertical className="h-full" delay={0.3} />
                        </div>
                        <div className="md:hidden w-full mb-8">
                            <Line className="w-full" />
                        </div>
                        <motion.div 
                            variants={textContainer}
                            initial='hidden'
                            whileInView='visible'
                            className="flex flex-col flex-1 pb-10 md:pb-0 md:pr-10" 
                        >
                            <motion.h3
                                variants={textVariant}
                                className="text-[#021A62] font-bold text-xl mb-5"
                            >
                                {service.title}
                            </motion.h3>
                            <motion.p
                                variants={textVariant}
                                className="text-[#021A62] text-lg mb-6 md:mb-10 min-h-[40px]"
                            >
                                {service.subtitle}
                            </motion.p>
                            <motion.p
                                variants={textVariant}
                                className="text-[#424346CC]/70 text-[15px] leading-relaxed font-light"
                            >
                                {service.description} 
                            </motion.p>
                        </motion.div>
                    </div>
                ))}
            </div>
            <Line />
        </section>
    )
}

export default WhyNmp