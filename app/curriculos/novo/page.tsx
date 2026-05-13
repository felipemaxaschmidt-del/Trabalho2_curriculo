"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "sonner";
import { IMaskInput } from "react-imask";
import {
  inicializarStorage,
  verificarEmailDuplicado,
  adicionarUsuario,
} from "@/app/lib/usuariosStorage";

// Schema de validação com Yup
const experienciaSchema = yup.object().shape({
  empresa: yup
    .string()
    .required("Empresa é obrigatória")
    .min(3, "Empresa deve ter no mínimo 3 caracteres"),
  cargo: yup
    .string()
    .required("Cargo é obrigatório")
    .min(3, "Cargo deve ter no mínimo 3 caracteres"),
  periodo: yup
    .string()
    .required("Período é obrigatório")
    .min(3, "Período deve ter no mínimo 3 caracteres"),
});

const formacaoSchema = yup.object().shape({
  instituicao: yup
    .string()
    .required("Instituição é obrigatória")
    .min(3, "Instituição deve ter no mínimo 3 caracteres"),
  curso: yup
    .string()
    .required("Curso é obrigatório")
    .min(3, "Curso deve ter no mínimo 3 caracteres"),
  periodo: yup
    .string()
    .required("Período é obrigatório")
    .min(3, "Período deve ter no mínimo 3 caracteres"),
});

const formSchema = yup.object({
  nome: yup
    .string()
    .required("Nome é obrigatório")
    .min(3, "Nome deve ter no mínimo 3 caracteres")
    .matches(/^[a-zA-Z\s]+$/, "Nome deve conter apenas letras"),
  cargoDesejado: yup
    .string()
    .required("Cargo desejado é obrigatório")
    .min(3, "Cargo deve ter no mínimo 3 caracteres"),
  email: yup
    .string()
    .required("E-mail é obrigatório")
    .email("E-mail inválido")
    .test("email-duplicado", "Este e-mail já está cadastrado", (value) => {
      return !verificarEmailDuplicado(value || "");
    }),
  telefone: yup
    .string()
    .required("Telefone é obrigatório")
    .min(14, "Telefone deve ter o formato (XX) 9XXXX-XXXX"),
  cpf: yup
    .string()
    .required("CPF é obrigatório")
    .min(14, "CPF deve ter o formato XXX.XXX.XXX-XX"),
  resumo: yup
    .string()
    .required("Resumo profissional é obrigatório")
    .min(10, "Resumo deve ter no mínimo 10 caracteres"),
  experiencias: yup
    .array()
    .of(experienciaSchema)
    .required(),
  formacoes: yup
    .array()
    .of(formacaoSchema)
    .required(),
  habilidades: yup
    .string()
    .required("Habilidades são obrigatórias")
    .min(5, "Habilidades devem ter no mínimo 5 caracteres"),
});

