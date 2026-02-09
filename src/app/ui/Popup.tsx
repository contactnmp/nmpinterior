'use client'

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { usePopup } from '@/context/PopupContext';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useEffect, useState } from 'react';
import Button from './Button'; 

type FormInputs = {
    firstName: string;
    lastName: string;
    email: string;
    projectType: string[];
    timeline: string;
};

const Popup = () => {
    const { isOpen, closePopup } = usePopup();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const { 
        register, 
        handleSubmit, 
        reset,
        formState: { errors } 
    } = useForm<FormInputs>({
        mode: 'onSubmit',
        reValidateMode: 'onChange'
    });

    useEffect(() => {
        if (!isOpen) {
            const timer = setTimeout(() => {
                reset();
                setIsSuccess(false);
                setIsSubmitting(false);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [isOpen, reset]);

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                reset();
                setIsSuccess(true);
            } else {
                console.error("Failed to send email");
            }
        } catch (error) {
            console.error("Error sending form:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const getFieldStyles = (hasError: boolean) => ({
        label: `text-sm mb-2 block transition-colors duration-300 ${
            hasError ? "text-[#AE4535CC]" : "text-[#424346CC]/80"
        }`,
        input: `w-full bg-transparent border-b py-2 text-[#021A62] text-lg outline-none transition-colors duration-300 ${
            hasError 
                ? "border-[#AE4535CC]" 
                : "border-[#021A62]/30 focus:border-[#021A62]"
        }`
    });

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closePopup}
                        className="fixed inset-0 bg-[#021A62]/20 backdrop-blur-sm z-[998]"
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[999] w-full max-w-[600px] h-auto max-h-[90vh] overflow-y-auto px-4"
                    >
                        <div className="bg-[#FFFFF4] p-8 md:p-12 relative shadow-2xl w-full min-h-[400px] flex flex-col justify-center">
                            
                            <button 
                                onClick={closePopup} 
                                className="absolute top-6 right-6 text-[#021A62] hover:opacity-70 transition-opacity z-10"
                            >
                                <X size={32} strokeWidth={1.5} />
                            </button>

                            {isSuccess ? (
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center flex flex-col items-center gap-4"
                                >
                                    <h2 className="font-serif text-[#021A62] text-4xl md:text-[50px] leading-tight">
                                        Thanks!
                                    </h2>
                                    <p className="text-[#424346CC] text-lg font-light">
                                        We’ll be in touch shortly.
                                    </p>
                                    
                                    <div className="mt-8">
                                        <Button onClick={closePopup} type="button">
                                            Close
                                        </Button>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <h2 className="font-serif text-[#021A62] text-3xl md:text-[40px] leading-[1.1] mb-4">
                                        Let's Discuss Your Project
                                    </h2>

                                    <p className="text-[#424346CC] text-base font-light mb-10 max-w-[450px]">
                                        We're here to support your next high-end, cutting-edge project. Please fill the form and we'll get back to you asap.
                                    </p>

                                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                                        
                                        <div>
                                            <label className={getFieldStyles(!!errors.firstName).label}>
                                                First name*
                                            </label>
                                            <input 
                                                {...register("firstName", { 
                                                    required: "First name is required",
                                                    minLength: {
                                                        value: 2,
                                                        message: "Minimum 2 characters"
                                                    }
                                                })}
                                                type="text" 
                                                className={getFieldStyles(!!errors.firstName).input}
                                            />
                                            {errors.firstName && (
                                                <p className="text-[#AE4535CC] text-sm mt-1">
                                                    {errors.firstName.message}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <label className={getFieldStyles(!!errors.lastName).label}>
                                                Last name*
                                            </label>
                                            <input 
                                                {...register("lastName", { 
                                                    required: "Last name is required",
                                                    minLength: {
                                                        value: 2,
                                                        message: "Minimum 2 characters"
                                                    }
                                                })}
                                                type="text" 
                                                className={getFieldStyles(!!errors.lastName).input}
                                            />
                                            {errors.lastName && (
                                                <p className="text-[#AE4535CC] text-sm mt-1">
                                                    {errors.lastName.message}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <label className={getFieldStyles(!!errors.email).label}>
                                                Email*
                                            </label>
                                            <input 
                                                {...register("email", { 
                                                    required: "Email is required",
                                                    pattern: {
                                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                        message: "Invalid email address"
                                                    }
                                                })}
                                                type="text" 
                                                className={getFieldStyles(!!errors.email).input}
                                            />
                                            {errors.email && (
                                                <p className="text-[#AE4535CC] text-sm mt-1">
                                                    {errors.email.message}
                                                </p>
                                            )}
                                        </div>

                                        <div className="mt-4">
                                            <label className="text-[#424346CC]/80 text-sm mb-4 block">
                                                What space are you looking to design?
                                            </label>
                                            <div className="flex flex-col gap-3">
                                                {['Private House', 'Apartment', 'Office', 'Hotel'].map((item) => (
                                                    <label key={item} className="flex items-center gap-3 cursor-pointer group">
                                                        <input 
                                                            type="checkbox" 
                                                            value={item}
                                                            {...register("projectType", {
                                                                validate: (value) => {
                                                                    return (value && value.length > 0) || "Select at least one option";
                                                                }
                                                            })}
                                                            className="w-5 h-5 border border-[#424346CC]/30 rounded-none appearance-none cursor-pointer transition-all checked:border-[#021A62] checked:bg-center checked:bg-no-repeat checked:bg-[length:60%] checked:bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M4%209L7%2012L14%205%22%20stroke%3D%22%23021A62%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')]"
                                                        />
                                                        <span className="text-[#424346CC] font-light group-hover:opacity-70 transition-opacity">
                                                            {item}
                                                        </span>
                                                    </label>
                                                ))}
                                            </div>
                                            {errors.projectType && (
                                                <p className="text-[#AE4535CC] text-sm mt-2">
                                                    {errors.projectType.message}
                                                </p>
                                            )}
                                        </div>

                                        <div className="mt-2">
                                            <label className="text-[#424346CC]/80 text-sm mb-2 block">
                                                When are you expecting to start?
                                            </label>
                                            <input 
                                                {...register("timeline", {
                                                    required: "Timeline is required"
                                                })}
                                                type="text" 
                                                className="w-full bg-transparent border-b border-[#021A62]/30 py-2 text-[#021A62] outline-none focus:border-[#021A62] transition-colors"
                                            />
                                            {errors.timeline && (
                                                <p className="text-[#AE4535CC] text-sm mt-1">
                                                    {errors.timeline.message}
                                                </p>
                                            )}
                                        </div>
                                        
                                        <div className="mt-8">
                                            <Button type='submit'>
                                                {isSubmitting ? 'Sending...' : 'Get in touch'}
                                            </Button>
                                        </div>
                                    </form>
                                </motion.div>
                            )}

                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Popup;