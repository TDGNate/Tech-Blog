// Dashboard Comment Frontend JS

const dashboardCommentContainer = document.getElementById("dashboardCommentContainer");

if (dashboardCommentContainer) {

  dashboardCommentContainer.addEventListener("click", (e) => { 

    let clickedEl = e.target;

    if (clickedEl.classList.contains("fa-pen-to-square")) {

      let postId = parseInt(clickedEl.parentElement.getAttribute("value"));

      let userId = parseInt(document.getElementById("dashboardUsername").getAttribute("value"));

      if (typeof postId == "number" && typeof userId == "number") {

        window
        .document
        .location
        .href = `/dashboard/modify-comment/${postId}`;

      }
    }
  });
}