import { useLanguage } from "@/contexts/language-context";
import { useTabContext } from "@/contexts/tab-context";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link as ScrollLink } from "react-scroll";
import { ThemeButton } from "./theme-provider";

const LanguageSwitcher: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="flex cursor-pointer space-x-2 px-2">
      <span
        onClick={() => language !== "pt" && toggleLanguage()}
        role="img"
        aria-label="Portuguese"
      >
        🇧🇷
      </span>
      <span
        onClick={() => language !== "en" && toggleLanguage()}
        role="img"
        aria-label="English"
      >
        🇺🇸
      </span>
    </div>
  );
};

const sections = [
  { key: "aboutMe", label: "About Me", labelPt: "Sobre Mim" },
  {
    key: "workExperience",
    label: "Work Experience",
    labelPt: "Experiência Profissional",
  },
  { key: "education", label: "Education", labelPt: "Educação" },
  { key: "certifications", label: "Certifications", labelPt: "Certificações" },
  { key: "projects", label: "Projects", labelPt: "Projetos" },
];

const HeaderButton: React.FC<{
  label: string;
  labelPt: string;
  scrollId: string;
  onClick: () => void;
}> = ({ label, labelPt, scrollId, onClick }) => {
  const { selectedTab, setSelectedTab } = useTabContext();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const { language } = useLanguage();

  const handleClick = () => {
    setSelectedTab(label.toLowerCase());
    onClick();
  };

  return (
    <ScrollLink
      to={scrollId}
      spy={true}
      smooth={true}
      offset={isMobile ? -200 : -70}
      duration={500}
    >
      <button
        className={cn(
          "text-sm md:text-sm",
          selectedTab === label.toLowerCase() ? "text-blue-500" : "",
        )}
        onClick={handleClick}
      >
        {language === "en" ? label : labelPt}
      </button>
    </ScrollLink>
  );
};

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const { theme, resolvedTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMenuButtonClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  if (!mounted) {
    return null; // Render nothing until the theme is resolved
  }
  
  const headerClass =
  resolvedTheme === "dark"
    ? "bg-gray-900 text-white"
    : "bg-white text-black";


  return (
    <>
      <header className={`sticky top-0 z-50 flex h-9 w-full items-center justify-between border-b px-4 sm:px-0 md:px-0 lg:px-0 ${headerClass} print:hidden`}>
        <div className="mx-auto flex w-full max-w-2xl items-center justify-between">
          <div className="hidden items-center space-x-4 md:flex">
            {sections.map((section) => (
              <HeaderButton
                key={section.label}
                label={section.label}
                labelPt={section.labelPt}
                scrollId={section.key}
                onClick={handleMenuItemClick}
              />
            ))}
          </div>
          <div className="flex items-center space-x-4 md:hidden">
            <button className="text-xl" onClick={handleMenuButtonClick}>
              <MenuIcon size={20} />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <LanguageSwitcher />
            <ThemeButton />
          </div>
        </div>
      </header>
      {menuOpen && isMobile && (
        <div
          className={`submenu sticky top-9 z-50 w-full border-gray-200 shadow-md`}
        >
          <div className="mx-auto flex max-w-2xl flex-col items-center p-4">
            {sections.map((section) => (
              <div key={section.label} className="submenu-item">
                <HeaderButton
                  label={section.label}
                  labelPt={section.labelPt}
                  scrollId={section.key}
                  onClick={handleMenuItemClick}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="h-0.5 w-full border-transparent bg-gradient-to-r from-pink-500 via-blue-500 to-green-400 print:hidden"></div>
    </>
  );
};
