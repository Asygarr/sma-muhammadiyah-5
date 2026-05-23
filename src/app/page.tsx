type GithubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  homepage: string | null;
};

type GithubUser = {
  login: string;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
};

const USERNAME = "Asygarr";
export const dynamic = "force-dynamic";

async function getGithubData() {
  const [userRes, reposRes] = await Promise.all([
    fetch(`https://api.github.com/users/${USERNAME}`, {
      next: { revalidate: 3600 },
      headers: {
        Accept: "application/vnd.github+json",
      },
    }),
    fetch(
      `https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`,
      {
        next: { revalidate: 3600 },
        headers: {
          Accept: "application/vnd.github+json",
        },
      }
    ),
  ]);

  if (!userRes.ok || !reposRes.ok) {
    return { user: null, repos: [] as GithubRepo[] };
  }

  const user = (await userRes.json()) as GithubUser;
  const repos = ((await reposRes.json()) as GithubRepo[]).sort(
    (a, b) =>
      new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
  );

  return { user, repos };
}

export default async function Home() {
  const { user, repos } = await getGithubData();
  const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
  const profileUrl = user?.html_url ?? `https://github.com/${USERNAME}`;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="mb-10 flex flex-col gap-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <img
              src={
                user?.avatar_url ??
                "https://avatars.githubusercontent.com/u/0?v=4"
              }
              alt={`Avatar ${user?.login ?? USERNAME}`}
              className="h-20 w-20 rounded-full border border-slate-700"
            />
            <div>
              <h1 className="text-2xl font-bold">
                Portofolio GitHub {user?.login ?? USERNAME}
              </h1>
              <p className="mt-1 text-slate-300">
                {user?.bio ?? "Koleksi proyek aktif dari GitHub."}
              </p>
              <a
                href={profileUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-sm text-cyan-300 hover:text-cyan-200"
              >
                Lihat profil GitHub →
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm md:w-[280px]">
            <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-3">
              <p className="text-slate-400">Total Repo</p>
              <p className="text-xl font-semibold">{user?.public_repos ?? 0}</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-3">
              <p className="text-slate-400">Total Stars</p>
              <p className="text-xl font-semibold">{totalStars}</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-3">
              <p className="text-slate-400">Followers</p>
              <p className="text-xl font-semibold">{user?.followers ?? 0}</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-3">
              <p className="text-slate-400">Following</p>
              <p className="text-xl font-semibold">{user?.following ?? 0}</p>
            </div>
          </div>
        </div>

        <h2 className="mb-4 text-xl font-semibold">Semua Proyek & Repository</h2>
        {repos.length === 0 ? (
          <p className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-slate-300">
            Data repository belum bisa dimuat saat ini. Coba refresh halaman.
          </p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
          {repos.map((repo) => (
            <article
              key={repo.id}
              className="rounded-xl border border-slate-800 bg-slate-900/50 p-5"
            >
              <div className="mb-2 flex items-start justify-between gap-3">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg font-semibold text-cyan-300 hover:text-cyan-200"
                >
                  {repo.name}
                </a>
                <span className="rounded-md bg-slate-800 px-2 py-1 text-xs text-slate-300">
                  ⭐ {repo.stargazers_count}
                </span>
              </div>
              <p className="mb-4 text-sm text-slate-300">
                {repo.description ?? "Tidak ada deskripsi proyek."}
              </p>
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                <span className="rounded-md border border-slate-700 px-2 py-1">
                  {repo.language ?? "Unknown"}
                </span>
                <span className="rounded-md border border-slate-700 px-2 py-1">
                  Forks: {repo.forks_count}
                </span>
                <span className="rounded-md border border-slate-700 px-2 py-1">
                  Update: {new Date(repo.updated_at).toLocaleDateString("id-ID")}
                </span>
                {repo.homepage ? (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md border border-cyan-700 px-2 py-1 text-cyan-300 hover:text-cyan-200"
                  >
                    Live Demo
                  </a>
                ) : null}
              </div>
            </article>
          ))}
          </div>
        )}
      </section>
    </main>
  );
}
