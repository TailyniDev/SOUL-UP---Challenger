import { Link } from 'react-router'
import { useForm } from 'react-hook-form'

type CadastroFormData = {
  nome: string
  cpf: string
  celular: string
  senha: string
  email: string
}

export default function Cadastro() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CadastroFormData>()

  function onSubmit(data: CadastroFormData) {
    // TODO: integrar com a API (Sprint 4) — por enquanto só loga os dados
    console.log('Dados do cadastro:', data)
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <span className="inline-block bg-emerald-100 text-emerald-700 text-sm px-4 py-1 rounded-full mb-4">
            🌿 Junte-se a nós
          </span>
          <h1 className="text-2xl font-bold text-slate-900">Criar sua conta</h1>
          <p className="text-sm text-slate-500 mt-2">
            Comece agora a transformar hábitos em impacto real.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="flex flex-col gap-4"
        >
          <div>
            <input
              type="text"
              placeholder="Nome"
              className={`w-full border rounded-full px-5 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-emerald-500 ${
                errors.nome ? 'border-red-400' : 'border-slate-300'
              }`}
              {...register('nome', { required: 'Informe seu nome' })}
            />
            {errors.nome && (
              <p className="text-xs text-red-500 mt-1 ml-4">{errors.nome.message}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Digite seu CPF"
              className={`w-full border rounded-full px-5 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-emerald-500 ${
                errors.cpf ? 'border-red-400' : 'border-slate-300'
              }`}
              {...register('cpf', {
                required: 'Informe seu CPF',
                pattern: {
                  value: /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/,
                  message: 'Digite um CPF válido',
                },
              })}
            />
            {errors.cpf && (
              <p className="text-xs text-red-500 mt-1 ml-4">{errors.cpf.message}</p>
            )}
          </div>

          <div>
            <input
              type="tel"
              placeholder="Digite seu número de celular"
              className={`w-full border rounded-full px-5 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-emerald-500 ${
                errors.celular ? 'border-red-400' : 'border-slate-300'
              }`}
              {...register('celular', { required: 'Informe seu celular' })}
            />
            {errors.celular && (
              <p className="text-xs text-red-500 mt-1 ml-4">{errors.celular.message}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className={`w-full border rounded-full px-5 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-emerald-500 ${
                errors.senha ? 'border-red-400' : 'border-slate-300'
              }`}
              {...register('senha', {
                required: 'Informe uma senha',
                minLength: { value: 6, message: 'Mínimo de 6 caracteres' },
              })}
            />
            {errors.senha && (
              <p className="text-xs text-red-500 mt-1 ml-4">{errors.senha.message}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              className={`w-full border rounded-full px-5 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-emerald-500 ${
                errors.email ? 'border-red-400' : 'border-slate-300'
              }`}
              {...register('email', {
                required: 'Informe seu e-mail',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Digite um e-mail válido',
                },
              })}
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1 ml-4">{errors.email.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mx-auto mt-2 border-2 border-primary text-primary font-semibold px-10 py-2.5 rounded-full hover:bg-primary hover:text-white transition-colors disabled:opacity-60"
          >
            {isSubmitting ? 'Enviando...' : 'Cadastro'}
          </button>

          <div className="text-center text-sm mt-2 space-y-1">
            <p>
              <Link to="/esqueci-senha" className="text-slate-500 hover:text-slate-700">
                Esqueceu a senha?
              </Link>
            </p>
            <p className="text-slate-600">
              Já tem uma conta?{' '}
              <Link to="/login" className="text-primary font-medium hover:text-primary-dark">
                Faça o Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}