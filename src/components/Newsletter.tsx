export default function Newsletter() {
  return (
    <section className="py-24 md:py-32 px-12 max-w-4xl mx-auto text-center border-b border-dark/10">
      <div className="text-[10px] uppercase tracking-[0.2em] font-semibold opacity-60 mb-8">
        A Carta do Estrategista
      </div>
      
      <h2 className="font-serif text-4xl md:text-6xl lg:text-[5rem] leading-[0.9] tracking-tighter mb-8">
        <span className="italic">Insights</span> Semanais.
      </h2>
      
      <p className="text-dark/70 mb-12 text-lg">
        Receba semanalmente insights sobre novas tendências de mercado, destaques de campanhas e convites exclusivos para workshops fechados.
      </p>
      
      <form className="flex flex-col sm:flex-row items-stretch max-w-xl mx-auto mb-24" onSubmit={(e) => e.preventDefault()}>
        <input 
          type="email" 
          placeholder="seu.email@exemplo.com" 
          className="w-full sm:flex-1 bg-transparent px-6 py-4 outline-none text-sm placeholder:text-dark/40 border border-dark/20 sm:border-r-0"
          required
        />
        <button type="submit" className="w-full sm:w-auto bg-dark text-sand px-8 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-dark/90 transition-colors border border-dark">
          Inscrever-se
        </button>
      </form>
    </section>
  );
}
