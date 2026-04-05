'use client';

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      {/* Hero */}
      <section className="px-6 py-24 text-center">
        <h1 className="text-7xl font-black uppercase tracking-tighter mb-6">
          Prompted
          <span className="text-[#00F0FF]">.2.0</span>
        </h1>
        <p className="text-2xl text-[#757575] max-w-2xl mx-auto mb-12">
          High-Tech Manual for AI Prompting & Agentic Workflows
        </p>
        <Link 
          href="/basics"
          className="inline-block bg-[#00F0FF] text-[#0D0D0D] px-8 py-4 font-bold uppercase tracking-wide hover:bg-[#00A3AA] transition-colors"
        >
          Start Learning
        </Link>
      </section>

      {/* Categories */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Basics", desc: "Core prompting principles", href: "/basics", color: "#00F0FF" },
            { title: "Advanced", desc: "Sophisticated techniques", href: "/advanced", color: "#FF00FF" },
            { title: "Patterns", desc: "Reusable prompt templates", href: "/patterns", color: "#00F0FF" },
            { title: "Swarms", desc: "Multi-agent orchestration", href: "/swarms", color: "#FF00FF" },
            { title: "Workflows", desc: "Agentic pipelines", href: "/workflows", color: "#00F0FF" },
            { title: "Glossary", desc: "Essential terms", href: "/glossary", color: "#FF00FF" },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group block border border-[#2A2A2A] p-8 hover:border-[#00F0FF] transition-colors"
            >
              <h2 className="text-2xl font-bold mb-2 group-hover:text-[#00F0FF] transition-colors">
                {item.title}
              </h2>
              <p className="text-[#757575]">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#2A2A2A] px-6 py-8 text-center text-[#757575]">
        <p>Built with 🏔️ by Peak AI</p>
      </footer>
    </div>
  );
}
