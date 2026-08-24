import { Search, ArrowRight } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="flex justify-between items-baseline border-b border-dark/10 pb-6 pt-12 px-12 max-w-[1600px] mx-auto">
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold opacity-60 mb-1">Established 2024</span>
        <h1 className="font-serif text-3xl font-bold tracking-tighter">Martins & Co.</h1>
      </div>

      <nav className="hidden md:flex gap-12 text-xs font-semibold tracking-widest uppercase">
        <a href="#produtos" className="hover:text-dark/70 transition-colors">Produtos</a>
        <a href="#projetos" className="hover:text-dark/70 transition-colors">Projetos</a>
        <a href="#especialidades" className="hover:text-dark/70 transition-colors">Especialidades</a>
        <a href="#sobre" className="hover:text-dark/70 transition-colors">Sobre</a>
      </nav>

      <div className="flex items-center gap-4">
        <a href="https://wa.me/5511983404617" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group cursor-pointer">
          <span className="font-semibold uppercase text-xs tracking-widest hidden md:block">Agendar Reunião</span>
          <div className="w-8 h-8 rounded-full border border-dark flex items-center justify-center group-hover:bg-dark group-hover:text-white transition-colors">
            <ArrowRight className="w-4 h-4" />
          </div>
        </a>
      </div>
    </header>
  );
}
