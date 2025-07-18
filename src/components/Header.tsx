import React, { useState, useEffect } from 'react';
import { Menu, Phone, X, Shield, Star, ChevronDown, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/98 backdrop-blur-xl shadow-lg' : 'bg-white/95 backdrop-blur-md shadow-md'
    }`}>
      {/* Barra superior compacta */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-1.5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-transparent to-blue-500/20 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="flex items-center justify-center space-x-4 text-center">
            <div className="flex items-center space-x-2 bg-white/20 rounded-full px-3 py-1">
              <Shield className="w-3 h-3 animate-pulse" />
              <span className="font-black text-xs tracking-wide">AHORRO GARANTIZADO</span>
            </div>
            <div className="hidden sm:flex items-center space-x-4 text-xs font-bold">
              <span className="flex items-center space-x-1">
                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping"></span>
                <span>+12 años</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-ping"></span>
                <span>+100 expertos</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-ping"></span>
                <span>IA avanzada</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Header principal compacto */}
                  className="h-8 w-auto object-contain rounded-md"
                />
              </div>
              <div>
                <h1 className="text-lg font-black text-gray-900 leading-tight">Wasabi Trader</h1>
                <p className="text-xs text-blue-600 font-bold leading-none">Comparador IA</p>
              </div>
            </Link>
            
            {/* Navegación desktop */}
            <div className="hidden lg:flex items-center space-x-6">
              <nav className="flex items-center space-x-6">
                <a href="#comparador" className="text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors relative group">
                  Comparador IA
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#testimonios" className="text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors relative group">
                  Testimonios
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <Link to="/sobre-nosotros" className="text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors relative group">
                  Nosotros
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/contacto" className="text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors relative group">
                  Contacto
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </nav>
                
              {/* Teléfono compacto */}
              <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 px-3 py-1.5 rounded-lg hover:scale-105 transition-transform">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-md flex items-center justify-center">
                  <Phone className="w-3 h-3 text-white" />
                </div>
                <div>
                  <a href="tel:+34621508300" className="font-black text-sm text-gray-900 hover:text-blue-600 transition-colors">
                    621 50 83 00
                  </a>
                  <p className="text-xs font-bold text-blue-600 leading-none">Gratis</p>
                </div>
              </div>
              
              {/* CTA compacto */}
              <a href="#formulario" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg font-black text-sm hover:from-blue-400 hover:to-blue-500 transition-all hover:scale-105 shadow-md">
                EMPEZAR
              </a>
            </div>
            
            {/* Navegación tablet */}
            <div className="hidden md:flex lg:hidden items-center space-x-3">
              <a href="tel:+34621508300" className="flex items-center space-x-2 bg-blue-500 text-white px-3 py-1.5 rounded-lg font-bold hover:bg-blue-600 transition-colors text-sm">
                <Phone className="w-3 h-3" />
                <span>621 50 83 00</span>
              </a>
              <a href="#formulario" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1.5 rounded-lg font-black hover:from-blue-400 hover:to-blue-500 transition-colors text-sm">
                FORMULARIO
              </a>
            </div>
            
            {/* Botón menú móvil */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 text-white hover:scale-105 transition-transform shadow-md"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Menú móvil optimizado */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-t border-blue-100 shadow-lg animate-fade-in-up">
          <div className="px-4 py-4 space-y-4">
            <a 
              href="#comparador" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="block text-gray-700 font-bold hover:text-blue-600 transition-all duration-300 hover:translate-x-2 py-2"
            >
              🤖 Comparador IA
            </a>
            <a 
              href="#testimonios" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="block text-gray-700 font-bold hover:text-blue-600 transition-all duration-300 hover:translate-x-2 py-2"
            >
              ⭐ Testimonios
            </a>
            <Link 
              to="/sobre-nosotros" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="block text-gray-700 font-bold hover:text-blue-600 transition-all duration-300 hover:translate-x-2 py-2"
            >
              🏢 Sobre Nosotros
            </Link>
            <Link 
              to="/contacto" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="block text-gray-700 font-bold hover:text-blue-600 transition-all duration-300 hover:translate-x-2 py-2"
            >
              📞 Contacto
            </Link>
            
            <div className="pt-4 border-t border-blue-200">
              <div className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg py-3 mb-4 shadow-md">
                <Phone className="w-5 h-5 animate-pulse" />
                <div>
                  <a href="tel:+34621508300" className="font-black text-lg">621 50 83 00</a>
                  <p className="text-blue-200 text-sm font-bold leading-none">Llamada gratuita</p>
                </div>
              </div>
              
              <a 
                href="#formulario" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-black text-center hover:from-blue-400 hover:to-blue-500 transition-colors shadow-md"
              >
                🚀 EMPEZAR FORMULARIO
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}