"use client";

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';


const projects = [
  {
    id: 1,
    title: "Full-Stack Food Delivery App",
    description: "An end-to-end food ordering platform with user authentication, real-time order tracking, and admin dashboard, developed during my internship at Vibexio.ai.",
    image: "/assets/FOOD-DEL.png?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Render"],
    demoUrl: "https://food-delivery-frontend-u8jb.onrender.com",
    githubUrl: "https://github.com/Balajibn64/FULLSTACK-FOOD-DELIVERY-WEB",
    featured: true
  },
  {
    id: 2,
    title: "Modern Weather App",
    description: "A sleek and responsive weather app that fetches real-time data using OpenWeatherMap API with a minimal UI, built using React and Vite.",
    image: "/assets/Weather_app.png",
    tags: ["React", "Vite", "CSS", "OpenWeatherMap API", "GitHub Pages"],
    demoUrl: "https://balajibn64.github.io/weather-app/",
    githubUrl: "https://github.com/Balajibn64/Balajibn64-weather-app",
    featured: false
  },
  {
    id: 3,
    title: "YouTube Clone",
    description: "A simplified clone of YouTube focusing on responsive design, modular components, and modern React practices for video streaming UI.",
    image: "/assets/YT-CLONE.png",
    tags: ["React", "Vite", "CSS Modules", "GitHub Pages"],
    demoUrl: "https://balajibn64.github.io/youtube-clone/",
    githubUrl: "https://github.com/Balajibn64/Balajibn64-youtube-clone",
    featured: true
  },
  {
    id: 4,
    title: "Online Hotel Booking System (OHBS)",
    description: "A modular hotel booking platform with role-based access for Admins, Managers, and Customers, built using Spring Boot and React.",
    image: "/assets/OHBS.png",
    tags: ["Spring Boot", "React", "MongoDB", "JWT", "Cloudinary", "Role-Based Auth"],
    demoUrl: "https://github.com/Balajibn64/P-31-OHBS-GROUP-2",
    githubUrl: "https://github.com/Balajibn64/P-31-OHBS-GROUP-2",
    featured: false
  },
  {
    id: 5,
    title: "Vibexio.ai Website",
    description: "Contributed to the frontend development of the official Vibexio.ai website, focusing on responsiveness, animations, and cross-browser compatibility.",
    image: "/assets/Vibexio.png",
    tags: ["React", "HTML", "CSS", "JavaScript"],
    demoUrl: "https://www.vibexio.ai/",
    githubUrl: "#",
    featured: false
  },
  // {
  //   id: 6,
  //   title: "ADK Aari Project",
  //   description: "Built a promotional web presence for ADK Aari, showcasing design aesthetics and mobile-friendly layout for a local embroidery business.",
  //   image: "https://images.pexels.com/photos/1121377/pexels-photo-1121377.jpeg?auto=compress&cs=tinysrgb&w=800",
  //   tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  //   demoUrl: "#",
  //   githubUrl: "#",
  //   featured: false
  // }
];


export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of 3D web experiences and innovative solutions that push the boundaries of modern web development
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
              data-magnetic
            >
              <Card className="overflow-hidden border-border/50 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl bg-card/50 backdrop-blur-sm transform-gpu hover:scale-105">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-58 object-cover transition-transform duration-700"
                    whileHover={{
                      scale: 1.1,
                      rotate: 2,
                      filter: "brightness(1.2)",
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 hover:bg-white text-black hover:scale-110 transition-transform duration-200 px-4 py-2 rounded-lg inline-flex items-center"
                    >
                      <Play className="w-4 h-4 mr-1" />
                      Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 hover:bg-white text-black hover:scale-110 transition-transform duration-200 px-4 py-2 rounded-lg inline-flex items-center"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-muted/50 hover:bg-purple-500/20 hover:text-purple-400 transition-colors duration-200 hover:scale-105"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group"
              data-magnetic
            >
              <Card className="overflow-hidden border-border/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg bg-card/50 backdrop-blur-sm h-full hover:scale-105 transform-gpu">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-46 object-cover transition-transform duration-500"
                    whileHover={{
                      scale: 1.1,
                      rotate: 2,
                      filter: "brightness(1.2)",
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute top-2 right-2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 w-8 p-0 bg-white/90 hover:bg-white text-black hover:scale-110 transition-transform duration-200 rounded-full flex items-center justify-center"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 w-8 p-0 bg-white/90 hover:bg-white text-black hover:scale-110 transition-transform duration-200 rounded-full flex items-center justify-center"
                    >
                      <Github className="w-3 h-3" />
                    </a>
                  </div>
                </div>
                <CardContent className="p-4 flex flex-col h-full">
                  <h4 className="font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs bg-muted/50 hover:scale-105 transition-transform duration-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-muted/50">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Balajibn64" // Your GitHub link
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-3 hover:bg-foreground hover:text-background transition-all duration-300 hover:scale-105 inline-flex items-center border border-foreground rounded-lg"
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}