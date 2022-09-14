// Adjust Sizes

// Globals 
let dektpSize = "45%";
let phneSize = "95%";

// Adjusting the widths of each Post in the home page according to the window screensize to overwrite current/previous style changes 

// Desktop Size 
function fixDesktopSize() {

  let posts = document.querySelectorAll(".post");

    for (i = 0; i <= posts.length; i++) {
      let post = posts[i];
      post.style.width = dektpSize;
    }

}

// Phone Size 
function fixPhoneSize() {

  let posts = document.querySelectorAll(".post");

    for (i = 0; i <= posts.length; i++) {
      let post = posts[i];
      post.style.width = phneSize;
    }
  
}

// Listening to every window Resize 
window.addEventListener("resize", (e) => {
  let w = window.innerWidth;
  if (w < 980) {
    fixPhoneSize();
  } else {
    fixDesktopSize();
  }
});