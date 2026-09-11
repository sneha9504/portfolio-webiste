"use client";

import { ProjectCard } from "@/components/site/project-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projectCategories, projects } from "@/lib/site-data";

export function ProjectGallery() {
  return (
    <Tabs defaultValue="All">
      <TabsList aria-label="Filter projects by discipline" className="h-auto gap-2 p-1.5">
        {projectCategories.map((category) => (
          <TabsTrigger key={category} value={category} className="min-h-11 px-5 text-sm">
            {category}
          </TabsTrigger>
        ))}
      </TabsList>

      {projectCategories.map((category) => {
        const visible =
          category === "All" ? projects : projects.filter((p) => p.type === category);

        return (
          <TabsContent key={category} value={category}>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))}
            </div>
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
