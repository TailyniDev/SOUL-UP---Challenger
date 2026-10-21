import { Link } from 'react-router'

export default function NaoEncontrada() {
    return (
        <section className="min-h-[60vh] flex items-center justify-center bg-slate-50 px-4 py-16">
            <div className="text-center max-w-md">
                <span className="text-6xl">🛰️</span>
                <h1 className="text-3xl font-bold text-slate-900 mt-4 mb-2">
                    Página não encontrada
                </h1>
                <p className="text-slate-600 mb-8">
                    O endereço que você tentou acessar não existe ou foi movido.
                </p>
                <Link
                    to="/"
                    className="inline-block bg-primary text-white font-semibold px-8 py-2.5 rounded-full hover:bg-primary-dark transition-colors"
                >
                    Voltar para o início
                </Link>
            </div>
        </section>
    )
}