import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Send, FileText, Smartphone, User, MapPin, Calculator, CalendarClock, MessageSquare } from 'lucide-react';
import { ProfessionalProfile, Service } from '../types';

interface EstimatorFormProps {
  profile: ProfessionalProfile;
  professionalName: string;
  professionalPhone: string;
  selectedServiceId: string | null;
}

export default function EstimatorForm({
  profile,
  professionalName,
  professionalPhone,
  selectedServiceId
}: EstimatorFormProps) {
  // Find current service or default to first
  const [activeService, setActiveService] = useState<Service>(profile.services[0]);
  const [quantity, setQuantity] = useState<number>(20);

  // Client Details Form
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientLocation, setClientLocation] = useState('');
  const [clientMessage, setClientMessage] = useState('');

  // Handle outside selections (e.g., from ServicesList)
  useEffect(() => {
    if (selectedServiceId) {
      const selected = profile.services.find(s => s.id === selectedServiceId);
      if (selected) {
        setActiveService(selected);
        // Set sensible defaults based on unit
        if (selected.unit === 'm²') setQuantity(25);
        else if (selected.unit === 'ponto') setQuantity(8);
        else setQuantity(1);
      }
    }
  }, [selectedServiceId, profile.services]);

  // Adjust default quantity when professional profile changes
  useEffect(() => {
    const firstService = profile.services[0];
    setActiveService(firstService);
    if (firstService.unit === 'm²') setQuantity(25);
    else if (firstService.unit === 'ponto') setQuantity(8);
    else setQuantity(1);
  }, [profile]);

  // Handle service drop-down selection
  const handleServiceChange = (serviceId: string) => {
    const selected = profile.services.find(s => s.id === serviceId);
    if (selected) {
      setActiveService(selected);
      if (selected.unit === 'm²') setQuantity(25);
      else if (selected.unit === 'ponto') setQuantity(8);
      else setQuantity(1);
    }
  };

  const estimatedTotal = activeService.basePrice * quantity;

  // Handle submit to WhatsApp
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!clientName.trim()) {
      alert('Por favor, informe seu nome.');
      return;
    }

    // Format the WhatsApp message beautifully
    const divider = '━━━━━━━━━━━━━━━━━━━━━━━';
    const messageText = `*📋 NOVO ORÇAMENTO - MÃO NA MASSA*
${divider}
Olá, *${professionalName}*!
Gostaria de solicitar um orçamento para o meu projeto. Seguem as informações:

👤 *Cliente:* ${clientName}
📞 *Contato:* ${clientPhone || 'Não informado'}
📍 *Local da Obra:* ${clientLocation || 'Não informado'}

${divider}
🛠️ *Serviço:* ${activeService.name}
📐 *Quantidade:* ${quantity} ${activeService.unit}(s)
📊 *Estimativa Mão de Obra:* R$ ${estimatedTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}

💬 *Mensagem do Cliente:*
"${clientMessage || 'Olá! Gostaria de agendar uma visita para confirmar o orçamento.'}"
${divider}
_Gerado via Portfólio Premium Mão na Massa_`;

    // Format phone number (remove spaces, symbols)
    const formattedPhone = professionalPhone.replace(/\D/g, '');

    // Construct URL
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${formattedPhone}&text=${encodeURIComponent(messageText)}`;
    
    // Open in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="orcamento" className="bg-[#FAF9F6] py-20 border-b border-stone-200/50">
      <div className="container mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-xs font-bold tracking-widest text-stone-400 uppercase font-mono">
            Simular Preço
          </h2>
          <p className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Faça uma simulação rápida e me envie no WhatsApp
          </p>
          <p className="mt-4 text-base text-stone-500">
            Escolha o serviço abaixo e informe a quantidade aproximada para calcular um valor estimado de mão de obra. Depois, é só clicar para me enviar os dados prontos no WhatsApp e agendarmos a conversa!
          </p>
        </div>

        {/* Form Grid */}
        <div className="grid gap-8 lg:grid-cols-12 max-w-5xl mx-auto">
          
          {/* LEFT: Estimator Calculator */}
          <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 lg:col-span-5 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Calculator className="h-5 w-5 text-stone-700" />
                <h3 className="text-lg font-bold text-stone-900 tracking-tight">1. Simular Demanda</h3>
              </div>

              {/* Service Selector */}
              <div className="mb-6">
                <label htmlFor="service-select" className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
                  Selecione o Serviço
                </label>
                <select
                  id="service-select"
                  value={activeService.id}
                  onChange={(e) => handleServiceChange(e.target.value)}
                  className="w-full rounded-xl border border-stone-200 bg-[#FAF9F6] px-4 py-3 text-sm font-medium text-stone-800 focus:border-stone-400 focus:ring-1 focus:ring-stone-400 focus:outline-none transition-colors"
                >
                  {profile.services.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Quantity input/range */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="quantity-input" className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                    Volume / Quantidade
                  </label>
                  <span className="text-xs font-mono font-bold text-stone-850">
                    Unidade: {activeService.unit}
                  </span>
                </div>

                {/* Range Slider for typical inputs */}
                <div className="mt-2 flex items-center gap-4">
                  <input
                    type="range"
                    id="quantity-input"
                    min={activeService.unit === 'm²' ? 5 : 1}
                    max={activeService.unit === 'm²' ? 200 : activeService.unit === 'ponto' ? 50 : 10}
                    step={1}
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-stone-200 accent-stone-900"
                  />
                  
                  {/* Number Input Box */}
                  <input
                    type="number"
                    id="quantity-box"
                    aria-label="Quantidade"
                    min={1}
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                    className="w-20 rounded-lg border border-stone-200 bg-stone-50 px-2 py-1.5 text-center text-xs font-bold text-stone-900 focus:outline-none focus:border-stone-400"
                  />
                </div>
              </div>

              {/* Base Price Showcase */}
              <div className="rounded-xl bg-stone-50 p-4 border border-stone-150 mb-6">
                <div className="flex justify-between text-xs text-stone-500">
                  <span>Valor unitário de mão de obra:</span>
                  <span>R$ {activeService.basePrice.toLocaleString('pt-BR')}/{activeService.unit}</span>
                </div>
                <div className="mt-2 flex justify-between text-xs text-stone-500">
                  <span>Quantidade estimada:</span>
                  <span>{quantity} {activeService.unit}(s)</span>
                </div>
              </div>
            </div>

            {/* Total display */}
            <div className="border-t border-stone-150 pt-6">
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider font-mono">Total Estimado</span>
                  <div className="text-2xl font-black text-stone-950 sm:text-3xl leading-none">
                    R$ {estimatedTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </div>
                </div>
                <div className="text-[10px] text-right text-stone-400 leading-normal max-w-[140px]">
                  Somente mão de obra técnica de {professionalName}.
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT: Contact Information & Submission Form */}
          <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 lg:col-span-7 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <Smartphone className="h-5 w-5 text-stone-700" />
              <h3 className="text-lg font-bold text-stone-900 tracking-tight">2. Dados para Contato</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="client-name" className="mb-1 block text-xs font-semibold text-stone-600">
                    Seu Nome <span className="text-amber-600">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-stone-400">
                      <User className="h-4 w-4" />
                    </span>
                    <input
                      type="text"
                      id="client-name"
                      required
                      placeholder="Ex: João Silva"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full rounded-xl border border-stone-200 bg-white py-2.5 pl-10 pr-4 text-sm text-stone-800 focus:border-stone-400 focus:ring-1 focus:ring-stone-400 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Phone number */}
                <div>
                  <label htmlFor="client-phone" className="mb-1 block text-xs font-semibold text-stone-600">
                    Seu Celular / WhatsApp
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-stone-400">
                      <Smartphone className="h-4 w-4" />
                    </span>
                    <input
                      type="tel"
                      id="client-phone"
                      placeholder="Ex: (11) 98765-4321"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full rounded-xl border border-stone-200 bg-white py-2.5 pl-10 pr-4 text-sm text-stone-800 focus:border-stone-400 focus:ring-1 focus:ring-stone-400 focus:outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Location (Endereço / Bairro) */}
              <div>
                <label htmlFor="client-address" className="mb-1 block text-xs font-semibold text-stone-600">
                  Local da Obra (Bairro / Cidade)
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-stone-400">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <input
                    type="text"
                    id="client-address"
                    placeholder="Ex: Pinheiros, São Paulo - SP"
                    value={clientLocation}
                    onChange={(e) => setClientLocation(e.target.value)}
                    className="w-full rounded-xl border border-stone-200 bg-white py-2.5 pl-10 pr-4 text-sm text-stone-800 focus:border-stone-400 focus:ring-1 focus:ring-stone-400 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Message Details */}
              <div>
                <label htmlFor="client-notes" className="mb-1 block text-xs font-semibold text-stone-600">
                  Detalhes Adicionais do Projeto (Opcional)
                </label>
                <textarea
                  id="client-notes"
                  rows={3}
                  placeholder="Ex: O apartamento está vazio. O porcelanato já foi comprado e está no local. Gostaria de agendar para começar no início do mês."
                  value={clientMessage}
                  onChange={(e) => setClientMessage(e.target.value)}
                  className="w-full rounded-xl border border-stone-200 bg-white px-4 py-2.5 text-sm text-stone-800 focus:border-stone-400 focus:ring-1 focus:ring-stone-400 focus:outline-none transition-all"
                />
              </div>

              {/* Professional details note */}
              <div className="flex items-start gap-2.5 rounded-xl bg-amber-50/50 p-3.5 border border-amber-100">
                <CalendarClock className="h-4 w-4 text-amber-700 shrink-0 mt-0.5" />
                <p className="text-xs text-stone-600 leading-normal">
                  <strong>Nota técnica:</strong> Após receber a mensagem, entrarei em contato em até 4 horas úteis para validar os detalhes técnicos e agendar a vistoria opcional.
                </p>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className={`group flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold transition-all shadow-sm cursor-pointer ${profile.accentBg}`}
                id="submit-whatsapp-btn"
              >
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                Enviar Orçamento para o WhatsApp de {professionalName}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
