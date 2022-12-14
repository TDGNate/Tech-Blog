// Dashboard Comment Frontend JS

const dashboardCommentContainer = document.getElementById("dashboardCommentContainer");

if (dashboardCommentContainer) {

  dashboardCommentContainer.addEventListener("click", (e) => { 

    let clickedEl = e.target;

    if (clickedEl.classList.contains("fa-pen-to-square")) {

      let CommentId = parseInt(clickedEl.parentElement.getAttribute("value"));

      let userId = parseInt(document.getElementById("dashboardUsername").getAttribute("value"));

      if (typeof CommentId == "number" && typeof userId == "number") {

        window
        .document
        .location
        .href = `/dashboard/modify-comment/${CommentId}`;

      }
    }
  });
}

// Edit Button

let userCommentViewer = document.querySelector(".modify-comment");
let currentComment = document.querySelector(".selected-comment-user");

let userCommentViewerId;
let currentCommentId;

// Avoid Console Log Errors

if (userCommentViewer) {
  userCommentViewerId = parseInt(userCommentViewer.getAttribute("value"));
}

if (currentComment) {
  currentCommentId = parseInt(currentComment.getAttribute("value"));
}

if (userCommentViewerId !== currentCommentId) {
  if (document.querySelector(".dash-comment-btns-container")) {
    document.querySelector(".dash-comment-btns-container").style.display = "none";
  }

} else {
  if (document.querySelector(".dash-comment-btns-container")) {
    document.querySelector(".dash-comment-btns-container").style.display = "flex";
  }

  const editCommentBtn = document.getElementById("editCommentBtn");

  if (editCommentBtn) {

    const updateForm = document.querySelector(".mod-comment");

    editCommentBtn.addEventListener("click", () => {

      if (editCommentBtn.value == "Edit") {

        editCommentBtn.value = "Hide Form";
        updateForm.style.display = "flex";

      } else {

        editCommentBtn.value = "Edit";
        updateForm.style.display = "none";

      }

    });
  }

  // Update Button

  const updateCommentBtn = document.getElementById("updateCommentBtn");
  const newUpdatedCommentContentForm = document.getElementById("updateCommentMessage");

  if (updateCommentBtn) {
    updateCommentBtn.addEventListener("click", (e) => {

      // Stop Auto Reload 
      e.preventDefault();
      initCommentUpdate();

      clearForms();

    });
  }

  if (newUpdatedCommentContentForm) {
    newUpdatedCommentContentForm.addEventListener("keyup", function (e) {
      if (e.key === "Enter") {
        
        initCommentUpdate();

        clearForms();

      }
    });
  }

  // Delete Button

  const deleteCommentBtn = document.getElementById("deleteCommentBtn");

  if (deleteCommentBtn) {

    deleteCommentBtn.addEventListener("click", () => {

      deleteCommentBtn.setAttribute("disabled", "");

      swal("Are you sure you want to delete this comment?", {
        dangerMode: true,
        buttons: true,
      }).then((data) => {

        if (data) {

          swal({
            text: "Deleting...",
            button: false
          });

          const commentId = parseInt(document.querySelector(".modify-comment-id").getAttribute("value"));

          setTimeout(() => {

            deleteComment(commentId);

            swal.close();

          }, 1200);

        }
      });

    });
  }
}