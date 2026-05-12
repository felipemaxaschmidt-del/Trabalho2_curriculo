import Link from "next/link";



export default function CurriculosPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-600 text-xl font-bold text-white">
                F
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-600">Formulários & Currículos</p>
                <h1 className="text-2xl font-semibold text-slate-900">Painel de Currículos</h1>
              </div>
            </div>
            <p className="max-w-2xl text-sm text-slate-600 sm:text-base">
              Gerencie usuários cadastrados e filtros de organização em um layout limpo, responsivo e baseado em cards.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-700">
            <Link href="/curriculos/novo" className="rounded-full border border-slate-300 bg-slate-100 px-4 py-2 transition hover:border-cyan-500 hover:text-cyan-700 text-center">
              Novo cadastro
            </Link>
            <div  className="flex flex-wrap items-center gap-3 text-sm text-slate-700">
          
            </div>
          </div>
        </div>
      </header>

      <nav className="border-b border-slate-200 bg-slate-100">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <button className="rounded-full bg-white px-4 py-2 font-semibold text-slate-900 shadow-sm transition hover:bg-cyan-50">
              Todos
            </button>
            <button className="rounded-full px-4 py-2 text-slate-700 transition hover:bg-cyan-50">
              Mais experientes
            </button>
            <button className="rounded-full px-4 py-2 text-slate-700 transition hover:bg-cyan-50">
              Último cadastro
            </button>
            <button className="rounded-full px-4 py-2 text-slate-700 transition hover:bg-cyan-50">
              Por país
            </button>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2">
              <span className="text-slate-500">🔍</span>
              <input
                type="search"
                placeholder="Buscar nome ou cidade"
                className="w-full border-none bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
            </div>
            <button className="rounded-full bg-cyan-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-cyan-500">
              Entrar
            </button>
          </div>
        </div>
      </nav>

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-10">
        <section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-semibold text-slate-900">Resumo de usuários cadastrados</h2>
            <p className="mt-4 text-slate-600 leading-7">
              Acompanhe currículos organizados por cartão com dados de idade, experiência e origem. Use o menu para navegar entre os perfis rapidamente.
            </p>
          </div>

          <aside className="rounded-[2rem] bg-gradient-to-br from-cyan-600 to-slate-900 p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-semibold">Organização rápida</h3>
            <p className="mt-4 text-slate-100 leading-7">
              O painel usa grid para mostrar múltiplos perfis e flexbox para o menu de navegação, garantindo boa visualização em qualquer dispositivo.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-cyan-100">
              <li>+ 24 candidatos ativos</li>
              <li>16 países de origem</li>
              <li>Layout otimizado para desktop, tablet e mobile</li>
            </ul>
          </aside>
        </section>

        <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {[
            {
              id: 1,
              nome: "Lucas Almeida",
              idade: 29,
              tempo: "6 anos",
              cidade: "São Paulo",
              pais: "Brasil",
            },
            {
              id: 2,
              nome: "Cristian andrei tamasia",
              idade: 67,
              tempo: "8 anos",
              cidade: "Lisboa",
              pais: "Portugal",
            },
            {
              id: 3,
              nome: "Diego Ruiz",
              idade: 26,
              tempo: "4 anos",
              cidade: "Madrid",
              pais: "Espanha",
            },
            {
              id: 7051,
              nome: "Aline Pereira",
              idade: 38,
              tempo: "12 anos",
              cidade: "Rio de Janeiro",
              pais: "Brasil",
            },
            {
              id: 8165,
              nome: "Thomas Müller",
              idade: 41,
              tempo: "15 anos",
              cidade: "Berlim",
              pais: "Alemanha",
            },
            {
              id: 9278,
              nome: "Felipe maximiliano",
              idade: 18,
              tempo: "3 anos",
              cidade: "Blumenau",
              pais: "Brasil",
            },
          ].map((usuario) => (
              <article key={usuario.nome} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-cyan-600">Currículo</p>
                    <h3 className="mt-3 text-2xl font-semibold text-slate-900">{usuario.nome}</h3>
                  </div>
                  <span className="rounded-3xl bg-cyan-50 px-3 py-2 text-sm font-semibold text-cyan-700">
                    {usuario.pais}
                  </span>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-50 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">ID</p>
                    <p className="mt-2 text-lg font-semibold text-slate-900">#{usuario.id}</p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Idade</p>
                    <p className="mt-2 text-lg font-semibold text-slate-900">{usuario.idade} anos</p>
                  </div>
                <div className="rounded-3xl bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Tempo de trabalho</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">{usuario.tempo}</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Cidade</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">{usuario.cidade}</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">País</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">{usuario.pais}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-600">
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2">
                  <span>🧾</span> Formulário completo
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2">
                  <span>📍</span> Cadastro ativo
                </span>
              </div>
            </article>
          ))}
        </section>

        <section className="rounded-[2rem] bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">IDs em fila</h2>
          <div className="mt-6 flex flex-col gap-3">
            {[
              { id: 1, nome: "Lucas Almeida" },
              { id: 2, nome: "Cristian andrei tamasia" },
              { id: 3, nome: "Diego Ruiz" },
              { id: 7051, nome: "Aline Pereira" },
              { id: 8165, nome: "Thomas Müller" },
              { id: 9278, nome: "Felipe maximiliano" },
            ].map((usuario) => (
              usuario.id === 9278 ? (
                <Link
                  key={usuario.id}
                  href="/curriculos/id"
                  className="flex items-center justify-between rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-100"
                >
                  <span className="font-medium text-slate-900">{usuario.nome}</span>
                  <span className="font-semibold text-cyan-700">#{usuario.id}</span>
                </Link>
              ) : (
                <div key={usuario.id} className="flex items-center justify-between rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                  <span className="font-medium text-slate-900">{usuario.nome}</span>
                  <span className="font-semibold text-cyan-700">#{usuario.id}</span>
                </div>
              )
            ))}
          </div>
        </section>
      </main>

      <footer className="relative overflow-hidden border-t border-slate-200 bg-slate-950 text-slate-300">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="select-none text-6xl font-semibold uppercase tracking-[0.4em] text-white/5 sm:text-7xl">
            Direitos Reservados
          </span>
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">FormuLink</p>
            <p className="max-w-md text-sm text-slate-400">
              Página de currículos para gestão de formulários e perfis de candidatos.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:items-end">
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
              <a href="#" className="rounded-full border border-slate-700 px-4 py-2 transition hover:border-cyan-400 hover:text-white">
                Instagram
              </a>
              <a href="#" className="rounded-full border border-slate-700 px-4 py-2 transition hover:border-cyan-400 hover:text-white">
                LinkedIn
              </a>
              <a href="#" className="rounded-full border border-slate-700 px-4 py-2 transition hover:border-cyan-400 hover:text-white">
                Twitter
              </a>
            </div>
            <p className="text-xs text-slate-500">© 2026 FormuLink. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
