import { useState, useEffect, useRef, RefObject } from 'react';

interface UseScrollAnimationOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}

export const useScrollAnimation = <T extends HTMLElement>(
    options: UseScrollAnimationOptions = {}
): [RefObject<T>, boolean] => {
    const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
    const ref = useRef<T>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (triggerOnce) {
                        observer.unobserve(element);
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [threshold, rootMargin, triggerOnce]);

    return [ref, isVisible];
};

// Hook for staggered animations on multiple elements
export const useStaggeredAnimation = (
    itemCount: number,
    baseDelay: number = 100
): { getDelay: (index: number) => string } => {
    const getDelay = (index: number) => `${index * baseDelay}ms`;
    return { getDelay };
};
