"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Line from "../../Line"
import { textContainer, textVariant } from '../../anim/text.anim'

interface ReviewItem {
    _key: string;
    name: string;
    text: string;
}

interface ReviewsProps {
    data?: {
        tagline: string;
        heading: string;
        list: ReviewItem[];
    }
}

const Reviews = ({ data }: ReviewsProps) => {
    if (!data) return null;

    return (
        <section className="pb-20 md:pb-32">
                <div className="flex flex-col gap-10 mb-14 md:mb-18">
                     <motion.span 
                        variants={textVariant}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true }}
                        className="font-sans text-[#424346]/80 text-xs md:text-sm tracking-[0.2em] uppercase font-medium"
                    >
                        {data.tagline}
                    </motion.span>
                    
                    <motion.h2 
                        variants={textVariant}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true }}
                        className="font-serif text-[#021A62] font-semibold text-3xl md:text-[40px] leading-[1.1]"
                    >
                        {data.heading}
                    </motion.h2>
                </div>

                <div className="flex flex-col mb-10 md:flex-row mb-15">
                    {data.list.map((review) => (
                        <div key={review._key} className="flex flex-col md:flex-row flex-1">
                            
                            <div className="hidden md:block w-[1px] self-stretch relative mr-8 shrink-0">
                                <Line vertical className="h-full" delay={0.3} />
                            </div>
                             <div className="md:hidden w-full mb-8">
                                <Line className="w-full" />
                            </div>

                            <motion.div 
                                variants={textContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                className="flex flex-col flex-1 pb-10 md:pb-0 md:pr-10 justify-between"
                            >
                                <motion.p 
                                    variants={textVariant}
                                    className="text-[#424346]/80 text-[15px] leading-relaxed font-medium mb-8"
                                >
                                    {review.text}
                                </motion.p>

                                <div>
                                    <motion.h4 
                                        variants={textVariant}
                                        className="font-sans text-[#021A62] text-lg mb-2"
                                    >
                                        {review.name}
                                    </motion.h4>
                                    
                                    <motion.div 
                                        variants={textVariant}
                                        className="flex gap-1"
                                    >
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={16} fill="#021A62" stroke="#021A62" />
                                        ))}
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

                <Line/>
        </section>
    )
}

export default Reviews