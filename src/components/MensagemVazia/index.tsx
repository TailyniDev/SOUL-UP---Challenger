import type { ReactNode } from 'react'

interface MensagemVaziaProps {
  texto: string
  children?: ReactNode
}

export default function MensagemVazia({ texto, children }: MensagemVaziaProps) {
  return (
    <div className="text-center mb-6">
      <p className="text-slate-500 mb-4">{texto}</p>
      {children}
    </div>
  )
}