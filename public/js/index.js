// Core

const postsContainer = document.querySelector(".home-container-posts");
const commentContainer = document.querySelector(".post-container-comments");
const commentXBtn = document.querySelector(".x");

commentXBtn.addEventListener("click", () => {
  removePicked();
});

postsContainer.addEventListener("click", (e) => {

  removePicked();

  let w = window.innerWidth;
  let post = e.target;

  if (e.target.className == "home-container-posts") {
    removePicked();
    return;
  }

  if (w >= 980) {
    postsContainer.style.width = "60%";
    commentContainer.style.display = "block";
    post.style.cssText = "border: 1px solid var(--light-clr)";
    post.style.width = "91%";
    let onePostId = parseInt(post.getAttribute("value"));
    post.classList.add("picked");
    
    getComments(onePostId);

  } else {

    // getting all contents for clicked post 
    let elTitle = post.querySelector(".post-title").textContent;
    let elContent = post.querySelector(".post-content").textContent;
    let elUser = post.querySelector(".post-user").textContent;
    let elCreated = post.querySelector(".post-created").textContent;
    
    console.log(elTitle, elContent, elUser, elCreated);
  }

  console.log(post);
});

function removePicked() {
  let posts = document.querySelectorAll(".post");

  for (i = 0; i < posts.length; i++) {
    let post = posts[i];

    if (post.classList.contains("picked")) {
      post.classList.remove("picked");
      post.style.cssText = "border: none";
      post.style.width = "45%";
    }
  }

  postsContainer.style.width = "100%";
  commentContainer.style.display = "none";
}

removePicked();