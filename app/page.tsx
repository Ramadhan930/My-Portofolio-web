import { getPinnedRepos } from "@/lib/github";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Image from "next/image";

export default async function Home() {
  const projects = await getPinnedRepos();

  return (
    <main className="bg-white">
      <Hero />

      {/* Section Profil + Gambar */}
      <section className="py-24 px-8 md:px-24 bg-white text-black border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          {/* Container Foto dengan Garis Atas dan Kanan */}
          <div className="relative w-full md:w-5/12 aspect-[3/4] group">
            {/* Garis Atas (Top Border) */}
            <div className="absolute -top-4 left-0 w-full h-[2px] bg-black transform origin-left scale-x-100 group-hover:scale-x-110 transition-transform duration-500"></div>

            {/* Garis Kanan (Right Border) */}
            <div className="absolute top-0 -right-4 w-[2px] h-full bg-black transform origin-top scale-y-100 group-hover:scale-y-110 transition-transform duration-500"></div>

            {/* Kontainer Gambar Utama - Noir Style */}
            <div className="relative w-full h-full bg-zinc-900 overflow-hidden group shadow-2xl">
              <Image
                src="/personal-foto.jpg" // Pastikan file gambar_2.jpg sudah kamu rename atau sesuaikan path-nya
                alt="Muhammad Gilang Ramadhan"
                fill
                priority
                className="object-cover grayscale contrast-[1.1] brightness-[0.9] hover:grayscale-0 hover:contrast-100 hover:brightness-100 transition-all duration-1000 ease-in-out"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              {/* Overlay Vignette Lembut agar menyatu dengan background hitam */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Aksen L-Frame Minimalis (Opsional) */}
              <div className="absolute top-4 right-4 w-8 h-[1px] bg-white/20 group-hover:bg-white transition-colors" />
              <div className="absolute top-4 right-4 w-[1px] h-8 bg-white/20 group-hover:bg-white transition-colors" />
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] mb-6 text-zinc-400">
              01 / Summary
            </h2>
            <h2 className="text-6xl font-black tracking-tighter uppercase leading-[0.9]">
              About Me
            </h2>
            <p className="mt-8 text-xl text-gray-600 leading-relaxed font-light">
              A 6th-semester Informatics student focusing on backend development
              and machine learning implementation. He has practical experience
              designing relational databases, building APIs using modern
              frameworks, and deploying systems for live public access. He is
              disciplined, problem-solving oriented, and has a strong interest
              in applying artificial intelligence technology to support data
              analysis and technological innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Arsenal & Specialization Section */}
      <section className="py-32 px-8 md:px-24 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-4">
            <div className="reveal">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 text-gray-400">
                02 / Technical Expertise
              </h2>
              <h3 className="text-6xl font-bold uppercase tracking-tighter">
                Engine & Logic
              </h3>
            </div>
            <p className="text-gray-300 font-mono text-[10px] uppercase tracking-[0.3em]">
              System.initialize() // Status: Optimal
            </p>
          </div>

          {/* Top Part: Glow Cards (The Tools) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
            {[
              {
                title: "Core Runtimes",
                skills: ["Node.js", "Express / Hapi", "Python / FastAPI"],
                desc: "Architecting high-performance logic engines.",
              },
              {
                title: "Data Intelligence",
                skills: ["PostgreSQL / MySQL", "Redis", "MLflow / Gemini API"],
                desc: "Ensuring data integrity and AI-driven insights.",
              },
              {
                title: "Infrastructure",
                skills: ["Docker", "GitHub Actions", "WSL2 / Linux"],
                desc: "Automating workflows and system reliability.",
              },
            ].map((category, idx) => (
              <div
                key={idx}
                className="group relative bg-black p-8 h-[350px] flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    0{idx + 1}
                  </span>
                  <h4 className="text-2xl font-bold text-white uppercase mt-4">
                    {category.title}
                  </h4>
                  <div className="h-[1px] w-12 bg-zinc-700 mt-4 group-hover:w-full transition-all duration-700" />
                </div>

                <div className="relative z-10 space-y-2">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center gap-2 text-zinc-400 group-hover:text-white transition-colors duration-300"
                    >
                      <div className="h-1 w-1 bg-zinc-700 group-hover:bg-white rotate-45" />
                      <span className="text-sm font-light">{skill}</span>
                    </div>
                  ))}
                </div>

                <p className="relative z-10 text-[10px] text-zinc-600 font-mono leading-relaxed mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  {category.desc}
                </p>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>

          {/* Bottom Part: Deep Dive (The Value) */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-20 border-t border-gray-100 pt-20">
            <div className="md:w-1/2">
              <h2 className="text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
                The Logic <br /> Behind The <br /> Interface.
              </h2>
              <p className="text-gray-500 font-light text-lg max-w-md leading-relaxed">
                I build resilient backend infrastructures designed to handle
                complex data flows and intelligent automation. My focus is on
                creating systems that are not just functional, but inherently
                scalable.
              </p>
            </div>

            <div className="md:w-1/2 w-full space-y-12">
              {[
                {
                  label: "API Architecture",
                  tools:
                    "RESTful lifecycle, Security (JWT/OAuth2), & documentation.",
                  desc: "Designing secure bridges between data and user interfaces.",
                },
                {
                  label: "Database Engineering",
                  tools: "Relational schema design & query optimization.",
                  desc: "Structuring data for maximum retrieval efficiency and integrity.",
                },
                {
                  label: "AI Integration",
                  tools: "MLflow, Gemini API, & Predictive Pipelines.",
                  desc: "Bridging the gap between raw models and production-ready applications.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group border-l-2 border-black pl-8 py-2 hover:bg-zinc-50 transition-all duration-300"
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] block text-gray-400 group-hover:text-black mb-1">
                    {item.label}
                  </span>
                  <span className="text-xl font-bold tracking-tight block mb-2">
                    {item.tools}
                  </span>
                  <p className="text-sm text-gray-500 font-light">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Milestones Section */}
      <section className="py-32 px-8 md:px-24 bg-black text-white border-t border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            {/* Kolom Kiri: Heading */}
            <div className="md:col-span-4">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] mb-6 text-zinc-500">
                04 / Path & Milestones
              </h2>
              <h3 className="text-5xl font-bold uppercase tracking-tighter leading-none">
                Proven <br /> Track Record.
              </h3>
              <p className="mt-8 text-zinc-500 font-light leading-relaxed">
                A journey through academic excellence, leadership roles, and
                professional certifications.
              </p>
            </div>

            {/* Kolom Kanan: Timeline List */}
            <div className="md:col-span-8 space-y-12">
              {[
                {
                  period: "2026 - Present",
                  title: "AI Engineer Track",
                  org: "Pijak x IBM SkillsBuild",
                  desc: "Focusing on MLOps, MLflow, and advanced model management. Bridging the gap between software engineering and AI deployment.",
                },
                {
                  period: "Jan 2026 - Feb 2026",
                  title: "IT Lead & Public Relations",
                  org: "KKN Nagari Garagahan",
                  desc: "Led the development of village profile websites and digital data management systems. Managed stakeholder communication and IT infrastructure.",
                },
                {
                  period: "2025",
                  title: "Backend & React Specialist",
                  org: "Dicoding Academy (ASAH)",
                  desc: "Completed intensive curriculum focused on Node.js, Hapi.js, and modern React development. Certified in building scalable web applications.",
                },
                {
                  period: "2023 - Present",
                  title: "Informatics Student",
                  org: "Universitas Negeri Padang",
                  desc: "Maintaining strong academic performance with a focus on Algorithm analysis, Database systems, and Software Architecture.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="relative pl-8 border-l border-zinc-800 group hover:border-white transition-colors duration-500"
                >
                  {/* Bullet Point */}
                  <div className="absolute -left-[5px] top-2 h-2 w-2 bg-zinc-800 group-hover:bg-white rotate-45 transition-colors" />

                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                    <div>
                      <h4 className="text-xl font-bold uppercase group-hover:text-gray-200 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm font-mono text-zinc-500 mt-1">
                        {item.org}
                      </p>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-600 bg-zinc-900/50 px-2 py-1 h-fit">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-zinc-500 text-sm font-light leading-relaxed max-w-2xl">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-8 md:px-24 bg-black text-white">
        <div className="mb-16">
          <h2 className="text-4xl font-bold uppercase italic tracking-tight">
            Pinned Projects
          </h2>
          <p className="text-zinc-500 font-mono text-xs mt-2">
            Source: GitHub API v3
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((repo: any) => (
            <div
              key={repo.id}
              className="group border-b border-zinc-800 pb-12 hover:border-white transition-all duration-500"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold uppercase group-hover:text-gray-300">
                  {repo.name}
                </h3>
                <span className="text-[10px] font-bold bg-white text-black px-2 py-1 uppercase">
                  {repo.language || "Engine"}
                </span>
              </div>
              <p className="text-zinc-400 mt-6 text-sm font-light leading-relaxed max-w-md">
                {repo.description ||
                  "Building robust backend systems and AI-driven solutions."}
              </p>
              <a
                href={repo.url}
                target="_blank"
                className="inline-block mt-8 text-[10px] font-black border-b border-white pb-1 tracking-[0.2em] hover:text-zinc-400 transition-colors"
              >
                VIEW REPOSITORY ↗
              </a>
            </div>
          ))}
        </div>
      </section>

      <Contact />
    </main>
  );
}
