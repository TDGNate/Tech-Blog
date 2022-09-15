// Adjust Sizes

// Globals 
let dektpSize = "45%";
let phneSize = "95%";

// Adjusting the widths of each Post in the home page according to the window screensize to overwrite current/previous style changes 

// Desktop Size 
function fixDesktopSize() {

  const allMobileComments = document.querySelectorAll(".phone-comment");
  const pickedPostMobileContainer = document.querySelector(".home-container-picked");
  
  if (allMobileComments.length > 0 || pickedPostMobileContainer.style.display === "block" ) {

    setTimeout(() => {
    
      location.reload();
  
    }, 50);

  }

  removePicked();

// Also Check if Null 
   
  let isHome = isHomeContainers();

  if (isHome) {

    const containerPosts = document.querySelector(".home-container-posts");

    containerPosts.style.width = "100%";

    let desktopComments = document.querySelector(".post-container-comments");

    desktopComments.style.display = "none";

  }



  let posts = document.querySelectorAll(".post");

  if (posts != undefined) {

    posts.forEach((post) => {
      post.style.width = dektpSize;
    });
  }

}

// Phone Size 
function fixPhoneSize() {

  let posts = document.querySelectorAll(".post");

  if (posts != undefined) {

    posts.forEach((post) => {
      if (post.style.width == dektpSize) {
        post.style.width = phneSize;
      }
    });
  }

  if (document.querySelector(".post-container-comments")) {
    document.querySelector(".post-container-comments").style.display = "none";
  }


  const containerPosts = document.querySelector(".home-container-posts");

  containerPosts.style.width = "100%";

  const thePickedPost = document.querySelector(".phone-picked");

  thePickedPost.classList.remove("post");

  thePickedPost.style.width = "phneSize";
  
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

  }, 900);
  

});