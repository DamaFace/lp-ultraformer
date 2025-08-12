'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { depoimentosData } from '@/data/landingData';
import Image from 'next/image';

const Depoimentos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(3);
      } else if (window.innerWidth >= 768) {
        setItemsToShow(2);
      } else {
        setItemsToShow(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, depoimentosData.length - itemsToShow);
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, depoimentosData.length - itemsToShow);
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 4000);
    return () => clearInterval(interval);
  }, [itemsToShow]);

  return (
    <section id="depoimentos" className="py-16 bg-white/95">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            O que nossos <span className="text-[#fa1571]">pacientes dizem</span>
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto mb-6">
            São mais de <span className="text-[#fa1571] font-semibold">2.500 pacientes</span> que confiaram e se surpreenderam com os resultados.
          </p>
          <div className="bg-white/80 border border-[#fa1571]/10 rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-base text-gray-700 italic">
              "Na DamaFace, acreditamos que cada rosto tem sua própria beleza única. Nossa missão é realçar essa beleza de forma natural e harmoniosa."
            </p>
            <p className="text-[#fa1571] font-semibold mt-2 text-sm">— Equipe DamaFace</p>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${(currentIndex * 100) / itemsToShow}%)`,
                width: `${(depoimentosData.length * 100) / itemsToShow}%`
              }}
            >
              {depoimentosData.map((depoimento) => (
                <div
                  key={depoimento.id}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / depoimentosData.length}%` }}
                >
                  <div className="bg-white/90 border border-[#fa1571]/10 rounded-xl p-6 h-full shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-center mb-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3">
                        <Image
                          src={depoimento.foto_paciente_url}
                          alt={`Foto de ${depoimento.nome_paciente}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-base">{depoimento.nome_paciente}</h3>
                        <div className="flex text-[#fa1571] mt-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} fill="currentColor" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-gray-700 text-base leading-relaxed">
                      "{depoimento.depoimento}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#fa1571] hover:bg-[#d91460] text-white p-2 rounded-full shadow transition-all duration-200 hover:scale-110 z-10"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#fa1571] hover:bg-[#d91460] text-white p-2 rounded-full shadow transition-all duration-200 hover:scale-110 z-10"
            aria-label="Próximo depoimento"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-1">
          {Array.from({ length: Math.max(1, depoimentosData.length - itemsToShow + 1) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-[#fa1571] scale-110' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;