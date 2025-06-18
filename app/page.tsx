"use client";

import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { CertificationsSection } from '@/components/sections/certifications-section';
import { ContactSection } from '@/components/sections/contact-section';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { MagneticCursor } from '@/components/magnetic-cursor';
import { EducationSection } from '@/components/sections/education-section';
import { AnimatedBackground } from '@/components/background';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function Home() {
  return (
    <main className="relative">
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
      <AnimatedBackground />
      <MagneticCursor />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}