import {
  BookOpen,
  Sun,
  TreePine,
  Code,
  ArrowRight,
  CheckCircle,
  Wrench,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 1,
    title: 'Asesorías Universitarias',
    description:
      'Acompañamiento académico personalizado para estudiantes universitarios. Te ayudamos a alcanzar tus metas educativas con profesionales expertos.',
    image: '/images/servicio-asesorias.jpg',
    icon: BookOpen,
    color: 'from-amber-400 to-orange-500',
    bgColor: 'bg-gradient-to-br from-amber-50 to-orange-50',
    features: [
      'Todas las materias',
      'Profesores calificados',
      'Horarios flexibles',
      'Modalidad virtual/presencial',
    ],
  },
  {
    id: 2,
    title: 'Paneles Solares',
    description:
      'Instalación profesional de sistemas de energía solar para hogares y empresas. Ahorra en tu factura de energía y cuida el planeta.',
    image: '/images/servicio-paneles.jpg',
    icon: Sun,
    color: 'from-cyan-400 to-blue-500',
    bgColor: 'bg-gradient-to-br from-cyan-50 to-blue-50',
    features: [
      'Ahorro energético',
      'Instalación certificada',
      'Mantenimiento incluido',
      'Garantía extendida',
    ],
  },
  {
    id: 3,
    title: 'Quioscos de Palma',
    description:
      'Construcción de quioscos y kioscos de palma con materiales de alta calidad. Perfectos para zonas turísticas, jardines y eventos.',
    image: '/images/servicio-quioscos.png',
    icon: TreePine,
    color: 'from-emerald-400 to-teal-500',
    bgColor: 'bg-gradient-to-br from-emerald-50 to-teal-50',
    features: [
      'Diseño personalizado',
      'Materiales naturales',
      'Resistentes al clima',
      'Ideal para turismo',
    ],
  },
  {
    id: 4,
    title: 'Desarrollo de Software',
    description:
      'Creamos soluciones tecnológicas a medida: páginas web, aplicaciones móviles y sistemas empresariales con las últimas tecnologías.',
    image: '/images/servicio-software.jpg',
    icon: Code,
    color: 'from-purple-400 to-pink-500',
    bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
    features: [
      'Webs modernas',
      'Apps móviles',
      'Sistemas empresariales',
      'Soporte continuo',
    ],
  },
  {
    id: 5,
    title: 'Mantenimiento Industrial y Metalmecánica',
    description:
      'Ofrecemos soluciones en mantenimiento industrial, reparación metálica, fabricación de piezas, recubrimientos, inspección y mantenimiento de válvulas y tuberías.',
    image: '/images/industrial.png',
    icon: Wrench,
    color: 'from-slate-500 to-cyan-600',
    bgColor: 'bg-gradient-to-br from-slate-50 to-cyan-50',
    features: [
      'Mantenimiento a válvulas',
      'Fabricación especial',
      'Inspección visual END',
      'Estructuras metálicas',
    ],
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-2 mb-4">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm font-semibold">Nuestros Servicios</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Soluciones integrales para{' '}
            <span className="text-gradient">todas tus necesidades</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Gracias a nuestras alianzas estratégicas con empresas especializadas,
            ahora ofrecemos una amplia gama de servicios de calidad.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 ${service.bgColor}`}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                />

                {/* Icon Badge */}
                <div
                  className={`absolute top-4 right-4 w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-500"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}
                      />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a href="#contacto">
                  <Button
                    variant="outline"
                    className={`w-full border-2 border-transparent bg-gradient-to-r ${service.color} bg-clip-text text-transparent hover:border-current font-semibold group/btn`}
                  >
                    <span
                      className={`bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
                    >
                      Solicitar información
                    </span>
                    <ArrowRight
                      className={`w-4 h-4 ml-2 opacity-0 group-hover/btn:opacity-100 transition-opacity bg-gradient-to-r ${service.color}`}
                      style={{ color: 'inherit' }}
                    />
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 shadow-xl">
            <div className="text-white text-left">
              <h3 className="text-xl font-bold mb-1">
                ¿Necesitas más de un servicio?
              </h3>
              <p className="text-white/80 text-sm">
                Te ofrecemos paquetes especiales con descuentos
              </p>
            </div>
            <a href="#contacto">
              <Button className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all whitespace-nowrap">
                Cotizar paquete
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;