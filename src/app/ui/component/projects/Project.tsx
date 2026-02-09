"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import Button from "../../Button"
import Line from "../../Line"
import { textContainer, textVariant } from "../../anim/text.anim"
import { urlFor } from "@/lib/sanity"

interface ProjectType {
    title: string;
    description: string;
    mainImage: any;
}

interface ProjectProps {
    projects: ProjectType[];
}

const Project = ({ projects }: ProjectProps) => {
    if (!projects || projects.length === 0) return null;

    return (
        <section className="pb-30">
            <div className="w-full max-w-[1440px] mx-auto flex flex-col">
                {projects.map((project, index) => {
                    const isLast = index === projects.length - 1;
                    const isEven = index % 2 === 0;

                    return (
                        <div key={index} className="flex flex-col">
                            <motion.div
                                variants={textContainer}
                                initial='hidden'
                                whileInView='visible'
                                className={`flex flex-col items-center gap-10 md:gap-20 ${
                                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                            >
                                <div className="w-full md:w-1/2">
                                    <div className="relative w-full aspect-[670/606] overflow-hidden">
                                        {project.mainImage && (
                                            <Image
                                                src={urlFor(project.mainImage).url()}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-700 hover:scale-95"
                                            />
                                        )}
                                    </div>
                                </div>

                                <div className="w-full md:w-1/2 flex flex-col items-center text-center px-4 md:px-10">
                                    <motion.h3 
                                        variants={textVariant}
                                        initial='hidden'
                                        whileInView='visible'
                                        className="font-serif text-[#021A62] text-3xl md:text-[40px] mb-4"
                                    >
                                        {project.title}
                                    </motion.h3>
                                    <motion.p 
                                        variants={textVariant}
                                        initial='hidden'
                                        whileInView='visible'
                                        className="text-[#424346CC] font-light text-base md:text-lg max-w-[400px] leading-relaxed"
                                    >
                                        {project.description}
                                    </motion.p>
                                </div>
                            </motion.div>

                            <div className="w-full flex flex-col items-center gap-16 my-5 md:my-10">
                                {isLast && (
                                    <Button>
                                        <Link href='/projects' className="text-[#021A62]">
                                            Explore all projects
                                        </Link>
                                    </Button>
                                )}
                                <Line className="w-full"/>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Project