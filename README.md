# 🚀 SoulUp Rocket

Plataforma que transforma ações sustentáveis do dia a dia em créditos reais para transporte público, unindo mobilidade urbana e sustentabilidade em uma única experiência gamificada.

> Desenvolvido pela equipe **Rocket** para o Challenge FIAP 2026 — 1º ano, Análise e Desenvolvimento de Sistemas (turma 1TDSPJ), em parceria com a SoulUp.

---

## 📌 Sobre o projeto

Muitas pessoas deixam de usar o transporte público por causa do custo diário das passagens, enquanto ações sustentáveis do cotidiano não recebem incentivo suficiente. O **SoulUp Rocket** resolve os dois problemas: o usuário cumpre missões diárias sustentáveis (como caminhar, reciclar ou compartilhar caronas), acumula pontos e troca por vouchers de passagem de transporte público.

Nesta etapa final, o front-end consome a **API REST em Java (Spring Boot)** publicada na nuvem, que persiste os dados em Oracle.

---

## 🛠️ Tecnologias utilizadas

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white) ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white) ![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black)
 
Consumo da API com **Fetch API** (sem bibliotecas externas de requisição), versionamento com **GitFlow**, e API em **Java (Spring Boot)** com banco **Oracle**.

---

## 📁 Estrutura de pastas


```
SOUL-UP---Challenger/
├── public/
├── src/
│   ├── assets/imgs/
│   ├── components/
│   │   ├── Cabecalho/
│   │   ├── Carreganod/
│   │   ├── MensagemErro/
│   │   ├── MensagemVazia/
│   │   ├── Menu/
│   │   └── Rodape/
│   ├── data/missoes.tsx
│   ├── pages/
│   │   ├──Home/  
|   |   ├──Integrantes/  
|   |   ├──Sobre/  
|   |   ├──Faq/  
|   |   ├──Contato/
│   │   ├──Solucao/  
|   |   ├──Missoes/  
|   |   ├──MissaoDetalhe/
|   |   ├──Cadastro/
|   |   ├──Login/
|   |   ├──NaoEncontrada/
│   │   └──Vouchers/  
│   ├── routes/AppRoutes.tsx
│   ├── services/        # chamadas à API (fetch)
│   ├── types/           # interfaces e tipos TypeScript
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 👥 Autores e créditos

| Foto | Nome | RM | Turma | Links |
|---|---|---|---|---|
| ![Sabrina](src/assets/imgs/sabrina.jpg) | Sabrina Fraga Lima | 572548 | 1TDSPJ | [GitHub](https://github.com/sabrinafraga) · [LinkedIn](https://www.linkedin.com/in/sabrina-fraga-562777403/) |
| ![Tailyni](src/assets/imgs/tailyni.jpg) | Tailyni Victoria Renovato Satirio | 570517 | 1TDSPJ | [GitHub](https://github.com/TailyniDev) · [LinkedIn](https://www.linkedin.com/in/tailynisatiriodev/) |
| ![Gabriel](src/assets/imgs/gabriel.jpg) | Gabriel Tadeu Telles Brando | 571074 | 1TDSPJ | [GitHub](https://github.com/Tadeul) · [LinkedIn](https://www.linkedin.com/in/gabriel-tadeu-telles-brando-330216337/) |

---

## 🖼️ Imagens do projeto

![Tela inicial](src/assets/imgs/preview-home.png)
![Login](src/assets/imgs/preview-login.png)
![Missões](src/assets/imgs/preview-missoes.png)

---

## ▶️ Como usar

### Links do projeto

- 🔗 **Repositório GitHub:** https://github.com/TailyniDev/SOUL-UP---Challenger
- 🌐 **Deploy (Vercel):** https://soul-up-challenger.vercel.app
- 🎥 **Vídeo de apresentação (YouTube):** [COLAR AQUI O LINK DO VÍDEO DA SPRINT 4]
- ⚙️ **API publicada (Render):** https://rocket-api-0me7.onrender.com
- 📦 **Repositório da API:** https://github.com/Tadeul/rocket-api

> ⏳ A API roda no plano gratuito do Render e "hiberna" após alguns minutos sem uso. A primeira requisição pode levar cerca de 1 minuto.

### Rodando localmente

```bash
# clone o repositório
git clone https://github.com/TailyniDev/SOUL-UP---Challenger.git

# entre na pasta do projeto
cd SOUL-UP---Challenger

# instale as dependências
npm install

# rode o projeto
npm run dev
```

O projeto ficará disponível em `http://localhost:5173`.

---

## 📬 Contato

- 📧 [E-MAIL DA EQUIPE]
- GitHub: [TailyniDev](https://github.com/TailyniDev) · [Tadeul](https://github.com/Tadeul) · [sabrinafraga](https://github.com/sabrinafraga)
- 🤝 Parceria SoulUp + FIAP · Challenge 2º Semestre 2026

---

© 2026 SoulUp Rocket — Equipe Rocket
