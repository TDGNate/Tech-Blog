// Core File

// Global Functions 

// Removes the pick class on any element 
function removePicked() {

  for (i = 0; i < posts.length; i++) {
    let post = posts[i];

    if (post.classList.contains("picked")) {
      post.classList.remove("picked");

      // check if it has the hover effect, if not add the class with hovering 
      if (!post.classList.contains("post-hover")) {
        post.classList.add("post-hover");
      }
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