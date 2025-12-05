"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Folder, Github, CheckCircle, ExternalLink, Calendar } from "lucide-react"
import { motion } from "framer-motion"

const projectsData = [
  {
    title: "Forward Privacy Prevention",
    date: "July 2025",
    description:
      "A comprehensive security system designed to protect sensitive data in cloud environments using forward privacy techniques.",
    achievements: [
      "Engineered a forward privacy prevention system to safeguard sensitive data in cloud environments, mitigating risks of unauthorized access and enhancing overall security compliance.",
      "Implemented advanced cryptographic algorithms using Python and secure encryption libraries, ensuring data confidentiality while maintaining optimal processing speed.",
      "Optimized and validated the solution on real-world datasets, improving scalability and reducing potential vulnerabilities by 25% through efficient resource utilization.",
    ],
    github: "https://github.com/gopagoniajay/Forward_privacy_preservation",
    tags: ["Python", "Cryptography", "Cloud Security", "Machine Learning"],
  },
  {
    title: "Smart Expense Tracker",
    date: "March 2024",
    description:
      "A user-friendly expense tracking web application that helps users monitor spending patterns, manage budgets, and visualize financial health.",
    achievements: [
      "Developed a full-stack expense tracking application to record, categorize, and analyze daily income and expenses with an intuitive and responsive UI.",
      "Integrated features such as category-wise filtering, monthly summaries, and transaction history to help users understand their spending behavior.",
      "Implemented data persistence and clean code structure, making the project easy to extend with features like authentication, export, and advanced analytics.",
    ],
    github: "https://github.com/gopagoniajay/ExpenseTracker",
    tags: ["JavaScript", "React", "Node.js", "Expense Management", "UI/UX"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
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
            className="inline-block p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl mb-4"
          >
            <Folder className="h-8 w-8 text-white" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-muted-foreground text-lg">Building innovative solutions</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 group relative overflow-hidden">
                {/* Gradient overlay on hover – allow clicks to pass through */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

                <CardHeader>
                  <div className="flex items-start justify-between gap-4 flex-col md:flex-row">
                    <div className="flex items-start gap-4 flex-1">
                      <motion.div
                        className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl shadow-lg"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Folder className="h-6 w-6 text-white" />
                      </motion.div>

                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-base mb-3">
                          {project.description}
                        </CardDescription>

                        <div className="flex items-center gap-2 px-3 py-1.5 bg-muted rounded-lg w-fit">
                          <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">{project.date}</p>
                        </div>
                      </div>
                    </div>

                    {/* View Code button */}
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        size="sm"
                        className="gap-2 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 shadow-lg"
                        onClick={() =>
                          window.open(project.github, "_blank", "noopener,noreferrer")
                        }
                      >
                        <Github className="h-4 w-4" />
                        View Code
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    </motion.div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {project.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          className="flex gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: achIndex * 0.1 }}
                        >
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground leading-relaxed">
                            {achievement}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Tags */}
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: tagIndex * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-full text-sm font-medium text-orange-600 dark:text-orange-400 cursor-default"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
