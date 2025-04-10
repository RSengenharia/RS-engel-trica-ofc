import * as Tabs from '@radix-ui/react-tabs'
import { Mail, Phone } from 'lucide-react'

export default function App() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8 text-white">
      <header className="text-center">
        <img src="/LOGO.png" alt="Logo RS Engenharia" className="mx-auto h-24" />
        <h1 className="text-3xl font-bold mt-4">RS Engenharia Elétrica</h1>
        <p className="text-gray-400 mt-2">Projetos Elétricos • Automação • Laudos Técnicos</p>
      </header>

      <section className="text-center space-y-2">
        <p><Mail className="inline mr-2" /> contato@rsengenharia.com.br</p>
        <p><Phone className="inline mr-2" /> (51) 98031-8366</p>
        <a href="https://wa.me/5551980318366" target="_blank" rel="noopener noreferrer">
          <button className="mt-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
            Fale conosco no WhatsApp
          </button>
        </a>
      </section>

      <Tabs.Root defaultValue="residencial">
        <Tabs.List className="flex flex-wrap justify-center gap-4 border-b pb-4">
          <Tabs.Trigger value="residencial">Residencial</Tabs.Trigger>
          <Tabs.Trigger value="comercial">Comercial</Tabs.Trigger>
          <Tabs.Trigger value="industrial">Industrial</Tabs.Trigger>
          <Tabs.Trigger value="automacao">Automação</Tabs.Trigger>
          <Tabs.Trigger value="laudos">Laudos Técnicos</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="residencial" className="mt-6">
          <p>
            Desenvolvemos projetos elétricos residenciais completos, com foco na segurança,
            eficiência e praticidade. Cada projeto é personalizado conforme o perfil do
            imóvel e as necessidades dos moradores.
          </p>
        </Tabs.Content>

        <Tabs.Content value="comercial" className="mt-6">
          <p>
            Soluções elétricas para comércios de todos os portes, com foco na funcionalidade,
            economia de energia e expansão futura.
          </p>
        </Tabs.Content>

        <Tabs.Content value="industrial" className="mt-6">
          <p>
            Projetos robustos para instalações industriais, desde pequenos galpões até plantas
            complexas. Atuamos no dimensionamento de cargas, transformadores e proteção.
          </p>
        </Tabs.Content>

        <Tabs.Content value="automacao" className="mt-6">
          <p>
            Projetos sob medida para automação de processos industriais, com foco em produtividade,
            segurança e padronização.
          </p>
        </Tabs.Content>

        <Tabs.Content value="laudos" className="mt-6">
          <p>
            Emitimos laudos técnicos com análise detalhada das instalações elétricas, identificando falhas,
            riscos e propondo soluções. Ideal para regularizações e certificações.
          </p>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  )
}
