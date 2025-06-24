const username = 'octocat'; // Replace with your GitHub username
const profileCard = document.getElementById('profile-card');

fetch(`https://api.github.com/users/${username}`)
  .then(res => {
    if (!res.ok) throw new Error("GitHub profile not found");
    return res.json();
  })
  .then(data => {
    profileCard.innerHTML = `
      <img src="${data.avatar_url}" alt="${data.login}'s avatar">
      <h2>${data.name || data.login}</h2>
      <p>${data.bio || "No bio available."}</p>
      <span>Repos: ${data.public_repos}</span>
      <span>Followers: ${data.followers}</span>
    `;
  })
  .catch(err => {
    profileCard.innerHTML = `<p>Error loading profile: ${err.message}</p>`;
  });
