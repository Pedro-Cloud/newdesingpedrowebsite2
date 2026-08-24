import { ArrowRight } from 'lucide-react';

export default function Feature() {
  return (
    <section id="projetos" className="py-24 px-12 max-w-[1600px] mx-auto border-b border-dark/10">
      <div className="flex justify-between items-baseline mb-16">
        <div className="text-[10px] uppercase tracking-[0.2em] font-semibold opacity-60">
          Redefinindo o marketing, uma campanha de cada vez.
        </div>
        <span className="font-serif italic text-dark text-xl">M</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="relative">
          <div className="border border-dark/10 p-2 bg-white z-10 relative">
             <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600" 
              alt="Collaboration" 
              className="w-full h-[400px] md:h-[500px] object-cover grayscale"
            />
          </div>
          {/* Offset border for editorial look */}
          <div className="absolute top-4 left-4 right-[-16px] bottom-[-16px] border border-dark/10 z-0"></div>
        </div>
        
        <div className="flex flex-col">
          <h2 className="font-serif text-4xl md:text-6xl lg:text-[5rem] leading-[0.9] tracking-tighter text-dark mb-12">
            <span className="italic">Inovadora.</span><br /> Estratégica.<br /> <span className="font-bold">Implacável.</span>
          </h2>
          
          <div className="border-l border-dark/10 pl-8 lg:pl-12">
            <h3 className="font-serif text-2xl md:text-3xl mb-4 text-dark leading-tight">Soluções personalizadas, a cada passo.</h3>
            <p className="text-dark/70 text-sm leading-relaxed mb-8 max-w-md">
              Onde cada marca é recebida com compreensão e cada campanha é uma jornada única de descobertas e crescimento acelerado no mercado digital.
            </p>
            
            <div className="flex items-center justify-between pt-6 border-t border-dark/10">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 border border-dark overflow-hidden grayscale">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Avatar" />
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-300 border border-dark overflow-hidden grayscale">
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="Avatar" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white border border-dark flex items-center justify-center text-xs font-medium">
                  +5k
                </div>
              </div>
              <button className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full border border-dark flex items-center justify-center group-hover:bg-dark group-hover:text-sand transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
