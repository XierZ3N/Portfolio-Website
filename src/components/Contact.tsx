"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
      <p className="text-gray-300 mb-12">
        Have a project or idea? Let’s talk — I’m always open to collaborating.
      </p>
      <form className="max-w-lg mx-auto space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 glass"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 glass"
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          className="w-full px-4 py-3 glass"
        ></textarea>
        <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl text-white hover:scale-105 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}
