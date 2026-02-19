'use client'
import { usePopup } from "@/context/PopupContext"
import { textContainer, textVariant } from "../../anim/text.anim"
import Button from "../../Button"
import Line from "../../Line"
import { motion } from "framer-motion"

interface HeroInfoProps {
    title: string;
    description: string;
    buttonText: string;
}

const HeroInfo = ({ title, description, buttonText }: HeroInfoProps) => {
    const { openPopup } = usePopup()
    
    return (
        <section className="bg-[#FFFFF4] py-10 md:py-15">
            <div className="w-full max-w-[1440px] mx-auto mb-30">
                <motion.div 
                    variants={textContainer}
                    initial='hidden'
                    whileInView='visible'
                    className="flex flex-col items-start"
                >
                    
                    <motion.h1 
                        variants={textVariant}
                        initial='hidden'
                        whileInView='visible'
                        className="font-serif text-[#021A62] font-semibold text-4xl md:text-[64px] leading-[1.1] mb-5 max-w-[850px]"
                    >
                        {title || "Thoughtful design, calm confidence"} 
                    </motion.h1>
                    
                    <motion.p 
                        variants={textVariant}
                        initial='hidden'
                        whileInView='visible'
                        className="text-[#424346]/80 text-base md:text-[18px] font-medium mb-10 max-w-[600px] leading-relaxed"
                    >
                        {description}
                    </motion.p>

                    <motion.div 
                        variants={textVariant}
                        initial='hidden'
                        whileInView='visible'
                        className="w-fit"
                    >
                        <Button onClick={openPopup}>
                            {buttonText || "Book a consultation"}
                        </Button>
                    </motion.div>

                </motion.div>
            </div>

            <Line />
        </section>
    )
}

export default HeroInfo