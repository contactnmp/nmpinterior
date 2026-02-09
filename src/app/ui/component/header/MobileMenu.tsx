import Link from "next/link"
import { motion } from "framer-motion"
import Button from "../../Button"
import { menuVars, containerVars, mobileLinkVars } from './header.anim'
import { usePopup } from "@/context/PopupContext"

interface MobileMenuProps {
    links: { label: string; url: string }[]
    onClose: () => void
}

const MobileMenu = ({ links, onClose }: MobileMenuProps) => {
    const { openPopup } = usePopup()
    return (
        <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-[#FFFFF4] text-[#021A62] p-10 z-40 flex flex-col justify-center items-center"
        >
            <div className="flex flex-col h-full justify-center">
                <motion.div 
                    variants={containerVars}
                    initial="initial"
                    animate="open"
                    exit="initial"
                    className="flex flex-col gap-8 items-center"
                >
                    {links.map((link, index) => (
                        <div key={index} className="overflow-hidden">
                            <motion.div variants={mobileLinkVars}>
                                <Link 
                                    href={link.url}
                                    className="text-4xl md:text-5xl font-light tracking-wide uppercase"
                                    onClick={onClose}
                                >
                                    {link.label}
                                </Link>
                            </motion.div>
                        </div>
                    ))}
                    
                    <div className="overflow-hidden mt-6">
                        <motion.div variants={mobileLinkVars}>
                            <Button onClick={openPopup}>
                                Get in touch
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default MobileMenu