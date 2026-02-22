"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { AnimatePresence } from "framer-motion"
import Button from "../../Button"
import MobileMenu from "./MobileMenu"
import { usePopup } from "@/context/PopupContext"
import { urlFor } from "@/lib/sanity"

const LINK = [
    { label: 'Home', url: '/' },
    { label: 'Projects', url: '/projects' },
    { label: 'About us', url: '/about-us' }
]

interface HeaderProps {
    data?: {
        logo: any;
        buttonText: string;
    }
}

const Header = ({ data }: HeaderProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const { openPopup } = usePopup()

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    return (
        <header className="py-4 md:py-6 relative bg-[#FFFFF4] font-sans">
            <div className="w-full max-w-[1440px]">
                <div className="grid grid-cols-2 md:grid-cols-3 items-center">
                    
                    <nav className="hidden md:flex gap-10 lg:gap-20">
                        {LINK.map((i, index) => (
                            <Link 
                                className="text-[#021A62] font-medium text-lg tracking-wide transition-colors duration-300 hover:text-[#424346]/80"
                                href={i.url}
                                key={index}
                            >
                                {i.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="justify-self-start md:justify-self-center z-50 relative">
                        <Link href="/" onClick={() => setIsOpen(false)}>
                            {data?.logo ? (
                                <Image
                                    src={urlFor(data.logo).url()}
                                    alt="logo"
                                    width={130}
                                    height={84}
                                    className="w-[100px] md:w-[130px] h-auto object-contain"
                                />
                            ) : (
                                <Image
                                    src='/logo/logo.png'
                                    alt="logo"
                                    width={130}
                                    height={84}
                                    className="w-[100px] md:w-[130px] h-auto object-contain"
                                />
                            )}
                        </Link>
                    </div>

                    <div className="hidden md:flex justify-self-end">
                        <Button onClick={openPopup} style="text-lg">
                            {data?.buttonText || "Get in touch"}
                        </Button>
                    </div>

                    <div className="md:hidden justify-self-end z-50 relative">
                        <button 
                            onClick={() => setIsOpen(!isOpen)} 
                            className="text-[#021A62] transition-colors hover:text-[#424346]/80"
                        >
                            {isOpen ? <X size={32} /> : <Menu size={32} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <MobileMenu links={LINK} onClose={() => setIsOpen(false)} />
                )}
            </AnimatePresence>
        </header>
    )
}

export default Header