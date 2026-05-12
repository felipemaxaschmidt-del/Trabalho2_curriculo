import Link from "next/link";

export default function NovoCurriculoPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-600 text-2xl font-bold text-white">
              F
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-600">Formulários & Currículos</p>
              <h1 className="text-2xl font-semibold text-slate-900">Novo Cadastro de Usuário</h1>
            </div>
          </div>
          <nav className="flex flex-wrap items-center gap-3 text-sm text-slate-700">
            <Link href="/" className="rounded-full px-4 py-2 transition hover:bg-slate-100">
              Início
            </Link>
            <Link href="/curriculos" className="rounded-full px-4 py-2 transition hover:bg-slate-100">
              Currículos
            </Link>
            <Link href="/curriculos/novo" className="rounded-full bg-cyan-600 px-4 py-2 font-semibold text-white transition hover:bg-cyan-500">
              Cadastro
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10">
        <section className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-600">Cadastro de usuário</p>
            <h2 className="mt-4 text-4xl font-semibold text-slate-900">Preencha suas informações pessoais</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              Use este formulário para cadastrar um novo usuário com dados completos e consistentes. O design responde bem em desktop e mobile.
            </p>

            <div className="mt-10 grid gap-6 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 sm:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-slate-900">Nome</p>
                <p className="mt-2 text-sm text-slate-600">Nome completo do usuário.</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Cargo desejado</p>
                <p className="mt-2 text-sm text-slate-600">Posição que o usuário pretende ocupar.</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">E-mail</p>
                <p className="mt-2 text-sm text-slate-600">Contato principal para envio de informações.</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Telefone</p>
                <p className="mt-2 text-sm text-slate-600">Número para contato rápido.</p>
              </div>
            </div>
          </div>

          <aside className="rounded-[2rem] bg-gradient-to-br from-cyan-600 to-slate-900 p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-semibold">Design organizado</h3>
            <p className="mt-4 leading-7 text-cyan-100">
              A seção lateral mostra o valor de um cadastro completo e facilita o fluxo de dados para currículos estruturados.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-cyan-100">
              <li>✔ Layout responsivo para qualquer dispositivo</li>
              <li>✔ Grid e flexbox para organizar informações</li>
              <li>✔ Campos essenciais para perfil profissional</li>
            </ul>
          </aside>
        </section>

        <section className="mt-10 rounded-[2rem] bg-white p-8 shadow-sm">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-3xl font-semibold text-slate-900">Formulário de cadastro</h3>
              <p className="mt-3 text-slate-600">Complete todas as informações para registrar um novo usuário.</p>
            </div>
            <div className="rounded-3xl bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
              Estrutura clara em 8 campos</div>
          </div>

          <form className="grid gap-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">Nome</span>
                <input type="text" placeholder="Digite o nome completo" className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100" />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">Cargo desejado</span>
                <input type="text" placeholder="Ex: Analista de RH" className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100" />
              </label>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">E-mail</span>
                <input type="email" placeholder="email@exemplo.com" className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100" />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">Telefone</span>
                <input type="tel" placeholder="(11) 99999-9999" className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100" />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">CPF</span>
                <input type="text" placeholder="000.000.000-00" className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100" />
              </label>
            </div>

            <div className="grid gap-6">
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">Resumo profissional</span>
                <textarea rows={4} placeholder="Descreva seu perfil e objetivo profissional" className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100" />
              </label>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">Experiências profissionais</span>
                <textarea rows={5} placeholder="Informe cargos, empresas e responsabilidades" className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100" />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">Formações acadêmicas</span>
                <textarea rows={5} placeholder="Liste cursos, instituições e períodos" className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100" />
              </label>
            </div>

            <label className="space-y-2">
              <span className="text-sm font-semibold text-slate-700">Habilidades</span>
              <textarea rows={3} placeholder="Digite as principais habilidades separadas por vírgula" className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100" />
            </label>

            <div className="flex flex-col gap-4 rounded-[1.75rem] bg-slate-50 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-slate-600">Campos organizados em grid para facilitar o preenchimento.</p>
              </div>
              <button type="submit" className="rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500">
                Enviar cadastro
              </button>
            </div>
          </form>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">FormuLink</p>
            <p className="max-w-md text-sm text-slate-400">Cadastro de usuário completo para informações pessoais e currículos.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <a href="#" className="rounded-full border border-slate-700 px-4 py-2 transition hover:border-cyan-400 hover:text-white">Instagram</a>
            <a href="#" className="rounded-full border border-slate-700 px-4 py-2 transition hover:border-cyan-400 hover:text-white">LinkedIn</a>
            <a href="#" className="rounded-full border border-slate-700 px-4 py-2 transition hover:border-cyan-400 hover:text-white">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
