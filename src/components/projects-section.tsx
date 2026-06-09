"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

const projectsData = [
  {
    title:
      "ENSEMBLE DEEP LEARNING APPROACH FOR EMOTION RECOGNITION USING MULTIMODAL PHYSIOLOGICAL SIGNALS",
    date: "2026",
    description:
      "An ensemble deep learning system for emotion recognition using ECG and EDA signals from wearable devices.",
    achievements: [
      "Developed CNN-LSTM with self-attention for multimodal signal processing.",
      "Applied time-series analysis on WESAD dataset.",
      "Achieved 98.35% accuracy using transfer learning.",
      "Improved classification by reducing inter-subject variability.",
    ],
    github: "https://github.com/gopagoniajay/capstone-project",
    tags: ["Python", "Deep Learning", "CNN", "LSTM", "Transfer Learning"],
  },

  {
    title: "Event Booking System",
    date: "2025",
    description:
      "A full-stack web application for event management, user registration, and booking workflows.",
    achievements: [
      "Developed full-stack application with CRUD operations.",
      "Designed responsive UI using HTML, CSS, JavaScript.",
      "Implemented backend logic for booking and validation.",
      "Handled data management and workflow processing.",
    ],
    github: "https://github.com/gopagoniajay/Event-booking-System",
    tags: ["JavaScript", "HTML", "CSS", "Full Stack", "Web App"],
  },

  {
    title: "Forward Privacy Prevention",
    date: "2025",
    description:
      "A cloud security system using cryptographic techniques to protect sensitive data.",
    achievements: [
      "Built forward privacy system for secure data handling.",
      "Implemented encryption algorithms using Python.",
      "Reduced vulnerabilities by 25%.",
      "Improved system scalability and performance.",
    ],
    github: "https://github.com/gopagoniajay/Forward_privacy_preservation",
    tags: ["Python", "Cryptography", "Cybersecurity", "Cloud"],
  },

  {
    title: "Mental Health Chatbot",
    date: "2025",
    description:
      "An AI-powered conversational agent designed to provide support, coping resources, and sentiment analysis.",
    achievements: [
      "Developed an interactive conversational interface using Natural Language Processing (NLP).",
      "Implemented intent classification and sentiment analysis using deep learning models.",
      "Integrated secure user data storage and customized support workflows.",
      "Optimized chatbot response latency and classification accuracy for real-time engagement.",
    ],
    github: "https://github.com/gopagoniajay/mental_health_bot/tree/main/mental_health_chatbot",
    tags: ["Python", "NLP", "Machine Learning", "Chatbot", "AI"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-500/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block p-3 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-2xl mb-4"
          >
            <Sparkles className="h-8 w-8 text-white" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
            Projects
          </h2>

          <p className="text-muted-foreground text-lg">
            Featured work and technical projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-6 lg:grid-cols-2">

          {projectsData.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >

              {/* Whole Card Clickable */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >

                <Card className="relative h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 group overflow-hidden cursor-pointer">

                  {/* Hover Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-fuchsia-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />

                  <CardHeader>
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>

                      <p className="text-sm text-muted-foreground mt-1">
                        {project.date}
                      </p>
                    </div>
                  </CardHeader>

                  <CardContent>

                    {/* Description */}
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-sm px-3 py-1"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Achievements */}
                    <div className="space-y-2 mb-6">
                      {project.achievements.map(
                        (achievement, achievementIndex) => (
                          <p
                            key={achievementIndex}
                            className="text-sm text-muted-foreground"
                          >
                            • {achievement}
                          </p>
                        )
                      )}
                    </div>

                    {/* View on GitHub Button Visual */}
                    <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between">
                      <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-1.5 font-medium">
                        <Sparkles className="h-3 w-3 text-violet-500 animate-pulse" />
                        Click card to view repository
                      </span>
                      <div className="inline-flex items-center justify-center gap-2 rounded-xl text-xs font-semibold h-8 px-3.5 bg-gradient-to-r from-violet-600/90 to-fuchsia-600/90 text-white shadow-xs group-hover:from-violet-600 group-hover:to-fuchsia-600 group-hover:scale-105 transition-all duration-300">
                        <Github className="h-3.5 w-3.5" />
                        View Code
                      </div>
                    </div>

                  </CardContent>
                </Card>

              </a>

            </motion.div>

          ))}

        </div>
      </div>
    </section>
  )
}