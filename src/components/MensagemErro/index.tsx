interface MensagemErroProps {
  mensagem: string
}

export default function MensagemErro({ mensagem }: MensagemErroProps) {
  return (
    <p role="alert" className="text-center text-red-500 mb-6">
      {mensagem}
    </p>
  )
}