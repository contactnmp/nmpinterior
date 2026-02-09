'use client'

import { createContext, useContext, useState, ReactNode } from 'react';

interface PopupContextType {
    isOpen: boolean;
    openPopup: () => void;
    closePopup: () => void;
}

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const PopupProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openPopup = () => {
        setIsOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closePopup = () => {
        setIsOpen(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <PopupContext.Provider value={{ isOpen, openPopup, closePopup }}>
            {children}
        </PopupContext.Provider>
    );
};

export const usePopup = () => {
    const context = useContext(PopupContext);
    if (!context) {
        throw new Error('usePopup must be used within a PopupProvider');
    }
    return context;
};