export default function Footer() {
  return (
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
            Plataforma de gestão de formulários e currículos com visual limpo e responsivo.
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
  );
}
