import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs"
import { Mail, Phone } from "lucide-react"

export default function App() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      <header className="text-center">
        <img src="/LOGO.png" alt="Logo RS Engenharia" className="mx-auto h-24" />
        <h1 className="text-3xl font-bold mt-4">RS Engenharia Elétrica</h1>
        <p className="text-gray-400 mt-2">Projetos Elétricos • Automação • Laudos Técnicos</p>
      </header>

      <section className="text-center space-y-2">
        <p>
          <Mail className="inline mr-2" /> contato@rsengenharia.com.br
        </p>
        <p>
          <Phone className="inline mr-2" /> (51) 98031-8366
        </p>
        <a
          href="https://wa.me/5551980318366"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
            Fale conosco no WhatsApp
          </button>
        </a>
      </section>

      <section className="bg-zinc-900 p-6 rounded-2xl shadow-xl text-white">
        <h2 className="text-2xl font-semibold mb-4">Fale Conosco</h2>
        <form
          action="https://formsubmit.co/contato@rsengenharia.com.br"
          method="POST"
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input type="text" name="name" placeholder="Nome" required className="col-span-2 p-2 rounded" />
          <input type="email" name="email" placeholder="E-mail" required className="p-2 rounded" />
          <input type="tel" name="telefone" placeholder="Telefone" className="p-2 rounded" />
          <textarea name="mensagem" placeholder="Sua mensagem" rows={4} className="col-span-2 p-2 rounded" required />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <button type="submit" className="col-span-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
            Enviar
          </button>
        </form>
      </section>
    </div>
  )
}
