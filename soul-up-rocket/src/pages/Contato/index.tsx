import { useForm } from 'react-hook-form'

type ContatoFormData = {
  nome: string
  email: string
  mensagem: string
}

export default function Contato() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContatoFormData>()

  function onSubmit(data: ContatoFormData) {
    console.log(data)
    alert('Formulário enviado com sucesso!')
  }

  return (
    <div>
      <h1>📬 Fale Conosco</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder="Seu nome"
            {...register('nome', { required: 'Nome é obrigatório' })}
          />
          {errors.nome && <span>{errors.nome.message}</span>}
        </div>

        <div>
          <input
            type="email"
            placeholder="Seu e-mail"
            {...register('email', { required: 'E-mail é obrigatório' })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div>
          <textarea
            rows={5}
            placeholder="Sua mensagem"
            {...register('mensagem', { required: 'Mensagem é obrigatória' })}
          />
          {errors.mensagem && <span>{errors.mensagem.message}</span>}
        </div>

        <button type="submit">Enviar mensagem</button>
      </form>
    </div>
  )
}