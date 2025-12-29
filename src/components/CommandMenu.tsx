import { useEffect, useState, useCallback } from 'react';
import { Languages, Mail, Github, Linkedin, ArrowUp, X, LucideIcon, Sun, Moon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

interface BaseItem {
    id: string;
    label: string;
    icon: LucideIcon;
    action: () => void;
    category: string;
}

interface ActionItem extends BaseItem {
    description?: never;
}

interface LinkItem extends BaseItem {
    description: string;
}

type MenuItem = ActionItem | LinkItem;

interface CommandMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const CommandMenu = ({ isOpen, onClose }: CommandMenuProps) => {
    const { language, setLanguage, t } = useLanguage();
    const { theme, setTheme } = useTheme();
    const [searchQuery, setSearchQuery] = useState('');

    const handleToggleLanguage = () => {
        setLanguage(language === 'en' ? 'pt' : 'en');
        onClose();
    };

    const handleToggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
        onClose();
    };

    const handleContact = () => {
        window.location.href = 'mailto:b.vieira.rocha@gmail.com';
        onClose();
    };

    const handleGitHub = () => {
        window.open('https://github.com/bernardovieirarocha', '_blank');
        onClose();
    };

    const handleLinkedIn = () => {
        window.open('https://www.linkedin.com/in/bernardovrocha/', '_blank');
        onClose();
    };

    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        onClose();
    };

    const actions = [
        {
            id: 'theme',
            label: theme === 'dark'
                ? (language === 'en' ? 'Switch to Light Mode' : 'Mudar para Modo Claro')
                : (language === 'en' ? 'Switch to Dark Mode' : 'Mudar para Modo Escuro'),
            icon: theme === 'dark' ? Sun : Moon,
            action: handleToggleTheme,
            category: 'Actions',
        },
        {
            id: 'language',
            label: language === 'en' ? 'Switch to Portuguese (PT)' : 'Mudar para Inglês (EN)',
            icon: Languages,
            action: handleToggleLanguage,
            category: 'Actions',
        },
        {
            id: 'scroll-top',
            label: language === 'en' ? 'Scroll to Top' : 'Voltar ao Topo',
            icon: ArrowUp,
            action: handleScrollTop,
            category: 'Actions',
        },
    ];

    const links = [
        {
            id: 'email',
            label: 'Email',
            description: 'b.vieira.rocha@gmail.com',
            icon: Mail,
            action: handleContact,
            category: 'Links',
        },
        {
            id: 'github',
            label: 'GitHub',
            description: 'bernardovieirarocha',
            icon: Github,
            action: handleGitHub,
            category: 'Links',
        },
        {
            id: 'linkedin',
            label: 'LinkedIn',
            description: 'bernardovrocha',
            icon: Linkedin,
            action: handleLinkedIn,
            category: 'Links',
        },
    ];

    const allItems: MenuItem[] = [...actions, ...links];

    const filteredItems = allItems.filter(item =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const groupedItems = filteredItems.reduce<Record<string, MenuItem[]>>((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {});

    useEffect(() => {
        if (isOpen) {
            setSearchQuery('');
        }
    }, [isOpen]);

    // Close on escape
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative w-full max-w-lg mx-4 rounded-xl border border-border bg-card shadow-2xl overflow-hidden animate-in fade-in-0 zoom-in-95 duration-200">
                {/* Search Input */}
                <div className="flex items-center border-b border-border px-4">
                    <svg
                        className="w-4 h-4 text-muted-foreground mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        type="text"
                        placeholder={language === 'en' ? 'Type a command or search...' : 'Digite um comando ou pesquise...'}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="flex-1 bg-transparent py-4 text-sm outline-none placeholder:text-muted-foreground"
                        autoFocus
                    />
                    <button
                        onClick={onClose}
                        className="p-1 rounded hover:bg-secondary transition-colors"
                    >
                        <X className="w-4 h-4 text-muted-foreground" />
                    </button>
                </div>

                {/* Results */}
                <div className="max-h-[300px] overflow-y-auto p-2">
                    {Object.entries(groupedItems).map(([category, items]) => (
                        <div key={category} className="mb-2">
                            <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                                {category}
                            </div>
                            {items.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={item.action}
                                    className="w-full flex items-center gap-3 px-2 py-2.5 rounded-lg text-sm hover:bg-secondary transition-colors text-left"
                                >
                                    <item.icon className="w-4 h-4 text-muted-foreground" />
                                    <div className="flex-1">
                                        <span>{item.label}</span>
                                        {item.description && (
                                            <span className="ml-2 text-xs text-muted-foreground">{item.description}</span>
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>
                    ))}

                    {filteredItems.length === 0 && (
                        <div className="py-6 text-center text-sm text-muted-foreground">
                            {language === 'en' ? 'No results found.' : 'Nenhum resultado encontrado.'}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// Hook to manage command menu state
export const useCommandMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);
    const toggle = useCallback(() => setIsOpen(prev => !prev), []);

    // Global keyboard shortcut
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'j') {
                e.preventDefault();
                toggle();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [toggle]);

    return { isOpen, open, close, toggle };
};

export default CommandMenu;
