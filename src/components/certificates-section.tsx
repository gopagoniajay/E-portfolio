"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

const certificatesData = [
  {
    title: "Generative AI for Data Science",
    issuer: "Microsoft",
    date: "May 2025",
    color: "from-blue-500 to-cyan-500",
    file: "/certificates/coursera%20data%20science.pdf",
  },
  {
    title: "Cybersecurity Fundamentals",
    issuer: "IBM Skill Build",
    date: "Oct 2024",
    color: "from-indigo-500 to-blue-500",
    file: "/certificates/cyber%20fundamentals.pdf",
  },
  {
    title: "Data Analysis with Python",
    issuer: "IBM",
    date: "Sep 2024",
    color: "from-purple-500 to-pink-500",
    file: "/certificates/ibm%20data.pdf",
  },
  {
    title: "Building LLM Applications With Prompt Engineering",
    issuer: "NVIDIA",
    date: "Jul 2025",
    color: "from-green-500 to-emerald-500",
    file: "/certificates/llm%20prompt%20engineering.pdf",
  },
  {
    title: "AWS Academy Graduate - Cloud Foundations ",
    issuer: "Amazon Web Services",
    date: "May 2025",
    color: "from-orange-500 to-yellow-500",
    file: "/certificates/aws.pdf",
  },
  {
    title: "Generative AI Certification",
    issuer: "Oracle",
    date: "June 2025",
    color: "from-red-500 to-rose-500",
    file: "/certificates/gen%20ai%20oracle.pdf",
  },
]

export function CertificatesSection() {
  return (
    <section id="certificates" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
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
            className="inline-block p-3 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl mb-4"
          >
            <Award className="h-8 w-8 text-white" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
            Certificates
          </h2>

          <p className="text-muted-foreground text-lg">
            Professional certifications and achievements
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 group relative overflow-hidden cursor-pointer">
                  
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  <motion.div
                    className="absolute top-2 right-2"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Sparkles className="h-4 w-4 text-yellow-500" />
                  </motion.div>

                  <CardContent className="pt-6 relative z-10">
                    <div className="flex flex-col items-center text-center gap-4">
                      <motion.div
                        className={`p-4 bg-gradient-to-br ${cert.color} rounded-2xl shadow-xl`}
                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Award className="h-7 w-7 text-white" />
                      </motion.div>

                      <div className="space-y-3">
                        <h3 className="font-semibold text-base leading-snug min-h-[3rem] flex items-center justify-center group-hover:text-primary transition-colors">
                          {cert.title}
                        </h3>

                        <Badge
                          variant="secondary"
                          className={`px-3 py-1 font-medium group-hover:bg-gradient-to-r group-hover:${cert.color} group-hover:text-white transition-all`}
                        >
                          {cert.issuer}
                        </Badge>

                        <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>{cert.date}</span>
                        </div>
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
