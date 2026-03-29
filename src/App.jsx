import React from "react";

export default function App() {
  return (
    <div className="font-sans bg-slate-50 text-gray-900">
      {/* NAVBAR */}
      <header className="flex justify-between items-center px-8 py-4 bg-blue-900 text-white">
        <h1 className="text-xl font-bold">Vector and Valence</h1>
        <nav className="space-x-6">
          <a href="#" className="hover:underline">Home</a>
          <a href="#subjects" className="hover:underline">Subjects</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="text-center py-24 px-6 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
        <h2 className="text-4xl font-bold mb-4">
          99.95 ATAR \ State Rank 9th in Chemistry & Physics
        </h2>
        <p className="text-lg mb-6">
          Online HSC tutoring for Year 11 & 12 students aiming for Band 6 results.
        </p>
        <button className="bg-white text-blue-900 px-6 py-3 rounded-xl font-semibold shadow">
          Book Free Consultation
        </button>
      </section>

      {/* FEATURES */}
      <section className="grid md:grid-cols-3 gap-6 px-8 py-16">
        {[
          {
            title: "Results-Focused",
            desc: "Learn exactly what markers look for in Band 6 responses."
          },
          {
            title: "Simplified Concepts",
            desc: "Complex topics broken into clear, easy steps."
          },
          {
            title: "Proven Improvement",
            desc: "Students consistently improve marks and confidence."
          }
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>

      {/* SUBJECTS */}
      <section id="subjects" className="text-center py-16">
        <h2 className="text-3xl font-bold mb-8">Subjects Offered</h2>
        <div className="flex justify-center gap-6 flex-wrap">
          {["Chemistry", "Physics"].map((subj, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow w-64">
              <h3 className="text-xl font-semibold">{subj}</h3>
              <p className="mt-2">Master content, exam technique, and Band 6 responses.</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-white py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="max-w-2xl mx-auto">
          I achieved a 99.95 ATAR and state rank of 9th in both Chemistry and Physics. My tutoring focuses on simplifying complex ideas and teaching students how to maximise marks using HSC marking criteria.
        </p>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-8">Pricing</h2>
        <div className="flex justify-center gap-6 flex-wrap">
          <div className="bg-white p-8 rounded-2xl shadow w-72">
            <h3 className="text-xl font-semibold mb-2">1-on-1</h3>
            <p className="text-2xl font-bold">$80/hr</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow w-72">
            <h3 className="text-xl font-semibold mb-2">Group</h3>
            <p className="text-2xl font-bold">$50/hr</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-blue-900 text-white py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="mb-6">yourname@email.com</p>
        <form className="max-w-md mx-auto space-y-4">
          <input className="w-full p-3 rounded text-black" placeholder="Name" />
          <input className="w-full p-3 rounded text-black" placeholder="Email" />
          <textarea className="w-full p-3 rounded text-black" placeholder="Message" />
          <button className="bg-white text-blue-900 px-6 py-3 rounded-xl font-semibold w-full">
            Send
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-4 bg-blue-950 text-white">
        © 2026 Elite HSC Tutoring
      </footer>
    </div>
  );
}
<h1 className="text-3xl font-bold underline text-blue-500">
  Hello Tailwind!
</h1>