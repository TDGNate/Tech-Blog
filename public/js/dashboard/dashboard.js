// Dashboard Frontend JS

const dashboardPostContainer = document.getElementById("dashboardPostContainer");

if (dashboardPostContainer) {

  dashboardPostContainer.addEventListener("click", (e) => {
  
    let clickedEl = e.target;

    if (clickedEl.classList.contains("fa-pen-to-square")) {

      // get all the elements from selected post 
      let postTitle = clickedEl.parentElement.querySelector(".dashboard-post-title").textContent;
      let postContent = clickedEl.parentElement.querySelector(".dashboard-post-content").textContent;
      let postDate = clickedEl.parentElement.querySelector(".dashboard-post-date").textContent;
      let postUser = document.getElementById("dashboardUsername");

      // Get Post ID and user ID 
      let postId = parseInt(clickedEl.parentElement.getAttribute("value"));

      let userId = parseInt(document.getElementById("dashboardUsername").getAttribute("value"));



      let doubleCheckUser = parseInt(e.target.getAttribute("value"));


      if (userId == doubleCheckUser) {

        // displaySelectedPost(postTitle, postContent, postUser, postDate, postId, userId);

        window
          .document
          .location
          .href = `/dashboard/modify-post/${postId}`;

      } else return;
    }
  });
}

// async function displaySelectedPost(title, content, user, date, postId, userid) {

//   setTimeout(() => {

//     let newTitle = document.querySelector("selected-mod-post-title");

//     if (newTitle) {
    
//       // Get all elements 
//       let newContent = document.querySelector("selected-post-content");
//       let newUser = document.querySelector("selected-post-user");
//       let newDate = document.querySelector("selected-post-date");
  
//       // Change all elements 
//       newTitle.textContent = title;
//       newContent.textContent = content;
//       newUser.textContent = user;
//       newDate.textContent = date;

//       // set values 
//       let newPostValue = document.querySelector(".selected-mod-post");
//       let newUserValue = document.querySelector(".selected-post-user");

//       newPostValue.setAttribute(value, postId);
//       newUserValue.setAttribute(value, userid);
  
//       }
      
//   }, 1000);


// }