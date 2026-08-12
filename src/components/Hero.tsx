import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ProfessionalProfile } from '../types';

interface HeroProps {
  profile: ProfessionalProfile;
  name: string;
  onScrollToContact: () => void;
  isDirectContact: boolean;
}

export default function Hero({ profile, name, onScrollToContact, isDirectContact }: HeroProps) {
  // Extract a specific background light shade for details
  const isPedreiro = profile.id === 'pedreiro';
  const isEletricista = profile.id === 'eletricista';
  
  const getThemeAccentClass = () => {
    if (isPedreiro) return 'text-amber-800 bg-amber-50 border-amber-100';
    if (isEletricista) return 'text-yellow-800 bg-yellow-50 border-yellow-100';
    return 'text-sky-800 bg-sky-50 border-sky-100';
  };

  return (
    <section className="relative overflow-hidden bg-[#FAF9F6] py-16 md:py-24 border-b border-stone-200/50">
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-tr from-stone-100 to-transparent blur-3xl" />
        <div className="absolute top-1/2 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-stone-150 to-transparent blur-3xl" />
      </div>

      <div className="container relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Hero Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Main Headline */}
            <motion.h1
              key={`${profile.id}-headline`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
              className="mt-6 font-sans text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl"
            >
              <span className="block text-stone-500 font-normal text-2xl sm:text-3xl lg:text-4xl mb-2 font-mono">
                {name}
              </span>
              {profile.heroHeadline}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              key={`${profile.id}-subheadline`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
              className="mt-6 text-base text-stone-600 sm:text-lg leading-relaxed max-w-xl"
            >
              {profile.heroSubheadline}
            </motion.p>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <button
                onClick={onScrollToContact}
                className={`group flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 transform active:scale-98 shadow-sm cursor-pointer ${profile.accentBg}`}
                id="hero-cta-btn"
              >
                {isDirectContact ? 'Falar no WhatsApp' : 'Solicitar Orçamento Online'}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <a
                href="#servicos"
                className="flex items-center gap-2 rounded-full border border-stone-250 bg-white px-6 py-3.5 text-sm font-semibold text-stone-700 hover:bg-stone-50 hover:text-stone-900 transition-all cursor-pointer"
                id="hero-services-btn"
              >
                Conhecer Serviços
              </a>
            </motion.div>

            {/* Quick trust bullet list */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-stone-200/60 pt-8"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-medium text-stone-600">Foco em Limpeza e Prazos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-medium text-stone-600">Garantia por Contrato</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-medium text-stone-600">Materiais Homologados</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-medium text-stone-600">Atendimento Organizado</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-medium text-stone-600">{profile.experienceYears} anos de experiência</span>
              </div>
            </motion.div>

          </div>

          {/* Hero Visual Showcase Image Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              key={`${profile.id}-image`}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 0.15 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Outer clean frame */}
              <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white p-3 shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-stone-100">
                  <img
                    src={profile.heroImage ?? profile.portfolio[0].image}
                    alt={profile.portfolio[0].title}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                    id="hero-featured-img"
                  />
                  {/* Subtle Badge Over the image */}
                  <div className="absolute bottom-3 left-3 rounded-lg bg-stone-900/85 backdrop-blur-md px-3 py-1.5 text-[10px] font-mono text-amber-100 tracking-wider uppercase">
                    Obra Destaque
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
