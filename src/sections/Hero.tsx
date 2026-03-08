import { ArrowRight, Sparkles, Zap, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden gradient-hero"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Floating circles */}
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl animate-pulse-slow"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute left-1/3 top-1/2 h-64 w-64 rounded-full bg-pink-500/15 blur-3xl animate-pulse-slow"
          style={{ animationDelay: '1s' }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        {/* Floating icons */}
        <div className="absolute right-20 top-32 text-white/20 animate-float">
          <Sparkles className="h-12 w-12" />
        </div>
        <div
          className="absolute bottom-40 left-20 text-white/20 animate-float"
          style={{ animationDelay: '1s' }}
        >
          <Zap className="h-10 w-10" />
        </div>
        <div
          className="absolute right-1/4 top-1/3 text-white/15 animate-float"
          style={{ animationDelay: '2s' }}
        >
          <Star className="h-8 w-8" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
              <span className="text-sm font-medium text-white">
                Desde 2021 ayudando a crecer
              </span>
            </div>

            {/* Main Title */}
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Soluciones que{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                transforman
              </span>{' '}
              tu futuro
            </h1>

            {/* Subtitle */}
            <p className="mb-8 mx-auto max-w-xl text-lg text-white/90 sm:text-xl lg:mx-0">
              Desde asesorías universitarias hasta desarrollo de software y energía
              solar. Somos tus aliados estratégicos para el éxito.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <a href="#servicios">
                <Button
                  size="lg"
                  className="group rounded-full bg-white px-8 py-6 font-bold text-blue-700 shadow-xl transition-all hover:scale-105 hover:bg-gray-100 hover:shadow-2xl"
                >
                  Descubre nuestros servicios
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>

              <a href="#contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-2 border-white/80 bg-white/10 px-8 py-6 font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:text-white"
                >
                  Contáctanos ahora
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white sm:text-4xl">+1000</div>
                <div className="text-sm text-white/70">Estudiantes</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white sm:text-4xl">4</div>
                <div className="text-sm text-white/70">Servicios</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white sm:text-4xl">3+</div>
                <div className="text-sm text-white/70">Años</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10 overflow-visible rounded-3xl">
                <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/5 shadow-2xl backdrop-blur-sm transition-transform duration-500 hover:scale-[1.02]">
                  <img
                    src="/images/logo-w.jpg"
                    alt="SOFT ASESORÍAS - Soluciones integrales"
                    className="block h-auto w-full object-cover"
                  />
                </div>
              </div>

              {/* Floating cards - ahora delante */}
              <div className="absolute -left-6 -top-6 z-20 rounded-2xl bg-white p-4 shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-400 to-teal-500">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">Multiples servicios</div>
                    <div className="text-sm text-gray-500">Máxima eficiencia</div>
                  </div>
                </div>
              </div>

              <div
                className="absolute -bottom-6 -right-6 z-20 rounded-2xl bg-white p-4 shadow-xl animate-float"
                style={{ animationDelay: '1.5s' }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">Calidad</div>
                    <div className="text-sm text-gray-500">Garantizada</div>
                  </div>
                </div>
              </div>

              {/* Glow decor delante/fuera del logo */}
              <div className="pointer-events-none absolute -right-10 top-10 z-[5] h-32 w-32 rounded-full bg-white/10 blur-3xl" />
              <div className="pointer-events-none absolute -left-10 bottom-10 z-[5] h-28 w-28 rounded-full bg-pink-400/15 blur-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;