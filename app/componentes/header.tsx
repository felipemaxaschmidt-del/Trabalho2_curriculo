export default function header() {
        return (
     <div className="min-h-screen bg-slate-50 text-slate-900">
     <main className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 py-10">
        <section id="concepto" className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
              Plataforma de organização de formulários
            </span>
            <div className="space-y-4">
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Organize currículos e cadastros com clareza e eficiência
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-slate-700">
                Uma página inicial que apresenta o conceito principal de gerenciamento de informações de usuários cadastrados, formulários dinâmicos e currículos estruturados para equipes de RH e desenvolvedores.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">Controle centralizado</h3>
                <p className="mt-2 text-slate-600">
                  Visualize dados de cadastro, currículos e documentos em um painel organizado para acesso rápido.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">Processo ágil</h3>
                <p className="mt-2 text-slate-600">
                  Use formulários práticos para coletar informações e gerar resumos de perfil de modo responsivo.
                </p>
              </div>
            </div>
          </div>

          <aside className="rounded-[2rem] bg-gradient-to-br from-cyan-500 to-slate-900 p-8 text-white shadow-2xl">
            <h3 className="text-xl font-semibold">Por que essa solução importa?</h3>
            <p className="mt-4 leading-7 text-cyan-100">
              Com fluxos de formulário integrados e apresentação clara de currículo, as equipes conseguem acompanhar candidaturas, entrevistas e histórico profissional em um só lugar.
            </p>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-cyan-100">✓</span>
                Controle rápido de informações essenciais.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-cyan-100">✓</span>
                Layout responsivo que funciona em desktop e mobile.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-cyan-100">✓</span>
                Grade e cartões para navegar entre usuários e formulários.
              </li>
            </ul>
          </aside>
        </section>

        <section id="benefits" className="space-y-8">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">
              Benefícios principais
            </p>
            <h3 className="mt-4 text-3xl font-semibold text-slate-900">Por que organizar formulários e currículos juntos?</h3>
            <p className="mt-4 max-w-3xl text-slate-600 leading-7">
              Uma página inicial que demonstra o conceito central de uma ferramenta de gestão de cadastros. O objetivo é facilitar o acompanhamento do fluxo de pessoas e dados enquanto mantém o design limpo e funcional.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h4 className="text-xl font-semibold text-slate-900">Visão clara</h4>
              <p className="mt-3 text-slate-600">Organize cada currículo, formulário e contato em cartões fáceis de navegar.</p>
            </article>
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h4 className="text-xl font-semibold text-slate-900">Dados acessíveis</h4>
              <p className="mt-3 text-slate-600">Acompanhe candidatos e usuários em um fluxo unificado de informações.</p>
            </article>
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h4 className="text-xl font-semibold text-slate-900">Produtos modulares</h4>
              <p className="mt-3 text-slate-600">Use seções de formulário, histórico profissional e notas de avaliação com facilidade.</p>
            </article>
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h4 className="text-xl font-semibold text-slate-900">Acesso rápido</h4>
              <p className="mt-3 text-slate-600">O design responsivo garante que o site permaneça útil em tablets, celulares e desktops.</p>
            </article>
          </div>
        </section>

        <section id="cards" className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <section className="rounded-[2rem] bg-white p-8 shadow-sm">
              <h4 className="text-2xl font-semibold text-slate-900">Formulários de cadastro</h4>
              <p className="mt-4 text-slate-600 leading-7">Campos inteligentes para capturar dados pessoais, experiência, cursos e preferências de contato.</p>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li>Nome completo</li>
                <li>Email e telefone</li>
                <li>Formação e habilidades</li>
              </ul>
            </section>
            <section className="rounded-[2rem] bg-white p-8 shadow-sm">
              <h4 className="text-2xl font-semibold text-slate-900">Resumo de currículo</h4>
              <p className="mt-4 text-slate-600 leading-7">Apresente experiência profissional, competências e histórico em uma estrutura fácil de comparar.</p>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li>Histórico de empregos</li>
                <li>Projetos principais</li>
                <li>Notas de avaliação</li>
              </ul>
            </section>
            <section className="rounded-[2rem] bg-white p-8 shadow-sm">
              <h4 className="text-2xl font-semibold text-slate-900">Painel de usuários</h4>
              <p className="mt-4 text-slate-600 leading-7">Acompanhe facilmente os perfis ativos, solicitações em andamento e formulários pendentes.</p>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li>Lista de usuários</li>
                <li>Status de aplicação</li>
                <li>Priorização visual</li>
              </ul>
            </section>
          </div>
        </section>
      </main>
     </div>
        );
        }