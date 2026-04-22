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

            {/* Kontainer Gambar Utama */}
            <div className="relative w-full h-full bg-gray-100 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-sm">
              <Image
                src="/image.png"
                alt="Muhammad Gilang Ramadhan"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
          <div className="md:w-2/3">
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

      {/* Backend Specialist Section */}
      <section className="py-32 px-8 md:px-24 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="md:w-1/2">
              <h2 className="text-6xl font-black tracking-tighter uppercase leading-[0.9]">
                The Logic <br /> Behind The <br /> Interface.
              </h2>
              <p className="mt-8 text-gray-500 font-light text-lg max-w-md">
                Building robust APIs, automated notification systems, and
                efficient database management. Experience with the Node.js
                runtime and Python ecosystem for scalable backend solutions.
              </p>
            </div>

            <div className="md:w-1/2 w-full">
              <div className="grid grid-cols-1 gap-6">
                {[
                  {
                    label: "Runtime & Framework",
                    tools: "Node.js, Express, Hapi, FastAPI",
                  },
                  { label: "Databases", tools: "MySQL, PostgreSQL" },
                  {
                    label: "DevOps & Tools",
                    tools: "GitHub Actions, Docker, MLflow",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="border-l-2 border-black pl-6 py-2 group hover:bg-black hover:text-white transition-all duration-300"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-widest block opacity-50">
                      {item.label}
                    </span>
                    <span className="text-xl font-bold tracking-tight">
                      {item.tools}
                    </span>
                  </div>
                ))}
              </div>
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
