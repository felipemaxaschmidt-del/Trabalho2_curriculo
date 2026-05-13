import Link from "next/link";

export default function id() {
  const curriculo = {
    nome: "Felipe  Maximiliano Alves Schmidt",
    cargoDesejado: "Manutenção e reparação de softwares",
    email: "f.m.a.schmidt@email.com",
    telefone: "(11) 98765-4321",
    cpf: "123.456.789-00",
    resumo: "Estudante do terceiro ano do cedup, com experiencia em aula em resolução de trabalhos projetos e atividades coordenadas pelo professor de informática, com conhecimento em HTML, CSS, JavaScript, React, Next.js, Node.js e Express. Buscando oportunidades para aplicar habilidades técnicas e contribuir para projetos inovadores.",
    experiencias: "Desenvolvedor amador ainda em formação tecnica(2024-2026): Desenvolvimento de aplicações em React e Node.js, integração de APIs REST e otimização de performance.\n\nDesenvolvedor Front-end  - : Desenvolvimento de interfaces responsivas com JavaScript e CSS.",
    formacoes: "Curso técnico em informática para internet - CEDUP (2024-2026): Foco em desenvolvimento web, incluindo HTML, CSS, JavaScript e frameworks modernos como React e Next.js.",
    habilidades: "JavaScript, TypeScript, React, Next.js, Node.js, Express e Git,"
  };

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
              <h1 className="text-2xl font-semibold text-slate-900">Cadastro Pessoal</h1>
            </div>
          </div>
          <nav className="flex flex-wrap items-center gap-3 text-sm text-slate-700">
            <Link href="/curriculos" className="rounded-full px-4 py-2 transition hover:bg-slate-100">
              Início
            </Link>
            <Link href="/curriculos" className="rounded-full px-4 py-2 transition hover:bg-slate-100">
              Currículos
            </Link>
            <Link href="#formulario" className="rounded-full bg-cyan-600 px-4 py-2 font-semibold text-white transition hover:bg-cyan-500">
              Formulário
            </Link>
          </nav>
        </div>
      </header>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-10 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="space-y-6 rounded-[2rem] bg-white p-8 shadow-sm">
          <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
            Visualização do currículo
          </span>
          <div className="space-y-4">
            <h2 className="text-4xl font-semibold tracking-tight text-slate-900">Seu perfil profissional</h2>
            <p className="max-w-3xl text-lg leading-8 text-slate-600">
              Visualização completa do seu perfil profissional com informações pessoais, contato, histórico profissional, formação acadêmica e habilidades.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold text-slate-900">Contato</h3>
              <p className="mt-2 text-slate-600">Seus dados de contato e identificação.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold text-slate-900">Experiência</h3>
              <p className="mt-2 text-slate-600">Seu histórico profissional e educacional.</p>
            </div>
          </div>
        </div>

        <aside className="rounded-[2rem] bg-gradient-to-br from-cyan-600 to-slate-900 p-8 text-white shadow-2xl">
          <h3 className="text-2xl font-semibold">Cadastro completo</h3>
          <p className="mt-4 leading-7 text-cyan-100">
            Use o formulário para registrar dados de forma clara, com flexbox para os campos e grid para organizar seções de conteúdo.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-cyan-100">
            <li>✔ Design responsivo para mobile e desktop</li>
            <li>✔ Estrutura clara de informações pessoais</li>
            <li>✔ Campos para experiência, formação e habilidades</li>
          </ul>
        </aside>
      </section>

      <main className="mx-auto max-w-7xl px-6 pb-16">
        <section id="formulario" className="rounded-[2rem] bg-white p-8 shadow-sm">
          <div className="mb-8 flex flex-col gap-4 rounded-[1.5rem] bg-slate-50 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-600">Currículo</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">Dados profissionais</h2>
            </div>
            <span className="rounded-full bg-cyan-600 px-4 py-2 text-sm font-semibold text-white">
              Visualização
            </span>
          </div>

          <form className="grid gap-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">Nome</span>
                <div className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900">
                  {curriculo.nome}
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">Cargo desejado</span>
                <div className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900">
                  {curriculo.cargoDesejado}
                </div>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <div className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">E-mail</span>
                <div className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900">
                  {curriculo.email}
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">Telefone</span>
                <div className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900">
                  {curriculo.telefone}
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">CPF</span>
                <div className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900">
                  {curriculo.cpf}
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">Resumo profissional</span>
                <div className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900 whitespace-pre-wrap">
                  {curriculo.resumo}
                </div>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">Experiências profissionais</span>
                <div className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900 whitespace-pre-wrap">
                  {curriculo.experiencias}
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">Formações acadêmicas</span>
                <div className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900 whitespace-pre-wrap">
                  {curriculo.formacoes}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-sm font-semibold text-slate-700">Habilidades</span>
              <div className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900">
                {curriculo.habilidades}
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-[1.75rem] bg-slate-50 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-slate-600">Visualização completa do perfil profissional.</p>
              </div>
              <Link href="/curriculos" className="rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500">
                Voltar
              </Link>
            </div>
          </form>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">FormuLink</p>
            <p className="max-w-md text-sm text-slate-400">
              Formulário completo de cadastro pessoal com design limpo para usuários e currículos.
            </p>
          </div>
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
        </div>
      </footer>
    </div>
  );
}
