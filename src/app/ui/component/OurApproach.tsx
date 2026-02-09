"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Button from "../Button"
import Line from "../Line"
import { textContainer, textVariant } from '../anim/text.anim'
import { urlFor } from "@/lib/sanity"
import { usePopup } from "@/context/PopupContext"

interface OurApproachProps {
    data?: {
        tagline: string;
        heading1: string;
        heading2: string;
        description: string;
        buttonText: string;
        image: any;
    }
}

const OurApproach = ({ data }: OurApproachProps) => {
    const { openPopup } = usePopup()
    if (!data) return null;

    return (
        <section className="pb-20 md:pb-32">
            <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-stretch mb-10 md:mb-15">
                
                <motion.div 
                    variants={textContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-full md:w-1/2 flex flex-col justify-between"
                >
                    <motion.span 
                        variants={textVariant}
                        className="block text-[#424346CC]/60 text-xs md:text-sm tracking-[0.2em] uppercase font-medium mb-10"
                    >
                        {data.tagline}
                    </motion.span>
                    
                    <div>
                        <motion.h3 
                            variants={textVariant}
                            className="font-serif text-[#021A62] text-2xl md:leading-[1.3] font-medium mb-6"
                        >
                            {data.heading1}
                        </motion.h3>
                        <motion.h3 
                            variants={textVariant}
                            className="font-serif text-[#021A62] text-2xl md:leading-[1.3] font-medium mb-8"
                        >
                            {data.heading2}
                        </motion.h3>
                        
                        <motion.p 
                            variants={textVariant}
                            className="text-[#424346CC]/70 text-[15px] leading-relaxed font-light mb-10 max-w-[500px]"
                        >
                            {data.description}
                        </motion.p>
                        <motion.div variants={textVariant}>
                            <Button onClick={openPopup}>
                                {data.buttonText}
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
                <div className="w-full md:w-1/2">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full aspect-[606/670] overflow-hidden"
                    >
                        {data.image && (
                            <Image
                                src={urlFor(data.image).url()}
                                alt="Our Approach"
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-105"
                            />
                        )}
                    </motion.div>
                </div>
            </div>
            <Line />
        </section>
    )
}

export default OurApproach