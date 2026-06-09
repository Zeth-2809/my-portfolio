function About() {
  const skills = [
    { name: "Web Development", color: "bg-purple-500" },
    { name: "React", color: "bg-pink-500" },
    { name: "Flutter", color: "bg-blue-500" },
    { name: "React Native", color: "bg-cyan-500" },
    { name: "Python", color: "bg-yellow-500" },
    { name: "AI / Machine Learning", color: "bg-green-500" },
    { name: "Network Security", color: "bg-red-500" },
    { name: "Docker", color: "bg-orange-500" },
  ]

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gray-900 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          About <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Me</span>
        </h2>
        <p className="text-center text-gray-400 mb-12">Get to know me better</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Hi! I'm <span className="text-purple-400 font-semibold">Sophat Piseth</span>, 
              a passionate developer based in Cambodia. I love building things 
              that live on the internet and solving real world problems with code.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I work across Web, Mobile, AI/ML, Network Security, and Robotics. 
              Always learning, always building.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className={`${skill.color} text-white px-4 py-2 rounded-full text-sm font-medium`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About