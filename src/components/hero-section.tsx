"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, Github, Linkedin, Download, Sparkles, ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20" />

      {/* Animated Orbs */}
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6, type: "spring" }}
            className="mb-8 flex justify-center"
          >
            <div className="relative group">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-background" />
              </motion.div>

              <motion.div
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-background shadow-2xl"
                whileHover={{ scale: 1.05 }}
              >
                {/* ✅ PROFILE IMAGE FROM PUBLIC */}
                <Image
                  src="/profile.jpg"
                  alt="Ajay Gopagoni - AI/ML Engineer"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Available for Opportunities
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Ajay Gopagoni
          </h1>

          <p className="text-xl md:text-3xl text-muted-foreground mb-6 font-medium">
            Aspiring AI/ML Engineer
          </p>

          {/* Contact */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a href="mailto:ajaygopagoni6@gmail.com" className="flex items-center gap-2 px-4 py-2 text-sm bg-card/50 backdrop-blur rounded-full border">
              <Mail className="h-4 w-4" />
              ajaygopagoni6@gmail.com
            </a>
            <span className="text-muted-foreground">•</span>
            <a href="tel:9390071205" className="flex items-center gap-2 px-4 py-2 text-sm bg-card/50 backdrop-blur rounded-full border">
              <Phone className="h-4 w-4" />
              9390071205
            </a>
          </div>

          {/* Summary */}
          <div className="mb-8">
            <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-card/30 backdrop-blur border">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Aspiring AI/ML engineer with experience in machine learning,
                data preprocessing, and intelligent system development.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            
            {/* ✅ RESUME DOWNLOAD */}
            <Button
              size="lg"
              className="rounded-full gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/25"
              asChild
            >
              <a href="/resume.pdf" download>
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>

            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/gopagoniajay" target="_blank">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>

            <Button size="lg" variant="outline" asChild>
              <a href="https://www.linkedin.com/in/ajaygopagoni" target="_blank">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>

          {/* Scroll */}
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-muted-foreground">Scroll to explore</p>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ArrowDown className="h-5 w-5 text-muted-foreground" />
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
