"use client"

import { motion } from "framer-motion"
import { textContainer, textVariant } from '../../ui/anim/text.anim' 

interface PolicyBlock {
    _key: string;
    heading: string;
    text: string;
}

interface PrivacyProps {
    data?: {
        title: string;
        policyBlocks: PolicyBlock[];
        contactNote: string;
    }
}

const Privacy = ({ data }: PrivacyProps) => {
    if (!data) return null;

    return (
        <section className="pb-20 md:pb-32 pt-6">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex justify-center mb-10 md:mb-20"
            >
                <h1 className="font-serif text-[#021A62] text-4xl md:text-[64px] text-center">
                    {data.title}
                </h1>
            </motion.div>

            <motion.div 
                variants={textContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-full max-w-[800px] mx-auto flex flex-col gap-10 px-4 md:px-0"
            >
                
                {data.policyBlocks?.map((block) => (
                    <motion.div 
                        key={block._key} 
                        variants={textVariant} 
                        className="flex flex-col gap-4"
                    >
                        <h2 className="font-serif text-[#021A62] text-2xl md:text-3xl">
                            {block.heading}
                        </h2>
                        <p className="text-[#424346CC] text-base md:text-lg font-light leading-relaxed whitespace-pre-wrap">
                            {block.text}
                        </p>
                    </motion.div>
                ))}

                {data.contactNote && (
                    <motion.div 
                        variants={textVariant}
                        className="mt-4 border-l-[1px] border-[#021A62]/30 pl-6 py-2"
                    >
                        <p className="text-[#424346CC]/80 text-sm md:text-sm font-light italic leading-relaxed">
                            {data.contactNote}
                        </p>
                    </motion.div>
                )}

            </motion.div>
        </section>
    )
}

export default Privacy