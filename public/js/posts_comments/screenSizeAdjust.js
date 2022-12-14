// Adjust Sizes

// Globals 
let dektpSize = "45%";
let phneSize = "95%";

// Adjusting the widths of each Post in the home page according to the window screensize to overwrite current/previous style changes 

// Desktop Size 
function fixDesktopSize() {

  const containerPosts = document.querySelector(".home-container-posts");
  const pickedPostMobileContainer = document.querySelector(".home-container-picked");

  let postPicked = document.querySelector(".picked");

  if (postPicked) {
    postPicked.style.maxHeight = "240px";
  }

  let posts = document.querySelectorAll(".post");

  if (posts != undefined) {

    posts.forEach((post) => {

      // Resizing the Post for Desktop
      if (post.style.width == phneSize) {
        post.style.width = dektpSize;

      }

    });
  }

  let phoneComments = document.querySelectorAll(".phone-comment");

  // if there are comments on the mobile side, refresh on desktop so comments to duplicate when resized back to mobile 
  if (phoneComments.length > 0) {

      setTimeout(() => {
        location.reload();
      }, 123);

  }

  if (pickedPostMobileContainer.style.display === "block" ) {

    pickedPostMobileContainer.style.display = "none";
    containerPosts.style.display = "flex";

  }

  removePicked();

  hideDesktopCommentsSec();

  // Adjusting Container and Elements for Desktop
  containerPosts.style.width = "100%";
  postsContainer.style.width = "100%";
  commentContainer.style.display = "none";

}

// Phone Size 
function fixPhoneSize() {

  let postPicked = document.querySelector(".picked");

  if (postPicked) {
    postPicked.style.maxHeight = "350px";
  }

  hideDesktopCommentsSec();

  // Adjusting Container and Elements for mobile 
  const containerPosts = document.querySelector(".home-container-posts");

  containerPosts.style.width = "100%";

  const thePickedPost = document.querySelector(".phone-picked");

  thePickedPost.classList.remove("post");

  thePickedPost.style.width = "phneSize";

  let posts = document.querySelectorAll(".post");

  if (posts != undefined) {

  // Resizing the Post for Mobile 
    posts.forEach((post) => {
      if (post.style.width == dektpSize) {
        post.style.width = phneSize;

        setTimeout(() => {
          location.reload();
        }, 123);
        
      }
    });
  }
  
}

// Listening to every window Resize 
window.addEventListener("resize", (e) => {
  
  let w = window.innerWidth;
  let is_root = location.pathname == "/";

  setTimeout(() => {
    
    if (w < 980 && is_root) {
  
      fixPhoneSize();
    } else if (w > 980 && is_root) {
  
      fixDesktopSize();
    } else {
  
      return;
    }

  }, 350);
});