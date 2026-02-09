import { Variants } from "framer-motion";

export const textContainer: Variants = {
    hidden: {}, 
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
}

export const textVariant: Variants = {
    hidden: {y: 50, opacity: 0},
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" }
    }
}