import fotoSabrina from "../../assets/imgs/sabrina.jpg";
import fotoTailyni from "../../assets/imgs/tailyni.jpg";
import fotoGabriel from "../../assets/imgs/gabriel.jpg";


export default function Integrantes() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-12">
        <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wide mb-2">
          Integrantes — SoulUp Rocket
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-text leading-tight">
          Conheça quem está
          <br />
          por trás do projeto
        </h1>
        <div className="flex items-center justify-center gap-2 mt-4 text-text-light text-sm">
          <span>Challenge 2026</span>
          <span>·</span>
          <span>🚀 2º Semestre</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="bg-white border border-border rounded-2xl shadow-md overflow-hidden flex flex-col items-center text-center p-6 hover:shadow-lg transition-shadow">
          <img
            src={fotoSabrina}
            alt="Foto da Sabrina"
            className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-primary-bg"
          />
          <div>
            <h2 className="text-xl font-semibold text-text">
              Sabrina Fraga Lima
            </h2>
            <div className="flex items-center justify-center gap-2 text-sm text-text-light mt-1">
              <span>RM 572548</span>
              <span>•</span>
              <span>1TDSPJ</span>
            </div>
            <p className="text-text-light mt-2">Desenvolvedora Front-End</p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <a
                href="https://github.com/sabrinafraga"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-primary hover:text-primary-dark transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sabrina-fraga-562777403/"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-primary hover:text-primary-dark transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white border border-border rounded-2xl shadow-md overflow-hidden flex flex-col items-center text-center p-6 hover:shadow-lg transition-shadow">
          <img
            src={fotoTailyni}
            alt="Foto da Tailyni"
            className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-primary-bg"
          />
          <div>
            <h2 className="text-xl font-semibold text-text">
              Tailyni Victoria Renovato Satirio
            </h2>
            <div className="flex items-center justify-center gap-2 text-sm text-text-light mt-1">
              <span>RM 570517</span>
              <span>•</span>
              <span>1TDSPJ</span>
            </div>
            <p className="text-text-light mt-2">Desenvolvedora FullStack</p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <a
                href="https://github.com/TailyniDev"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-primary hover:text-primary-dark transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/tailynisatiriodev/"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-primary hover:text-primary-dark transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="bg-white border border-border rounded-2xl shadow-md overflow-hidden flex flex-col items-center text-center p-6 hover:shadow-lg transition-shadow">
            <img
              src={fotoGabriel}
              alt="Foto do Gabriel"
              className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-primary-bg"
            />
            <div>
              <h2 className="text-xl font-semibold text-text">
                Gabriel Tadeu
              </h2>
              <div className="flex items-center justify-center gap-2 text-sm text-text-light mt-1">
                <span>RM 571074</span>
                <span>•</span>
                <span>1TDSPJ</span>
              </div>
              <p className="text-text-light mt-2">Back-end Developer</p>
              <div className="flex items-center justify-center gap-4 mt-4">
                <a
                  href="https://github.com/Tadeul"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-primary hover:text-primary-dark transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/gabriel-tadeu-telles-brando-330216337/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-primary hover:text-primary-dark transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
