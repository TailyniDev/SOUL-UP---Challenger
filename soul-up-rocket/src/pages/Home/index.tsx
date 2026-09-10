import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <span>🌿 Missão ativa</span>
      <h1>Pequenas ações, grandes mudanças</h1>
      <p>
        Complete missões diárias, suba de nível e transforme seus hábitos em
        impacto real. Cada passo conta. Cada ação importa.
      </p>

      <div>
        <Link to="/login">Começar agora 🚀</Link>
        <Link to="/sobre">Saiba mais</Link>
      </div>

      <div>
        <div>
          <span>2.4k</span>
          <span>usuários ativos</span>
        </div>
        <div>
          <span>18k</span>
          <span>missões concluídas</span>
        </div>
        <div>
          <span>95%</span>
          <span>satisfação</span>
        </div>
      </div>

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
