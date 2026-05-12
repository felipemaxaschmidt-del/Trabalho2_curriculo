import Link from "next/link";

export default function Nav() {
  return (
    <nav className="w-full border-b border-slate-200 bg-white/95 shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <div className="inline-flex items-center gap-3 rounded-3xl bg-cyan-600 px-4 py-2 text-sm font-semibold text-white shadow-sm">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white/15 text-lg">F</span>
            <span>FormuLink</span>
          </div>

          <div className="relative w-full max-w-xl">
            <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-slate-400">🔎</span>
            <input
              type="search"
              placeholder="Buscar formulários, cadastros ou currículos"
              className="w-full rounded-3xl border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="hidden items-center gap-3 rounded-3xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm text-slate-700 sm:flex">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 text-cyan-700 font-semibold">A</span>
            <div className="leading-tight">
              <p className="font-semibold text-slate-900">Ana Silva</p>
              <p className="text-xs text-slate-500">Conta cadastrada</p>
            </div>
          </div>

          <Link href="/curriculos" className="rounded-full bg-cyan-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500">
            Entrar
          </Link>
        </div>
      </div>
    </nav>
  );
}
