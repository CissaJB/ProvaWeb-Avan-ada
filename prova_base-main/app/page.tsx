import Link from "@/node_modules/next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Bem vindo ao Portal de Receitas</h1>
      <Link href="/recipes" className="text-blue-500 hover:text-blue-600">
        clique aqui para ver receitas
      </Link>
    </div>
  );
}