import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { login } from "../../services/api";
import { salvarSessao } from "../../services/sessao";
import type { Credenciais } from "../../types";

type LoginFormData = Credenciais;

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const mensagem = (location.state as { mensagem?: string } | null)?.mensagem;
  const [erroApi, setErroApi] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>();

  async function onSubmit(data: LoginFormData) {
    setErroApi("");
    try {
      const cpf = data.cpf.replace(/\D/g, "");
      const usuario = await login({ cpf, senha: data.senha });
      salvarSessao(usuario);
      navigate("/missoes");
    } catch (e) {
      setErroApi((e as Error).message);
    }
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

        {mensagem && (
          <p className="text-sm text-emerald-700 bg-emerald-50 rounded-lg px-4 py-2 mb-4 text-center">
            {mensagem}
          </p>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="bg-white border border-slate-200 rounded-xl p-8 flex flex-col gap-5"
        >
          <div>
            <label
              htmlFor="cpf"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              CPF
            </label>
            <input
              id="cpf"
              type="text"
              inputMode="numeric"
              placeholder="000.000.000-00"
              className={`w-full border rounded-lg px-4 py-2 text-sm outline-none transition-colors focus:ring-2 focus:ring-emerald-500 ${
                errors.cpf ? "border-red-400" : "border-slate-300"
              }`}
              {...register("cpf", {
                required: "Informe seu CPF",
                pattern: {
                  value: /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/,
                  message: "Digite um CPF válido",
                },
              })}
            />
            {errors.cpf && (
              <p className="text-xs text-red-500 mt-1">{errors.cpf.message}</p>
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

          {erroApi && (
            <p className="text-sm text-red-600 bg-red-50 rounded-lg px-4 py-2">
              {erroApi}
            </p>
          )}

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
