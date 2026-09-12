import { useForm } from "react-hook-form";

type ContatoFormData = {
  nome: string;
  email: string;
  mensagem: string;
};

export default function Contato() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContatoFormData>();

  function onSubmit(data: ContatoFormData) {
    console.log(data);
    alert("Formulário enviado com sucesso!");
  }

  return (
    <div className="py-16 px-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">📬 Fale Conosco</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Seu nome"
              {...register("nome", { required: "Nome é obrigatório" })}
              className="w-full border border-slate-300 rounded-lg px-4 py-3"
            />
            {errors.nome && (
              <span className="text-red-600 text-sm">
                {errors.nome.message}
              </span>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Seu e-mail"
              {...register("email", { required: "E-mail é obrigatório" })}
              className="w-full border border-slate-300 rounded-lg px-4 py-3"
            />
            {errors.email && (
              <span className="text-red-600 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          <div>
            <textarea
              rows={5}
              placeholder="Sua mensagem"
              {...register("mensagem", { required: "Mensagem é obrigatória" })}
              className="w-full border border-slate-300 rounded-lg px-4 py-3"
            />
            {errors.mensagem && (
              <span className="text-red-600 text-sm">
                {errors.mensagem.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 text-white font-semibold py-3 rounded-lg"
          >
            Enviar mensagem
          </button>
        </form>
      </div>
    </div>
  );
}
