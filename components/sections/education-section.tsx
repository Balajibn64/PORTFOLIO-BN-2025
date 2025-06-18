"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const educationData = [
  {
    year: "2024-2025",
    degree: "Full Stack Java Developer Course",
    institution: "ExcelR",
    description: "Trained in Java, Spring Boot, React.js, MongoDB, REST APIs, and project deployment."
  },
  {
    year: "2021-2024",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Periyar University",
    description: "Focused on Java, Web Development, Data Structures, and Software Engineering."
  },
  {
    year: "2021",
    degree: "Higher Secondary Education (12th Grade)",
    institution: "St.Thomas Brillant Public Matriculation Higher Secondary School",
    description: "Completed with a focus on Computer Science and Mathematics."
  }
];


export function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A journey of academic excellence and continuous learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationData.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-green-500/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">{item.degree}</h4>
                  <p className="text-sm text-muted-foreground">{item.institution}</p>
                  <p className="text-xs text-muted-foreground mt-2">{item.description}</p>
                  <div className="mt-4 text-xs font-medium text-muted-foreground">{item.year}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}