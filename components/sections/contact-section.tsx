"use client";

import { useRef, useState, Suspense } from 'react';
import { motion, useInView } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import axios from "axios";
import { toast } from 'react-toastify';

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { LuBriefcase } from "react-icons/lu"; // Placeholder for Naukri

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "balajibn6464@gmail.com",
    href: "mailto:balajibn6464@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9629872873",
    href: "tel:+919629872873"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangalore, Karnataka, India",
    href: "#"
  }
];

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/Balajibn64", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/balaji64/", label: "LinkedIn" },
  { icon: SiLeetcode, href: "https://leetcode.com/u/balajibn6464/", label: "LeetCode" },
  { icon: LuBriefcase, href: "https://www.naukri.com/mnjuser/profile", label: "Naukri" }
];

function AnimatedBackground() {
  const meshRef = useRef<any>();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={3}>
      <MeshDistortMaterial
        color="#6366f1"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0.4}
        metalness={0.8}
        transparent
        opacity={0.3}
      />
    </Sphere>
  );
}

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);

    const payload = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    };

    try {
      const res = await axios.post("https://api.web3forms.com/submit", payload);

      if (res.status === 200) {
        console.log("Web3Forms Success:", res.data);
        toast.success("Message sent successfully!");
        reset(); // clear form
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Web3Forms Error:", err);
      toast.error("Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-20">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <AnimatedBackground />
          </Suspense>
        </Canvas>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life with cutting-edge 3D web experiences? Let's discuss your project and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Name</label>
                      <Input
                        {...register('name')}
                        placeholder="Your name"
                        className="bg-background/50 border-border/50 focus:border-purple-500/50 transition-all duration-300 hover:scale-105 focus:scale-105"
                        data-magnetic
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500">{errors.name.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input
                        {...register('email')}
                        type="email"
                        placeholder="your@email.com"
                        className="bg-background/50 border-border/50 focus:border-purple-500/50 transition-all duration-300 hover:scale-105 focus:scale-105"
                        data-magnetic
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject</label>
                    <Input
                      {...register('subject')}
                      placeholder="3D Web Development Project"
                      className="bg-background/50 border-border/50 focus:border-purple-500/50 transition-all duration-300 hover:scale-105 focus:scale-105"
                      data-magnetic
                    />
                    {errors.subject && (
                      <p className="text-sm text-red-500">{errors.subject.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea
                      {...register('message')}
                      placeholder="Tell me about your 3D web project ideas..."
                      rows={5}
                      className="bg-background/50 border-border/50 focus:border-purple-500/50 resize-none transition-all duration-300 hover:scale-105 focus:scale-105"
                      data-magnetic
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500">{errors.message.message}</p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    data-magnetic
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white hover:scale-105 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always open to discussing new opportunities, creative 3D projects, or
                partnerships. Feel free to reach out through any of the channels below.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center p-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg hover:border-purple-500/50 transition-all duration-300 group hover:scale-105 transform-gpu"
                  data-magnetic
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center mr-4 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-colors duration-300 group-hover:scale-110">
                    <info.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="font-medium">{info.label}</div>
                    <div className="text-muted-foreground">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Links & Profiles</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-300 hover:scale-125 transform-gpu"
                    data-magnetic
                  >
                    <social.icon className="w-5 h-5 text-purple-400" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}