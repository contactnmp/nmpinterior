"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { textContainer, textVariant } from '../../ui/anim/text.anim' 
import { urlFor } from "@/lib/sanity" 

interface AboutData {
    title: string;
    description1: string;
    description2: string;
    quote: string;
    mainImage: any;
    // Добавлены новые поля
    secondaryImage?: any;
    secondaryDescription1?: string;
    secondaryDescription2?: string;
}

interface AboutComponentProps {
    data?: AboutData;
}

const AboutComponent = ({ data }: AboutComponentProps) => {
    if (!data) return null;

    return (
        <section className="pb-20 md:pb-32 pt-6">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex justify-center mb-10 md:mb-15"
            >
                <h1 className="font-serif font-semibold text-[#021A62] text-4xl md:text-5xl">
                    {data.title}
                </h1>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-start font-sans">
                <motion.div 
                    variants={textContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="w-full md:w-1/2 flex flex-col gap-8"
                >
                    <motion.p 
                        variants={textVariant}
                        className="text-[#424346]/80 text-base md:font-medium leading-relaxed"
                    >
                        {data.description1}
                    </motion.p>

                    <motion.p 
                        variants={textVariant}
                        className="text-[#424346]/80 text-base md:font-medium leading-relaxed"
                    >
                        {data.description2}
                    </motion.p>

                    {data.quote && (
                        <motion.div 
                            variants={textVariant}
                            className="mt-8 border-l-[1px] border-[#021A62]/30 pl-6"
                        >
                            <p className="text-[#424346CC]/80 font-light italic text-base md:text-base leading-relaxed">
                                {data.quote}
                            </p>
                        </motion.div>
                    )}
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full md:w-1/2"
                >
                    <div className="relative w-full aspect-[667/916]">
                        {data.mainImage && (
                            <Image
                                src={urlFor(data.mainImage).url()}
                                alt="Noralyn Matusalem Pitts - NMP Interior Design"
                                fill
                                className="object-cover"
                                priority
                            />
                        )}
                    </div>
                </motion.div>
            </div>

            {(data.secondaryImage || data.secondaryDescription1) && (
                <div className="flex flex-col md:flex-row gap-10 md:gap-20 md:items-end">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="w-full md:w-1/2"
                    >
                        <div className="relative w-full aspect-[440/586]">
                            {data.secondaryImage && (
                                <Image
                                    src={urlFor(data.secondaryImage).url()}
                                    alt="Anastasiia - NMP Interior Design"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            )}
                        </div>
                    </motion.div>

                    <motion.div
                        variants={textContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 flex flex-col gap-6"
                    >
                        {data.secondaryDescription1 && (
                            <motion.p 
                                variants={textVariant}
                                className="text-[#424346] text-sm md:text-base font-medium leading-relaxed"
                            >
                                {data.secondaryDescription1}
                            </motion.p>
                        )}
                        
                        {data.secondaryDescription2 && (
                            <motion.p 
                                variants={textVariant}
                                className="text-[#424346] text-sm md:text-base font-medium leading-relaxed"
                            >
                                {data.secondaryDescription2}
                            </motion.p>
                        )}
                    </motion.div>
                </div>
            )}
        </section>
    )
}

export default AboutComponent