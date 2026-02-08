export async function getGitHubRepos() {
  // Busca os 6 repositórios mais recentes e públicos
  const res = await fetch("https://api.github.com/users/VinPaulo/repos?sort=updated&per_page=6", {
    next: { revalidate: 3600 } // Cache de 1 hora
  });
  
  if (!res.ok) throw new Error("Falha ao carregar repositórios");
  return res.json();
}