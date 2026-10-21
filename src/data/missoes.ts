export type Missao = {
  id: number
  titulo: string
  descricao: string
  icone: string
  recompensa: string
}

export const missoes: Missao[] = [
  {
    id: 1,
    titulo: 'Caminhe 2km',
    descricao: 'Registre uma caminhada de pelo menos 2km durante o dia.',
    icone: '🚶',
    recompensa: 'R$ 1,20',
  },
  {
    id: 2,
    titulo: 'Recicle materiais',
    descricao: 'Separe e descarte corretamente materiais recicláveis.',
    icone: '♻️',
    recompensa: 'R$ 0,90',
  },
  {
    id: 3,
    titulo: 'Compartilhe uma carona',
    descricao: 'Divida o trajeto com outra pessoa, reduzindo emissões.',
    icone: '🚗',
    recompensa: 'R$ 1,50',
  },
  {
    id: 4,
    titulo: 'Use transporte público',
    descricao: 'Registre uma viagem de ônibus, metrô ou trem.',
    icone: '🚌',
    recompensa: 'R$ 0,80',
  },
]