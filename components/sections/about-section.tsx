"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Palette, Lightbulb, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const highlights = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, scalable code with modern best practices"
  },
  {
    icon: Palette,
    title: "Design Focus",
    description: "Creating beautiful, intuitive interfaces that users love"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Always exploring new technologies and creative solutions"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively with teams to deliver exceptional results"
  }
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a dedicated Full Stack Java Developer with hands-on experience in building dynamic and scalable web applications. I specialize in Java, Spring Boot, React.js, and MongoDB, blending clean code with modern design principles to deliver intuitive digital experiences. With a strong foundation in backend architecture and responsive frontend development, I take pride in turning ideas into real-world solutions. I'm currently based in India and actively exploring opportunities to contribute to impactful tech projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a self-taught Full Stack Developer passionate about crafting scalable and user-centric web applications. From intuitive UIs to robust backend systems, I enjoy building solutions that solve real-world problems using technologies like Java, Spring Boot, React.js, and MongoDB.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My development approach combines clean architecture with thoughtful design, ensuring performance, security, and a seamless user experience. Whether it's a delivery platform, admin dashboard, or booking system, I strive to write code that’s efficient, maintainable, and impactful.
            </p>


            {/* Timeline */}
            <div className="space-y-4 mt-8">
              {[
                { year: "2025", title: "Java Full Stack Developer Intern at Aivarient" },
                { year: "2025", title: "Frontend Developer Intern at Vibexio.ai" },
                { year: "2024", title: "Completed BCA (Bachelor of Computer Applications)" },
                { year: "2024", title: "Built Full-Stack Delivery App with React, Spring Boot & MongoDB" },
               ].map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {item.year.slice(-2)}
                  </div>
                  <div>
                    <p className="font-medium">{item.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-600/20 p-1">
              <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center">
                <div className="text-8xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  BN
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full opacity-20 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full opacity-20 animate-pulse" />
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-purple-500/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}