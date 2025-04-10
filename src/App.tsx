import React from 'react';

export default function App() {
  return (
    <div className="bg-[#07111c] text-white font-sans max-w-[794px] mx-auto">
      {/* Menu fixo com scroll suave */}
      <nav className="fixed top-0 w-full bg-[#07111c] shadow z-50">
        <div className="max-w-[794px] mx-auto px-4 py-2 flex justify-between items-center">
          <div className="bg-white p-[2px] rounded-md shadow">
            <img src="/LOGO.png" alt="Logo RS Engenharia" className="h-10" />
          </div>
          <div className="space-x-4 text-sm md:text-base">
            <a href="#inicio" className="hover:text-yellow-400">Início</a>
            <a href="#servicos" className="hover:text-yellow-400">Serviços</a>
            <a href="#contato" className="hover:text-yellow-400">Contato</a>
          </div>
        </div>
      </nav>

      {/* Conteúdo da Página */}
      <main className="pt-28 px-4 md:px-6 text-center scroll-smooth">
        {/* Início */}
        <section id="inicio" className="mb-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">RS Engenharia Elétrica</h1>
          <p className="text-lg md:text-xl">Projetos Elétricos • Automação • Laudos Técnicos</p>
          <p className="mt-6 text-sm md:text-base text-gray-300 max-w-md mx-auto">
            Desenvolvemos projetos personalizados com foco em eficiência, segurança e inovação tecnológica. Atendemos desde residências até plantas industriais, sempre seguindo as normas técnicas e buscando o melhor custo-benefício.
          </p>
        </section>

        {/* Serviços */}
        <section id="servicos" className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Nossos Serviços</h2>

          <div className="space-y-12">
            <div>
              <img src="https://via.placeholder.com/600x300?text=Residencial" alt="Projeto Residencial" className="rounded-xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Projetos Elétricos Residenciais</h3>
              <p className="text-sm md:text-base text-gray-300 max-w-md mx-auto">
                Elaboração de projetos completos para casas, apartamentos e condomínios. Cada detalhe é pensado para garantir conforto, economia e facilidade na execução, atendendo às normas da NBR 5410.
              </p>
            </div>

            <div>
              <img src="https://via.placeholder.com/600x300?text=Comercial" alt="Projeto Comercial" className="rounded-xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Projetos Comerciais</h3>
              <p className="text-sm md:text-base text-gray-300 max-w-md mx-auto">
                Soluções inteligentes para lojas, escritórios e estabelecimentos em geral, com foco em segurança, expansão futura e redução de consumo energético.
              </p>
            </div>

            <div>
              <img src="https://via.placeholder.com/600x300?text=Industrial" alt="Projeto Industrial" className="rounded-xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Projetos Industriais</h3>
              <p className="text-sm md:text-base text-gray-300 max-w-md mx-auto">
                Atuamos no dimensionamento de transformadores, quadros, cabos, proteções e automação de processos, garantindo eficiência e segurança em ambientes industriais.
              </p>
            </div>

            <div>
              <img src="https://via.placeholder.com/600x300?text=Aumento+de+Carga" alt="Aumento de Carga" className="rounded-xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Aumento de Carga e Regularização</h3>
              <p className="text-sm md:text-base text-gray-300 max-w-md mx-auto">
                Realizamos estudos e adequações para ampliação de carga junto à concessionária, com ART, cálculos e diagramas. O cálculo de demanda custa R$ 1.000,00, e o projeto completo, R$ 1.900,00. Projetos completos prediais com elétrica e telecom: R$ 3.400,00.
              </p>
            </div>

            <div>
              <img src="https://via.placeholder.com/600x300?text=Automacao" alt="Automação" className="rounded-xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Automação Industrial</h3>
              <p className="text-sm md:text-base text-gray-300 max-w-md mx-auto">
                Integramos sensores, CLPs, inversores e painéis de comando para otimizar processos industriais, melhorando desempenho, segurança e padronização da produção.
              </p>
            </div>

            <div>
              <img src="https://via.placeholder.com/600x300?text=Laudos+Tecnicos" alt="Laudos Técnicos" className="rounded-xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Laudos Técnicos</h3>
              <p className="text-sm md:text-base text-gray-300 max-w-md mx-auto">
                Emitimos laudos para regularização, inspeção predial e avaliação técnica de sistemas elétricos, com base nas normas vigentes e análises especializadas.
              </p>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Fale Conosco</h2>
          <p className="mb-1">📧 contato@rsengenharia.com.br</p>
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
