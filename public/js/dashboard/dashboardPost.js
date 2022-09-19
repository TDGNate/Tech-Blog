// Dashboard Post Frontend JS

const dashboardPostContainer = document.getElementById("dashboardPostContainer");

if (dashboardPostContainer) {

  dashboardPostContainer.addEventListener("click", (e) => {
  
    let clickedEl = e.target;

    if (clickedEl.classList.contains("fa-pen-to-square")) {

      // Get Post ID and user ID 
      let postId = parseInt(clickedEl.parentElement.getAttribute("value"));

      let userId = parseInt(document.getElementById("dashboardUsername").getAttribute("value"));

      let doubleCheckUser = parseInt(e.target.getAttribute("value"));

      if (userId == doubleCheckUser) {

        window
          .document
          .location
          .href = `/dashboard/modify-post/${postId}`;

      } else return;
    }
  });
}

// Edit Button

let userPostViewer = document.querySelector(".modify-post");
let currentPost = document.querySelector(".selected-post-user");

let userPostViewerId;
let currentPostId;

// To Avoid Console Logs Errors

if (userPostViewer) {
  userPostViewerId = parseInt(userPostViewer.getAttribute("value"));
}

if (currentPost) {
  currentPostId = parseInt(currentPost.getAttribute("value"));
}

if (userPostViewerId !== currentPostId) {

  if (document.querySelector(".dash-post-btns-container")) {
    document.querySelector(".dash-post-btns-container").style.display = "none";
  }
  
} else {

  if (document.querySelector(".dash-post-btns-container")) {
    document.querySelector(".dash-post-btns-container").style.display = "flex";
  }

  const editPostBtn = document.getElementById("editPostBtn");

  if (editPostBtn) {

    const updateForm = document.querySelector(".mod-post");

    editPostBtn.addEventListener("click", () => {

      if (editPostBtn.value == "Edit") {

        editPostBtn.value = "Hide Form";
        console.log("worked");
        updateForm.style.display = "flex";

      } else {

        editPostBtn.value = "Edit";
        updateForm.style.display = "none";

      }

    });
  }

  // Update Button

  const updatePostBtn = document.getElementById("updatePostBtn");
  const newUpdatedPostContentForm = document.getElementById("updatePostMessage");

  if (updatePostBtn) {
    updatePostBtn.addEventListener("click", (e) => {

      // Stop Auto Reload 
      e.preventDefault();
      initPostUpdate();

      clearForms();

    });
  }

  if (newUpdatedPostContentForm) {
    newUpdatedPostContentForm.addEventListener("keyup", function (e) {
      if (e.key === "Enter") {
        
        initPostUpdate();

        clearForms();

      }
    });
  }

  // Delete Button

  const deletePostBtn = document.getElementById("deletePostBtn");

  if (deletePostBtn) {

    deletePostBtn.addEventListener("click", () => {

      deletePostBtn.setAttribute("disabled", "");

      swal({
        title: "Are you sure you want to delete this post?",
        button: true
      }).then((data) => {
        if (data) {

          swal({
            text: "Deleting...",
            button: false
          });

          const postId = parseInt(document.querySelector(".selected-mod-post-title").getAttribute("value"));

          setTimeout(() => {

            deletePost(postId);

            swal.close();

          }, 1200);

        }
      });

    });
  }
}

const createPostBtn = document.getElementById("createPostBtn");

if (createPostBtn) {

  createPostBtn.addEventListener("click", () => {
    setTimeout(() => {

      createPostBtn.setAttribute("disabled", "");

      setTimeout(() => {
  
        createPostBtn.removeAttribute("disabled");
        
      }, 1950);
      
    }, 500);
  });
}