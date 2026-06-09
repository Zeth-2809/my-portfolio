function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-950 pt-16">
      <div className="text-center px-4">
        <p className="text-purple-400 text-lg font-medium mb-4 tracking-widest uppercase">
          Hello, I'm
        </p>
        <h1 className="text-6xl font-bold text-white mb-4">
          Sophat Piseth
        </h1>
        <h2 className="text-3xl font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-6">
          Full Stack Developer
        </h2>
        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
          I build beautiful websites, mobile apps, and AI-powered solutions.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#projects" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition">
            View Projects
          </a>
          <a href="#contact" className="border border-purple-600 hover:bg-purple-600 text-white px-8 py-3 rounded-full font-medium transition">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero