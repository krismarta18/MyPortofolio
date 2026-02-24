import { Navbar } from "@/components/Navbar";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-gradient-to-b from-zinc-50 via-white to-zinc-100 text-zinc-950 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-900 dark:text-zinc-50">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 left-[-10%] h-72 w-72 rounded-full bg-gradient-to-br from-slate-300/40 to-transparent blur-3xl dark:from-slate-500/15" />
        <div className="absolute -bottom-24 right-[-10%] h-80 w-80 rounded-full bg-gradient-to-tr from-zinc-300/40 to-transparent blur-3xl dark:from-zinc-500/15" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
