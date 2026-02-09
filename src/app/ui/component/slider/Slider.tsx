'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SliderControls from './SliderControls'; 
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';

interface SliderProps {
  images: any[];
}

const Slider = ({ images }: SliderProps) => {

    return (
        <section className='w-full'>
            <Swiper 
                className='relative w-full'
                loop={true}
                slidesPerView={1}
            >
                <SliderControls />

                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full aspect-square md:aspect-[1360/524]">
                            <Image
                                alt={`Slide ${index + 1}`}
                                src={urlFor(image).url()} 
                                fill
                                className="object-cover"
                                priority={index === 0} 
                            />
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </section>
    )
}

export default Slider