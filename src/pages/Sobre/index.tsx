import { Link } from "react-router";

export default function Sobre() {
  return (
    <>
      <section className="bg-slate-900 text-white text-center py-20 px-4">
        <h1 className="text-4xl font-bold mb-4">
          Sobre a<br />
          <span className="text-emerald-400">SoulUp Rocket</span>
        </h1>
        <p className="text-slate-300 max-w-lg mx-auto mb-8">
          Um projeto que nasce da necessidade de tornar a mobilidade urbana mais
          acessível e sustentável.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/login"
            className="bg-emerald-600 text-white font-semibold px-6 py-3 rounded-full"
          >
            Começar agora 🚀
          </a>
          <Link
            to="/solucao"
            className="border border-slate-500 text-white px-6 py-3 rounded-full"
          >
            Ver solução
          </Link>
        </div>
      </section>

      <section className="bg-slate-800 py-10 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          <div>
            <p className="text-2xl mb-1">👥</p>
            <p className="text-2xl font-bold text-emerald-400">0+</p>
            <p className="text-xs text-slate-400 uppercase">Usuários ativos</p>
          </div>
          <div>
            <p className="text-2xl mb-1">✅</p>
            <p className="text-2xl font-bold text-emerald-400">0+</p>
            <p className="text-xs text-slate-400 uppercase">
              Missões concluídas
            </p>
          </div>
          <div>
            <p className="text-2xl mb-1">🎫</p>
            <p className="text-2xl font-bold text-emerald-400">0+</p>
            <p className="text-xs text-slate-400 uppercase">
              Passagens resgatadas
            </p>
          </div>
          <div>
            <p className="text-2xl mb-1">🌱</p>
            <p className="text-2xl font-bold text-emerald-400">100%</p>
            <p className="text-xs text-slate-400 uppercase">
              Satisfação dos usuários
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            🌿 O que é o SoulUp Rocket?
          </h2>
          <p className="text-slate-600 mb-4">
            O SoulUp Rocket é uma plataforma digital desenvolvida por estudantes
            da FIAP em parceria com a SoulUp, com o objetivo de conectar
            sustentabilidade e mobilidade urbana.
          </p>
          <p className="text-slate-600">
            A ideia central é simples: recompensar pessoas que praticam ações
            ecológicas no dia a dia com créditos reais para usar no transporte
            público.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">❓ Por que ele existe?</h2>
          <p className="text-slate-600 mb-4">
            Milhares de brasileiros deixam de usar o transporte público por
            conta do custo diário das passagens. Ao mesmo tempo, hábitos
            sustentáveis como reciclar, caminhar ou compartilhar caronas
            raramente trazem benefícios concretos para quem os pratica.
          </p>
          <p className="text-slate-600">
            O SoulUp Rocket surgiu para mudar isso: cada pequena ação ecológica
            gera valor real, ajudando o usuário e o meio ambiente ao mesmo
            tempo.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Nossa missão</h2>
          <p className="text-slate-600 mb-6">
            Tornar o comportamento sustentável acessível, recompensador e
            conectado à vida real das pessoas — especialmente daquelas que mais
            dependem do transporte público para estudar e trabalhar.
          </p>
          <ul className="space-y-2 text-slate-700">
            <li>🌱 Promover hábitos ecológicos no cotidiano</li>
            <li>🚌 Facilitar o acesso ao transporte público</li>
            <li>🤝 Conectar sustentabilidade e impacto social</li>
            <li>📱 Oferecer uma experiência simples e acessível</li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-10">💚 Nossos valores</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <p className="text-2xl mb-2">♻️</p>
              <h3 className="font-semibold mb-2">Sustentabilidade</h3>
              <p className="text-sm text-slate-600">
                Cada ação conta. Acreditamos que pequenos hábitos diários geram
                grandes transformações no meio ambiente.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <p className="text-2xl mb-2">🤝</p>
              <h3 className="font-semibold mb-2">Inclusão</h3>
              <p className="text-sm text-slate-600">
                Mobilidade é direito de todos. Queremos que o transporte público
                seja acessível independente da renda.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <p className="text-2xl mb-2">🏆</p>
              <h3 className="font-semibold mb-2">Engajamento</h3>
              <p className="text-sm text-slate-600">
                Transformar rotina em conquista. Missões, recompensas e
                progresso visível para manter a motivação.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <p className="text-2xl mb-2">🔍</p>
              <h3 className="font-semibold mb-2">Transparência</h3>
              <p className="text-sm text-slate-600">
                O usuário sempre sabe quanto acumulou, quanto falta e como cada
                ação impacta o seu saldo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Contexto do projeto</h2>
          <p className="text-slate-600 mb-4">
            Este projeto foi desenvolvido como parte do Challenge do 2º semestre
            de 2026 da FIAP, turma 1TDSPG, em parceria com a empresa SoulUp. O
            desafio proposto foi criar uma solução tecnológica que unisse
            sustentabilidade e mobilidade urbana.
          </p>
          <p className="text-slate-600">
            Toda a plataforma — do design ao código — foi construída pelas
            integrantes da equipe, utilizando React, Vite e TypeScript.
          </p>
        </div>
      </section>
    </>
  );
}
