import { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, User, FileText, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const contactInfo = [
  {
    icon: Phone,
    title: 'Teléfono / WhatsApp',
    value: '+57 301 343 7402',
    color: 'from-green-400 to-emerald-500',
  },
  {
    icon: Mail,
    title: 'Correo electrónico',
    value: 'contacto@softasesorias.com',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    icon: MapPin,
    title: 'Ubicación',
    value: 'Colombia',
    color: 'from-orange-400 to-red-500',
  },
];

const services = [
  { value: 'asesorias', label: '📚 Asesorías universitarias' },
  { value: 'paneles', label: '☀️ Instalación de paneles solares' },
  { value: 'quioscos', label: '🌴 Construcción de quioscos de palma' },
  { value: 'software', label: '💻 Desarrollo de software y páginas web' },
  { value: 'multiple', label: '✨ Múltiples servicios' },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const serviceLabel = services.find(s => s.value === formData.service)?.label || formData.service;
    
    const whatsappMessage = `
*¡Nuevo mensaje desde SOFT ASESORÍAS!*%0A%0A
*Nombre:* ${formData.name}%0A
*Correo:* ${formData.email}%0A
*Teléfono:* ${formData.phone}%0A
*Servicio de interés:* ${serviceLabel}%0A%0A
*Mensaje:*%0A${formData.message}%0A%0A
---%0AEnviado desde softasesorias.com
    `.trim();

    // Open WhatsApp with pre-filled message
    const whatsappNumber = '573013437402'; // Replace with actual number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 rounded-full px-4 py-2 mb-4">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm font-semibold">Contacto</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            ¿Listo para empezar?{' '}
            <span className="text-gradient">Escríbenos</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Completa el formulario y te responderemos por WhatsApp en minutos. 
            ¡Estamos aquí para ayudarte!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Información de contacto</h3>
              <p className="text-white/80 mb-8">
                Estamos disponibles para atenderte. Elige el medio que prefieras 
                y conversemos sobre tu proyecto.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white/70 text-sm">{item.title}</div>
                      <div className="text-white font-semibold">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick WhatsApp CTA */}
            <a
              href="https://wa.me/573013437402?text=Hola,%20estoy%20interesado%20en%20adquirir%20sus%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
             
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-gray-50 rounded-3xl p-8 shadow-card">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Mensaje enviado!</h3>
                  <p className="text-gray-600">
                    Serás redirigido a WhatsApp para completar el envío.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-700 font-medium flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Nombre completo
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700 font-medium flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Correo electrónico
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl h-12"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-700 font-medium flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Teléfono
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+57 301 343 7402"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-gray-700 font-medium flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        Servicio de interés
                      </Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => setFormData({ ...formData, service: value })}
                      >
                        <SelectTrigger className="bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl h-12">
                          <SelectValue placeholder="Selecciona un servicio" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.value} value={service.value}>
                              {service.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-700 font-medium flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      Mensaje
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Cuéntanos más sobre lo que necesitas..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] group"
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Enviar por WhatsApp
                  </Button>

                  <p className="text-center text-sm text-gray-500">
                    Al enviar, serás redirigido a WhatsApp con tu mensaje predefinido.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
