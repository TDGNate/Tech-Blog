// Adjust Sizes

// Globals 
let dektpSize = "45%";
let phneSize = "95%";

// Adjusting the widths of each Post in the home page according to the window screensize to overwrite current/previous style changes 

// Desktop Size 
function fixDesktopSize() {

  if (document.querySelectorAll(".phone-comment").length > 0) {

    setTimeout(() => {
    
      location.reload();
  
    }, 450);

  }

  removePicked();

  const containerPosts = document.querySelector(".home-container-posts");

  containerPosts.style.width = "100%";

  let desktopComments = document.querySelector(".post-container-comments");

  desktopComments.style.display = "none";

  let posts = document.querySelectorAll(".post");

  if (posts != undefined) {
    // for (i = 0; i <= posts.length; i++) {
    //   let post = posts[i];
    //   post.style.width = dektpSize;
    // }

    posts.forEach((post) => {
      post.style.width = dektpSize;
    });
  }

}

// Phone Size 
function fixPhoneSize() {

  setTimeout(() => {
    
    location.reload();

  }, 450);

  const containerPosts = document.querySelector(".home-container-posts");

  containerPosts.style.width = "100%";

  const thePickedPost = document.querySelector(".phone-picked");

  thePickedPost.classList.remove("post");

  thePickedPost.style.width = "phneSize";

  let posts = document.querySelectorAll(".post");

  if (posts != undefined) {
    // for (i = 0; i <= posts.length; i++) {
    //   let post = posts[i];
    //   post.style.width = phneSize;
    // }

    posts.forEach((post) => {
      post.style.width = phneSize;
    });
  }
  
}

// Listening to every window Resize 
window.addEventListener("resize", (e) => {
  let w = window.innerWidth;
  if (w < 980) {
    fixPhoneSize();
  } else {
    fixDesktopSize();
    removePicked();
  }
});