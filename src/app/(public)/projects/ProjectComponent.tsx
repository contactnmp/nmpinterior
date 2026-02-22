"use client"

import { motion } from "framer-motion"
import { textVariant } from '../../ui/anim/text.anim'
import ProjectItem from "./ProjectItem"

interface ProjectType {
    _id: string;
    title: string;
    slug: { current: string };
    mainImage: any;
}

interface ProjectsProps {
    projects: ProjectType[];
}

const ProjectsComponent = ({ projects }: ProjectsProps) => {
    if (!projects || projects.length === 0) return null;

    const col1 = projects.filter((_, i) => i % 2 === 0)
    const col2 = projects.filter((_, i) => i % 2 !== 0)

    return (
        <section className="pb-20">
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textVariant}
                className="flex justify-center mb-16 md:mb-24"
            >
                <h2 className="font-serif font-semibold text-[#021A62] text-3xl md:text-[50px]">
                    Projects
                </h2>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-20">
                <div className="flex flex-col gap-5 md:gap-10 w-full md:w-1/2">
                    {col1.map((project, index) => (
                        <ProjectItem 
                            key={project._id} 
                            project={project} 
                            index={index} 
                        />
                    ))}
                </div>

                <div className="flex flex-col gap-5 md:gap-10 w-full md:w-1/2">
                    {col2.map((project, index) => (
                        <ProjectItem 
                            key={project._id} 
                            project={project} 
                            index={index + 1}
                            isTall={index === 0} 
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectsComponent