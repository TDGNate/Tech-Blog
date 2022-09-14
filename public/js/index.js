// Core

const postsContainer = document.querySelector(".home-container-posts");
const commentContainer = document.querySelector(".post-container-comments");

postsContainer.addEventListener("click", (e) => {
  let w = window.innerWidth;

  if (w >= 980) {
    postsContainer.style.width = "60%";
    commentContainer.style.display = "block";
    e.target.style.cssText = "border: 1px solid var(--light-clr)";
    e.target.style.width = "91%";
    // e.target.style.border = "1px solid var(--light-clr)";

  }
  let post = e.target;
  console.log(post);
});