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

const editCommentBtn = document.getElementById("editCommentBtn");

if (editCommentBtn) {

  const updateForm = document.querySelector(".mod-comment");

  editCommentBtn.addEventListener("click", () => {

    if (editCommentBtn.value == "Edit") {

      editCommentBtn.value = "Hide Form";
      console.log("worked");
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
  newUpdatedCommentContentForm.addEventListener("keyup", function(e) {
    if (e.key === "Enter") {
        
      initCommentUpdate();

      clearForms();

    }
});
}