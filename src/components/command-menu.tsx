"use client";

import * as React from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  CommandIcon,
  LaptopIcon,
  MoonIcon,
  SunIcon,
  GlobeIcon,
  ArrowRightIcon,
  PrinterIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/language-context";

interface Props {
  links: { url: string; title: string }[];
}

export const CommandMenu = ({ links }: Props) => {
  const [open, setOpen] = React.useState(false);
  const { setTheme } = useTheme();
  const { toggleLanguage, language } = useLanguage();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <p className="fixed bottom-0 left-0 right-0 hidden border-t border-t-muted bg-white p-1 text-center text-sm text-muted-foreground print:hidden xl:block dark:bg-gray-950">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>J
        </kbd>{" "}
        to open the command menu
      </p>
      <Button
        onClick={() => setOpen((open) => !open)}
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 flex rounded-full shadow-2xl print:hidden xl:hidden"
      >
        <CommandIcon className="my-6 size-6" />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Actions">
            <CommandItem
              onSelect={() => runCommand(() => window.print())}
            >
              <PrinterIcon className="mr-2 size-4" />
              <span>Print</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => toggleLanguage())}
            >
              <GlobeIcon className="mr-2 size-4" />
              <span>Toggle Language ({language.toUpperCase()})</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => setTheme("light"))}
            >
              <SunIcon className="mr-2 size-4" />
              <span>Light Mode</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => setTheme("dark"))}
            >
              <MoonIcon className="mr-2 size-4" />
              <span>Dark Mode</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Links">
            {links.map(({ url, title }) => (
              <CommandItem
                key={url}
                onSelect={() => {
                  setOpen(false);
                  window.open(url, "_blank");
                }}
              >
                <ArrowRightIcon className="mr-2 size-4" />
                <span>{title}</span>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Navigation">
            <CommandItem
              onSelect={() => runCommand(() => document.getElementById("aboutMe")?.scrollIntoView({ behavior: "smooth" }))}
            >
              <span>About Me</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => document.getElementById("workExperience")?.scrollIntoView({ behavior: "smooth" }))}
            >
              <span>Work Experience</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => document.getElementById("education")?.scrollIntoView({ behavior: "smooth" }))}
            >
              <span>Education</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" }))}
            >
              <span>Skills</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }))}
            >
              <span>Projects</span>
            </CommandItem>
          </CommandGroup>

        </CommandList>
      </CommandDialog>
    </>
  );
};