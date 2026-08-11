import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { commonFAQs } from '../data';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="duvidas" className="bg-white py-20 border-b border-stone-200/50">
      <div className="container mx-auto max-w-4xl px-6">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-xs font-bold tracking-widest text-stone-400 uppercase font-mono">
            Suporte e Dúvidas
          </h2>
          <p className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Perguntas Frequentes
          </p>
          <p className="mt-4 text-base text-stone-500">
            Ficou com alguma dúvida sobre como funciona a contratação ou os prazos das obras? Veja respostas rápidas abaixo.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {commonFAQs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-stone-200 bg-[#FAF9F6]/40 transition-all duration-300 hover:border-stone-350"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none cursor-pointer"
                  id={`faq-btn-${index}`}
                >
                  <span className="flex items-center gap-3 text-sm font-bold text-stone-900 md:text-base">
                    <HelpCircle className="h-5 w-5 text-stone-400 shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-stone-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="border-t border-stone-200/60 px-6 pb-6 pt-4 text-xs md:text-sm text-stone-600 leading-relaxed pl-14 bg-white/60">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
