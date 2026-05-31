"use client";

import { BsCalendarCheck } from "react-icons/bs";
import { HiChevronDown } from "react-icons/hi";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#0d0d0d] flex flex-col items-center justify-center px-4 sm:px-6 py-20 text-center overflow-hidden">

      {/* ── Glow vert en arrière-plan (bonus) ── */}
      <div className="animate-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#4ade80] opacity-5 blur-[140px] pointer-events-none" />

      {/* ── Badge / Bulle ── */}
      <div className="animate-fade-in-down delay-100 flex items-center gap-2.5 bg-white text-black rounded-full px-4 sm:px-5 py-2 mb-10 shadow-lg">

        {/* Logo WebDifference SVG inline — loupe avec ≠ */}
        <svg
          width="28" height="28" viewBox="0 0 40 40"
          fill="none" xmlns="http://www.w3.org/2000/svg"
          className="shrink-0"
        >
          <circle cx="17" cy="17" r="13" stroke="#0d0d0d" strokeWidth="3" fill="white"/>
          <line x1="10" y1="13" x2="24" y2="13" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="8"  y1="17" x2="26" y2="17" stroke="#0d0d0d" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 2"/>
          <line x1="10" y1="21" x2="24" y2="21" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round"/>
          {/* Barre diagonale du ≠ (signe "différent") */}
          <line x1="22" y1="9" x2="12" y2="25" stroke="#0d0d0d" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="27" y1="27" x2="37" y2="37" stroke="#0d0d0d" strokeWidth="3.5" strokeLinecap="round"/>
        </svg>

        <span className="font-bold text-xs sm:text-sm tracking-wider text-black uppercase">
          Créer un site web{" "}
          <span className="underline underline-offset-2 decoration-2">vraiment</span>{" "}
          unique
        </span>
      </div>

      {/* ── Headline principale ── */}
      <h1 className="animate-fade-in-up delay-200 text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-white leading-[1.1] max-w-4xl mb-7 tracking-tight">
        Votre{" "}
        <span className="text-[#4ade80]">site</span>{" "}
        doit{" "}
        <span className="text-[#4ade80]">donner envie</span>{" "}
        de{" "}
        <br className="hidden sm:block" />
        <span className="text-[#4ade80]">rester</span>
        , pas de{" "}
        <span className="relative inline-block text-[#4ade80]">
          <span className="strikethrough">revenir</span>
        </span>{" "}
         <span className="relative inline-block text-[#ffffff]">
          <span className="strikethrough">en</span>
        </span>{" "}
        <br className="hidden sm:block" />
        <span className="relative inline-block text-[#4ade80]">
          <span className="strikethrough">arrière</span>
        </span>
        .
      </h1>

      {/* ── Sous-titre ── */}
      <p className="animate-fade-in-up delay-300 text-gray-400 text-base sm:text-lg max-w-lg mb-10 leading-relaxed">
        Design moderne, SEO solide, Suivi complet&nbsp;:{" "}
        <br className="hidden sm:block" />
        on construit un site qui retient vos visiteurs et vous apporte des résultats.
      </p>

      {/* ── Boutons CTA ── */}
      <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row items-center gap-4">

        {/* Bouton 1 — Prendre RDV (avec annotation cursive en dessous-gauche) */}
        <div className="relative">
          <a
            href="#contact"
            className="
              group flex items-center gap-2.5
              bg-[#4ade80] hover:bg-[#22c55e]
              text-black font-bold
              px-6 py-3.5 rounded-[5%]
              text-sm sm:text-base
              shadow-lg shadow-green-500/20
              hover:shadow-green-500/40 hover:scale-105
              transition-all duration-200 ease-out
            "
          >
            <BsCalendarCheck className="text-lg group-hover:rotate-12 transition-transform duration-200" />
            Prendre RDV
          </a>

          {/* "Un p'tit click ?" — annotation manuscrite collée sous-gauche du bouton (texte + flèche cursive originale) */}
          <div className="animate-fade-in-up delay-600 animate-float absolute top-full left-0 mt-1 -translate-x-4 flex flex-col items-center gap-1 select-none pointer-events-none whitespace-nowrap">
            <span className="font-caveat text-xl text-gray-400 -rotate-3 leading-none">
              Un p&apos;tit click ?
            </span>
            <svg
              width="36" height="36" viewBox="0 0 36 36"
              fill="none" xmlns="http://www.w3.org/2000/svg"
              className="text-gray-500 mt-0.5"
            >
              <path
                d="M18 4 C10 10, 6 20, 18 28"
                stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" fill="none"
              />
              <path
                d="M13 24 L18 29 L23 24"
                stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" fill="none"
              />
            </svg>
          </div>
        </div>

        {/* Bouton 2 — Découvrir nos projets */}
        <a
          href="#projets"
          className="
            group flex items-center gap-2.5
            border border-white/30 hover:border-white/80
            text-white font-semibold
            px-6 py-3.5 rounded-[5%]
            text-sm sm:text-base
            hover:bg-white/10 hover:scale-105
            transition-all duration-200 ease-out
          "
        >
          Découvrir nos projets
          <HiChevronDown className="text-lg group-hover:translate-y-0.5 transition-transform duration-200" />
        </a>
      </div>

    </section>
  );
}