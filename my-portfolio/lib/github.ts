export async function getPinnedRepos() {
  const username = "Ramadhan930";
  
  // List nama repo sesuai gambar kamu
  const pinnedNames = [
    "API-Gateaway-for-Micro-SaaS", // Perhatikan ejaan 'Gateaway' (pake 'e') sesuai gambar kamu
    "Backend-new",
    "nagari-garagahan-profile-web",
    "My-Portofolio-web",
  ];

  try {
    // 1. Fetch repo personal
    const resPersonal = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`);
    const reposPersonal = await resPersonal.json();

    // 2. Fetch repo dari organisasi Asah-2025 (karena Backend-new ada di sana)
    const resOrg = await fetch(`https://api.github.com/orgs/Asah-2025/repos?per_page=100`);
    const reposOrg = resOrg.ok ? await resOrg.json() : [];

    // Gabungkan semua repo
    const allRepos = [...reposPersonal, ...reposOrg];

    // Filter dengan sangat teliti
    const filtered = allRepos.filter((repo: any) => {
      return pinnedNames.some(name => 
        name.toLowerCase() === repo.name.toLowerCase()
      );
    });

    // Hilangkan duplikat jika ada
    const uniqueRepos = Array.from(new Map(filtered.map(item => [item.name.toLowerCase(), item])).values());

    return uniqueRepos.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      language: repo.language,
      topics: repo.topics || []
    }));
  } catch (error) {
    console.error("Github Fetch Error:", error);
    return [];
  }
}