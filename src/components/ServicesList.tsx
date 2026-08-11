import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { ProfessionalProfile, Service } from '../types';

interface ServicesListProps {
  profile: ProfessionalProfile;
  onSelectService: (serviceId: string) => void;
}

// Map Lucide icons dynamically
const renderServiceIcon = (iconName: string, colorClass: string) => {
  const IconComponent = (Icons as any)[iconName] || Icons.Hammer;
  return <IconComponent className={`h-6 w-6 ${colorClass}`} />;
};

export default function ServicesList({ profile, onSelectService }: ServicesListProps) {
  
  const getAccentTextClass = () => {
    if (profile.id === 'pedreiro') return 'text-amber-700';
    if (profile.id === 'eletricista') return 'text-amber-600';
    return 'text-sky-600';
  };

  return (
    <section id="servicos" className="bg-white py-20 border-b border-stone-200/50">
      <div className="container mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xs font-bold tracking-widest text-stone-400 uppercase font-mono">
            Meus Serviços
          </h2>
          <p className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Trabalhos que faço com capricho e preço justo
          </p>
          <div className="mt-4 flex justify-center">
            <div className={`h-1 w-12 rounded-full ${profile.id === 'pedreiro' ? 'bg-amber-600' : profile.id === 'eletricista' ? 'bg-amber-500' : 'bg-sky-500'}`} />
          </div>
          <p className="mt-4 text-base text-stone-500">
            Trabalho com foco em capricho, pontualidade de horários e canteiro de obras limpo e organizado todos os dias.
          </p>
        </div>

        {/* Services Alternating Rows */}
        <div className="mt-16 divide-y divide-stone-100">
          {profile.services.map((service: Service, index: number) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 py-16 items-center"
                id={`service-row-${service.id}`}
              >
                {/* Image Showcase */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative overflow-hidden rounded-2xl border border-stone-200/60 shadow-md bg-stone-50 aspect-4/3">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="h-full w-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Narrative & Details Content */}
                <div className={`lg:col-span-7 flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  


                  {/* Service Name */}
                  <h3 className="text-2xl font-bold text-stone-900 tracking-tight sm:text-3xl leading-tight">
                    {service.name}
                  </h3>

                  {/* Service Description */}
                  <p className="mt-4 text-base text-stone-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Pricing and Action Bar */}
                  <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-stone-100 pt-6">
                    <div>
                      <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block font-mono mb-1">
                        Preço Estimado de Mão de Obra
                      </span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl font-extrabold text-stone-900">
                          R$ {service.basePrice.toLocaleString('pt-BR')}
                        </span>
                        <span className="text-sm font-normal text-stone-500">
                          / {service.unit}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => onSelectService(service.id)}
                      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-sm px-6 py-3 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer w-full sm:w-auto`}
                      id={`select-service-${service.id}`}
                    >
                      <Icons.Calculator className="h-4 w-4 opacity-80" />
                      Calcular Preço
                    </button>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Small disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-xs text-stone-400 leading-relaxed max-w-lg mx-auto">
            *Os valores acima representam estimativas de referência para mão de obra em condições ideais. Projetos complexos ou que exijam preparação prévia terão orçamento sob medida após vistoria.
          </p>
        </div>

      </div>
    </section>
  );
}
