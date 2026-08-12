import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Menu, 
  X, 
  Check, 
  Star, 
  ArrowRight, 
  HelpCircle, 
  Sparkles, 
  MessageSquare,
  ShieldCheck,
  ThumbsUp,
  Award
} from 'lucide-react';

import DeveloperPanel from './components/DeveloperPanel';
import Hero from './components/Hero';
import ServicesList from './components/ServicesList';
import PedreiroServices from './components/PedreiroServices';
import EstimatorForm from './components/EstimatorForm';
import PortfolioGallery from './components/PortfolioGallery';
import FAQs from './components/FAQs';
import { commonFAQs, pedreiroFAQs, profiles } from './data';

const profileIds = ['pedreiro', 'eletricista', 'encanador'] as const;
type ProfileId = (typeof profileIds)[number];

function getConfiguredProfile(): ProfileId {
  const configuredProfile = import.meta.env.VITE_ACTIVE_PROFILE;

  return profileIds.includes(configuredProfile as ProfileId)
    ? (configuredProfile as ProfileId)
    : 'pedreiro';
}

export default function App() {
  // The public profile is chosen at build time through VITE_ACTIVE_PROFILE.
  // The panel below can still switch it locally while developing a demo.
  const [role, setRole] = useState<ProfileId>(getConfiguredProfile);
  const [customName, setCustomName] = useState(() => profiles[getConfiguredProfile()].defaultName);
  const [customPhone, setCustomPhone] = useState(() => import.meta.env.VITE_WHATSAPP_PHONE || '5511999999999');
  
  // Interaction states
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Sync default name when role changes, unless customized
  useEffect(() => {
    setCustomName(profiles[role].defaultName);
  }, [role]);

  // Monitor scroll for header background opacity
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeProfile = profiles[role];
  const usesDirectWhatsApp = activeProfile.id === 'pedreiro';

  // Action: when a service is selected, scroll to estimator and focus it
  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    const element = document.getElementById('orcamento');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const element = document.getElementById('orcamento');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartWhatsAppConversation = (serviceName?: string) => {
    const message = serviceName
      ? `Olá, ${customName}! Vi seu site e gostaria de conversar sobre ${serviceName}.`
      : activeProfile.whatsappPitch;
    const phone = customPhone.replace(/\D/g, '');
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setRole('pedreiro');
    setCustomName(profiles.pedreiro.defaultName);
    setCustomPhone(import.meta.env.VITE_WHATSAPP_PHONE || '5511999999999');
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 selection:bg-stone-900 selection:text-white font-sans antialiased pb-20 md:pb-0">
      
      {/* 2. HEADER NAVIGATION */}
      <header
        className={`sticky top-0 z-30 w-full transition-all duration-300 ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-md border-b border-stone-200/60 py-3 shadow-xs' 
            : 'bg-transparent border-b border-transparent py-5'
        }`}
        id="app-header"
      >
        <div className="container mx-auto max-w-7xl px-6 flex items-center justify-between">
          
          {/* Logo / Name */}
          <a href="#" className="flex items-center gap-2.5 group cursor-pointer" id="logo-link">
            <img 
              src={activeProfile.avatar} 
              alt={customName} 
              className="h-10 w-10 rounded-xl object-cover border border-stone-200/80 shadow-xs group-hover:scale-102 transition-transform duration-200"
              referrerPolicy="no-referrer"
            />
            <div>
              <span className="font-sans text-sm font-black tracking-tight text-stone-900 block">
                {customName}
              </span>
              <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest block leading-none mt-0.5">
                {activeProfile.roleName}
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#servicos" className="text-xs font-bold text-stone-600 hover:text-stone-900 uppercase tracking-wider transition-colors">Serviços</a>
            <a href="#portfolio" className="text-xs font-bold text-stone-600 hover:text-stone-900 uppercase tracking-wider transition-colors">Portfólio</a>
            {!usesDirectWhatsApp && <a href="#depoimentos" className="text-xs font-bold text-stone-600 hover:text-stone-900 uppercase tracking-wider transition-colors">Depoimentos</a>}
            {!usesDirectWhatsApp && <a href="#orcamento" className="text-xs font-bold text-stone-600 hover:text-stone-900 uppercase tracking-wider transition-colors">Orçamento</a>}
            <a href="#duvidas" className="text-xs font-bold text-stone-600 hover:text-stone-900 uppercase tracking-wider transition-colors">Dúvidas</a>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={usesDirectWhatsApp ? () => handleStartWhatsAppConversation() : handleScrollToContact}
              className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider shadow-xs transition-all duration-300 transform active:scale-95 cursor-pointer ${activeProfile.accentBg}`}
              id="header-cta-btn"
            >
              {usesDirectWhatsApp ? 'Falar no WhatsApp' : 'Fazer Orçamento'}
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-1 text-stone-600 hover:bg-stone-100 md:hidden cursor-pointer"
            aria-label="Abrir menu"
            id="mobile-menu-trigger"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-b border-stone-200 bg-white"
              id="mobile-menu-drawer"
            >
              <div className="px-6 py-6 space-y-4 flex flex-col">
                <a
                  href="#servicos"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-bold text-stone-700 hover:text-stone-950 py-1"
                >
                  Serviços
                </a>
                <a
                  href="#portfolio"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-bold text-stone-700 hover:text-stone-950 py-1"
                >
                  Portfólio
                </a>
                {!usesDirectWhatsApp && (
                  <a
                    href="#depoimentos"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-bold text-stone-700 hover:text-stone-950 py-1"
                  >
                    Depoimentos
                  </a>
                )}
                {!usesDirectWhatsApp && (
                  <a
                    href="#orcamento"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-bold text-stone-700 hover:text-stone-950 py-1"
                  >
                    Orçamento
                  </a>
                )}
                <a
                  href="#duvidas"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-bold text-stone-700 hover:text-stone-950 py-1"
                >
                  Dúvidas
                </a>
                
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    usesDirectWhatsApp ? handleStartWhatsAppConversation() : handleScrollToContact();
                  }}
                  className={`w-full text-center rounded-xl py-3 text-sm font-bold uppercase tracking-wider ${activeProfile.accentBg}`}
                >
                  {usesDirectWhatsApp ? 'Falar no WhatsApp' : 'Solicitar Orçamento'}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 3. HERO SECTION */}
      <Hero 
        profile={activeProfile} 
        name={customName} 
        onScrollToContact={usesDirectWhatsApp ? () => handleStartWhatsAppConversation() : handleScrollToContact}
        isDirectContact={usesDirectWhatsApp}
      />

      {/* 4. SERVICES LIST SECTION */}
      {usesDirectWhatsApp ? (
        <PedreiroServices
          professionalName={customName}
          professionalPhone={customPhone}
          onStartWhatsAppConversation={handleStartWhatsAppConversation}
        />
      ) : (
        <ServicesList
          profile={activeProfile}
          onSelectService={handleSelectService}
          onStartWhatsAppConversation={handleStartWhatsAppConversation}
        />
      )}

      {/* 5. PORTFOLIO SHOWCASE */}
      <PortfolioGallery 
        profile={activeProfile} 
        onStartWhatsAppConversation={handleStartWhatsAppConversation}
      />

      {/* 6. TRUST & SECURITY BRANDING ROW */}
      <section className="bg-[#FAF9F6] py-12 border-b border-stone-200/50">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-3 text-center">
            
            <div className="flex flex-col items-center p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xs mb-4 text-stone-850 border border-stone-150">
                <ShieldCheck className="h-6 w-6 text-emerald-600" />
              </div>
              <h4 className="font-sans text-sm font-bold text-stone-950 tracking-tight">Segurança Contratual</h4>
              <p className="mt-2 text-xs text-stone-500 max-w-xs leading-relaxed">
                Contrato formal detalhando etapas, materiais, valores e data exata de entrega para sua tranquilidade.
              </p>
            </div>

            <div className="flex flex-col items-center p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xs mb-4 text-stone-850 border border-stone-150">
                <ThumbsUp className="h-6 w-6 text-emerald-600" />
              </div>
              <h4 className="font-sans text-sm font-bold text-stone-950 tracking-tight font-sans">Capricho Pós-Obra</h4>
              <p className="mt-2 text-xs text-stone-500 max-w-xs leading-relaxed">
                Canteiro limpo diariamente e entrega do espaço higienizado, livre de entulhos ou poeira de obra.
              </p>
            </div>

            <div className="flex flex-col items-center p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xs mb-4 text-stone-850 border border-stone-150">
                <Award className="h-6 w-6 text-emerald-600" />
              </div>
              <h4 className="font-sans text-sm font-bold text-stone-950 tracking-tight">Qualidade Certificada</h4>
              <p className="mt-2 text-xs text-stone-500 max-w-xs leading-relaxed">
                Uso exclusivo de materiais certificados pelas marcas líderes do mercado e melhores práticas técnicas.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* The pedreiro landing page starts WhatsApp conversations directly. */}
      {!usesDirectWhatsApp && (
        <EstimatorForm
          profile={activeProfile}
          professionalName={customName}
          professionalPhone={customPhone}
          selectedServiceId={selectedServiceId}
        />
      )}

      {/* 8. TESTIMONIALS SECTION */}
      {!usesDirectWhatsApp && <section id="depoimentos" className="bg-white py-20 border-b border-stone-200/50">
        <div className="container mx-auto max-w-7xl px-6">
          
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-xs font-bold tracking-widest text-stone-400 uppercase font-mono">
              Avaliações Reais
            </h2>
            <p className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              O Que Dizem os Nossos Clientes
            </p>
            <div className="mt-4 flex justify-center">
              <div className={`h-1 w-12 rounded-full ${role === 'pedreiro' ? 'bg-amber-600' : role === 'eletricista' ? 'bg-amber-500' : 'bg-sky-500'}`} />
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {activeProfile.reviews.map((review) => (
              <div
                key={review.id}
                className="rounded-2xl border border-stone-200 bg-[#FAF9F6]/35 p-6 md:p-8 relative flex flex-col justify-between"
                id={`review-card-${review.id}`}
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-sm italic text-stone-700 leading-relaxed relative">
                    "{review.text}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-6 flex items-center justify-between border-t border-stone-200/60 pt-4">
                  <div>
                    <h4 className="text-sm font-bold text-stone-900">{review.author}</h4>
                    <p className="text-[11px] text-stone-500 font-mono">{review.role}</p>
                  </div>
                  <span className="text-[10px] text-stone-400 font-mono">{review.date}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>}

      {/* 9. FAQs ACCORDION */}
      <FAQs faqs={usesDirectWhatsApp ? pedreiroFAQs : commonFAQs} />

      {/* 10. PREMIUM FOOTER */}
      <footer className="bg-stone-900 text-white py-12 border-t border-stone-800">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-12">
            
            <div className="md:col-span-5">
              <span className="font-sans text-lg font-black tracking-tight text-white block">
                {customName}
              </span>
              <span className="text-xs font-mono text-amber-250 uppercase tracking-widest block mt-1">
                {activeProfile.roleName}
              </span>
              <p className="mt-4 text-xs text-stone-400 leading-relaxed max-w-sm">
                Serviços técnicos especializados com compromisso inabalável de qualidade, pontualidade e transparência. {usesDirectWhatsApp ? 'Fale pelo WhatsApp para contar sobre sua obra.' : 'Solicite um orçamento sem compromisso hoje mesmo.'}
              </p>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-stone-300 font-mono">Navegação</h4>
              <ul className="mt-4 space-y-2 text-xs text-stone-400">
                <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Portfólio Concluído</a></li>
                {!usesDirectWhatsApp && <li><a href="#depoimentos" className="hover:text-white transition-colors">Avaliações de Clientes</a></li>}
                {usesDirectWhatsApp ? (
                  <li><button onClick={() => handleStartWhatsAppConversation()} className="hover:text-white transition-colors cursor-pointer">Falar no WhatsApp</button></li>
                ) : (
                  <li><a href="#orcamento" className="hover:text-white transition-colors">Orçamentador Inteligente</a></li>
                )}
              </ul>
            </div>

            <div className="md:col-span-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-stone-300 font-mono">{usesDirectWhatsApp ? 'Atendimento' : 'Pitch de Demonstração'}</h4>
              <p className="mt-4 text-xs text-stone-400 leading-relaxed">
                {usesDirectWhatsApp ? 'Envie uma mensagem pelo WhatsApp para conversar sobre o seu projeto, tirar dúvidas e combinar os próximos passos.' : 'Este site é um modelo de alta performance para profissionais autônomos. Desenvolvido para maximizar o fechamento de propostas de alto padrão.'}
              </p>
              {!usesDirectWhatsApp && <p className="mt-2 text-xs text-amber-200">Criado por: <strong>dev.jorge.c@gmail.com</strong></p>}
            </div>

          </div>

          <div className="mt-12 border-t border-stone-800 pt-8 text-center text-[11px] text-stone-500">
            <p>© {new Date().getFullYear()} {customName}. Todos os direitos reservados. Projetado para fechamentos via WhatsApp.</p>
          </div>
        </div>
      </footer>

      {/* 11. MOBILE PERSISTENT FLOATING CONTACT BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-20 bg-white border-t border-stone-200 p-3 flex md:hidden shadow-lg items-center justify-between gap-4">
        <div>
          <span className="text-[9px] font-bold text-stone-400 uppercase tracking-wider block font-mono">Fale agora</span>
          <span className="text-xs font-bold text-stone-800 block truncate max-w-[150px]">{customName}</span>
        </div>
        <button
          onClick={usesDirectWhatsApp ? () => handleStartWhatsAppConversation() : handleScrollToContact}
          className={`flex items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-bold text-stone-900 shadow-sm grow text-center cursor-pointer ${activeProfile.accentBg}`}
          id="mobile-sticky-cta"
        >
          <Phone className="h-3.5 w-3.5" />
          {usesDirectWhatsApp ? 'Falar no WhatsApp' : 'Pedir Orçamento WhatsApp'}
        </button>
      </div>

      {/* Available only in local development; never rendered in the public UI. */}
      {import.meta.env.DEV && (
        <DeveloperPanel
          currentRole={role}
          setRole={setRole}
          customName={customName}
          setCustomName={setCustomName}
          customPhone={customPhone}
          setCustomPhone={setCustomPhone}
          onReset={handleReset}
        />
      )}

    </div>
  );
}
