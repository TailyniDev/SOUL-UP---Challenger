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

      <div>
        <span>Como funciona</span>
        <h2>Três passos para decolar</h2>

        <div>
          <div>
            <span>📋</span>
            <span>01</span>
            <h3>Receba missões</h3>
            <p>
              Missões personalizadas chegam todo dia. Desafios simples que cabem
              na sua rotina.
            </p>
          </div>

          <div>
            <span>✅</span>
            <span>02</span>
            <h3>Complete e registre</h3>
            <p>
              Marque como feito, compartilhe seu progresso e acumule XP a cada
              conquista.
            </p>
          </div>

          <div>
            <span>🏆</span>
            <span>03</span>
            <h3>Suba de nível</h3>
            <p>
              Evolua no ranking, desbloqueie conquistas e veja o impacto das
              suas ações crescer.
            </p>
          </div>
        </div>
      </div>

      <div>
        <span>O que oferecemos</span>
        <h2>Feito para quem quer evoluir</h2>

        <div>
          <div>
            <span>🎯</span>
            <h3>Missões diárias</h3>
            <p>
              Desafios novos todo dia, adaptados ao seu nível e objetivos. Nunca
              fica entediante.
            </p>
            <span>Personalizado</span>
          </div>

          <div>
            <span>📈</span>
            <h3>Progresso visual</h3>
            <p>
              Acompanhe sua evolução em tempo real com gráficos e conquistas
              desbloqueáveis.
            </p>
          </div>

          <div>
            <span>🤝</span>
            <h3>Comunidade</h3>
            <p>
              Compare com amigos, suba no ranking e inspire outros com o seu
              exemplo.
            </p>
          </div>

          <div>
            <span>🌍</span>
            <h3>Impacto real</h3>
            <p>
              Cada missão gera impacto mensurável no mundo ao seu redor. Você
              faz a diferença.
            </p>
            <span>+impacto</span>
          </div>
        </div>
      </div>

      <div>
        <span>🚀</span>
        <h2>Pronto para decolar?</h2>
        <p>
          Junte-se a milhares de pessoas transformando hábitos em impacto. É
          grátis, é agora.
        </p>
        <a href="/login">Criar minha conta</a>
        <p>
          Parceria <strong>SoulUp + FIAP</strong> · Challenge 2º Semestre 2026
        </p>
      </div>
    </>
  );
}
