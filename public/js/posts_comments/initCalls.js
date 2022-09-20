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

  postsContainer.addEventListener("click", async (e) => {

    removePicked();

    let w = window.innerWidth;
    let post = e.target;

    // check if user is logged in 
    let homeUserTag = document.querySelector(".home-hello-user");

    if (!homeUserTag) {
      
        swal({
          title: "Oi...",
          text: "You must sign in first",
          button: false
        });
      
      setTimeout(() => {

        swal({
          text: "Redirecting...",
          button: false
        });

      }, 1600);
      
      setTimeout(() => {
        
        window
        .document
        .location
          .href = "/login";

      }, 2255);

      return;

    }

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
      post.classList.remove("post-hover");
      let onePostId = parseInt(post.getAttribute("value"));
      post.classList.add("picked");
      let postPicked = document.querySelector(".picked");
      postPicked.style.maxHeight = "320px"; 

      // change link for viewing full post 
      let deskViewFullPost = document.getElementById("deskViewFullPost");

      deskViewFullPost.href = `dashboard/post/${onePostId}`;
        
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
      newPickPost.setAttribute("value", elValue);
      newPickPost.querySelector(".picked-pt").textContent = elTitle;
      newPickPost.querySelector(".picked-pc").textContent = elContent;
      newPickPost.querySelector(".picked-pu").textContent = elUser;
      newPickPost.querySelector(".picked-pcr").textContent = elCreated;

      let mobilePostId = parseInt(elValue);

      // change link for viewing full post 
      let phneViewFullPost = document.getElementById("phneViewFullPost");

      phneViewFullPost.href = `dashboard/post/${mobilePostId}`;

      mobileComments(mobilePostId);

    }
  });
}