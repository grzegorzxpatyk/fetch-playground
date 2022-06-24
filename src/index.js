import "./styles.css";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const app = document.querySelector("#app");

async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await response.json();
}

function renderPosts(posts) {
  app.innerHTML = `<section class="posts">
  <h1>Posts</h1></section>`;
  const postsSection = document.querySelector(".posts");
  postsSection.innerHTML += posts
    .map((post) => {
      return `<article><h2>${capitalizeFirstLetter(post.title)}</h2>
    <p>${post.body}</p>
  </article>`;
    })
    .join("");
}

async function loadPosts() {
  const posts = await fetchPosts();
  renderPosts(posts);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", loadPosts);
} else {
  loadPosts();
}
