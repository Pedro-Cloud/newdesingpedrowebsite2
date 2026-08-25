import { ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';

export default function Mission() {
  const { addToCart } = useCart();

  return (
    <section id="sobre" className="py-24 md:py-32 px-12 max-w-[1600px] mx-auto border-b border-dark/10">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-16 md:mb-24">
        <div className="lg:w-1/4">
          <div className="text-[10px] uppercase tracking-[0.2em] font-semibold opacity-60">
            Nossa Missão
          </div>
        </div>
        <div className="lg:w-3/4">
          <h2 className="font-serif text-3xl md:text-5xl lg:text-[4rem] leading-[1.1] max-w-4xl tracking-tight">
            Na Martins & Co., acreditamos que o marketing não é apenas alcance,{' '}
            <span className="italic">é sobre conexão.</span>{' '}
            <span className="text-dark/40">
              Somos um coletivo dedicado de estrategistas, criativos e analistas que elevam o padrão do mercado com precisão e paixão. Da reestruturação de presença digital à curadoria de jornadas de compra, geramos resultados excepcionais.
            </span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="border border-dark/10 p-2 group flex flex-col">
          <div className="relative h-64 md:h-80 overflow-hidden bg-dark/5">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
              alt="Data Analytics" 
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
            />
          </div>
          <div className="pt-6 pb-4 px-2 flex-1 flex flex-col justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-semibold opacity-40 mb-2">Produto Digital</div>
              <div className="text-xl font-serif mb-4">Agente de Inteligência Artificial para WhatsApp</div>
            </div>
            <div className="flex items-center justify-between border-t border-dark/10 pt-4 mt-4">
              <div className="text-lg font-serif">R$ 499</div>
              <button 
                onClick={() => addToCart(PRODUCTS.ia_whatsapp)}
                className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-dark/60 transition-colors"
              >
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        </div>
        
        <div className="border border-dark/10 p-2 group flex flex-col">
          <div className="relative h-64 md:h-80 overflow-hidden bg-dark/5">
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" 
              alt="Strategy" 
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
            />
          </div>
          <div className="pt-6 pb-4 px-2 flex-1 flex flex-col justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-semibold opacity-40 mb-2">Produto Digital</div>
              <div className="text-xl font-serif mb-4">Agente de Inteligência Artificial para Instagram</div>
            </div>
            <div className="flex items-center justify-between border-t border-dark/10 pt-4 mt-4">
              <div className="text-lg font-serif">R$ 499</div>
              <button 
                onClick={() => addToCart(PRODUCTS.ia_instagram)}
                className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-dark/60 transition-colors"
              >
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        </div>
        
        <div className="h-full min-h-[16rem] flex flex-col justify-between p-8 border border-dark/10 bg-white">
          <div>
            <h3 className="font-serif text-3xl mb-2">Nossos Visionários</h3>
            <p className="text-dark/50 italic font-serif text-lg mb-8">Pensadores e Construtores</p>
          </div>
          <button className="flex items-center gap-4 group mt-auto">
            <div className="w-12 h-12 rounded-full border border-dark flex items-center justify-center group-hover:bg-dark group-hover:text-sand transition-colors">
              <ArrowRight className="w-5 h-5" />
            </div>
            <span className="font-semibold uppercase text-xs tracking-widest">Conheça a Equipe</span>
          </button>
        </div>
      </div>
    </section>
  );
}
