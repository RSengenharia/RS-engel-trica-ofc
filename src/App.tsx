import React from 'react';

export default function App() {
  return (
    <div className="bg-[#07111c] text-white font-sans max-w-[794px] w-full overflow-x-hidden mx-auto">
      {/* Menu fixo com scroll suave */}
      <nav className="fixed top-0 w-full bg-[#07111c] shadow z-50">
        <div className="max-w-[794px] mx-auto px-4 py-2 flex justify-between items-center">
          <div className="bg-white p-[2px] rounded-md shadow">
            <img src="/LOGO.png" alt="Logo RS Engenharia" className="h-8 object-contain" />
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
              <img src="/residencial.png" alt="Projeto Residencial" className="rounded-xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Projetos Elétricos Residenciais</h3>
              <p className="text-sm md:text-base text-gray-300 max-w-md mx-auto">
                Desenvolvemos projetos elétricos residenciais completos, garantindo que cada ambiente seja abastecido de forma segura e eficiente. Avaliamos as necessidades específicas de cada imóvel para elaborar soluções que atendam às exigências técnicas e promovam o conforto dos moradores.
              </p>
              <p className="text-sm md:text-base text-gray-300 max-w-md mx-auto mt-2">
                O projeto é feito de forma personalizada, considerando desde a entrada de energia até a distribuição interna e o dimensionamento de cargas. Também orientamos sobre a escolha dos dispositivos de proteção e sistemas de iluminação adequados.
              </p>
              <p className="text-sm md:text-base text-gray-300 max-w-md mx-auto mt-2">
                Ao final, entregamos toda a documentação técnica, incluindo o memorial descritivo, diagrama unifilar e plantas detalhadas, prontos para execução e aprovação junto à concessionária.
              </p>
            </div>

            <div>
              <img src="/comercial.png" alt="Projeto Comercial" className="rounded-xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Projetos Comerciais</h3>
              <p className="text-sm md:text-base text-gray-300 max-w-md mx-auto">
                Em ambientes comerciais, o projeto elétrico precisa garantir segurança, continuidade e flexibilidade para futuras expansões. Pensamos em soluções que permitam economia de energia e adaptabilidade dos espaços.
              </p>
              <p className="text-sm md:text-base text-gray-300 max-w-md mx-auto mt-2">
                Estudamos a demanda dos equipamentos e elaboramos um sistema capaz de sustentar picos de consumo, reduzindo riscos de sobrecarga. A iluminação também é projetada de forma eficiente para proporcionar conforto visual aos clientes e colaboradores.
              </p>
              <p className="text-sm md:text-base text-gray-300 max-w-md mx-auto mt-2">
                A RS Engenharia também se preocupa com a estética e integração com o projeto arquitetônico, entregando um projeto moderno e funcional.
              </p>
            </div>

            <div>
              <img src="/industrial.png" alt="Projeto Industrial" className="rounded-xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Projetos Industriais</h3>
              <p className="text-sm md:text-base text-gray-300 max-w-md mx-auto">
                Para instalações industriais, desenvolvemos projetos robustos e eficientes, que contemplam desde a entrada de energia de média tensão até os sistemas de automação e comando.
              </p>
              <p className="text-sm md:text-base text-gray-300 max-w-md mx-auto mt-2">
                Trabalhamos com dimensionamento de transformadores, painéis elétricos, sistemas de proteção, aterramento e SPDA. Nossos projetos seguem as normas da ABNT e levam em conta os riscos operacionais de cada processo.
              </p>
              <p className="text-sm md:text-base text-gray-300 max-w-md mx-auto mt-2">
                Acompanhamos a execução e oferecemos suporte técnico completo para garantir o pleno funcionamento da instalação com segurança e eficiência.
              </p>
            </div>

            <div>
              <img src="/aumento-de-carga.png" alt="Aumento de Carga" className="rounded-xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Aumento de Carga e Regularização</h3>
              <p className="text-sm md:text-base text-gray-300 max-w-md mx-auto">
                Oferecemos serviços de regularização elétrica e aumento de carga junto à concessionária, elaborando os estudos e projetos exigidos para aprovação.
              </p>
              <p className="text-sm md:text-base text-gray-300 max-w-md mx-auto mt-2">
                Realizamos levantamento de cargas, cálculo de demanda, dimensionamento de alimentadores e proteção, além de desenvolver diagramas e memoriais exigidos.
              </p>
              <p className="text-sm md:text-base text-gray-300 max-w-md mx-auto mt-2">
                Com acompanhamento técnico completo, garantimos a conformidade com as exigências normativas, proporcionando agilidade no processo de regularização.
              </p>
            </div>

            <div>
              <img src="/automacao.png" alt="Automação" className="rounded-xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Automação Industrial</h3>
              <p className="text-sm md:text-base text-gray-300 max-w-md mx-auto">
                Desenvolvemos soluções em automação para otimizar processos, reduzir desperdícios e aumentar a produtividade industrial.
              </p>
              <p className="text-sm md:text-base text-gray-300 max-w-md mx-auto mt-2">
                Projetamos e implementamos sistemas com sensores, CLPs, IHMs, inversores e outros dispositivos, com programação personalizada para cada tipo de aplicação.
              </p>
              <p className="text-sm md:text-base text-gray-300 max-w-md mx-auto mt-2">
                Nossos sistemas permitem monitoramento remoto, controle de produção e integração com tecnologias de gestão industrial (Indústria 4.0).
              </p>
            </div>

            <div>
              <img src="/laudos-tecnicos.png" alt="Laudos Técnicos" className="rounded-xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Laudos Técnicos</h3>
              <p className="text-sm md:text-base text-gray-300 max-w-md mx-auto">
                Emitimos laudos técnicos com base em normas regulamentadoras e critérios técnicos rigorosos, atendendo tanto a exigências legais quanto operacionais.
              </p>
              <p className="text-sm md:text-base text-gray-300 max-w-md mx-auto mt-2">
                Realizamos inspeções completas em instalações elétricas, avaliando condições de segurança, conformidade e funcionamento. Cada relatório inclui recomendações técnicas para melhorias.
              </p>
              <p className="text-sm md:text-base text-gray-300 max-w-md mx-auto mt-2">
                Oferecemos laudos para concessionárias, seguradoras, órgãos públicos e clientes privados, sempre com responsabilidade técnica e transparência.
              </p>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="mb-20">
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
