'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Procedimentos', href: '#procedimentos' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contato' }
  ];

  return (
    <header className="bg-black backdrop-blur-md text-white sticky top-0 z-50 border-b border-[#fa1571]/10 shadow-sm">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="https://damaface.com.br/LOGO-DAMAFACE-HORIZONTAL-BRANCO.png"
              alt="DamaFace Logo"
              width={140}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-[#fa1571] transition-colors duration-200 text-base font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="#hero"
              className="bg-[#fa1571] hover:bg-[#d91460] text-white px-5 py-2 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-sm"
            >
              Agendar Avaliação
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded hover:bg-[#fa1571]/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-2 py-3 border-t border-[#fa1571]/10 bg-black/95 backdrop-blur-md rounded-b-xl shadow">
            <div className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white hover:text-[#fa1571] transition-colors duration-200 text-base font-medium px-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#hero"
                className="bg-[#fa1571] hover:bg-[#d91460] text-white px-5 py-2 rounded-lg font-semibold text-center transition-all duration-200 shadow-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Agendar Avaliação
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;