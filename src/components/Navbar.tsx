import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 group">
            <div className="w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <img
                    src="/images/logo.png"
                    alt="SOFT ASESORÍAS - Soluciones integrales"
                    className="block h-auto w-full object-cover"
                  />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg leading-tight transition-colors ${
                isScrolled ? 'text-blue-700' : 'text-white'
              }`}>
                SOFT
              </span>
              <span className={`font-semibold text-sm leading-tight transition-colors ${
                isScrolled ? 'text-orange-500' : 'text-orange-300'
              }`}>
                ASESORÍAS
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium text-sm hover:opacity-80 transition-opacity ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a href="#contacto">
              <Button
                className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold px-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Contáctanos
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl">
            <div className="flex flex-col gap-2 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="py-3 px-4 text-gray-700 font-medium hover:bg-blue-50 rounded-xl transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contacto"
                className="mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-full">
                  Contáctanos
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
