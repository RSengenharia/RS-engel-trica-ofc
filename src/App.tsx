import React from 'react';

export default function App() {
  return (
    <div className="bg-[#07111c] text-white font-sans overflow-x-hidden w-full">
      {/* Menu fixo com scroll suave */}
      <nav className="fixed top-0 left-0 right-0 bg-[#07111c] shadow z-50">
        <div className="max-w-[1100px] mx-auto px-4 py-2 flex justify-between items-center">
          <div className="bg-white p-[2px] rounded-md shadow">
            <img src="/LOGO.png" alt="Logo RS Engenharia" className="h-10 md:h-12 object-contain max-w-full" />
          </div>
          <div className="space-x-4 text-sm md:text-base">
            <a href="#inicio" className="hover:text-yellow-400">Início</a>
            <a href="#servicos" className="hover:text-yellow-400">Serviços</a>
            <a href="#contato" className="hover:text-yellow-400">Contato</a>
            <a href="#projetos" className="hover:text-yellow-400">Projetos</a>
          </div>
        </div>
      </nav>

      {/* Conteúdo da Página */}
      <main className="pt-28 px-4 md:px-6 scroll-smooth">
        <div className="max-w-[1100px] mx-auto text-center">
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
              {/* Serviços Individuais */}
              {["residencial", "comercial", "industrial", "aumento-de-carga", "automacao", "laudos-tecnicos"].map((id, index) => {
                const servicos = [
                  {
                    id: "residencial",
                    title: "Projetos Elétricos Residenciais",
                    image: "/residencial.png",
                    paragraphs: [
                      "Desenvolvemos projetos elétricos residenciais completos, garantindo que cada ambiente seja abastecido de forma segura e eficiente. Avaliamos as necessidades específicas de cada imóvel para elaborar soluções que atendam às exigências técnicas e promovam o conforto dos moradores.",
                      "O projeto é feito de forma personalizada, considerando desde a entrada de energia até a distribuição interna e o dimensionamento de cargas. Também orientamos sobre a escolha dos dispositivos de proteção e sistemas de iluminação adequados.",
                      "Ao final, entregamos toda a documentação técnica, incluindo o memorial descritivo, diagrama unifilar e plantas detalhadas, prontos para execução e aprovação junto à concessionária."
                    ]
                  },
                  {
                    id: "comercial",
                    title: "Projetos Comerciais",
                    image: "/comercial.png",
                    paragraphs: [
                      "Em ambientes comerciais, o projeto elétrico precisa garantir segurança, continuidade e flexibilidade para futuras expansões. Pensamos em soluções que permitam economia de energia e adaptabilidade dos espaços.",
                      "Estudamos a demanda dos equipamentos e elaboramos um sistema capaz de sustentar picos de consumo, reduzindo riscos de sobrecarga. A iluminação também é projetada de forma eficiente para proporcionar conforto visual aos clientes e colaboradores.",
                      "A RS Engenharia também se preocupa com a estética e integração com o projeto arquitetônico, entregando um projeto moderno e funcional."
                    ]
                  },
                  {
                    id: "industrial",
                    title: "Projetos Industriais",
                    image: "/industrial.png",
                    paragraphs: [
                      "Para instalações industriais, desenvolvemos projetos robustos e eficientes, que contemplam desde a entrada de energia de média tensão até os sistemas de automação e comando.",
                      "Trabalhamos com dimensionamento de transformadores, painéis elétricos, sistemas de proteção, aterramento e SPDA. Nossos projetos seguem as normas da ABNT e levam em conta os riscos operacionais de cada processo.",
                      "Acompanhamos a execução e oferecemos suporte técnico completo para garantir o pleno funcionamento da instalação com segurança e eficiência."
                    ]
                  },
                  {
                    id: "aumento-de-carga",
                    title: "Aumento de Carga e Regularização",
                    image: "/aumento-de-carga.png",
                    paragraphs: [
                      "Oferecemos serviços de regularização elétrica e aumento de carga junto à concessionária, elaborando os estudos e projetos exigidos para aprovação.",
                      "Realizamos levantamento de cargas, cálculo de demanda, dimensionamento de alimentadores e proteção, além de desenvolver diagramas e memoriais exigidos.",
                      "Com acompanhamento técnico completo, garantimos a conformidade com as exigências normativas, proporcionando agilidade no processo de regularização."
                    ]
                  },
                  {
                    id: "automacao",
                    title: "Automação Industrial",
                    image: "/automacao.png",
                    paragraphs: [
                      "Desenvolvemos soluções em automação para otimizar processos, reduzir desperdícios e aumentar a produtividade industrial.",
                      "Projetamos e implementamos sistemas com sensores, CLPs, IHMs, inversores e outros dispositivos, com programação personalizada para cada tipo de aplicação.",
                      "Nossos sistemas permitem monitoramento remoto, controle de produção e integração com tecnologias de gestão industrial (Indústria 4.0)."
                    ]
                  },
                  {
                    id: "laudos-tecnicos",
                    title: "Laudos Técnicos",
                    image: "/laudos-tecnicos.png",
                    paragraphs: [
                      "Emitimos laudos técnicos com base em normas regulamentadoras e critérios técnicos rigorosos, atendendo tanto a exigências legais quanto operacionais.",
                      "Realizamos inspeções completas em instalações elétricas, avaliando condições de segurança, conformidade e funcionamento. Cada relatório inclui recomendações técnicas para melhorias.",
                      "Oferecemos laudos para concessionárias, seguradoras, órgãos públicos e clientes privados, sempre com responsabilidade técnica e transparência."
                    ]
                  }
                ];

                const servico = servicos[index];

                return (
                  <div key={servico.id}>
                    <img src={servico.image} alt={servico.title} className="rounded-xl mb-4 mx-auto max-w-full" />
                    <h3 className="text-xl font-bold mb-2">{servico.title}</h3>
                    {servico.paragraphs.map((text, i) => (
                      <p key={i} className="text-sm md:text-base text-gray-300 max-w-md mx-auto mt-2">
                        {text}
                      </p>
                    ))}
                  </div>
                );
              })}
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

          {/* Projetos */}
          <section id="projetos" className="mb-20">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Projetos Executados</h2>
            <p className="text-sm md:text-base text-gray-300 max-w-md mx-auto">
              Em breve adicionaremos fotos e descrições detalhadas de nossos projetos já executados. Acompanhe essa seção para conhecer mais sobre nosso trabalho prático.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
