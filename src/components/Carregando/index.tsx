interface CarregandoProps {
  texto?: string
}

export default function Carregando({ texto = 'Carregando...' }: CarregandoProps) {
  return (
    <p role="status" className="text-center text-slate-500 mb-6">
      {texto}
    </p>
  )
}