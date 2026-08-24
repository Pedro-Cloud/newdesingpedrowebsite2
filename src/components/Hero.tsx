import { ArrowRight } from 'lucide-react';
import HeroBackground from './HeroBackground';

export default function Hero() {
  return (
    <section id="especialidades" className="relative px-12 py-20 md:py-32 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-dark/10 overflow-hidden">
      
      {/* Background Abstract Art */}
      <HeroBackground />

      <div className="lg:col-span-7 relative z-10">
        <div className="text-[10px] uppercase tracking-[0.2em] font-semibold opacity-60 mb-6 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-dark animate-pulse" />
          Disponível para novos projetos
        </div>
        
        <h1 className="font-serif text-[4.5rem] md:text-[7rem] lg:text-[9rem] leading-[0.85] tracking-tighter mb-8">
          <span className="italic">A Estratégia</span><br />
          <span className="font-bold">Perfeita.</span>
        </h1>
        
        <p className="text-xl max-w-md leading-relaxed text-dark/70 mb-12">
          Estratégias de marketing digital, social media e desenvolvimento web criadas para escalar sua marca e dominar o mercado.
        </p>
        
        <div className="flex flex-wrap items-center gap-8">
          <button className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full border border-dark flex items-center justify-center group-hover:bg-dark group-hover:text-sand transition-colors">
              <ArrowRight className="w-5 h-5" />
            </div>
            <span className="font-semibold uppercase text-xs tracking-widest">Iniciar Projeto</span>
          </button>
        </div>
      </div>
      
      <div className="lg:col-span-5 relative z-10 flex flex-col justify-center h-full border-t lg:border-t-0 lg:border-l border-dark/10 pt-12 lg:pt-0 lg:pl-12">
        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold opacity-60 mb-6 block">Nossas Especialidades</span>
        
        <div className="border-b border-dark/10 py-6">
          <div className="flex justify-between items-center">
            <span className="font-serif italic text-2xl">01. Social Media</span>
            <span className="text-[10px] opacity-40 uppercase tracking-widest font-semibold">Gestão</span>
          </div>
        </div>
        <div className="border-b border-dark/10 py-6">
          <div className="flex justify-between items-center">
            <span className="font-serif italic text-2xl">02. Web Development</span>
            <span className="text-[10px] opacity-40 uppercase tracking-widest font-semibold">Sistemas</span>
          </div>
        </div>
        <div className="border-b border-dark/10 py-6">
          <div className="flex justify-between items-center">
            <span className="font-serif italic text-2xl">03. Google & Meta Ads</span>
            <span className="text-[10px] opacity-40 uppercase tracking-widest font-semibold">Performance</span>
          </div>
        </div>
        <div className="border-b border-dark/10 py-6">
          <div className="flex justify-between items-center">
            <span className="font-serif italic text-2xl">04. Agentes IA Whats e Insta</span>
            <span className="text-[10px] opacity-40 uppercase tracking-widest font-semibold">Automação</span>
          </div>
        </div>
      </div>
    </section>
  );
}
