
import React from 'react';

export default function App() {
  return (
    <div className="bg-[#07111c] text-white font-sans">
      {/* Menu fixo */}
      <nav className="fixed top-0 w-full bg-[#07111c] shadow z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <img src="/LOGO.png" alt="Logo RS Engenharia" className="h-12" />
          <div className="space-x-6 text-sm md:text-base">
            <a href="#inicio" className="hover:text-yellow-400">Início</a>
            <a href="#servicos" className="hover:text-yellow-400">Serviços</a>
            <a href="#contato" className="hover:text-yellow-400">Contato</a>
          </div>
        </div>
      </nav>

      {/* Conteúdo da Página */}
      <main className="pt-24 px-4 md:px-12">
        {/* Início */}
        <section id="inicio" className="text-center mb-24">
          <img src="/LOGO.png" alt="Logo RS Engenharia" className="h-24 mx-auto mb-6" />
          <h1 className="text-3xl md:text-4xl font-bold">RS Engenharia Elétrica</h1>
          <p className="mt-2 text-lg">Projetos Elétricos • Automação • Laudos Técnicos</p>
          <p className="mt-4 text-sm text-gray-300">Desenvolvemos projetos elétricos residenciais completos, com foco na segurança, eficiência e praticidade.</p>
        </section>

        {/* Serviços */}
        <section id="servicos" className="mb-24 text-center">
          <h2 className="text-2xl font-semibold mb-6">Nossos Serviços</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-black px-4 py-2 rounded hover:bg-yellow-400">Residencial</button>
            <button className="bg-white text-black px-4 py-2 rounded hover:bg-yellow-400">Comercial</button>
            <button className="bg-white text-black px-4 py-2 rounded hover:bg-yellow-400">Industrial</button>
            <button className="bg-white text-black px-4 py-2 rounded hover:bg-yellow-400">Automação</button>
            <button className="bg-white text-black px-4 py-2 rounded hover:bg-yellow-400">Laudos Técnicos</button>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="text-center">
          <h2 className="text-2xl font-semibold mb-6">Fale Conosco</h2>
          <p className="mb-2">
            📧 contato@rsengenharia.com.br
          </p>
          <p className="mb-4">
            📞 (51) 98031-8366
          </p>
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
