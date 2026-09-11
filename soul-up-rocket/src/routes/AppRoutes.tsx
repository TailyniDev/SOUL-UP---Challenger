import { createBrowserRouter } from 'react-router';
import App from '../App'
import Home from '../pages/Home'
import Integrantes from '../pages/Integrantes'
import Sobre from '../pages/Sobre'
import Faq from '../pages/Faq'
import Contato from '../pages/Contato'
import Solucao from '../pages/Solucao'
import Missoes from '../pages/Missoes';
import MissaoDetalhe from '../pages/MissaoDetalhe'
import Login from '../pages/Login';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'integrantes', element: <Integrantes /> },
      { path: 'sobre', element: <Sobre /> },
      { path: 'faq', element: <Faq /> },
      { path: 'contato', element: <Contato /> },
      { path: 'solucao', element: <Solucao /> },
      { path: 'missoes', element: <Missoes /> },
      { path: 'missoes/:id', element: <MissaoDetalhe /> },
      { path: 'login', element: <Login /> },
    ],
  },
])