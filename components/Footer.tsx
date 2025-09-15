
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contato" className="bg-white/90 text-gray-900 py-12 border-t border-[#fa1571]/10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/logo-preto-damaface.png"
                alt="DamaFace Logo Preto"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Líder em harmonização facial com mais de 8 anos de experiência, transformando vidas através da beleza natural.
            </p>
            
            {/* Redes Sociais */}
            <div className="flex space-x-2">
              <Link 
                href="https://instagram.com/damafaceoficial" 
                target="_blank"
                className="bg-[#fa1571] hover:bg-[#d91460] p-2 rounded-full transition-colors duration-200"
                aria-label="Instagram DamaFace"
              >
                <Instagram size={16} />
              </Link>
              <Link 
                href="https://www.facebook.com/p/Franquia-De-Est%C3%A9tica-Damaface-61555121465049/?_rdr" 
                target="_blank"
                className="bg-[#fa1571] hover:bg-[#d91460] p-2 rounded-full transition-colors duration-200"
                aria-label="Facebook DamaFace"
              >
                <Facebook size={16} />
              </Link>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#fa1571]">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-[#fa1571]" />
                <div>
                  <p className="text-gray-700 text-sm">contato@damaface.com.br</p>
                  <p className="text-xs text-gray-400">E-mail</p>
                </div>
              </div>
            </div>
          </div>

          {/* Unidades */}
          <div className="mt-8">
            <h3 className="text-lg font-bold mb-6 text-[#fa1571]">Unidades</h3>
            <div className="space-y-6">
              {/* Vinhedo */}
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  <MapPin size={18} className="text-[#fa1571]" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-900">Vinhedo</p>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                    Av. Benedito Storani, 164 - Centro<br />
                    Vinhedo - SP
                  </p>
                </div>
              </div>
              
              {/* Cerquilho */}
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  <MapPin size={18} className="text-[#fa1571]" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-900">Cerquilho</p>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                    R. Francisco da Silva Pontes, 404 - Centro<br />
                    Cerquilho - SP
                  </p>
                </div>
              </div>

              {/* Jaguariúna */}
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  <MapPin size={18} className="text-[#fa1571]" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-900">Jaguariúna</p>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                    Rua Doutor Clemente Holtman Júnior, nº 347, sala 17, Centro<br />
                    Jaguariúna - SP
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Links Úteis */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#fa1571]">Links Úteis</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#procedimentos" className="text-gray-500 hover:text-[#fa1571] transition-colors duration-200 text-sm">
                  Procedimentos
                </Link>
              </li>
              <li>
                <Link href="#resultados" className="text-gray-500 hover:text-[#fa1571] transition-colors duration-200 text-sm">
                  Antes e Depois
                </Link>
              </li>
              <li>
                <Link href="#depoimentos" className="text-gray-500 hover:text-[#fa1571] transition-colors duration-200 text-sm">
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-500 hover:text-[#fa1571] transition-colors duration-200 text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-[#fa1571]/10 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <div className="text-center md:text-left mb-2 md:mb-0">
              <p className="text-gray-400 text-xs">
                © 2024 DamaFace. Todos os direitos reservados.
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-500 text-xs font-medium">
                "Transformando vidas através da beleza natural"
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
