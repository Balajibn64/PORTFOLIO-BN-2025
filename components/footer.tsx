"use client";

import { motion } from 'framer-motion';
import { ArrowUp, Heart, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-t from-muted/20 to-background border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2 mb-4 md:mb-0"
          >
            <Code2 className="w-5 h-5 text-purple-400" />
            <span className="text-muted-foreground">
              Built with <Heart className="inline w-4 h-4 text-red-500 mx-1" /> React & Next.js
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center md:text-right"
          >
            <p className="text-muted-foreground mb-2">
              © {currentYear} Balaji N. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground/70">
              Crafting digital experiences with passion and precision.
            </p>
          </motion.div>
        </div>

        {/* Scroll to Top Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute bottom-8 right-8"
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ArrowUp className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
    </footer>
  );
}