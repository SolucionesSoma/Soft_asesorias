import { Facebook, Instagram, Linkedin, Twitter} from 'lucide-react';

const footerLinks = {
  servicios: [
    { name: 'Asesorías universitarias', href: '#servicios' },
    { name: 'Paneles solares', href: '#servicios' },
    { name: 'Quioscos de palma', href: '#servicios' },
    { name: 'Desarrollo de software', href: '#servicios' },
  ],
  empresa: [
    { name: 'Sobre nosotros', href: '#nosotros' },
    { name: 'Nuestra historia', href: '#nosotros' },
    { name: 'Misión y valores', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' },
  ],
  legal: [
    { name: 'Términos de servicio', href: '#' },
    { name: 'Política de privacidad', href: '#' },
    { name: 'Cookies', href: '#' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#inicio" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12  flex items-center justify-center">
                <img
                    src="/images/logo.png"
                    alt="SOFT ASESORÍAS - Soluciones integrales"
                    className="block h-auto w-full object-cover"
                  />
              </div>
              <div>
                <span className="font-bold text-xl text-white">SOFT</span>
                <span className="font-bold text-xl text-orange-400 ml-1">ASESORÍAS</span>
              </div>
            </a>
            <p className="text-gray-400 mb-6 max-w-sm">
              Soluciones académicas y empresariales de calidad. Desde 2021 
              ayudando a estudiantes y empresas a alcanzar sus metas.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 flex items-center justify-center transition-all hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Servicios</h3>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} SOFT ASESORÍAS. Todos los derechos reservados.
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
