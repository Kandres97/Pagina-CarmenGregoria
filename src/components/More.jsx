import { Heart, ScrollText, Sparkles } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="retornos" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-[#FFD700]">
              Amarres de Amor y Retorno de Pareja
            </h2>
            <p className="text-gray-300 text-lg">
              ¿Sientes que tu relación se está desmoronando? Te ayudamos a recuperar la felicidad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="bg-black p-6 rounded-lg border border-[#FFD700]/20 hover:border-[#FFD700]/40 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-6 h-6 text-red-500" />
                  <h3 className="text-xl text-[#FFD700]">Recupera el Amor Perdido</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  ¿Tu pareja se está alejando? ¿Sientes que el amor se está acabando? Nuestros hechizos de amor trabajan para reconectar corazones y renovar ese vínculo especial que los unió.
                </p>
              </div>

              <div className="bg-black p-6 rounded-lg border border-[#FFD700]/20 hover:border-[#FFD700]/40 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <ScrollText className="w-6 h-6 text-red-500" />
                  <h3 className="text-xl text-[#FFD700]">Guía y Orientación</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Cada historia de amor es única. Te escuchamos y analizamos tu situación para brindarte la ayuda que necesitas. Recupera la estabilidad y la armonía en tu relación.
                </p>
              </div>
            </div>

            <div className="bg-black p-8 rounded-lg border border-[#FFD700]/20 hover:border-[#FFD700]/40 transition-colors">
              <h3 className="text-2xl text-[#FFD700] mb-6 text-center">Te Ayudamos a Recuperar el Amor</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-[#FFD700] mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Amarres de amor para retorno inmediato de pareja</p>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-[#FFD700] mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Endulzamientos para mejorar la relación</p>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-[#FFD700] mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Rituales para fortalecer el vínculo amoroso</p>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-[#FFD700] mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Amarres para la reconciliación y unión de parejas</p>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-[#FFD700] mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Magia Blanca para el Amor</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-black p-8 rounded-lg border border-[#FFD700]/20 hover:border-[#FFD700]/40 transition-colors">
            <div className="text-center mb-8">
              <h3 className="text-2xl text-[#FFD700] mb-4">¿Por qué elegirnos?</h3>
              <p className="text-gray-300">
                Más de 20 años de experiencia ayudando a parejas a recuperar su felicidad
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <h4 className="text-lg text-[#FFD700] mb-2">Retorno de Pareja</h4>
                <p className="text-gray-400 text-sm">
                  Ayudamos a que regrese arrepentido/a a tu lado
                </p>
              </div>
              <div className="text-center p-4">
                <h4 className="text-lg text-[#FFD700] mb-2">Unión de Parejas</h4>
                <p className="text-gray-400 text-sm">
                  Fortalecemos los lazos de amor entre ustedes
                </p>
              </div>
              <div className="text-center p-4">
                <h4 className="text-lg text-[#FFD700] mb-2">Compromiso Total</h4>
                <p className="text-gray-400 text-sm">
                Te acompañamos en cada paso del proceso
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;