'use client';

import { ArrowRight } from 'lucide-react';

export const HeroCTASection = () => {
  return (
    <div className="relative group mt-6">
      {/* Efeito de brilho no hover */}
      <div className="absolute inset-0 bg-[#fa1571] rounded-lg opacity-0 group-hover:opacity-20 blur-md transition-all duration-300" />
      
      {/* Badge principal como CTA */}
      <button
        onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}
        className="relative z-10 bg-black/80 hover:bg-black/90 border-2 border-[#fa1571]/50 group-hover:border-[#fa1571]/80 rounded-xl px-6 py-3 text-[#fa1571] font-extrabold text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
      >
        <span>AGENDE SUA AVALIAÇÃO GRATUITA</span>
        <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
      </button>

      {/* Badges menores abaixo (opcional) */}
      <div className="flex flex-wrap gap-3 mt-4">
        <div className="bg-black/70 border border-[#fa1571]/30 rounded-lg px-4 py-2 text-[#fa1571] font-bold text-sm shadow-sm">
          8+ anos
        </div>
        <div className="bg-black/70 border border-[#fa1571]/30 rounded-lg px-4 py-2 text-[#fa1571] font-bold text-sm shadow-sm">
          2.500+ pacientes
        </div>
        <div className="bg-black/70 border border-[#fa1571]/30 rounded-lg px-4 py-2 text-[#fa1571] font-bold text-sm shadow-sm">
          100% natural
        </div>
      </div>
    </div>
  );
};