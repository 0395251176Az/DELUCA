"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/1.jpg",
    category: "DELUCA",
    name: "Golf Fashion 1",
    description:
      "Hòa mình vào thế giới thời trang chơi golf với sự tinh tế của DELUCA.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.jpg",
    category: "DELUCA",
    name: "Golf Fashion 2",
    description:
      "Hòa mình vào thế giới thời trang chơi golf với sự tinh tế của DELUCA.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.jpg",
    category: "DELUCA",
    name: "Golf Fashion 3",
    description:
      "Hòa mình vào thế giới thời trang chơi golf với sự tinh tế của DELUCA.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.jpg",
    category: "DELUCA",
    name: "Golf Fashion 4",
    description:
      "Hòa mình vào thế giới thời trang chơi golf với sự tinh tế của DELUCA.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/5.jpg",
    category: "DELUCA",
    name: "Golf Fashion 5",
    description:
      "Hòa mình vào thế giới thời trang chơi golf với sự tinh tế của DELUCA.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/6.jpg",
    category: "DELUCA",
    name: "Golf Fashion 6",
    description:
      "Hòa mình vào thế giới thời trang chơi golf với sự tinh tế của DELUCA.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/7.jpg",
    category: "DELUCA",
    name: "Golf Fashion 7",
    description:
      "Hòa mình vào thế giới thời trang chơi golf với sự tinh tế của DELUCA.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/8.jpg",
    category: "DELUCA",
    name: "Golf Fashion 7",
    description:
      "Hòa mình vào thế giới thời trang chơi golf với sự tinh tế của DELUCA.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/9.jpg",
    category: "DELUCA",
    name: "Golf Fashion 8",
    description:
      "Hòa mình vào thế giới thời trang chơi golf với sự tinh tế của DELUCA.",
    link: "/",
    github: "/",
  },
];

// remove category duplicates
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    // if category is 'all projects' return all projects, else filter by category
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          DELUCA Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
