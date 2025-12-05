"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Briefcase, CheckCircle, Calendar, MapPin } from "lucide-react"
import { motion } from "framer-motion"

const experienceData = [
  {
    company: "Cloud Technologies, Hyderabad, Telangana",
    position: "Machine Learning Intern",
    period: "May 5 – May 30",
    achievements: [
      "Developed and trained ML models using Python libraries (e.g., Scikit-learn, Pandas, NumPy) for tasks such as data classification, regression, and prediction.",
      "Performed data preprocessing and feature engineering to clean, transform, and optimize datasets for better model performance.",
      "Implemented and evaluated model performance using metrics like accuracy, precision, recall, and R² score, and optimized hyperparameters for improved results.",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      
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
            className="inline-block p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mb-4"
          >
            <Briefcase className="h-8 w-8 text-white" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Internship Experience
          </h2>
          <p className="text-muted-foreground text-lg">Professional work experience</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 group relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl shadow-lg"
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Briefcase className="h-6 w-6 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                        {exp.position}
                      </CardTitle>
                      <CardDescription className="text-base mb-3 font-medium flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {exp.company}
                      </CardDescription>
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-muted rounded-lg w-fit">
                        <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">{exp.period}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li 
                          key={achIndex} 
                          className="flex gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: achIndex * 0.1 }}
                        >
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground leading-relaxed">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
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