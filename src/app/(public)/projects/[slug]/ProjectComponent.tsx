"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { urlFor } from "@/lib/sanity"

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

interface ProjectDetailProps {
    data: {
        title: string;
        description: string;
        images: any[];
    }
}

const ProjectComponent = ({ data }: ProjectDetailProps) => {
    if (!data) return null;

    return (
        <section className="pb-20 pt-8 md:pt-15">
            <motion.div 
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-4 md:mb-6"
            >
                <h1 className="font-serif font-semibold text-[#424346]/80 text-4xl md:text-[50px] leading-tight max-w-2xl">
                    {data.title}
                </h1>

                <p className="text-[#424346]/80  text-sm md:text-base font-medium leading-relaxed max-w-2xl text-left">
                    {data.description}
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {data.images?.map((img: any, index: number) => {
                    const isFirst = index === 0;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={`relative w-full overflow-hidden ${
                                isFirst ? "md:col-span-2 aspect-[16/9]" : "aspect-[4/3] md:aspect-square"
                            }`}
                        >
                            <Image
                                src={urlFor(img).url()}
                                alt={`${data.title} - image ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-[1.5s] hover:scale-90"
                                sizes={isFirst ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                                priority={isFirst}
                            />
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}

export default ProjectComponent