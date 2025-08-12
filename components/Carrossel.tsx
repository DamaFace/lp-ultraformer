'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { carrosselData } from '@/data/landingData';
import { HeroCTASection } from '@/components/HeroCTASection'
import Image from 'next/image';

const Carrossel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % carrosselData.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + carrosselData.length) % carrosselData.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };
  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 8000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, isTransitioning]);

  return (
    <section id="resultados" className="py-20 bg-gradient-to-b from-white to-[#ededed]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Resultados Reais
            <span className="text-[#fa1571]"> DamaFace</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transformações autênticas de homens e mulheres que confiaram em nossos especialistas. Cada resultado é único, planejado para valorizar seus traços naturais.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Controls */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-full shadow-md transition-all duration-300"
            >
              {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
              <span className="text-sm font-medium">
                {isAutoPlaying ? 'Pausar' : 'Reproduzir'}
              </span>
            </button>
            
            <div className="text-sm text-gray-600 bg-white px-3 py-2 rounded-full shadow-md">
              {currentIndex + 1} de {carrosselData.length}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-2xl bg-white">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {carrosselData.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Antes */}
                    <div className="relative group">
                      <div className="absolute top-4 left-4 z-10 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                        ANTES
                      </div>
                      <div className="relative aspect-[4/5] overflow-hidden">
                        <Image
                          src={item.imagem_antes_url}
                          alt="Antes da harmonização"
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                    </div>
                    
                    {/* Depois */}
                    <div className="relative group">
                      <div className="absolute top-4 left-4 z-10 bg-[#fa1571] text-white px-3 py-1 rounded-full text-sm font-medium">
                        DEPOIS
                      </div>
                      <div className="relative aspect-[4/5] overflow-hidden">
                        <Image
                          src={item.imagem_depois_url}
                          alt="Depois da harmonização"
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-black to-gray-900 text-white p-8 text-center">
                    <p className="text-lg font-medium leading-relaxed">{item.legenda}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-[#fa1571] text-[#fa1571] hover:text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-[#fa1571]"
            aria-label="Slide anterior"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-[#fa1571] text-[#fa1571] hover:text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-[#fa1571]"
            aria-label="Próximo slide"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {carrosselData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-125 disabled:cursor-not-allowed ${
                  index === currentIndex 
                    ? 'bg-[#fa1571] scale-125 shadow-lg' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Progress Bar */}
          <div className="mt-6 max-w-md mx-auto">
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div 
                className="bg-[#fa1571] h-1 rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / carrosselData.length) * 100}%` }}
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carrossel;
