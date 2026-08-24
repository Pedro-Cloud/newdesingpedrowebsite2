import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section className="py-24 md:py-32 px-12 max-w-[1600px] mx-auto border-b border-dark/10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl leading-[0.9] tracking-tighter mb-6">
            <span className="italic">Torne-se</span> um Parceiro <span className="font-bold">de Negócios</span>
          </h2>
          <p className="text-dark/70 text-lg">
            Apoie o crescimento da sua marca e tenha acesso exclusivo às nossas estratégias em constante evolução.
          </p>
        </div>
        
        <div className="flex gap-6 border-b border-dark/10 pb-2">
          <span className="text-sm font-semibold tracking-widest uppercase">Planos</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Basic */}
        <div className="border border-dark/10 p-8 bg-white h-full flex flex-col">
          <div className="flex justify-between items-center mb-12">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-dark/40">Iniciante</span>
            <span className="font-serif italic text-2xl">01</span>
          </div>
          
          <h3 className="font-serif text-3xl mb-2">Presença Digital</h3>
          <div className="flex items-baseline gap-1 mb-8">
            <span className="text-4xl font-serif">R$899</span>
            <span className="text-dark/50 text-sm">/mês</span>
          </div>
          <p className="text-sm text-dark/60 mb-10 h-10 border-b border-dark/10 pb-16">
            Perfeito para negócios locais e empresas em busca de tração inicial.
          </p>
          
          <ul className="space-y-4 mb-12 text-sm text-dark/80 flex-1">
            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-dark/40" /> Gestão de Redes Sociais</li>
            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-dark/40" /> Design de Posts (12/mês)</li>
            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-dark/40" /> Relatório Mensal</li>
            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-dark/40" /> Criação de Landing Page</li>
          </ul>
          
          <a href="https://wa.me/5511983404617" target="_blank" rel="noopener noreferrer" className="block text-center w-full py-4 border border-dark font-semibold uppercase text-xs tracking-widest hover:bg-dark hover:text-sand transition-colors cursor-pointer">
            Selecionar
          </a>
        </div>

        {/* Pro */}
        <div className="border border-dark p-8 bg-dark text-sand h-full flex flex-col relative -translate-y-4 shadow-xl">
          <div className="flex justify-between items-center mb-12">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-sand/60">Mais Popular</span>
            <span className="font-serif italic text-2xl">02</span>
          </div>
          
          <h3 className="font-serif text-3xl mb-2">Aceleração Total</h3>
          <div className="flex items-baseline gap-1 mb-8">
            <span className="text-5xl font-serif">R$1.999</span>
            <span className="text-sand/50 text-sm">/mês</span>
          </div>
          <p className="text-sm text-sand/60 mb-10 h-10 border-b border-sand/20 pb-16">
            Para o empresário que quer dominar o tráfego e experimentar vendas consistentes.
          </p>
          
          <ul className="space-y-4 mb-12 text-sm text-sand/80 flex-1">
            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-sand/60" /> Tudo do plano Iniciante</li>
            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-sand/60" /> Gestão de Tráfego (Google/Meta)</li>
            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-sand/60" /> Criação de Landing Page</li>
            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-sand/60" /> Agentes de IA: WhatsApp e Instagram</li>
          </ul>
          
          <a href="https://wa.me/5511983404617" target="_blank" rel="noopener noreferrer" className="block text-center w-full py-4 border border-sand bg-sand text-dark font-semibold uppercase text-xs tracking-widest hover:bg-transparent hover:text-sand transition-colors cursor-pointer">
            Tornar-se Parceiro
          </a>
        </div>

        {/* Elite */}
        <div className="border border-dark/10 p-8 bg-white h-full flex flex-col">
          <div className="flex justify-between items-center mb-12">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-dark/40">Enterprise</span>
            <span className="font-serif italic text-2xl">03</span>
          </div>
          
          <h3 className="font-serif text-3xl mb-2">Dominância</h3>
          <div className="flex items-baseline gap-1 mb-8">
            <span className="text-4xl font-serif">R$3.999</span>
            <span className="text-dark/50 text-sm">/mês</span>
          </div>
          <p className="text-sm text-dark/60 mb-10 h-10 border-b border-dark/10 pb-16">
            Apoie diretamente projetos ambiciosos de reestruturação de mercado.
          </p>
          
          <ul className="space-y-4 mb-12 text-sm text-dark/80 flex-1">
            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-dark/40" /> Equipe dedicada integral</li>
            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-dark/40" /> Tráfego, Social, Web Dev, SEO</li>
            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-dark/40" /> Consultoria Estratégica Semanal</li>
            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-dark/40" /> Agentes de IA: WhatsApp e Instagram</li>
          </ul>
          
          <a href="https://wa.me/5511983404617" target="_blank" rel="noopener noreferrer" className="block text-center w-full py-4 border border-dark font-semibold uppercase text-xs tracking-widest hover:bg-dark hover:text-sand transition-colors cursor-pointer">
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
}
