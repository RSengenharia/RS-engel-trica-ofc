import React from 'react';

export default function App() {
  return (
    <div className="bg-[#07111c] text-white font-sans max-w-4xl mx-auto">
      {/* Menu fixo */}
      <nav className="fixed top-0 w-full bg-[#07111c] shadow z-50">
        <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
          <img src="/LOGO.png" alt="Logo RS Engenharia" className="h-12" />
          <div className="space-x-6 text-sm md:text-base">
            <a href="#inicio" className="hover:text-yellow-400">Início</a>
            <a href="#servicos" className="hover:text-yellow-400">Serviços</a>
            <a href="#contato" className="hover:text-yellow-400">Contato</a>
          </div>
        </div>
      </nav>

      {/* Conteúdo da Página */}
      <main className="pt-32 px-4 md:px-6 text-center">
        {/* Início */}
        <section id="inicio" className="mb-24">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">RS Engenharia Elétrica</h1>
          <p className="text-xl md:text-2xl">Projetos Elétricos • Automação • Laudos Técnicos</p>
          <p className="mt-6 text-base text-gray-300 max-w-2xl mx-auto">
            Desenvolvemos projetos elétricos completos, com foco em segurança, eficiência e praticidade. Personalizamos cada solução de acordo com o perfil do imóvel e as necessidades dos nossos clientes.
          </p>
        </section>

        {/* Serviços */}
        <section id="servicos" className="mb-24">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">Nossos Serviços</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <button className="bg-white text-black px-5 py-2 rounded hover:bg-yellow-400">Residencial</button>
            <button className="bg-white text-black px-5 py-2 rounded hover:bg-yellow-400">Comercial</button>
            <button className="bg-white text-black px-5 py-2 rounded hover:bg-yellow-400">Industrial</button>
            <button className="bg-white text-black px-5 py-2 rounded hover:bg-yellow-400">Automação</button>
            <button className="bg-white text-black px-5 py-2 rounded hover:bg-yellow-400">Laudos Técnicos</button>
          </div>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Atuamos com projetos e instalações em diversas áreas, como residências, comércios e indústrias. Também realizamos automação de sistemas e emissão de laudos conforme normas técnicas vigentes.
          </p>
        </section>

        {/* Contato */}
        <section id="contato">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Fale Conosco</h2>
          <p className="mb-2">📧 contato@rsengenharia.com.br</p>
          <p className="mb-4">📞 (51) 98031-8366</p>
          <a
            href="https://api.whatsapp.com/send?phone=5551980318366"
            target="_blank"
            className="inline-block bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
          >
            Fale conosco no WhatsApp
          </a>
        </section>
      </main>
    </div>
  );
}
