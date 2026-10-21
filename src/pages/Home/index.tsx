import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <section className="bg-slate-900 text-center py-20 px-4 text-white">
        <span className="inline-block bg-emerald-900 text-emerald-400 text-sm px-4 py-1 rounded-full mb-6">
          🌿 Missão ativa
        </span>

        <h1 className="text-4xl font-bold mb-4">
          Pequenas ações,
          <br />
          <span className="text-emerald-400">grandes mudanças</span>
        </h1>

        <p className="text-slate-300 max-w-lg mx-auto mb-8">
          Complete missões diárias, suba de nível e transforme seus hábitos em
          impacto real. Cada passo conta. Cada ação importa.
        </p>

        <div className="flex gap-4 justify-center mb-10">
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

        <div className="flex gap-8 justify-center">
          <div>
            <p className="text-2xl font-bold">2.4k</p>
            <p className="text-xs text-slate-400">usuários ativos</p>
          </div>
          <div>
            <p className="text-2xl font-bold">18k</p>
            <p className="text-xs text-slate-400">missões concluídas</p>
          </div>
          <div>
            <p className="text-2xl font-bold">95%</p>
            <p className="text-xs text-slate-400">satisfação</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-emerald-600 text-sm font-semibold uppercase mb-2">
            Como funciona
          </p>
          <h2 className="text-3xl font-bold mb-10">Três passos para decolar</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <p className="text-3xl mb-2">📋</p>
              <p className="text-xs text-slate-400 font-bold mb-2">01</p>
              <h3 className="font-semibold mb-2">Receba missões</h3>
              <p className="text-sm text-slate-600">
                Missões personalizadas chegam todo dia. Desafios simples que
                cabem na sua rotina.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <p className="text-3xl mb-2">✅</p>
              <p className="text-xs text-slate-400 font-bold mb-2">02</p>
              <h3 className="font-semibold mb-2">Complete e registre</h3>
              <p className="text-sm text-slate-600">
                Marque como feito, compartilhe seu progresso e acumule XP a cada
                conquista.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <p className="text-3xl mb-2">🏆</p>
              <p className="text-xs text-slate-400 font-bold mb-2">03</p>
              <h3 className="font-semibold mb-2">Suba de nível</h3>
              <p className="text-sm text-slate-600">
                Evolua no ranking, desbloqueie conquistas e veja o impacto das
                suas ações crescer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-emerald-600 text-sm font-semibold uppercase mb-2">
            O que oferecemos
          </p>
          <h2 className="text-3xl font-bold mb-10">
            Feito para quem quer evoluir
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 md:col-span-2">
              <p className="text-2xl mb-2">🎯</p>
              <h3 className="font-semibold mb-2">Missões diárias</h3>
              <p className="text-sm text-slate-600">
                Desafios novos todo dia, adaptados ao seu nível e objetivos.
                Nunca fica entediante.
              </p>
              <span className="inline-block mt-3 text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">
                Personalizado
              </span>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <p className="text-2xl mb-2">📈</p>
              <h3 className="font-semibold mb-2">Progresso visual</h3>
              <p className="text-sm text-slate-600">
                Acompanhe sua evolução em tempo real com gráficos e conquistas
                desbloqueáveis.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <p className="text-2xl mb-2">🤝</p>
              <h3 className="font-semibold mb-2">Comunidade</h3>
              <p className="text-sm text-slate-600">
                Compare com amigos, suba no ranking e inspire outros com o seu
                exemplo.
              </p>
            </div>

            <div className="bg-slate-900 text-white rounded-xl p-6 md:col-span-2">
              <p className="text-2xl mb-2">🌍</p>
              <h3 className="font-semibold mb-2">Impacto real</h3>
              <p className="text-sm text-slate-300">
                Cada missão gera impacto mensurável no mundo ao seu redor. Você
                faz a diferença.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 text-center">
        <div className="max-w-xl mx-auto bg-emerald-600 text-white rounded-2xl p-10">
          <p className="text-4xl mb-4">🚀</p>
          <h2 className="text-2xl font-bold mb-2">Pronto para decolar?</h2>
          <p className="text-emerald-100 mb-6">
            Junte-se a milhares de pessoas transformando hábitos em impacto. É
            grátis, é agora.
          </p>
          <a
            href="/login"
            className="inline-block bg-white text-emerald-700 px-6 py-3 rounded-lg font-medium"
          >
            Criar minha conta
          </a>
          <p className="text-emerald-200 text-xs mt-4">
            Parceria <strong>SoulUp + FIAP</strong> · Challenge 2º Semestre 2026
          </p>
        </div>
      </section>
    </>
  );
}
