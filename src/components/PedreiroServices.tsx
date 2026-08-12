import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Calculator, MessageCircle, Ruler, X } from 'lucide-react';
import { pedreiroFixedServices, pedreiroMeteredServices } from '../data';

interface PedreiroServicesProps {
  professionalName: string;
  professionalPhone: string;
  onStartWhatsAppConversation: (serviceName?: string) => void;
}

export default function PedreiroServices({
  professionalName,
  professionalPhone,
  onStartWhatsAppConversation
}: PedreiroServicesProps) {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState(pedreiroMeteredServices[0].id);
  const [area, setArea] = useState(20);

  const selectedService = useMemo(
    () => pedreiroMeteredServices.find((service) => service.id === selectedServiceId) ?? pedreiroMeteredServices[0],
    [selectedServiceId]
  );
  const estimatedTotal = selectedService.basePrice * area;

  const openCalculator = () => setIsCalculatorOpen(true);

  const sendEstimateToWhatsApp = () => {
    const message = `Olá, ${professionalName}! Gostaria de conversar sobre *${selectedService.name}*.

Área aproximada: *${area} m²*
Referência de mão de obra: *R$ ${estimatedTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}* (${selectedService.basePrice.toLocaleString('pt-BR')}/m²)

Entendo que este valor é uma referência e que a confirmação depende da avaliação da obra.`;
    const phone = professionalPhone.replace(/\D/g, '');

    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="servicos" className="bg-white py-20 border-b border-stone-200/50">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-widest text-amber-700 uppercase font-mono">Serviços</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">Do acabamento à reforma, com atenção aos detalhes da obra.</h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            Cada serviço começa com uma conversa sobre o ambiente, o material e o resultado que você espera. Para itens por metragem, veja uma referência de mão de obra antes de chamar.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-amber-700">Por metragem</p>
                <h3 className="mt-2 text-xl font-bold tracking-tight text-stone-900">Acabamentos com valor de referência</h3>
              </div>
              <Ruler className="h-6 w-6 shrink-0 text-amber-700" />
            </div>
            <ul className="mt-7 divide-y divide-amber-200/70 border-y border-amber-200/70">
              {pedreiroMeteredServices.map((service) => (
                <li key={service.id} className="py-4">
                  <h4 className="text-sm font-bold text-stone-900">{service.name}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-stone-600">{service.description}</p>
                  <p className="mt-2 text-xs font-semibold text-amber-800">A partir de R$ {service.basePrice.toLocaleString('pt-BR')}/m² de mão de obra</p>
                </li>
              ))}
            </ul>
            <button onClick={openCalculator} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-stone-900 underline decoration-amber-500 decoration-2 underline-offset-4 hover:text-amber-800 cursor-pointer" id="open-metered-calculator">
              <Calculator className="h-4 w-4" />
              Calcular uma referência por m²
            </button>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-stone-500">Sob avaliação</p>
                <h3 className="mt-2 text-xl font-bold tracking-tight text-stone-900">Serviços que pedem vistoria</h3>
              </div>
              <MessageCircle className="h-6 w-6 shrink-0 text-stone-600" />
            </div>
            <ul className="mt-7 divide-y divide-stone-200 border-y border-stone-200">
              {pedreiroFixedServices.map((service) => (
                <li key={service.id} className="py-4">
                  <h4 className="text-sm font-bold text-stone-900">{service.name}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-stone-600">{service.description}</p>
                </li>
              ))}
            </ul>
            <button onClick={() => onStartWhatsAppConversation('uma reforma ou serviço sob avaliação')} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-stone-900 underline decoration-stone-400 decoration-2 underline-offset-4 hover:text-stone-600 cursor-pointer" id="open-fixed-service-whatsapp">
              <MessageCircle className="h-4 w-4" />
              Conversar sobre a sua obra
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isCalculatorOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-end bg-stone-950/40 p-4 backdrop-blur-sm sm:items-center sm:justify-center" role="dialog" aria-modal="true" aria-labelledby="calculator-title">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-amber-700">Referência de mão de obra</p>
                  <h3 id="calculator-title" className="mt-2 text-2xl font-bold tracking-tight text-stone-900">Calcule por metragem</h3>
                </div>
                <button onClick={() => setIsCalculatorOpen(false)} className="rounded-lg p-1 text-stone-500 hover:bg-stone-100 cursor-pointer" aria-label="Fechar calculadora"><X className="h-5 w-5" /></button>
              </div>

              <div className="mt-7 space-y-5">
                <label className="block text-xs font-bold text-stone-700" htmlFor="metered-service">Serviço</label>
                <select id="metered-service" value={selectedServiceId} onChange={(event) => setSelectedServiceId(event.target.value)} className="-mt-3 w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm font-medium text-stone-900 focus:border-amber-600 focus:outline-none">
                  {pedreiroMeteredServices.map((service) => <option key={service.id} value={service.id}>{service.name} — R$ {service.basePrice}/m²</option>)}
                </select>
                <div>
                  <label className="block text-xs font-bold text-stone-700" htmlFor="area">Área aproximada (m²)</label>
                  <input id="area" type="number" min="1" value={area} onChange={(event) => setArea(Math.max(1, Number(event.target.value) || 1))} className="mt-2 w-full rounded-xl border border-stone-200 px-4 py-3 text-lg font-bold text-stone-900 focus:border-amber-600 focus:outline-none" />
                </div>
                <div className="rounded-xl bg-stone-900 p-5 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-stone-300">Referência estimada</span>
                  <p className="mt-1 text-3xl font-black">R$ {estimatedTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                  <p className="mt-2 text-xs leading-relaxed text-stone-300">Base de R$ {selectedService.basePrice.toLocaleString('pt-BR')}/m². O valor final depende do estado da superfície, recortes, paginação, preparação e demais condições da obra.</p>
                </div>
                <button onClick={sendEstimateToWhatsApp} className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-600 py-3.5 text-sm font-bold text-white hover:bg-amber-700 cursor-pointer" id="send-metered-estimate-whatsapp"><MessageCircle className="h-4 w-4" />Enviar esta referência no WhatsApp</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
