import type { Metadata } from "next";
import Link from "next/link";

const GITHUB_USERNAME = "Asygarr";

type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
};

export const metadata: Metadata = {
  title: "Portofolio GitHub Asygarr",
  description: "Portofolio otomatis berdasarkan seluruh repository GitHub milik Asygarr.",
};

async function getRepositories() {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
    {
      next: { revalidate: 3600 },
      headers: {
        Accept: "application/vnd.github+json",
      },
    }
  );

  if (!response.ok) {
    return [] as GitHubRepo[];
  }

  const repositories = (await response.json()) as GitHubRepo[];

  return repositories.sort(
    (a, b) =>
      new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
  );
}

export default async function PortfolioPage() {
  const repositories = await getRepositories();
  const totalStars = repositories.reduce(
    (sum, repository) => sum + repository.stargazers_count,
    0
  );
  const totalForks = repositories.reduce(
    (sum, repository) => sum + repository.forks_count,
    0
  );

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 md:px-16">
      <section className="mx-auto max-w-6xl">
        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-wide text-blue-700">
            Portofolio GitHub
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Asygar Ridho
          </h1>
          <p className="mt-4 max-w-3xl text-slate-600">
            Ringkasan semua project dari akun GitHub
            <span className="font-semibold"> @{GITHUB_USERNAME}</span>.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-blue-100 px-4 py-1 font-medium text-blue-700">
              {repositories.length} Repository
            </span>
            <span className="rounded-full bg-amber-100 px-4 py-1 font-medium text-amber-700">
              {totalStars} Stars
            </span>
            <span className="rounded-full bg-emerald-100 px-4 py-1 font-medium text-emerald-700">
              {totalForks} Forks
            </span>
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Lihat Profil GitHub
            </Link>
            <Link
              href="/"
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>

        <section className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {repositories.map((repository) => (
            <article
              key={repository.id}
              className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-slate-900">
                {repository.name}
              </h2>
              <p className="mt-2 flex-1 text-sm text-slate-600">
                {repository.description || "Belum ada deskripsi project."}
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-700">
                  {repository.language || "Tidak diketahui"}
                </span>
                <span className="rounded-full bg-amber-100 px-2.5 py-1 text-amber-700">
                  ⭐ {repository.stargazers_count}
                </span>
                <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-emerald-700">
                  Fork {repository.forks_count}
                </span>
              </div>
              <p className="mt-3 text-xs text-slate-500">
                Update terakhir: {new Date(repository.updated_at).toLocaleDateString("id-ID")}
              </p>
              <Link
                href={repository.html_url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 text-sm font-semibold text-blue-700 hover:underline"
              >
                Buka Repository
              </Link>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}
