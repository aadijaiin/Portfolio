import fs from "fs";

const GITHUB_USERNAME = "aadijaiin";

function authHeaders(token?: string) {
  return {
    Accept: "application/vnd.github+json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

async function fetchReadme(repo: string, token?: string) {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_USERNAME}/${repo}/readme`,
      {
        headers: {
          Accept: "application/vnd.github.raw+json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      }
    );

    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  }
}

async function fetchRepos() {
  const token = process.env.PAT_GITHUB; // optional

  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=pushed&direction=desc`,
    { headers: authHeaders(token) }
  );

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`GitHub API failed (repos): ${res.status} ${res.statusText} ${body}`.trim());
  }

  const data = await res.json();
  const filtered = data.filter((r: any) => !r.fork);

  const TOP_N = 6;

  const enriched = await Promise.all(
    filtered.map(async (repo: any, i: number) => {
      if (repo.description || i >= TOP_N) return repo;

      // README endpoint may be private-rate-limited without auth; token helps but is optional
      const readme = await fetchReadme(repo.name, token);
      if (!readme) return repo;

      // ... keep your extractDescription logic ...
      return repo;
    })
  );

  return enriched;
}

async function fetchUser(token?: string) {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}`,
    { headers: authHeaders(token) }
  );

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Failed to fetch user: ${res.status} ${res.statusText} ${body}`.trim());
  }

  const data = await res.json();

  const createdYear = new Date(data.created_at).getFullYear();
  const currentYear = new Date().getFullYear();

  return {
    avatar: data.avatar_url,
    years: Math.max(currentYear - createdYear, 1),
    projects: data.public_repos,
  };
}

async function main() {
  const token = process.env.PAT_GITHUB; // optional now

  const [repos, user] = await Promise.all([fetchRepos(), fetchUser(token)]);

  const output = {
    user,
    repos,
    updatedAt: new Date().toISOString(),
  };

  fs.writeFileSync("./src/data/github.json", JSON.stringify(output, null, 2));
  console.log("✅ GitHub data updated");
}

main();