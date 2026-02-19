"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import Line from "@/app/ui/Line"
import { urlFor } from "@/lib/sanity"

interface ProjectProps {
    project: {
        _id: string;
        title: string;
        slug: { current: string };
        mainImage: any;
    };
    index: number;
    isTall?: boolean;
}

const ProjectItem = ({ project, index, isTall }: ProjectProps) => {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
            >
                <Link 
                    href={`/projects/${project.slug.current}`} 
                    className="flex flex-col gap-4 group cursor-pointer block"
                >
                    <div className={`relative w-full overflow-hidden ${isTall ? "aspect-[2/3]" : "aspect-[4/3]"}`}>
                        {project.mainImage && (
                            <Image
                                src={urlFor(project.mainImage).url()} 
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-90"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        )}
                    </div>

                    <p className="font-serif text-[#424346]/80 text-lg my-5 md:text-xl tracking-wide md:my-10 transition-colors duration-300">
                        {project.title}
                    </p>
                </Link>
            </motion.div>
            
            <Line/>
        </div>
    )
}

export default ProjectItem