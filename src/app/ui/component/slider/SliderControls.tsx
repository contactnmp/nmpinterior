'use client'
import { useSwiper } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SliderControls = () => {
    const swiper = useSwiper();
    
    const btnClass = "absolute top-1/2 -translate-y-1/2 z-50 text-[#FFFFF4B2] cursor-pointer opacity-75 hover:opacity-100 transition-opacity";

    return (
        <>
            <button 
                onClick={() => swiper.slidePrev()} 
                className={`${btnClass} left-4 md:left-8`}
            >
                <ChevronLeft size={40} strokeWidth={1.5} />
            </button>

            <button 
                onClick={() => swiper.slideNext()} 
                className={`${btnClass} right-4 md:right-8`}
            >
                <ChevronRight size={40} strokeWidth={1.5} />
            </button>
        </>
    );
};

export default SliderControls