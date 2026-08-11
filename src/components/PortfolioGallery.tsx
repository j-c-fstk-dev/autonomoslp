import { motion } from 'motion/react';
import { Eye, ExternalLink, BookmarkCheck } from 'lucide-react';
import { Project, ProfessionalProfile } from '../types';

interface PortfolioGalleryProps {
  profile: ProfessionalProfile;
}

export default function PortfolioGallery({ profile }: PortfolioGalleryProps) {
  return (
    <section id="portfolio" className="bg-white py-20 border-b border-stone-200/50">
      <div className="container mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-xs font-bold tracking-widest text-stone-400 uppercase font-mono">
            Amostra de Trabalhos
          </h2>
          <p className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Galeria de Projetos Entregues
          </p>
          <div className="mt-4 flex justify-center">
            <div className={`h-1 w-12 rounded-full ${profile.id === 'pedreiro' ? 'bg-amber-600' : profile.id === 'eletricista' ? 'bg-amber-500' : 'bg-sky-500'}`} />
          </div>
          <p className="mt-4 text-base text-stone-500">
            Veja detalhes reais de obras concluídas recentemente, com foco na precisão milimétrica e no capricho dos acabamentos.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {profile.portfolio.map((project: Project, index: number) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group overflow-hidden rounded-2xl border border-stone-200 bg-[#FAF9F6]/30 hover:bg-[#FAF9F6] transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
                id={`portfolio-card-${project.id}`}
              >
                <div>
                  {/* Image Container with Hover zoom */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-100 border-b border-stone-200">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      id={`portfolio-img-${project.id}`}
                    />
                    
                    {/* Category Overlay tag */}
                    <div className="absolute top-3 left-3 rounded-full bg-stone-900/80 backdrop-blur-xs px-3 py-1 text-[10px] font-mono text-white tracking-wider uppercase">
                      {project.category}
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-stone-900 tracking-tight leading-snug group-hover:text-stone-800 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs text-stone-500 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Technical stats footer of the card */}
                <div className="mx-6 mb-6 rounded-xl bg-white p-3 border border-stone-150 flex items-center justify-between text-xs font-semibold text-stone-700">
                  <span className="flex items-center gap-1.5 font-mono text-[11px] text-stone-500">
                    <BookmarkCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                    CONCLUÍDO
                  </span>
                  <span className="text-stone-900 text-[11px] font-mono">
                    {project.stats}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic call to action at footer */}
        <div className="mt-16 text-center">
          <p className="text-sm text-stone-600">
            Quer ver mais fotos ou falar sobre um projeto semelhante?
          </p>
          <a
            href="#orcamento"
            className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-stone-900 hover:opacity-80 border-b border-stone-950 pb-0.5 transition-all cursor-pointer"
            id="portfolio-cta-link"
          >
            Fazer uma simulação para seu espaço
          </a>
        </div>

      </div>
    </section>
  );
}
