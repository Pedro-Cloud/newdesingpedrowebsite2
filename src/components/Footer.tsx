export default function Footer() {
  return (
    <footer className="bg-sand text-dark">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-b border-dark/10">
        <a href="https://instagram.com/martins.co_" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-8 border-b sm:border-b-0 sm:border-r border-dark/10 hover:bg-black/5 transition-colors group">
          <span className="font-serif italic text-lg">Instagram</span>
          <span className="ml-auto text-dark/30 group-hover:text-dark">↗</span>
        </a>
        <a href="#" className="flex items-center gap-3 p-8 border-b md:border-b-0 md:border-r border-dark/10 hover:bg-black/5 transition-colors group">
          <span className="font-serif italic text-lg">Twitter / X</span>
          <span className="ml-auto text-dark/30 group-hover:text-dark">↗</span>
        </a>
        <a href="#" className="flex items-center gap-3 p-8 border-b sm:border-b-0 sm:border-r border-dark/10 hover:bg-black/5 transition-colors group">
          <span className="font-serif italic text-lg">YouTube</span>
          <span className="ml-auto text-dark/30 group-hover:text-dark">↗</span>
        </a>
        <a href="#" className="flex items-center gap-3 p-8 hover:bg-black/5 transition-colors group">
          <span className="font-serif italic text-lg">Facebook</span>
          <span className="ml-auto text-dark/30 group-hover:text-dark">↗</span>
        </a>
      </div>
      
      <div className="max-w-[1600px] mx-auto px-12 py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-dark/40 uppercase mb-8">Sobre a Agência</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-dark/60 transition-colors">Nossa História</a></li>
              <li><a href="#" className="hover:text-dark/60 transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-dark/60 transition-colors">Conselho de Sócios</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-dark/40 uppercase mb-8">Serviços</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-dark/60 transition-colors">Gestão de Tráfego</a></li>
              <li><a href="#" className="hover:text-dark/60 transition-colors">Desenvolvimento Web</a></li>
              <li><a href="#" className="hover:text-dark/60 transition-colors">Social Media</a></li>
              <li><a href="#" className="hover:text-dark/60 transition-colors">Agentes IA: WhatsApp e Instagram</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-dark/40 uppercase mb-8">Contato</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="https://wa.me/5511983404617" target="_blank" rel="noopener noreferrer" className="hover:text-dark/60 transition-colors">WhatsApp: +55 11 98340-4617</a></li>
              <li><a href="https://instagram.com/martins.co_" target="_blank" rel="noopener noreferrer" className="hover:text-dark/60 transition-colors">Instagram: @martins.co_</a></li>
              <li><a href="mailto:martinsco1@outlook.com" className="hover:text-dark/60 transition-colors">Email: martinsco1@outlook.com</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-dark/40 uppercase mb-8">Legal</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-dark/60 transition-colors">Termos de Serviço</a></li>
              <li><a href="#" className="hover:text-dark/60 transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-dark/60 transition-colors">Política de Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-24 pt-8 border-t border-dark/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col text-center md:text-left">
            <span className="text-[10px] font-bold tracking-[0.2em] text-dark/40 uppercase mb-2">Localização</span>
            <span className="text-sm">São Paulo — Brasil</span>
          </div>
          <div className="flex flex-col text-center md:text-right">
            <span className="text-[10px] font-bold tracking-[0.2em] text-dark/30 uppercase mb-2">© 2026 Martins & Co. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
