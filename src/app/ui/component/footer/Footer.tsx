'use client'

import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook } from "lucide-react"
import Button from "../../Button"
import Line from "../../Line"
import { usePopup } from "@/context/PopupContext"
import { urlFor } from "@/lib/sanity"

interface FooterProps {
    data?: {
        ctaHeading: string;
        ctaButton: string;
        logo: any;
        copyright: string;
        instagram: string;
        facebook: string;
        email: string;
        phone: string;
    }
}

const Footer = ({ data }: FooterProps) => {
    const { openPopup } = usePopup()

    if (!data) return null;

    return (
        <footer className="bg-[#FFFFF4] pt-20 pb-10 text-[#021A62]">
            <div className="w-full max-w-[1440px] mx-auto">
                
                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-serif mb-8 tracking-tight">
                        {data.ctaHeading}
                    </h2>
                    <div className="w-fit">
                        <Button onClick={openPopup}>
                            {data.ctaButton}
                        </Button>
                    </div>
                </div>

                <Line className="mb-10"/>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4 text-[15px] leading-relaxed">
                    
                    <div className="flex flex-col justify-between h-full min-h-[150px]">
                        <div className="w-[180px] relative h-[80px]">
                            {data.logo && (
                                <Image 
                                    src={urlFor(data.logo).url()} 
                                    alt="NMP Logo" 
                                    fill
                                    className="object-contain object-left"
                                />
                            )}
                        </div>
                        <p className="text-sm text-[#021A62]/60 font-medium mt-auto pt-10 md:pt-0">
                            {data.copyright}
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 font-bold">
                        <Link href="/" className="hover:opacity-70 transition-opacity">
                            Home
                        </Link>
                        <Link href="/projects" className="hover:opacity-70 transition-opacity">
                            Projects
                        </Link>
                        <Link href="/about-us" className="hover:opacity-70 transition-opacity">
                            About us
                        </Link>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-3 font-bold">
                            <Link href="/privacy" className="hover:opacity-70 transition-opacity">
                                Privacy Policy
                            </Link>
                        </div>
                        
                        <div className="flex gap-4">
                            {data.instagram && (
                                <Link href={data.instagram} target="_blank" className="hover:opacity-70 transition-opacity">
                                    <Instagram size={24} strokeWidth={1.5} />
                                </Link>
                            )}
                            {data.facebook && (
                                <Link href={data.facebook} target="_blank" className="hover:opacity-70 transition-opacity">
                                    <Facebook size={24} strokeWidth={1.5} />
                                </Link>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <span className="font-bold mb-2">Contact us:</span>
                        
                        <a href={`mailto:${data.email}`} className="hover:opacity-70 transition-opacity font-bold">
                            {data.email}
                        </a>
                        
                        {data.phone && (
                            <a href={`tel:${data.phone.replace(/\s/g, '')}`} className="hover:opacity-70 transition-opacity font-bold mt-2">
                                Tel: {data.phone}
                            </a>
                        )}

                        <a href='https://api.whatsapp.com/qr/UNR2QA6X5EJSH1?autoload=1&app_absent=0' className="hover:opacity-70 transition-opacity font-bold mt-2">
                            Website design by Oleksandra
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer