import { useState } from 'react'

const CONTACT_EMAIL = "sophatpiseth.28@gmail.com"

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = `Portfolio contact from ${form.name || "website visitor"}`
    const body = `${form.message}\n\n— ${form.name} (${form.email})`
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-900 py-20 px-4">
      <div className="max-w-2xl mx-auto w-full">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Get In <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Touch</span>
        </h2>
        <p className="text-center text-gray-400 mb-12">Feel free to reach out!</p>

        <div className="bg-gray-950 rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="bg-gray-800 text-white px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="bg-gray-800 text-white px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              rows="5"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="bg-gray-800 text-white px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            />
            <button type="submit" className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition">
              Send Message
            </button>
          </form>

          <div className="flex justify-center gap-8 mt-8">
            <a href="https://github.com/Zeth-2809" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-purple-400 transition font-medium">
              GitHub
            </a>
            <a href="mailto:sophatpiseth.28@gmail.com" className="text-gray-400 hover:text-purple-400 transition font-medium">
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact