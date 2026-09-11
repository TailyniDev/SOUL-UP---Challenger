import { Link } from "react-router";

export default function Solucao() {
  return (
    <>
      <section className="bg-slate-900 text-center py-20 px-4 text-white">
        <span className="inline-block bg-emerald-900 text-emerald-400 text-sm px-4 py-1 rounded-full mb-6">
          💡 Nossa solução
        </span>

        <h1 className="text-4xl font-bold mb-4">Nossa solução</h1>

        <p className="text-slate-300 max-w-lg mx-auto mb-8">
          Incentivamos hábitos sustentáveis transformando ações ecológicas em
          créditos reais para transporte público.
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="/login"
            className="bg-emerald-600 text-white font-semibold px-6 py-3 rounded-full"
          >
            Começar agora 🚀
          </a>
          <Link
            to="/sobre"
            className="border border-slate-500 text-white px-6 py-3 rounded-full"
          >
            Saiba mais
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-emerald-600 text-sm font-semibold uppercase mb-2">
            O Problema
          </p>
          <h2 className="text-3xl font-bold mb-6">🚨 O Problema</h2>
          <p className="text-sm text-slate-600 mb-4">
            Muitas pessoas deixam de utilizar o transporte público devido ao
            custo diário das passagens. Ao mesmo tempo, ações sustentáveis
            realizadas no cotidiano acabam não recebendo incentivo suficiente
            para gerar mudanças reais na sociedade.
          </p>
          <p className="text-sm text-slate-600">
            Além disso, a mobilidade urbana ainda representa um desafio para
            milhares de brasileiros que dependem diariamente de ônibus, metrôs
            e trens para estudar e trabalhar.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-emerald-600 text-sm font-semibold uppercase mb-2">
            Nossa Solução
          </p>
          <h2 className="text-3xl font-bold mb-6">💡 Nossa Solução</h2>
          <p className="text-sm text-slate-600 mb-4">
            O SoulUp Rocket foi criado para unir sustentabilidade e mobilidade
            urbana em uma única plataforma.
          </p>
          <p className="text-sm text-slate-600">
            Através de missões diárias sustentáveis, os usuários acumulam
            EcoCoins que podem ser convertidas em créditos reais para
            transporte público, incentivando hábitos ecológicos enquanto
            ajudam pessoas a economizar no transporte do dia a dia.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-emerald-600 text-sm font-semibold uppercase mb-2">
            Como Funciona
          </p>
          <h2 className="text-3xl font-bold mb-10">⚙️ Como Funciona</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6 text-left">
              <p className="text-3xl mb-2">📋</p>
              <p className="text-xs text-slate-400 font-bold mb-2">01</p>
              <h3 className="font-semibold mb-2">Complete Missões</h3>
              <p className="text-sm text-slate-600">
                Realize ações sustentáveis como caminhar, reciclar materiais
                ou compartilhar caronas.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 text-left">
              <p className="text-3xl mb-2">💰</p>
              <p className="text-xs text-slate-400 font-bold mb-2">02</p>
              <h3 className="font-semibold mb-2">Ganhe EcoCoins</h3>
              <p className="text-sm text-slate-600">
                Cada missão concluída gera saldo acumulativo dentro da
                plataforma.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 text-left">
              <p className="text-3xl mb-2">🎫</p>
              <p className="text-xs text-slate-400 font-bold mb-2">03</p>
              <h3 className="font-semibold mb-2">Resgate Passagens</h3>
              <p className="text-sm text-slate-600">
                Troque seu saldo por créditos reais de transporte público
                quando atingir o valor.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 text-center">
        <div className="max-w-xl mx-auto bg-emerald-600 text-white rounded-2xl p-10">
          <p className="text-4xl mb-4">🌍</p>
          <h2 className="text-2xl font-bold mb-6">Impacto Esperado</h2>
          <ul className="text-left space-y-2 text-emerald-50">
            <li>✔️ Incentivar hábitos sustentáveis</li>
            <li>✔️ Reduzir emissão de poluentes</li>
            <li>✔️ Aumentar o uso do transporte público</li>
            <li>✔️ Gerar conscientização ambiental</li>
            <li>✔️ Facilitar a mobilidade urbana</li>
          </ul>
        </div>
      </section>
    </>
  );
}