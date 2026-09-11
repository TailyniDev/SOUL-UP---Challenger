export default function Faq() {
  return (
    <div>
      <section className="bg-slate-900 text-white text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-6">Perguntas Frequentes</h1>
        <a
          href="/login"
          className="inline-block bg-emerald-600 text-white font-semibold px-6 py-3 rounded-full"
        >
          Começar agora 🚀
        </a>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="font-semibold mb-2">Como ganho dinheiro?</h3>
            <p className="text-sm text-slate-600">
              Completando missões sustentáveis como caminhar, reciclar ou
              compartilhar carona.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="font-semibold mb-2">Como resgato a passagem?</h3>
            <p className="text-sm text-slate-600">
              Quando seu saldo atingir R$ 4,40, clique em "Resgatar" e receberá
              um código.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="font-semibold mb-2">As missões são diárias?</h3>
            <p className="text-sm text-slate-600">
              Sim! Novas missões aparecem todos os dias para você acumular
              saldo.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
