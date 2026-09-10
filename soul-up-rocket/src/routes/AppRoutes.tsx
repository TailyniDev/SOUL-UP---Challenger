import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Integrantes from '../pages/Integrantes'
import Sobre from '../pages/Sobre'
import Faq from '../pages/Faq'
import Contato from '../pages/Contato'

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
    ],
  },
])