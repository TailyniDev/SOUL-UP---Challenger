import { Link } from "react-router";
import { useForm } from "react-hook-form";

type LoginFormData = {
  email: string;
  senha: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>();

  function onSubmit(data: LoginFormData) {
    // Lembrete: integrar com a API (Sprint 4) — por enquanto só loga os dados
    console.log("Dados do login:", data);
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <span className="inline-block bg-emerald-100 text-emerald-700 text-sm px-4 py-1 rounded-full mb-4">
            🌿 Bem-vindo de volta
          </span>
          <h1 className="text-2xl font-bold text-slate-900">
            Entrar na sua conta
          </h1>
          <p className="text-sm text-slate-500 mt-2">
            Continue sua jornada sustentável no SoulUp Rocket.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="bg-white border border-slate-200 rounded-xl p-8 flex flex-col gap-5"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              E-mail
            </label>
            <input
              id="email"
              type="email"
              placeholder="seu@email.com"
              className={`w-full border rounded-lg px-4 py-2 text-sm outline-none transition-colors focus:ring-2 focus:ring-emerald-500 ${
                errors.email ? "border-red-400" : "border-slate-300"
              }`}
              {...register("email", {
                required: "Informe seu e-mail",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Digite um e-mail válido",
                },
              })}
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="senha"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Senha
            </label>
            <input
              id="senha"
              type="password"
              placeholder="••••••••"
              className={`w-full border rounded-lg px-4 py-2 text-sm outline-none transition-colors focus:ring-2 focus:ring-emerald-500 ${
                errors.senha ? "border-red-400" : "border-slate-300"
              }`}
              {...register("senha", {
                required: "Informe sua senha",
                minLength: {
                  value: 6,
                  message: "A senha deve ter pelo menos 6 caracteres",
                },
              })}
            />
            {errors.senha && (
              <p className="text-xs text-red-500 mt-1">
                {errors.senha.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-emerald-600 text-white font-semibold py-2.5 rounded-full hover:bg-emerald-700 transition-colors disabled:opacity-60"
          >
            {isSubmitting ? "Entrando..." : "Entrar"}
          </button>

          <p className="text-center text-sm text-slate-500">
            Ainda não tem conta?{" "}
            <Link
              to="/cadastro"
              className="text-emerald-600 font-medium hover:text-emerald-700"
            >
              Criar conta
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}
