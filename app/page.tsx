import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-16">
      
      {/* 1. Header / Terminal Title */}
      <header className="flex justify-between items-center border-b border-neutral-800 pb-4">
        {/* 👇 REPLACE "your_name" WITH YOUR USERNAME / FIRST NAME 👇 */}
        <span className="text-sm text-neutral-400">your_name ~/ portfolio</span>
        
        <nav className="space-x-4 text-sm text-neutral-400">
          <a href="#about" className="hover:text-white transition-colors">about</a>
          <a href="#projects" className="hover:text-white transition-colors">projects</a>
          <a href="#contact" className="hover:text-white transition-colors">contact</a>
        </nav>
      </header>

      {/* 2. Hero / Who Am I */}
      <section id="about" className="space-y-4">
        <div className="text-xs text-neutral-500 font-bold uppercase tracking-widest">
          {/* 👇 OPTIONAL: UPDATE VERSION OR YEAR 👇 */}
          — PORTFOLIO / V1.0.0 / 2026
        </div>
        
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {/* 👇 REPLACE WITH YOUR FULL NAME 👇 */}
          Your Name
          <span className="inline-block w-3 h-8 bg-neutral-400 ml-2 animate-pulse" />
        </h1>
        
        <p className="text-xl text-neutral-300 font-medium">
          {/* 👇 REPLACE WITH YOUR HEADLINE / TAGLINE 👇 */}
          a full-stack engineer & CS student.
        </p>

        <div className="pt-4 space-y-3 text-neutral-400 leading-relaxed">
          <p className="text-sm text-neutral-500 font-mono">$ whoami</p>
          
          {/* 👇 REPLACE WITH YOUR BIO / ABOUT ME PARAGRAPH 👇 */}
          <p>
            I&apos;m a Computer Science student at [Your University] passionate about building scalable web applications, 
            AI-powered tools, and clean developer utilities.
          </p>
        </div>
      </section>

      {/* 3. Projects Showcase */}
      <section id="projects" className="space-y-6">
        <h2 className="text-sm text-neutral-500 font-mono">$ ls ./projects</h2>
        
        <div className="grid gap-6">
          
          {/* --- PROJECT CARD 1 --- */}
          <div className="p-5 border border-neutral-800 rounded-lg bg-neutral-900/50 hover:border-neutral-700 transition-all">
            <div className="flex justify-between items-start mb-2">
              {/* 👇 PROJECT 1 TITLE 👇 */}
              <h3 className="text-lg font-semibold text-white">AI Code Reviewer</h3>
              
              {/* 👇 PROJECT 1 LINK (GitHub / Demo) 👇 */}
              <a href="https://github.com/yourusername/project1" target="_blank" className="text-xs text-neutral-400 hover:text-white">GitHub ↗</a>
            </div>
            
            {/* 👇 PROJECT 1 DESCRIPTION 👇 */}
            <p className="text-neutral-400 text-sm mb-4">
              A CLI tool that scans git diffs and provides automated code quality suggestions using LLMs.
            </p>
            
            {/* 👇 PROJECT 1 TECH STACK TAGS 👇 */}
            <div className="flex gap-2">
              <span className="text-xs bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded">TypeScript</span>
              <span className="text-xs bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded">Next.js</span>
              <span className="text-xs bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded">OpenAI API</span>
            </div>
          </div>

          {/* --- PROJECT CARD 2 --- */}
          <div className="p-5 border border-neutral-800 rounded-lg bg-neutral-900/50 hover:border-neutral-700 transition-all">
            <div className="flex justify-between items-start mb-2">
              {/* 👇 PROJECT 2 TITLE 👇 */}
              <h3 className="text-lg font-semibold text-white">Distributed Task Queue</h3>
              
              {/* 👇 PROJECT 2 LINK (GitHub / Demo) 👇 */}
              <a href="https://github.com/yourusername/project2" target="_blank" className="text-xs text-neutral-400 hover:text-white">GitHub ↗</a>
            </div>
            
            {/* 👇 PROJECT 2 DESCRIPTION 👇 */}
            <p className="text-neutral-400 text-sm mb-4">
              High-throughput async job worker system built with Redis pub/sub and Go.
            </p>
            
            {/* 👇 PROJECT 2 TECH STACK TAGS 👇 */}
            <div className="flex gap-2">
              <span className="text-xs bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded">Go</span>
              <span className="text-xs bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded">Redis</span>
              <span className="text-xs bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded">Docker</span>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Contact / Socials */}
      <section id="contact" className="space-y-4 pt-6 border-t border-neutral-800">
        <h2 className="text-sm text-neutral-500 font-mono">$ cat contact.txt</h2>
        
        {/* 👇 SHORT CALL-TO-ACTION MESSAGE 👇 */}
        <p className="text-neutral-300 text-sm">
          Feel free to reach out for collaborations, project inquiries, or software engineering roles.
        </p>
        
        <div className="flex gap-4 text-sm text-neutral-400">
          {/* 👇 YOUR EMAIL LINK 👇 */}
          <a href="mailto:your.email@example.com" className="hover:text-white transition-colors">email</a>
          <span>/</span>
          
          {/* 👇 YOUR GITHUB LINK 👇 */}
          <a href="https://github.com/yourusername" target="_blank" className="hover:text-white transition-colors">github</a>
          <span>/</span>
          
          {/* 👇 YOUR LINKEDIN LINK 👇 */}
          <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-white transition-colors">linkedin</a>
        </div>
      </section>

    </main>
  );
}