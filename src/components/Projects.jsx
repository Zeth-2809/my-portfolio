function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A colorful and creative portfolio built with React and Tailwind CSS.",
      tags: ["React", "Tailwind"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Workout Tracker",
      description: "An offline workout tracking website with exercise dropdowns and progress tracking.",
      tags: ["HTML", "CSS", "JavaScript"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "AI Chat App",
      description: "A local AI powered chat application using Ollama and LLaMA 3.2.",
      tags: ["Python", "AI", "Ollama"],
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Mobile App",
      description: "A cross platform mobile application built with Flutter.",
      tags: ["Flutter", "Dart"],
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center bg-gray-950 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          My <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-center text-gray-400 mb-12">Things I have built</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-2xl overflow-hidden hover:scale-105 transition duration-300">
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects