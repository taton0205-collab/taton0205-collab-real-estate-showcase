const OWNER = "taton0205-collab";
const REPO = "taton0205-collab-real-estate-showcase";
const BRANCH = "main";
const FILE_PATH = "data/properties.json";

async function githubRequest(path: string, init?: RequestInit) {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    throw new Error("Falta configurar la variable de entorno GITHUB_TOKEN");
  }
  const res = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      ...(init?.headers ?? {}),
    },
    cache: "no-store",
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GitHub API error ${res.status}: ${text}`);
  }
  return res.json();
}

export async function getPropertiesFile(): Promise<{ content: unknown[]; sha: string }> {
  const data = await githubRequest(`contents/${FILE_PATH}?ref=${BRANCH}`);
  const decoded = Buffer.from(data.content, "base64").toString("utf-8");
  return { content: JSON.parse(decoded), sha: data.sha as string };
}

export async function savePropertiesFile(properties: unknown[], sha: string, message: string) {
  const content = Buffer.from(JSON.stringify(properties, null, 2) + "\n", "utf-8").toString("base64");
  return githubRequest(`contents/${FILE_PATH}`, {
    method: "PUT",
    body: JSON.stringify({ message, content, sha, branch: BRANCH }),
  });
}
