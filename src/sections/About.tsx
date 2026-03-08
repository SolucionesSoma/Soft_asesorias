import { Calendar, Users, Award, TrendingUp, Target, Heart } from 'lucide-react';

const stats = [
  { icon: Calendar, value: '2021', label: 'Año de fundación', color: 'from-blue-400 to-blue-600' },
  { icon: Users, value: '+500', label: 'Estudiantes ayudados', color: 'from-green-400 to-green-600' },
  { icon: Award, value: '4', label: 'Servicios principales', color: 'from-purple-400 to-purple-600' },
  { icon: TrendingUp, value: '100%', label: 'Compromiso', color: 'from-orange-400 to-orange-600' },
];

const values = [
  {
    icon: Target,
    title: 'Misión',
    description: 'Brindar soluciones integrales de calidad que impulsen el crecimiento académico y empresarial de nuestros clientes.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Heart,
    title: 'Valores',
    description: 'Compromiso, excelencia, innovación y trabajo en equipo son los pilares que nos guían en cada proyecto.',
    color: 'from-pink-500 to-rose-500',
  },
];

const About = () => {
  return (
    <section id="nosotros" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 rounded-full px-4 py-2 mb-4">
            <Heart className="w-4 h-4" />
            <span className="text-sm font-semibold">Sobre Nosotros</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nuestra historia de{' '}
            <span className="text-gradient">crecimiento</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Story */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-card">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Desde el 2021</h3>
                  <p className="text-gray-600">
                    Hace más de 3 años comenzamos con un sueño: ayudar a estudiantes universitarios 
                    a alcanzar sus metas académicas. Hoy, hemos evolucionado y expandido nuestros 
                    servicios gracias a alianzas estratégicas con empresas especializadas.
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <h4 className="font-bold text-gray-900 mb-4">Nuestra evolución:</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-bold text-sm">2021</span>
                    </div>
                    <p className="text-gray-600 text-sm">Inicio de asesorías universitarias</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold text-sm">2023</span>
                    </div>
                    <p className="text-gray-600 text-sm">+1000 estudiantes ayudados exitosamente</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 font-bold text-sm">2024</span>
                    </div>
                    <p className="text-gray-600 text-sm">Expansión con nuevos servicios empresariales</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Logo Display */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-card">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
                <img
                  src="/images/happy_people.jpg"
                  alt="SOFT ASESORÍAS Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold text-gray-900">SOFT ASESORÍAS</h3>
                <p className="text-gray-500">Soluciones Académicas y Empresariales</p>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl p-4 shadow-xl animate-float">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 text-center group"
            >
              <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission & Values */}
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
