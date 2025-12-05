"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code2, ExternalLink, TrendingUp, Trophy } from "lucide-react"
import { motion } from "framer-motion"

const codingProfiles = [
  {
    platform: "LeetCode",
    problems: "100+",
    year: "2025",
    link: "https://leetcode.com/u/gopagoniajay/",
    color: "from-orange-500 to-yellow-500",
    icon: "🔥",
  },
  {
    platform: "HackerRank",
    problems: "50+",
    year: "2025",
    link: "https://www.hackerrank.com/profile/ajaygopagoni6",
    color: "from-green-500 to-emerald-500",
    icon: "⭐",
  },
  {
    platform: "GeeksForGeeks",
    problems: "60+",
    year: "2025",
    link: "https://www.geeksforgeeks.org/profile/ajaygopgtn1",
    color: "from-green-600 to-teal-500",
    icon: "💚",
  },
]

export function CodingProfilesSection() {
  return (
    <section id="coding" className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-20 right-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl"
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
            className="inline-block p-3 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl mb-4"
          >
            <Code2 className="h-8 w-8 text-white" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
            Coding Profiles
          </h2>
          <p className="text-muted-foreground text-lg">Problem-solving journey across platforms</p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {codingProfiles.map((profile, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 group relative overflow-hidden">
                {/* 🔥 Important: allow clicks to pass through */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                
                <CardHeader>
                  <div className="flex flex-col items-center text-center gap-3">
                    <motion.div 
                      className={`p-4 bg-gradient-to-br ${profile.color} rounded-2xl shadow-xl relative`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Code2 className="h-7 w-7 text-white" />
                      {/* Icon Badge */}
                      <motion.div
                        className="absolute -top-2 -right-2 text-2xl"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {profile.icon}
                      </motion.div>
                    </motion.div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {profile.platform}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  {/* Stats Display */}
                  <div className="space-y-2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Trophy className="h-5 w-5 text-yellow-500" />
                        <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {profile.problems}
                        </p>
                      </div>
                    </motion.div>
                    <p className="text-sm text-muted-foreground font-medium">
                      Problems Solved
                    </p>
                    <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                      <TrendingUp className="h-3 w-3 text-green-500" />
                      <span>Active in {profile.year}</span>
                    </div>
                  </div>
                  
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full gap-2 border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                      asChild
                    >
                      <a href={profile.link} target="_blank" rel="noopener noreferrer">
                        View Profile
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl mx-auto mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-around gap-6 text-center">
            <div>
              <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                190+
              </p>
              <p className="text-sm text-muted-foreground mt-1">Total Problems</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-border" />
            <div>
              <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                3
              </p>
              <p className="text-sm text-muted-foreground mt-1">Platforms</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-border" />
            <div>
              <p className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                2025
              </p>
              <p className="text-sm text-muted-foreground mt-1">Active Year</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
