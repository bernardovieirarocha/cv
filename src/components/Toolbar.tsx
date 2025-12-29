import { ArrowUp, Languages, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';

const Toolbar = () => {
    const { language, setLanguage, t } = useLanguage();
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'pt' : 'en');
    };

    const handleContact = () => {
        window.location.href = 'mailto:b.vieira.rocha@gmail.com';
    };

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-card/80 backdrop-blur-xl border border-border/50 shadow-2xl">
                {/* Language Toggle */}
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleLanguage}
                            className="h-10 w-10 rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-300 relative"
                        >
                            <Languages className="h-5 w-5" />
                            <span className="absolute -top-1 -right-1 text-[10px] font-bold bg-primary text-primary-foreground rounded-full w-4 h-4 flex items-center justify-center">
                                {language === 'en' ? 'PT' : 'EN'}
                            </span>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="bg-card border-border">
                        <p>{t('toolbar.language')}</p>
                    </TooltipContent>
                </Tooltip>

                {/* Quick Contact */}
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={handleContact}
                            className="h-10 w-10 rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-300"
                        >
                            <Mail className="h-5 w-5" />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="bg-card border-border">
                        <p>{t('toolbar.contact')}</p>
                    </TooltipContent>
                </Tooltip>

                {/* Scroll to Top - only visible after scrolling */}
                <div
                    className={`transition-all duration-300 overflow-hidden ${showScrollTop ? 'w-10 opacity-100' : 'w-0 opacity-0'
                        }`}
                >
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={handleScrollTop}
                                className="h-10 w-10 rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-300"
                            >
                                <ArrowUp className="h-5 w-5" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="bg-card border-border">
                            <p>{t('toolbar.scrollTop')}</p>
                        </TooltipContent>
                    </Tooltip>
                </div>
            </div>
        </div>
    );
};

export default Toolbar;
