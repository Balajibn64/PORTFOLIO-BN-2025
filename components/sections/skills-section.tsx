"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Code2, 
  Palette, 
  Database, 
  Cloud, 
  Smartphone, 
  GitBranch, 
  ShieldCheck,
  Lightbulb
} from 'lucide-react';

const skillCategories = [
  {
    title: "Backend", 
    icon: Database,
    skills: ["Spring Boot", "Java", "REST APIs", "Node.js", "Express"],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
    color: "from-teal-500 to-lime-500"
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["Docker", "GitHub Actions", "Vercel", "Render", "CI/CD"],
    color: "from-purple-500 to-violet-500"
  },
  {
    title: "Tools",
    icon: GitBranch,
    skills: ["Git", "Visual Studio Code", "Postman", "Figma", "Jira"],
    color: "from-indigo-500 to-blue-500"
  },
  {
    title: "Testing",
    icon: ShieldCheck,
    skills: ["JUnit", "Postman (API Testing)", "Swagger"],
    color: "from-rose-500 to-red-500"
  },
];



export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern web applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="group"
              data-magnetic
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:scale-105 transform-gpu">
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.7 + index * 0.1 + skillIndex * 0.05 }}
                      className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground hover:bg-purple-500/20 hover:text-purple-400 transition-colors duration-200 cursor-pointer"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}