import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-16">
      
      {/* 1. Header / Terminal Title */}
      <header className="flex justify-between items-center border-b border-neutral-800 pb-4">
        <span className="text-sm text-neutral-400">Blake Acharjee ~/ portfolio</span>
        
        <nav className="space-x-4 text-sm text-neutral-400">
          <a href="#about" className="hover:text-white transition-colors">about</a>
          <a href="#skills" className="hover:text-white transition-colors">skills</a>
          <a href="#projects" className="hover:text-white transition-colors">projects</a>
          <a href="#experience" className="hover:text-white transition-colors">experience</a>
          <a href="#contact" className="hover:text-white transition-colors">contact</a>
        </nav>
      </header>

      {/* 2. Hero / Who Am I */}
      <section id="about" className="space-y-4">
        <div className="text-xs text-neutral-500 font-bold uppercase tracking-widest">
          — PORTFOLIO / V1.0.0 / 2026
        </div>
        
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Blake Acharjee
          <span className="inline-block w-3 h-8 bg-neutral-400 ml-2 animate-pulse" />
        </h1>
        
        <p className="text-xl text-neutral-300 font-medium">
          B.S. Computer Science Student @ CSU Fullerton
        </p>

        <div className="pt-4 space-y-3 text-neutral-400 leading-relaxed">
          <p className="text-sm text-neutral-500 font-mono">$ whoami</p>
          
          <p>
            I&apos;m a Computer Science student at California State University, Fullerton (Aug 2024 – May 2028) 
            passionate about building scalable applications, interactive games, mobile experiences, and 
            clean developer utilities. 
          </p>
        </div>
      </section>

      {/* 3. Tech Stack & Skills */}
      <section id="skills" className="space-y-4">
        <h2 className="text-sm text-neutral-500 font-mono">$ cat skills.json</h2>
        
        <div className="p-5 border border-neutral-800 rounded-lg bg-neutral-900/50 space-y-4 text-sm">
          
          <div>
            <h3 className="text-xs text-neutral-500 uppercase font-mono mb-2">// Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded">C++</span>
              <span className="bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded">C#</span>
              <span className="bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded">Python</span>
              <span className="bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded">Java</span>
              <span className="bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded">JavaScript</span>
              <span className="bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded">Lua</span>
              <span className="bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded">Swift</span>
            </div>
          </div>

          <div>
            <h3 className="text-xs text-neutral-500 uppercase font-mono mb-2">// Tools & Platforms</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded">Git</span>
              <span className="bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded">Xcode</span>
              <span className="bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded">VS Code</span>
              <span className="bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded">Visual Studio</span>
              <span className="bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded">Roblox Studio</span>
              <span className="bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded">Blender</span>
              <span className="bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded">WPILib</span>
            </div>
          </div>

          <div>
            <h3 className="text-xs text-neutral-500 uppercase font-mono mb-2">// Operating Systems</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded">macOS</span>
              <span className="bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded">Ubuntu</span>
              <span className="bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded">Windows</span>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Projects Showcase */}
      <section id="projects" className="space-y-6">
        <h2 className="text-sm text-neutral-500 font-mono">$ ls ./projects</h2>
        
        <div className="grid gap-6">
          
          {/* Banking App */}
          <div className="p-5 border border-neutral-800 rounded-lg bg-neutral-900/50 hover:border-neutral-700 transition-all">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-white">iOS Banking App</h3>
              <a href="https://github.com/blakeach/VastHorizon" target="_blank" className="text-xs text-neutral-400 hover:text-white">GitHub ↗</a>
            </div>
            <p className="text-neutral-400 text-sm mb-4">
              Developed an iOS banking application featuring deposit/withdrawal transactions, account history tracking, and persistent state management.
            </p>
            <div className="flex gap-2">
              <span className="text-xs bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded">Swift</span>
              <span className="text-xs bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded">Xcode</span>
              <span className="text-xs bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded">Git</span>
            </div>
          </div>

          {/* Roblox Experience */}
          <div className="p-5 border border-neutral-800 rounded-lg bg-neutral-900/50 hover:border-neutral-700 transition-all">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-white">Roblox Experience Creator</h3>
              <span className="text-xs text-neutral-500">12,000+ Visits</span>
            </div>
            <p className="text-neutral-400 text-sm mb-4">
              Authored Lua scripts for client-server network architecture, datastore operations, and real-time state management. Managed an active community group of 1,000+ members to coordinate updates based on feedback.
            </p>
            <div className="flex gap-2">
              <span className="text-xs bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded">Lua</span>
              <span className="text-xs bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded">Roblox Studio</span>
            </div>
          </div>

          {/* Third Person Shooter */}
          <div className="p-5 border border-neutral-800 rounded-lg bg-neutral-900/50 hover:border-neutral-700 transition-all">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-white">3D Third Person Shooter</h3>
            </div>
            <p className="text-neutral-400 text-sm mb-4">
              Programmed a 3D third-person shooter handling player movement, collision detection, and custom shooting mechanics.
            </p>
            <div className="flex gap-2">
              <span className="text-xs bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded">C#</span>
              <span className="text-xs bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded">Blender</span>
            </div>
          </div>

          {/* FIRST Robotics */}
          <div className="p-5 border border-neutral-800 rounded-lg bg-neutral-900/50 hover:border-neutral-700 transition-all">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-white">FIRST Robotics Competition Robot</h3>
              <span className="text-xs text-neutral-500">4th Place (&gt;50 teams)</span>
            </div>
            <p className="text-neutral-400 text-sm mb-4">
              Engineered motion control scripts in Java for drive motors and claw mechanisms, improving robot maneuverability in competition settings.
            </p>
            <div className="flex gap-2">
              <span className="text-xs bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded">Java</span>
              <span className="text-xs bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded">WPILib</span>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Work Experience */}
      <section id="experience" className="space-y-4">
        <h2 className="text-sm text-neutral-500 font-mono">$ cat experience.log</h2>
        
        <div className="p-5 border border-neutral-800 rounded-lg bg-neutral-900/50 space-y-3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-base font-semibold text-white">Cashier & Cook</h3>
              <p className="text-xs text-neutral-400">Raising Cane&apos;s — Mission Viejo, CA</p>
            </div>
          </div>
          <ul className="list-disc list-inside text-sm text-neutral-400 space-y-1">
            <li>Operated cashier, drive-thru, and fryers in a high-volume environment.</li>
            <li>Trained crewmembers to perform efficiently and accurately.</li>
            <li>Demonstrated high cooperation and clear communication across crewmembers and customers.</li>
          </ul>
        </div>
      </section>

      {/* 6. Contact / Socials */}
      <section id="contact" className="space-y-4 pt-6 border-t border-neutral-800">
        <h2 className="text-sm text-neutral-500 font-mono">$ cat contact.txt</h2>
        
        <p className="text-neutral-300 text-sm">
          Feel free to reach out for collaborations, project inquiries, or software engineering internship opportunities.
        </p>
        
        <div className="flex gap-4 text-sm text-neutral-400">
          <a href="mailto:blakeach123@gmail.com" className="hover:text-white transition-colors">email</a>
          <span>/</span>
          <a href="https://github.com/blakeach" target="_blank" className="hover:text-white transition-colors">github</a>
          <span>/</span>
          <a href="https://www.linkedin.com/in/blake-ach-276055333" target="_blank" className="hover:text-white transition-colors">linkedin</a>
        </div>
      </section>

    </main>
  );
}