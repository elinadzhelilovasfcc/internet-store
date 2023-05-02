import React from 'react'
import { useState, useEffect, useRef } from 'react';

interface HoverProps {
    isHovering: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

/**
 * Hook that tracks whether a certain element is being hovered over
 * @returns An object with the `isHovering` flag and handlers for the `onMouseEnter` and `onMouseLeave` events
 */
const useHover = (): HoverProps => {
    // Initialize state for whether the element is being hovered over
    const [isHovering, setIsHovering] = useState(false);
    // Set up a ref that will be attached to the element we're tracking
    const ref = useRef<HTMLButtonElement>(null);

    // Event handler for when the element is moused over
    const handleMouseEnter = (): void => {
        setIsHovering(true);
    };

    // Event handler for when the mouse leaves the element
    const handleMouseLeave = (): void => {
        setIsHovering(false);
    };

    // Set up event listeners when the component mounts and remove them when it unmounts
    useEffect(() => {
        const node = ref.current;

        if (node) {
            node.addEventListener('mouseenter', handleMouseEnter);
            node.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                node.removeEventListener('mouseenter', handleMouseEnter);
                node.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, [ref]);

    // Return an object with the state and event handlers
    return {
        isHovering,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
    };
};


export default useHover;