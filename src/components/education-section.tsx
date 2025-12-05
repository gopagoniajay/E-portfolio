"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { GraduationCap, Calendar, Award } from "lucide-react"
import { motion } from "framer-motion"

const educationData = [
  {
    institution: "Institute of Aeronautical Engineering, Hyderabad, India",
    degree: "B.Tech in Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
    period: "Expected graduation: May 2027",
    gpa: "7.3",
    color: "from-blue-500 to-cyan-500",
  },
  {
    institution: "Vathsalya Institute of Science and Technology, Hyderabad, India",
    degree: "Diploma in Computer Science and Engineering",
    period: "May 2024",
    gpa: "7.5",
    color: "from-purple-500 to-pink-500",
  },
  {
    institution: "TS Model School, Dariyapur, Peddapalli",
    degree: "SSC",
    period: "March 2021",
    gpa: "100%",
    color: "from-green-500 to-emerald-500",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      
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
            className="inline-block p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-4"
          >
            <GraduationCap className="h-8 w-8 text-white" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-muted-foreground text-lg">My academic journey</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 overflow-hidden group relative">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${edu.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className={`p-3 bg-gradient-to-br ${edu.color} rounded-xl shadow-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <GraduationCap className="h-6 w-6 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                        {edu.institution}
                      </CardTitle>
                      <CardDescription className="text-base mb-3 font-medium">
                        {edu.degree}
                      </CardDescription>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-muted rounded-lg">
                          <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                          <span className="text-muted-foreground">{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20">
                          <Award className="h-3.5 w-3.5 text-green-600 dark:text-green-400" />
                          <span className="font-semibold text-green-600 dark:text-green-400">
                            GPA: {edu.gpa}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Timeline Connector Visual */}
        <div className="max-w-4xl mx-auto relative -mt-6 mb-6">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-20"
          />
        </div>
      </div>
    </section>
  )
}