export default function NovoCurriculoPage() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      nome: "",
      cargoDesejado: "",
      email: "",
      telefone: "",
      cpf: "",
      resumo: "",
      experiencias: [{ empresa: "", cargo: "", periodo: "" }],
      formacoes: [{ instituicao: "", curso: "", periodo: "" }],
      habilidades: "",
    },
  });

  const { fields: experienciaFields, append: appendExperiencia, remove: removeExperiencia } = useFieldArray({
    control,
    name: "experiencias",
  });

  const { fields: formacaoFields, append: appendFormacao, remove: removeFormacao } = useFieldArray({
    control,
    name: "formacoes",
  });

  useEffect(() => {
    inicializarStorage();
  }, []);

  const onSubmit = (data: unknown) => {
    const formData = data as Record<string, unknown>;
    try {
      // Verificar novamente se o email não foi duplicado
      if (verificarEmailDuplicado((formData.email as string) || "")) {
        toast.error("❌ Este e-mail já está cadastrado no sistema!");
        return;
      }

      adicionarUsuario({
        nome: (formData.nome as string) || "",
        cargoDesejado: (formData.cargoDesejado as string) || "",
        email: (formData.email as string) || "",
        telefone: (formData.telefone as string) || "",
        cpf: (formData.cpf as string) || "",
        resumo: (formData.resumo as string) || "",
        experiencias: (formData.experiencias as Array<{ empresa: string; cargo: string; periodo: string }>) || [],
        formacoes: (formData.formacoes as Array<{ instituicao: string; curso: string; periodo: string }>) || [],
        habilidades: (formData.habilidades as string) || "",
      });

      toast.success(`✅ Usuário ${formData.nome} cadastrado com sucesso!`);
      reset();

      // Redirecionar após 2 segundos
      setTimeout(() => {
        window.location.href = "/curriculos";
      }, 2000);
    } catch (error) {
      toast.error("❌ Erro ao cadastrar usuário. Tente novamente.");
      console.error(error);
    }
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
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-600">
                Formulários & Currículos
              </p>
              <h1 className="text-2xl font-semibold text-slate-900">
                Novo Cadastro de Usuário
              </h1>
            </div>
          </div>
          <nav className="flex flex-wrap items-center gap-3 text-sm text-slate-700">
            <Link
              href="/"
              className="rounded-full px-4 py-2 transition hover:bg-slate-100"
            >
              Início
            </Link>
            <Link
              href="/curriculos"
              className="rounded-full px-4 py-2 transition hover:bg-slate-100"
            >
              Currículos
            </Link>
            <Link
              href="/curriculos/novo"
              className="rounded-full bg-cyan-600 px-4 py-2 font-semibold text-white transition hover:bg-cyan-500"
            >
              Cadastro
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10">
        <section className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-600">
              Cadastro de usuário
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-slate-900">
              Preencha suas informações pessoais
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              Use este formulário para cadastrar um novo usuário com dados
              completos e consistentes. Todos os campos são obrigatórios.
            </p>

            <div className="mt-10 grid gap-6 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 sm:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-slate-900">Nome</p>
                <p className="mt-2 text-sm text-slate-600">
                  Nome completo do usuário.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Cargo desejado
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Posição que o usuário pretende ocupar.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">E-mail</p>
                <p className="mt-2 text-sm text-slate-600">
                  Contato principal para envio de informações.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Telefone</p>
                <p className="mt-2 text-sm text-slate-600">
                  Número para contato rápido.
                </p>
              </div>
            </div>
          </div>

          <aside className="rounded-[2rem] bg-gradient-to-br from-cyan-600 to-slate-900 p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-semibold">Design organizado</h3>
            <p className="mt-4 leading-7 text-cyan-100">
              Formulário completo com validação em tempo real e campos
              dinâmicos para múltiplas experiências e formações.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-cyan-100">
              <li>✔ Validação de dados em tempo real</li>
              <li>✔ Campos dinâmicos para experiência e formação</li>
              <li>✔ Máscaras de entrada automáticas</li>
              <li>✔ Notificações com Sonner</li>
              <li>✔ Persistência em localStorage</li>
            </ul>
          </aside>
        </section>

        <section className="mt-10 rounded-[2rem] bg-white p-8 shadow-sm">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-3xl font-semibold text-slate-900">
                Formulário de cadastro
              </h3>
              <p className="mt-3 text-slate-600">
                Complete todas as informações para registrar um novo usuário.
              </p>
            </div>
            <div className="rounded-3xl bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
              Campos com validação completa
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-8">
            {/* Dados Básicos */}
            <div className="grid gap-6 lg:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">
                  Nome *
                </span>
                <input
                  {...register("nome")}
                  type="text"
                  placeholder="Digite o nome completo"
                  className={`w-full rounded-3xl border bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition ${
                    errors.nome
                      ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                      : "border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                  }`}
                />
                {errors.nome && (
                  <span className="text-xs text-red-600">
                    {errors.nome.message}
                  </span>
                )}
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">
                  Cargo desejado *
                </span>
                <input
                  {...register("cargoDesejado")}
                  type="text"
                  placeholder="Ex: Analista de RH"
                  className={`w-full rounded-3xl border bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition ${
                    errors.cargoDesejado
                      ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                      : "border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                  }`}
                />
                {errors.cargoDesejado && (
                  <span className="text-xs text-red-600">
                    {errors.cargoDesejado.message}
                  </span>
                )}
              </label>
            </div>

            {/* Contato */}
            <div className="grid gap-6 lg:grid-cols-3">
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">
                  E-mail *
                </span>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="email@exemplo.com"
                  className={`w-full rounded-3xl border bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition ${
                    errors.email
                      ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                      : "border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                  }`}
                />
                {errors.email && (
                  <span className="text-xs text-red-600">
                    {errors.email.message}
                  </span>
                )}
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">
                  Telefone *
                </span>
                <IMaskInput
                  {...register("telefone")}
                  mask="(00) 00000-0000"
                  placeholder="(11) 99999-9999"
                  className={`w-full rounded-3xl border bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition ${
                    errors.telefone
                      ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                      : "border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                  }`}
                />
                {errors.telefone && (
                  <span className="text-xs text-red-600">
                    {errors.telefone.message}
                  </span>
                )}
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">
                  CPF *
                </span>
                <IMaskInput
                  {...register("cpf")}
                  mask="000.000.000-00"
                  placeholder="000.000.000-00"
                  className={`w-full rounded-3xl border bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition ${
                    errors.cpf
                      ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                      : "border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                  }`}
                />
                {errors.cpf && (
                  <span className="text-xs text-red-600">
                    {errors.cpf.message}
                  </span>
                )}
              </label>
            </div>

            {/* Resumo */}
            <div className="grid gap-6">
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">
                  Resumo profissional *
                </span>
                <textarea
                  {...register("resumo")}
                  rows={4}
                  placeholder="Descreva seu perfil e objetivo profissional"
                  className={`w-full rounded-3xl border bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition ${
                    errors.resumo
                      ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                      : "border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                  }`}
                />
                {errors.resumo && (
                  <span className="text-xs text-red-600">
                    {errors.resumo.message}
                  </span>
                )}
              </label>
            </div>

            {/* Experiências Dinâmicas */}
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">
                  Experiências profissionais
                </h3>
                <button
                  type="button"
                  onClick={() =>
                    appendExperiencia({
                      empresa: "",
                      cargo: "",
                      periodo: "",
                    })
                  }
                  className="rounded-full bg-cyan-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-cyan-500"
                >
                  + Adicionar
                </button>
              </div>

              <div className="mt-6 space-y-4">
                {experienciaFields.map((field, index) => (
                  <div
                    key={field.id}
                    className="rounded-[1rem] border border-slate-200 bg-white p-4"
                  >
                    <div className="grid gap-4 lg:grid-cols-3">
                      <label className="space-y-2">
                        <span className="text-xs font-semibold text-slate-700">
                          Empresa
                        </span>
                        <input
                          {...register(`experiencias.${index}.empresa`)}
                          placeholder="Nome da empresa"
                          className={`w-full rounded-2xl border bg-slate-50 px-3 py-2 text-sm outline-none transition ${
                            errors.experiencias?.[index]?.empresa
                              ? "border-red-500"
                              : "border-slate-200 focus:border-cyan-500"
                          }`}
                        />
                        {errors.experiencias?.[index]?.empresa && (
                          <span className="text-xs text-red-600">
                            {errors.experiencias[index]?.empresa?.message}
                          </span>
                        )}
                      </label>
                      <label className="space-y-2">
                        <span className="text-xs font-semibold text-slate-700">
                          Cargo
                        </span>
                        <input
                          {...register(`experiencias.${index}.cargo`)}
                          placeholder="Cargo ocupado"
                          className={`w-full rounded-2xl border bg-slate-50 px-3 py-2 text-sm outline-none transition ${
                            errors.experiencias?.[index]?.cargo
                              ? "border-red-500"
                              : "border-slate-200 focus:border-cyan-500"
                          }`}
                        />
                        {errors.experiencias?.[index]?.cargo && (
                          <span className="text-xs text-red-600">
                            {errors.experiencias[index]?.cargo?.message}
                          </span>
                        )}
                      </label>
                      <label className="space-y-2">
                        <span className="text-xs font-semibold text-slate-700">
                          Período
                        </span>
                        <input
                          {...register(`experiencias.${index}.periodo`)}
                          placeholder="Ex: 2020-2023"
                          className={`w-full rounded-2xl border bg-slate-50 px-3 py-2 text-sm outline-none transition ${
                            errors.experiencias?.[index]?.periodo
                              ? "border-red-500"
                              : "border-slate-200 focus:border-cyan-500"
                          }`}
                        />
                        {errors.experiencias?.[index]?.periodo && (
                          <span className="text-xs text-red-600">
                            {errors.experiencias[index]?.periodo?.message}
                          </span>
                        )}
                      </label>
                    </div>
                    {experienciaFields.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeExperiencia(index)}
                        className="mt-3 rounded-full bg-red-100 px-4 py-2 text-xs font-semibold text-red-700 transition hover:bg-red-200"
                      >
                        Remover
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Formações Dinâmicas */}
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">
                  Formações acadêmicas
                </h3>
                <button
                  type="button"
                  onClick={() =>
                    appendFormacao({
                      instituicao: "",
                      curso: "",
                      periodo: "",
                    })
                  }
                  className="rounded-full bg-cyan-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-cyan-500"
                >
                  + Adicionar
                </button>
              </div>

              <div className="mt-6 space-y-4">
                {formacaoFields.map((field, index) => (
                  <div
                    key={field.id}
                    className="rounded-[1rem] border border-slate-200 bg-white p-4"
                  >
                    <div className="grid gap-4 lg:grid-cols-3">
                      <label className="space-y-2">
                        <span className="text-xs font-semibold text-slate-700">
                          Instituição
                        </span>
                        <input
                          {...register(`formacoes.${index}.instituicao`)}
                          placeholder="Nome da instituição"
                          className={`w-full rounded-2xl border bg-slate-50 px-3 py-2 text-sm outline-none transition ${
                            errors.formacoes?.[index]?.instituicao
                              ? "border-red-500"
                              : "border-slate-200 focus:border-cyan-500"
                          }`}
                        />
                        {errors.formacoes?.[index]?.instituicao && (
                          <span className="text-xs text-red-600">
                            {errors.formacoes[index]?.instituicao?.message}
                          </span>
                        )}
                      </label>
                      <label className="space-y-2">
                        <span className="text-xs font-semibold text-slate-700">
                          Curso
                        </span>
                        <input
                          {...register(`formacoes.${index}.curso`)}
                          placeholder="Nome do curso"
                          className={`w-full rounded-2xl border bg-slate-50 px-3 py-2 text-sm outline-none transition ${
                            errors.formacoes?.[index]?.curso
                              ? "border-red-500"
                              : "border-slate-200 focus:border-cyan-500"
                          }`}
                        />
                        {errors.formacoes?.[index]?.curso && (
                          <span className="text-xs text-red-600">
                            {errors.formacoes[index]?.curso?.message}
                          </span>
                        )}
                      </label>
                      <label className="space-y-2">
                        <span className="text-xs font-semibold text-slate-700">
                          Período
                        </span>
                        <input
                          {...register(`formacoes.${index}.periodo`)}
                          placeholder="Ex: 2018-2022"
                          className={`w-full rounded-2xl border bg-slate-50 px-3 py-2 text-sm outline-none transition ${
                            errors.formacoes?.[index]?.periodo
                              ? "border-red-500"
                              : "border-slate-200 focus:border-cyan-500"
                          }`}
                        />
                        {errors.formacoes?.[index]?.periodo && (
                          <span className="text-xs text-red-600">
                            {errors.formacoes[index]?.periodo?.message}
                          </span>
                        )}
                      </label>
                    </div>
                    {formacaoFields.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeFormacao(index)}
                        className="mt-3 rounded-full bg-red-100 px-4 py-2 text-xs font-semibold text-red-700 transition hover:bg-red-200"
                      >
                        Remover
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Habilidades */}
            <label className="space-y-2">
              <span className="text-sm font-semibold text-slate-700">
                Habilidades *
              </span>
              <textarea
                {...register("habilidades")}
                rows={3}
                placeholder="Digite as principais habilidades separadas por vírgula"
                className={`w-full rounded-3xl border bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition ${
                  errors.habilidades
                    ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                    : "border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                }`}
              />
              {errors.habilidades && (
                <span className="text-xs text-red-600">
                  {errors.habilidades.message}
                </span>
              )}
            </label>

            {/* Botões de Ação */}
            <div className="flex flex-col gap-4 rounded-[1.75rem] bg-slate-50 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-slate-600">
                  Todos os campos marcados com * são obrigatórios.
                </p>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/curriculos"
                  className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Cancelar
                </Link>
                <button
                  type="submit"
                  className="rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500 disabled:opacity-50"
                >
                  Enviar cadastro
                </button>
              </div>
            </div>
          </form>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
              FormuLink
            </p>
            <p className="max-w-md text-sm text-slate-400">
              Cadastro de usuário completo para informações pessoais e
              currículos.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <a
              href="#"
              className="rounded-full border border-slate-700 px-4 py-2 transition hover:border-cyan-400 hover:text-white"
            >
              Instagram
            </a>
            <a
              href="#"
              className="rounded-full border border-slate-700 px-4 py-2 transition hover:border-cyan-400 hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="rounded-full border border-slate-700 px-4 py-2 transition hover:border-cyan-400 hover:text-white"
            >
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
