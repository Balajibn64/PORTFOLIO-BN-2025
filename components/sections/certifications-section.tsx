"use client";

import { useRef, Suspense } from 'react';
import { motion, useInView } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Text } from '@react-three/drei';
import { ExternalLink, Award, Calendar, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const certifications = [
  {
    id: 1,
    title: "Full Stack Java Development Certification",
    organization: "ExcelR Solutions",
    date: "2025",
    logo: "https://excelr.com/wp-content/uploads/2021/07/excelr-logo.png",
    credentialUrl: "https://drive.google.com/file/d/1qco7p0NG0zQeJFx1riknFMWvU3BkvXKD/view?usp=drive_link",
    skills: ["Java", "Spring Boot", "Hibernate", "REST APIs", "React", "MongoDB", "MySQL"],
    featured: true
  },
  {
    id: 2,
    title: "Java Full Stack Developer Internship Certificate",
    organization: "Aivarient",
    date: "2025",
    logo: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=100",
    credentialUrl: "https://drive.google.com/file/d/1dFDOR5-yAl8qpN6fjYPxl3pFi9mFuj_s/view?usp=drive_link",
    skills: ["Java", "Spring Boot", "React.js", "MongoDB", "REST APIs", "Full Stack Development"],
    featured: true
  },
  {
    id: 3,
    title: "Introduction to Web Development with HTML, CSS, JavaScript",
    organization: "Coursera IBM",
    date: "December 8, 2023",
    logo: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=100", // A generic web dev image
    credentialUrl: "https://drive.google.com/file/d/12ara-3EdF6rvBWXs4HWp04pyZvqMtiI3/view?usp=sharing",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "DOM Manipulation"],
    featured: true
  },
];

function FloatingCertificate({ position, rotation }: { position: [number, number, number], rotation: [number, number, number] }) {
  const meshRef = useRef<any>();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = rotation[0] + Math.sin(state.clock.elapsedTime) * 0.1;
      meshRef.current.rotation.y = rotation[1] + Math.sin(state.clock.elapsedTime * 0.7) * 0.1;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1;
    }
  });

  return (
    <Box ref={meshRef} position={position} args={[0.8, 0.6, 0.05]}>
      <meshStandardMaterial color="#8b5cf6" metalness={0.8} roughness={0.2} />
    </Box>
  );
}

function CertificationScene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <FloatingCertificate position={[-2, 0, 0]} rotation={[0.2, 0.3, 0]} />
      <FloatingCertificate position={[2, 0.5, -1]} rotation={[-0.1, -0.2, 0.1]} />
      <FloatingCertificate position={[0, -1, 1]} rotation={[0.3, 0.1, -0.2]} />
    </>
  );
}

export function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-background via-muted/10 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </motion.div>

        {/* 3D Floating Certificates Background */}
        {/* <div className="relative mb-20 h-64 opacity-30">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <Suspense fallback={null}>
              <CertificationScene />
            </Suspense>
          </Canvas>
        </div> */}

        {/* Featured Certifications */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {certifications.filter(cert => cert.featured).map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group perspective-1000"
              data-magnetic
            >
              <Card className="relative overflow-hidden border-border/50 hover:border-yellow-500/50 transition-all duration-500 hover:shadow-2xl bg-card/50 backdrop-blur-sm transform-gpu hover:scale-105 hover:rotateY-5">
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-8 w-8 p-0 bg-white/90 hover:bg-white text-black hover:scale-110 transition-transform duration-200 rounded-full flex items-center justify-center"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold group-hover:text-yellow-400 transition-colors duration-300">
                        {cert.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{cert.organization}</p>
                    </div>
                  </div>

                  <div className="flex items-center mb-4 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Earned in {cert.date}</span>
                    <CheckCircle className="w-4 h-4 ml-auto text-green-500" />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-muted/50 hover:bg-yellow-500/20 hover:text-yellow-400 transition-colors duration-200 hover:scale-105"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                {/* 3D Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Certifications */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.filter(cert => !cert.featured).map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="group"
              data-magnetic
            >
              <Card className="overflow-hidden border-border/50 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg bg-card/50 backdrop-blur-sm h-full hover:scale-105 transform-gpu">
                <CardContent className="p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm group-hover:text-orange-400 transition-colors duration-300 truncate">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-muted-foreground truncate">{cert.organization}</p>
                    </div>
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 rounded-full flex items-center justify-center bg-white/90 hover:bg-white text-black"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="flex items-center mb-3 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>{cert.date}</span>
                    <CheckCircle className="w-3 h-3 ml-auto text-green-500" />
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs bg-muted/50 hover:scale-105 transition-transform duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                    {cert.skills.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-muted/50">
                        +{cert.skills.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        > */}
        {/* <Button
            size="lg"
            variant="outline"
            data-magnetic
            className="group px-8 py-3 hover:bg-foreground hover:text-background transition-all duration-300 hover:scale-105"
          > */}
        {/* <Award className="mr-2 h-5 w-5" />
            View All Certifications
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </motion.div> */}
      </div>
    </section>
  );
}