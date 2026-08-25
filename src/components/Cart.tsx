import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { 
    items, 
    removeFromCart, 
    updateQuantity, 
    totalOneTime, 
    totalRecurring, 
    isCartOpen, 
    setIsCartOpen 
  } = useCart();

  if (!isCartOpen) return null;

  const handleCheckout = async () => {
    if (items.length === 0) return;

    // PREPARAÇÃO PARA O STRIPE
    // O backend precisa ter uma rota POST em /create-checkout-session
    // Substitua 'YOUR_PUBLIC_KEY' pela sua chave pública do Stripe no seu frontend caso use o SDK,
    // mas o ideal é redirecionar direto para a URL da sessão gerada pelo backend.

    const lineItems = items.map(item => ({
      price: item.priceId,
      quantity: item.quantity
    }));

    console.log("Enviando para o Stripe (Backend):", lineItems);
    alert("Integração com Stripe em preparação!\n\nDados a serem enviados para o backend:\n" + JSON.stringify(lineItems, null, 2) + "\n\n(Verifique o console ou o código-fonte em /src/components/Cart.tsx para a implementação do Fetch)");

    /*
    Exemplo de integração com o Backend:
    
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: lineItems }),
      });
      const session = await response.json();
      
      // Redirecionar para o Checkout do Stripe retornado pelo backend
      window.location.href = session.url;
    } catch (error) {
      console.error("Erro ao iniciar checkout:", error);
    }
    */
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-dark/20 backdrop-blur-sm transition-opacity" 
        onClick={() => setIsCartOpen(false)} 
      />
      
      {/* Drawer */}
      <div className="relative w-full max-w-md bg-sand h-full shadow-2xl flex flex-col border-l border-dark/10 transform transition-transform">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-dark/10">
          <h2 className="font-serif text-2xl flex items-center gap-3">
            <ShoppingBag className="w-6 h-6" />
            Carrinho
          </h2>
          <button 
            onClick={() => setIsCartOpen(false)} 
            className="p-2 hover:bg-black/5 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="text-center text-dark/50 mt-20">
              <ShoppingBag className="w-16 h-16 mx-auto mb-4 opacity-20" />
              <p className="font-serif text-xl">Seu carrinho está vazio.</p>
              <p className="text-sm mt-2">Explore nossos produtos e serviços.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="mt-8 px-6 py-3 border border-dark text-xs uppercase tracking-widest font-semibold hover:bg-dark hover:text-sand transition-colors inline-block"
              >
                Voltar ao site
              </button>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex gap-4 border border-dark/10 p-4 bg-white/50 relative group">
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold text-sm max-w-[85%]">{item.name}</h3>
                    <button 
                      onClick={() => removeFromCart(item.id)} 
                      className="text-dark/40 hover:text-red-600 transition-colors absolute top-4 right-4"
                      aria-label="Remover item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="text-[10px] uppercase tracking-widest font-semibold text-dark/40 mb-4 inline-block px-2 py-1 bg-dark/5 rounded">
                    {item.type === 'recurring' ? 'Assinatura Mensal' : 'Pagamento Único'}
                  </div>
                  
                  <div className="flex items-end justify-between mt-2">
                    <div className="font-serif text-lg leading-none">
                      R$ {item.price.toLocaleString('pt-BR')}
                      {item.type === 'recurring' && <span className="text-xs text-dark/50 ml-1">/mês</span>}
                    </div>
                    
                    <div className="flex items-center gap-3 border border-dark/10 p-1 bg-white">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)} 
                        className="p-1 hover:bg-black/5 transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-semibold w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)} 
                        className="p-1 hover:bg-black/5 transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Checkout */}
        {items.length > 0 && (
          <div className="p-6 border-t border-dark/10 bg-white/50">
            <div className="space-y-3 mb-6 text-sm">
              {totalOneTime > 0 && (
                <div className="flex justify-between text-dark/70">
                  <span>Subtotal (Pagamento Único)</span>
                  <span>R$ {totalOneTime.toLocaleString('pt-BR')}</span>
                </div>
              )}
              {totalRecurring > 0 && (
                <div className="flex justify-between text-dark/70">
                  <span>Subtotal (Mensalidades)</span>
                  <span>R$ {totalRecurring.toLocaleString('pt-BR')}/mês</span>
                </div>
              )}
              <div className="pt-3 border-t border-dark/10 flex justify-between items-end">
                <span className="font-semibold uppercase tracking-widest text-xs">Total a pagar agora</span>
                <div className="text-right">
                  <span className="font-serif text-2xl font-bold">R$ {(totalOneTime + totalRecurring).toLocaleString('pt-BR')}</span>
                </div>
              </div>
            </div>
            
            <button 
              onClick={handleCheckout}
              disabled={items.length === 0}
              className="w-full py-4 bg-dark text-sand font-semibold flex items-center justify-center gap-2 uppercase text-xs tracking-widest hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Finalizar Compra <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[10px] text-center mt-3 text-dark/50 uppercase tracking-widest font-semibold">
              Checkout 100% Seguro
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
