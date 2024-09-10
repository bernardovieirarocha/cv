"use client";

import { CommandMenu } from "@/components/command-menu";
import { Header } from "@/components/header";
import { ProjectCard } from "@/components/project-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { useLanguage } from "@/contexts/language-context";
import { RESUME_DATA } from "@/data/resume-data";
import { RESUME_DATA_PT } from "@/data/resume-data-pt";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";

const translations = {
  en: {
    about: "About",
    workExperience: "Work Experience",
    education: "Education",
    skills: "Skills",
    certifications: "Certifications",
    projects: "Projects",
  },
  pt: {
    about: "Sobre",
    workExperience: "Experiência Profissional",
    education: "Educação",
    skills: "Skills",
    certifications: "Certificações",
    projects: "Projetos",
  },
};

export default function Page() {
  const { language } = useLanguage();

  const RESUME = language === "pt" ? RESUME_DATA_PT : RESUME_DATA;
  const t = translations[language];

  return (
    <>
      <Header />
      <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
        <section
          id="aboutMe"
          className="mx-auto w-full max-w-2xl space-y-8 print:space-y-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex-1 space-y-1.5">
              <h1 className="text-2xl font-bold">{RESUME.name}</h1>
              <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
                {RESUME.about}
              </p>
              <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
                <a
                  className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                  href={RESUME.locationLink}
                  target="_blank"
                >
                  <GlobeIcon className="size-3" />
                  {RESUME.location}
                </a>
              </p>
              <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
                {RESUME.contact.email ? (
                  <Button
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={`mailto:${RESUME.contact.email}`}>
                      <MailIcon className="size-4" />
                    </a>
                  </Button>
                ) : null}
                {RESUME.contact.tel ? (
                  <Button
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={`tel:${RESUME.contact.tel}`}>
                      <PhoneIcon className="size-4" />
                    </a>
                  </Button>
                ) : null}
                {RESUME.contact.social.map((social) => (
                  <Button
                    key={social.name}
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={social.url}>
                      <social.icon className="size-4" />
                    </a>
                  </Button>
                ))}
              </div>
              <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex print:text-[12px]">
                {RESUME.contact.email ? (
                  <a href={`mailto:${RESUME.contact.email}`}>
                    <span className="underline">{RESUME.contact.email}</span>
                  </a>
                ) : null}
                {RESUME.contact.tel ? (
                  <a href={`tel:${RESUME.contact.tel}`}>
                    <span className="underline">{RESUME.contact.tel}</span>
                  </a>
                ) : null}
              </div>
            </div>

            <Avatar className="size-28">
              <AvatarImage alt={RESUME.name} src={RESUME.avatarUrl} />
              <AvatarFallback>{RESUME.initials}</AvatarFallback>
            </Avatar>
          </div>
          <Section>
            <h2 className="text-xl font-bold">{t.about}</h2>
            <p className="text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
              {RESUME.summary}
            </p>
          </Section>
          <Section id="workExperience">
            <h2 className="text-xl font-bold">{t.workExperience}</h2>
            {RESUME.work.map((work) => {
              return (
                <Card key={work.company} className="border p-3 shadow-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between gap-x-2 text-base">
                      <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                        <a className="hover:underline" href={work.link}>
                          {work.company}
                        </a>

                        <span className="inline-flex gap-x-1">
                          {work.badges.map((badge) => (
                            <Badge
                              variant="secondary"
                              className="align-middle text-xs print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
                              key={badge}
                            >
                              {badge}
                            </Badge>
                          ))}
                        </span>
                      </h3>
                      <div className="text-sm tabular-nums text-gray-500">
                        {work.start} - {work.end ? work.end : "Present"}
                      </div>
                    </div>

                    <h4 className="font-mono text-sm leading-none print:text-[12px]">
                      {work.title}
                    </h4>
                  </CardHeader>
                  <CardContent className="mt-2 text-xs print:text-[10px]">
                    {work.description}
                  </CardContent>
                </Card>
              );
            })}
          </Section>
          <Section id="education">
            <h2 className="text-xl font-bold">{t.education}</h2>
            {RESUME.education.map((education) => {
              return (
                <Card key={education.school}>
                  <CardHeader>
                    <div className="flex items-center justify-between gap-x-2 text-base">
                      <h3 className="font-semibold leading-none">
                        {education.school}
                      </h3>
                      <div className="text-sm tabular-nums text-gray-500">
                        {education.start} -{" "}
                        {education.end ? education.end : "Present"}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="mt-2 print:text-[12px]">
                    {education.degree}
                  </CardContent>
                </Card>
              );
            })}
          </Section>

          <Section id="certifications">
            <h2 className="text-xl font-bold">{t.certifications}</h2>
            {RESUME.certification.map((extra) => {
              return (
                <Card key={extra.nameCertification}>
                  <CardHeader>
                    <div className="flex items-center justify-between gap-x-2 text-base">
                      <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                        <a className="hover:underline" href={extra.link}>
                          {extra.nameCertification}
                        </a>

                        <span className="inline-flex gap-x-1">
                          {extra.badges.map((badge) => (
                            <Badge
                              variant="secondary"
                              className="align-middle text-xs"
                              key={badge}
                            >
                              {badge}
                            </Badge>
                          ))}
                        </span>
                      </h3>
                      <div className="text-sm tabular-nums text-gray-500">
                        {extra.start} {extra.end ? "-" : ""}{" "}
                        {extra.end ? extra.end : ""}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="mt-2 text-xs">
                    {extra.description}
                  </CardContent>
                </Card>
              );
            })}
          </Section>

          <Section>
            <h2 className="text-xl font-bold">{t.skills}</h2>
            <div className="flex flex-wrap gap-1">
              {RESUME.skills.map((skill) => {
                return (
                  <Badge className="print:text-[10px]" key={skill}>
                    {skill}
                  </Badge>
                );
              })}
            </div>
          </Section>

          <Section id="projects" className="print-force-new-page scroll-mb-16">
            <h2 className="text-xl font-bold">{t.projects}</h2>
            <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-1 md:grid-cols-2 lg:grid-cols-3">
              {RESUME.projects.map((project) => {
                return (
                  <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    tags={project.techStack}
                    link={"link" in project ? project.link.href : undefined}
                  />
                );
              })}
            </div>
          </Section>
        </section>

        <CommandMenu
          links={[
            {
              url: RESUME.personalWebsiteUrl,
              title: "Personal Website",
            },
            ...RESUME.contact.social.map((socialMediaLink) => ({
              url: socialMediaLink.url,
              title: socialMediaLink.name,
            })),
          ]}
        />
      </main>
    </>
  );
}
