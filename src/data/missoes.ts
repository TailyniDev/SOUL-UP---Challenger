import type { NovaMissao } from '../types'

// Missões do dia criadas para cada usuário novo (a API exige um CPF por missão)
export const MISSOES_INICIAIS: Omit<NovaMissao, 'cpfUsuario'>[] = [
  {
    titulo: 'Caminhe 2km',
    descricao: 'Registre uma caminhada de pelo menos 2km durante o dia.',
    pontos: 30,
    categoria: 'MOBILIDADE',
  },
  {
    titulo: 'Recicle materiais',
    descricao: 'Separe e descarte corretamente materiais recicláveis.',
    pontos: 20,
    categoria: 'SUSTENTABILIDADE',
  },
  {
    titulo: 'Compartilhe uma carona',
    descricao: 'Divida o trajeto com outra pessoa, reduzindo emissões.',
    pontos: 40,
    categoria: 'MOBILIDADE',
  },
  {
    titulo: 'Use transporte público',
    descricao: 'Registre uma viagem de ônibus, metrô ou trem.',
    pontos: 25,
    categoria: 'ENGAJAMENTO',
  },
]