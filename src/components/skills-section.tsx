"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Code, Wrench, Monitor, Box, Lightbulb, Sparkles, Brain, Users,
  Database, Network, LineChart, MessageSquare, Workflow, Cpu
} from "lucide-react"
import { 
  SiPython, SiGit, 
  SiGithubactions, SiJupyter, SiHtml5, SiCss3, SiJavascript, 
  SiReact, SiPandas, SiNumpy, SiScikitlearn, SiTensorflow 
} from "react-icons/si"
import { TbFileExcel, TbBrandVscode } from "react-icons/tb"
import { motion } from "framer-motion"

const skillIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  // Programming Languages
  "Python": SiPython,
  "SQL": Database,
  
  // Tools
  "Excel": TbFileExcel,
  "VS Code": TbBrandVscode,
  "Git": SiGit,
  "GitHub Actions": SiGithubactions,
  "Jupyter Notebook": SiJupyter,
  
  // Front-End
  "HTML": SiHtml5,
  "CSS": SiCss3,
  "JavaScript": SiJavascript,
  "React JS": SiReact,
  
  // ML / AI
  "Machine Learning": Brain,
  "Deep Learning": Cpu,
  "CNN": Network,
  "LSTM": Workflow,
  "Transfer Learning": Sparkles,
  
  // Libraries
  "Pandas": SiPandas,
  "NumPy": SiNumpy,
  "Scikit-Learn": SiScikitlearn,
  "TensorFlow": SiTensorflow,
  "Matplotlib": LineChart,
  "Seaborn": LineChart,
  
  // Concepts
  "Data Structures": Database,
  "Time-Series Analysis": LineChart,
  "Feature Engineering": Wrench,
  
  // Soft Skills
  "Communication": MessageSquare,
  "Teamwork": Users,
  "Problem Solving": Lightbulb,
  "Critical Thinking": Brain,
}

const skillsData = [
  {
    category: "Programming Languages",
    icon: Code,
    skills: ["Python", "SQL"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Tools",
    icon: Wrench,
    skills: ["Excel", "VS Code", "Git", "GitHub Actions", "Jupyter Notebook"],
    color: "from-orange-500 to-red-500",
  },
  {
    category: "Front-End",
    icon: Monitor,
    skills: ["HTML", "CSS", "JavaScript", "React JS"],
    color: "from-green-500 to-emerald-500",
  },
  {
    category: "ML / AI",
    icon: Brain,
    skills: ["Machine Learning", "Deep Learning", "CNN", "LSTM", "Transfer Learning"],
    color: "from-purple-500 to-indigo-500",
  },
  {
    category: "Libraries & Frameworks",
    icon: Box,
    skills: ["Pandas", "NumPy", "Scikit-Learn", "TensorFlow", "Matplotlib", "Seaborn"],
    color: "from-pink-500 to-rose-500",
  },
  {
    category: "Concepts",
    icon: Lightbulb,
    skills: ["Data Structures", "Time-Series Analysis", "Feature Engineering"],
    color: "from-yellow-500 to-orange-500",
  },
  {
    category: "Soft Skills",
    icon: Users,
    skills: ["Communication", "Teamwork", "Problem Solving", "Critical Thinking"],
    color: "from-teal-500 to-green-500",
  },
];

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
                      {category.skills.map((skill, skillIndex) => {
                        const SkillIcon = skillIconMap[skill];
                        return (
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
                              className="text-sm px-3 py-1.5 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default flex items-center gap-1.5"
                            >
                              {SkillIcon && <SkillIcon className="h-3.5 w-3.5 shrink-0" />}
                              {skill}
                            </Badge>
                          </motion.div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}