// Core File 

// Globals

// Container for Posts 
const postsContainer = document.querySelector(".home-container-posts");

// Container For Comments 
const commentContainer = document.querySelector(".post-container-comments");

// X Btn for Comments 
const commentXBtn = document.querySelector(".x");

// All posts 
let posts = document.querySelectorAll(".post");

// Check if Null 

if (commentXBtn) {

  commentXBtn.addEventListener("click", () => {
    removePicked();
  });

}

// Check if Null 
if (postsContainer) {

  postsContainer.addEventListener("click", (e) => {

    removePicked();

    let w = window.innerWidth;
    let post = e.target;

    if (e.target.className == "home-container-posts") {
      removePicked();
      return;
    } else if (e.target.classList.contains("picked") || e.target == document.querySelector("picked")) {
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
      let postPicked = document.querySelector(".picked");
      postPicked.style.maxHeight = "320px"; 
    
      getComments(onePostId);

    } else {

      // getting all contents for clicked post 
      let elValue = post.getAttribute("value");
      let elTitle = post.querySelector(".post-title").textContent;
      let elContent = post.querySelector(".post-content").textContent;
      let elUser = post.querySelector(".post-user").textContent;
      let elCreated = post.querySelector(".post-created").textContent;

      // hide the home container 
      postsContainer.style.display = "none";
      commentContainer.style.display = "none";
      document.querySelector(".home-container-picked").style.display = "block";

      // Exchange the contents from picked post into new element 
      let newPickPost = document.querySelector(".phone-picked");

      // Updaing all values 
      newPickPost.querySelector(".picked-pt").textContent = elTitle;
      newPickPost.querySelector(".picked-pc").textContent = elContent;
      newPickPost.querySelector(".picked-pu").textContent = elUser;
      newPickPost.querySelector(".picked-pcr").textContent = elCreated;

      let mobilePostId = parseInt(elValue);

      mobileComments(mobilePostId);

    }

  });
}

// Removes the pick class on any element 
function removePicked() {

  for (i = 0; i < posts.length; i++) {
    let post = posts[i];

    if (post.classList.contains("picked")) {
      post.classList.remove("picked");
      post.style.cssText = "border: none";
      post.style.width = "45%";
      postsContainer.style.width = "100%";
      commentContainer.style.display = "none";

    }
  }

}

// hides the desktop comment section 
function hideDesktopCommentsSec() {

  let desktopComments = document.querySelector(".post-container-comments");

  desktopComments.style.display = "none";
}

hideDesktopCommentsSec();