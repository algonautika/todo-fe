import { useEffect, useState } from 'react';

export const useKeyboardStatus = () => {
    const [keyboardHeight, setKeyboardHeight] = useState(0);
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.visualViewport) {
                const viewportHeight = window.visualViewport.height;
                const windowHeight = window.innerHeight;
                const keyboardOpen = viewportHeight < windowHeight;

                setIsKeyboardOpen(keyboardOpen);
                setKeyboardHeight(keyboardOpen
                    ? windowHeight - viewportHeight
                    : 0);
            }
        };

        if (window.visualViewport) {
            window.visualViewport.addEventListener('resize', handleResize);
        }

        return () => {
            if (window.visualViewport) {
                window.visualViewport.removeEventListener('resize', handleResize);
            }
        };
    }, []);

    return {
        isKeyboardOpen,
        keyboardHeight,
    };
};
