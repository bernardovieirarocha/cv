import { useEffect, useState } from 'react';

interface LoadingScreenProps {
    isLoading: boolean;
}

const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        if (!isLoading) {
            const timer = setTimeout(() => {
                setShouldRender(false);
            }, 500); // Wait for fade out animation to finish
            return () => clearTimeout(timer);
        }
    }, [isLoading]);

    if (!shouldRender) return null;

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
        >
            <div className="flex flex-col items-center gap-4">
                {/* Simple minimalist logo animation */}
                <div className="relative w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-ping" />
                    <div className="absolute inset-0 border-2 border-primary rounded-full animate-pulse" />
                    <span className="text-xl font-bold font-mono">BR</span>
                </div>
                <div className="h-1 w-24 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary animate-progress origin-left" />
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
