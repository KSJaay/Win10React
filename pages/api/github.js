const handler = async (req, res) => {
  try {
    if (Date.now() - github.last > 3600000) {
      let githubReq = await fetch("https://api.github.com/users/KSJaay/repos");
      if (githubReq.status !== 200) {
        return res.status(200).json(githubReq.repos);
      }
      githubReq = await githubReq.json();
      github.repos = [];
      for (let i = 0; i < githubReq.length; i++) {
        let repo = githubReq[i];
        github.repos.push({
          name: repo.name,
          stars: repo.stargazers_count,
          url: repo.html_url,
          description: repo.description,
          size: repo.size,
          language: repo.language,
          forks: repo.forks_count,
        });
      }
      github.last = Date.now();
      return res.status(200).json(githubReq.repos);
    } else {  
      return res.status(200).json(github.repos);
    }
  } catch (err) {
    console.log(err);
    return res.status(200).json(github.repos);
  }
};
