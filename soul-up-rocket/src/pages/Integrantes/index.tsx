import fotoSabrina from '../../assets/imgs/sabrina.jpg'
import fotoTailyni from '../../assets/imgs/tailyni.jpg'

export default function Integrantes() {
  return (
    <div>
      <div>
        <span>Integrantes — SoulUp Rocket</span>
        <h1>Conheça quem está<br />por trás do projeto</h1>
        <div>
          <span>Challenge 2026</span>
          <span>·</span>
          <span>🚀 2º Semestre</span>
        </div>
      </div>

      <div>
        <div>
          <img src={fotoSabrina} alt="Foto da Sabrina" />
          <div>
            <h2>Sabrina Fraga Lima</h2>
            <div>
              <span>RM 572548</span>
              <span>1TDSPG</span>
            </div>
            <p>Desenvolvedora Front-End</p>
            <div>
              <a href="https://github.com/sabrinafraga" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/sabrina-fraga-562777403/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>

        <div>
          <img src={fotoTailyni} alt="Foto da Tailyni" />
          <div>
            <h2>Tailyni Victoria Renovato Satirio</h2>
            <div>
              <span>RM 570517</span>
              <span>1TDSPG</span>
            </div>
            <p>Desenvolvedora FullStack</p>
            <div>
              <a href="https://github.com/TailyniDev" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/tailynisatiriodev/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}