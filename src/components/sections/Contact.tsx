"use client";

import { useMemo, useState } from "react";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Github, Instagram, Linkedin, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "6285887373722";

function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const whatsappText = useMemo(() => {
    const lines = [
      "Halo Kris, saya tertarik untuk diskusi project.",
      name.trim() ? `Nama: ${name.trim()}` : null,
      email.trim() ? `Email: ${email.trim()}` : null,
      message.trim() ? `Pesan: ${message.trim()}` : null,
    ].filter(Boolean);

    return lines.join("\n");
  }, [name, email, message]);

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-black/10 bg-gradient-to-b from-zinc-100 to-transparent dark:border-white/10 dark:from-zinc-950/30"
    >
      <Container className="py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Let’s work together"
              description="Terbuka untuk freelance, remote opportunity, dan kolaborasi pengembangan sistem."
            />

            <p className="mt-6 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
              Prefer chat WhatsApp untuk komunikasi lebih cepat.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={buildWhatsAppUrl("Halo Kris, saya tertarik untuk diskusi project.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-4 py-2 text-sm text-zinc-950 transition hover:bg-black/10 dark:border-white/15 dark:bg-white/5 dark:text-zinc-50 dark:hover:border-white/25 dark:hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                WhatsApp: 085887373722
              </a>

              <a
                href="https://www.instagram.com/krismarta_/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-4 py-2 text-sm text-zinc-950 transition hover:bg-black/10 dark:border-white/15 dark:bg-white/5 dark:text-zinc-50 dark:hover:border-white/25 dark:hover:bg-white/10"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
              <a
                href="https://github.com/krismarta18/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-4 py-2 text-sm text-zinc-950 transition hover:bg-black/10 dark:border-white/15 dark:bg-white/5 dark:text-zinc-50 dark:hover:border-white/25 dark:hover:bg-white/10"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://id.linkedin.com/in/krismarta"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-4 py-2 text-sm text-zinc-950 transition hover:bg-black/10 dark:border-white/15 dark:bg-white/5 dark:text-zinc-50 dark:hover:border-white/25 dark:hover:bg-white/10"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>

          <form
            className="rounded-2xl border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-zinc-900/30"
            onSubmit={(event) => {
              event.preventDefault();
              window.open(buildWhatsAppUrl(whatsappText), "_blank", "noopener,noreferrer");
            }}
          >
            <div className="grid gap-4">
              <label className="grid gap-1">
                <span className="text-sm text-zinc-800 dark:text-zinc-200">Nama</span>
                <input
                  name="name"
                  placeholder="Nama kamu"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-11 rounded-xl border border-black/10 bg-white px-3 text-sm text-zinc-950 outline-none placeholder:text-zinc-400 focus:border-black/25 dark:border-white/10 dark:bg-black/30 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-white/25"
                />
              </label>
              <label className="grid gap-1">
                <span className="text-sm text-zinc-800 dark:text-zinc-200">Email (opsional)</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-11 rounded-xl border border-black/10 bg-white px-3 text-sm text-zinc-950 outline-none placeholder:text-zinc-400 focus:border-black/25 dark:border-white/10 dark:bg-black/30 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-white/25"
                />
              </label>
              <label className="grid gap-1">
                <span className="text-sm text-zinc-800 dark:text-zinc-200">Pesan</span>
                <textarea
                  name="message"
                  placeholder="Ceritakan kebutuhan project kamu..."
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="resize-none rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-zinc-950 outline-none placeholder:text-zinc-400 focus:border-black/25 dark:border-white/10 dark:bg-black/30 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-white/25"
                />
              </label>
              <button
                type="submit"
                className="mt-1 inline-flex h-11 items-center justify-center rounded-xl bg-zinc-950 px-4 text-sm font-medium text-zinc-50 transition hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
              >
                Kirim via WhatsApp
              </button>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Tombol akan membuka WhatsApp dengan pesan yang sudah terisi.
              </p>
            </div>
          </form>
        </div>

        <div className="mt-12 border-t border-black/10 pt-6 text-xs text-zinc-500 dark:border-white/10 dark:text-zinc-400">
          © 2026 Kristianto Marta As Software Developer.
        </div>
      </Container>
    </section>
  );
}
