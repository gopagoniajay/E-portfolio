"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Wrench, Monitor, Box, Lightbulb, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

const skillsData = [
  {
    category: "Programming Languages",
    icon: Code,
    skills: ["Java", "Python"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Tools",
    icon: Wrench,
    skills: ["Power BI", "Excel", "MySQL", "SQLite", "Git", "VS Code"],
    color: "from-orange-500 to-red-500",
  },
  {
    category: "Front-End",
    icon: Monitor,
    skills: ["HTML", "CSS", "JavaScript", "React JS"],
    color: "from-green-500 to-emerald-500",
  },
  {
    category: "Frameworks",
    icon: Box,
    skills: ["Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "TensorFlow"],
    color: "from-purple-500 to-pink-500",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-20 right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          delay: 1,
        }}
      />
      
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
            className="inline-block p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-4"
          >
            <Sparkles className="h-8 w-8 text-white" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg">Technologies and tools I work with</p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 group relative overflow-hidden">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <motion.div 
                        className={`p-2.5 bg-gradient-to-br ${category.color} rounded-xl shadow-lg`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="h-5 w-5 text-white" />
                      </motion.div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {category.category}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge
                            variant="secondary"
                            className="text-sm px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ y: -5 }}
          className="max-w-5xl mx-auto mt-6"
        >
          <Card className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 group relative overflow-hidden">
            {/* Gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            
            <CardHeader>
              <div className="flex items-center gap-3">
                <motion.div 
                  className="p-2.5 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl shadow-lg"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Lightbulb className="h-5 w-5 text-white" />
                </motion.div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  Soft Skills
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {["Excellent Communication", "TeamWork", "Problem-Solving", "Critical Thinking"].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Badge 
                      variant="outline" 
                      className="text-sm px-3 py-1 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}