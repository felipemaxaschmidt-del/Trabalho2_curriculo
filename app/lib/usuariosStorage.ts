export interface Experiencia {
  empresa: string;
  cargo: string;
  periodo: string;
}

export interface Formacao {
  instituicao: string;
  curso: string;
  periodo: string;
}

export interface Usuario {
  id: string;
  nome: string;
  cargoDesejado: string;
  email: string;
  telefone: string;
  cpf: string;
  resumo: string;
  experiencias: Experiencia[];
  formacoes: Formacao[];
  habilidades: string;
  dataCriacao: string;
}

const STORAGE_KEY = "usuarios_curriculo";

// Usuários iniciais mockados
const usuariosMockados: Usuario[] = [
  {
    id: "1",
    nome: "Lucas Almeida",
    cargoDesejado: "Desenvolvedor Front-end",
    email: "lucas@example.com",
    telefone: "(11) 98765-4321",
    cpf: "123.456.789-00",
    resumo: "Profissional com 6 anos de experiência em desenvolvimento web.",
    experiencias: [
      {
        empresa: "TechCorp",
        cargo: "Desenvolvedor Senior",
        periodo: "2021-2025",
      },
    ],
    formacoes: [
      {
        instituicao: "Universidade Federal",
        curso: "Bacharel em Ciência da Computação",
        periodo: "2018",
      },
    ],
    habilidades: "JavaScript, React, TypeScript, Node.js",
    dataCriacao: new Date().toISOString(),
  },
  {
    id: "2",
    nome: "Cristian Andrei Tamasia",
    cargoDesejado: "Analista de Sistemas",
    email: "cristian@example.com",
    telefone: "(21) 99876-5432",
    cpf: "987.654.321-00",
    resumo: "Especialista em sistemas com 8 anos de experiência.",
    experiencias: [],
    formacoes: [],
    habilidades: "Java, Python, SQL, Azure",
    dataCriacao: new Date().toISOString(),
  },
];

export function inicializarStorage() {
  if (typeof window === "undefined") return;

  const usuariosExistentes = localStorage.getItem(STORAGE_KEY);
  if (!usuariosExistentes) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(usuariosMockados));
  }
}

export function obterTodosUsuarios(): Usuario[] {
  if (typeof window === "undefined") return [];

  const dados = localStorage.getItem(STORAGE_KEY);
  return dados ? JSON.parse(dados) : usuariosMockados;
}

export function verificarEmailDuplicado(email: string): boolean {
  const usuarios = obterTodosUsuarios();
  return usuarios.some((u) => u.email.toLowerCase() === email.toLowerCase());
}

export function adicionarUsuario(usuario: Omit<Usuario, "id" | "dataCriacao">) {
  const usuarios = obterTodosUsuarios();
  const novoUsuario: Usuario = {
    ...usuario,
    id: (Math.max(...usuarios.map((u) => parseInt(u.id) || 0)) + 1).toString(),
    dataCriacao: new Date().toISOString(),
  };
  usuarios.push(novoUsuario);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(usuarios));
  return novoUsuario;
}

export function obterUsuarioPorEmail(email: string): Usuario | undefined {
  const usuarios = obterTodosUsuarios();
  return usuarios.find((u) => u.email.toLowerCase() === email.toLowerCase());
}
