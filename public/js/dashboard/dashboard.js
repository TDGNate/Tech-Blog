// Dashboard Frontend JS

const dashboardPostContainer = document.getElementById("dashboardPostContainer");

if (dashboardPostContainer) {

  dashboardPostContainer.addEventListener("click", (e) => {
  
    let clickedEl = e.target;

    if (clickedEl.classList.contains("fa-pen-to-square")) {

      let postId = parseInt(clickedEl.parentElement.getAttribute("value"));

      let userId = parseInt(document.getElementById("dashboardUsername").getAttribute("value"));

      console.log(postId, userId);

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