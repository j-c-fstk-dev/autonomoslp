import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Settings2, X, ChevronRight, Sparkles, Check, Phone, Edit, Copy } from 'lucide-react';

interface DeveloperPanelProps {
  currentRole: 'pedreiro' | 'eletricista' | 'encanador';
  setRole: (role: 'pedreiro' | 'eletricista' | 'encanador') => void;
  customName: string;
  setCustomName: (name: string) => void;
  customPhone: string;
  setCustomPhone: (phone: string) => void;
  onReset: () => void;
}

export default function DeveloperPanel({
  currentRole,
  setRole,
  customName,
  setCustomName,
  customPhone,
  setCustomPhone,
  onReset
}: DeveloperPanelProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [copiedLink, setCopiedLink] = useState(false);

  const getPitchTips = () => {
    switch (currentRole) {
      case 'pedreiro':
        return [
          {
            title: "Valor de Acabamento Percebido",
            desc: "Diga ao pedreiro: 'Hoje as pessoas pagam barato porque acham que o serviço é comum. Com esse portfólio luxuoso em tons claros, você se posiciona como um artesão de alto padrão e pode cobrar de 30% a 50% mais por m².'"
          },
          {
            title: "Garantia de Prumo & Organização",
            desc: "Destaque como o site foca na limpeza diária e pontualidade, os maiores medos de qualquer cliente. Isso elimina a barreira do fechamento imediato."
          }
        ];
      case 'eletricista':
        return [
          {
            title: "Foco em Tecnologia e Iluminação",
            desc: "Diga ao eletricista: 'Passar fio qualquer um passa. O dinheiro de verdade está em projetar fitas de LED, automação e organizar quadros elétricos de grife. Esse site vende exatamente esses serviços caros.'"
          },
          {
            title: "Segurança Técnica",
            desc: "Enfatize a conformidade com as normas de segurança (NBR 5410) destacada no site. Isso atrai arquitetas e engenheiros que fecham serviços grandes."
          }
        ];
      case 'encanador':
        return [
          {
            title: "Serviços Cirúrgicos de Alto Ticket",
            desc: "Diga ao encanador: 'Trocar torneirinha dá pouco lucro. O site foca em caça-vazamentos de alta precisão com termografia e instalação de metais de luxo (monocomandos Deca/Kohler) que pagam muito melhor.'"
          },
          {
            title: "Resolução de Problemas Complexos",
            desc: "Explique que o site posiciona o encanador como um engenheiro hidráulico, salvador de emergências, o que permite cobrar visitas com ticket premium."
          }
        ];
    }
  };

  const handleCopyDemoLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <>
      {/* Small floating button to reopen panel if closed */}
      {!isOpen && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-stone-900 text-white shadow-xl hover:bg-stone-800 transition-colors cursor-pointer"
          id="open-dev-panel-btn"
        >
          <Settings2 className="h-6 w-6 animate-spin-slow" />
        </motion.button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: 'spring', damping: 25, stiffness: 120 }}
            className="fixed right-0 top-0 z-40 h-full w-full max-w-sm border-l border-stone-200 bg-white p-6 shadow-2xl overflow-y-auto md:max-w-md"
            id="dev-panel"
          >
            {/* Header */}
            <div className="mb-6 flex items-center justify-between border-b border-stone-100 pb-4">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-stone-900 text-amber-100">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-sans text-sm font-bold text-stone-900 tracking-tight">PAINEL DO DESENVOLVEDOR</h3>
                  <p className="text-[11px] font-mono text-stone-500">Jorge • Pitch de Vendas</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1 text-stone-400 hover:bg-stone-50 hover:text-stone-700 transition-all cursor-pointer"
                id="close-dev-panel-btn"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Introduction Card */}
            <div className="mb-6 rounded-xl bg-stone-50 p-4 border border-stone-100">
              <p className="text-xs text-stone-600 leading-relaxed">
                Olá, <strong>Jorge</strong>! Use esta simulação interativa para <strong>vender este site</strong> para profissionais autônomos. Altere as configurações abaixo e mostre o site mudando em tempo real na frente do seu cliente!
              </p>
            </div>

            {/* Customizer Form */}
            <div className="mb-8 space-y-4">
              <h4 className="text-[11px] font-bold text-stone-400 tracking-widest uppercase">1. Customizar Atributos</h4>
              
              {/* Role Picker */}
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-stone-700">Selecione a Profissão do Cliente</label>
                <div className="grid grid-cols-3 gap-1 rounded-lg bg-stone-100 p-1">
                  {(['pedreiro', 'eletricista', 'encanador'] as const).map((r) => (
                    <button
                      key={r}
                      onClick={() => setRole(r)}
                      className={`rounded-md py-1.5 text-center text-xs font-medium capitalize transition-all cursor-pointer ${
                        currentRole === r
                          ? 'bg-white text-stone-900 shadow-sm'
                          : 'text-stone-500 hover:text-stone-900'
                      }`}
                      id={`role-select-${r}`}
                    >
                      {r === 'pedreiro' ? 'Pedreiro' : r === 'eletricista' ? 'Eletricista' : 'Encanador'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Client Name Input */}
              <div>
                <label htmlFor="client-name-input" className="mb-1 block text-xs font-semibold text-stone-700 flex items-center justify-between">
                  <span>Nome do Profissional</span>
                  <span className="text-[10px] text-stone-400 flex items-center gap-0.5"><Edit className="h-3 w-3" /> digite para alterar</span>
                </label>
                <input
                  type="text"
                  id="client-name-input"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  placeholder="Nome do Profissional"
                  className="w-full rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm text-stone-900 focus:border-stone-500 focus:ring-1 focus:ring-stone-500 focus:outline-none"
                />
              </div>

              {/* WhatsApp Input */}
              <div>
                <label htmlFor="client-phone-input" className="mb-1 block text-xs font-semibold text-stone-700 flex items-center justify-between">
                  <span>WhatsApp de Destino</span>
                  <span className="text-[10px] text-stone-400 flex items-center gap-0.5"><Phone className="h-3 w-3" /> com DDI/DDD</span>
                </label>
                <input
                  type="text"
                  id="client-phone-input"
                  value={customPhone}
                  onChange={(e) => setCustomPhone(e.target.value)}
                  placeholder="Ex: 5511999999999"
                  className="w-full rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm text-stone-900 focus:border-stone-500 focus:ring-1 focus:ring-stone-500 focus:outline-none"
                />
                <p className="mt-1 text-[10px] text-stone-400">
                  Qualquer formulário enviado no site será enviado diretamente para esse número!
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onReset}
                  className="w-full text-center text-xs font-semibold text-stone-500 hover:text-stone-800 transition-colors cursor-pointer"
                  id="reset-dev-panel-btn"
                >
                  Restaurar Valores Originais
                </button>
              </div>
            </div>

            {/* Sales Arguments / Pitch Helper */}
            <div className="mb-6 space-y-4">
              <h4 className="text-[11px] font-bold text-stone-400 tracking-widest uppercase">2. Como vender para esse profissional</h4>
              
              <div className="space-y-3">
                {getPitchTips().map((tip, idx) => (
                  <div key={idx} className="rounded-xl border border-stone-150 bg-stone-50/50 p-4 transition-all hover:bg-stone-50">
                    <h5 className="flex items-center gap-2 text-xs font-bold text-stone-900">
                      <ChevronRight className="h-4.5 w-4.5 text-stone-900 shrink-0" />
                      {tip.title}
                    </h5>
                    <p className="mt-1.5 text-xs text-stone-600 leading-relaxed pl-6">
                      {tip.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Real Demo Showcase Actions */}
            <div className="space-y-2 border-t border-stone-100 pt-6">
              <h4 className="text-[11px] font-bold text-stone-400 tracking-widest uppercase mb-3">3. Compartilhar Demo</h4>
              
              <button
                onClick={handleCopyDemoLink}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-stone-900 px-4 py-3 text-xs font-semibold text-white hover:bg-stone-800 transition-colors cursor-pointer shadow-sm"
                id="copy-demo-link-btn"
              >
                {copiedLink ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-400" />
                    Link Copiado!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copiar Link para Demonstrar
                  </>
                )}
              </button>
              <p className="text-[10px] text-center text-stone-400">
                Você pode abrir este link no celular para mostrar ao profissional pessoalmente!
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
