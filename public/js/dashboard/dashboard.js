// Core Dashboard File 

// Initializes the Post Update Request 
function initPostUpdate() {

      // Get the values of the form 
      let newUpdatedPostTitle = document.querySelector(".mod-dashboard-post-create-title").value;
    
      let newUpdatedPostContent = document.getElementById("updatePostMessage").value;
  
      // Get User Id 
      let userId = parseInt(document.querySelector(".selected-post-user").getAttribute("value"));
  
      // Get Post Id
      let postId = parseInt(document.querySelector(".selected-mod-post-title").getAttribute("value"));
  
      swal({
        text: "Updating...",
        button: false
      });
  
      setTimeout(() => {
        
        updatePost(newUpdatedPostTitle, newUpdatedPostContent, userId, postId);
  
      }, 1000);
  
}

// Initializes the Comment Update Request 
function initCommentUpdate() {

      // Get the values of the form 
      let newUpdatedCommentContent = document.getElementById("updateCommentMessage").value;
  
      // Get User Id 
      let userId = parseInt(document.querySelector(".selected-comment-user").getAttribute("value"));
  
      // Get Post Id
      let commentId = parseInt(document.querySelector(".modify-comment-id").getAttribute("value"));
  
      swal({
        text: "Updating...",
        button: false
      });
  
      setTimeout(() => {
        
        updateComment(newUpdatedCommentContent, userId, commentId);
  
      }, 1000);

 }

// Function to Clears all forms 
function clearForms() {

  // Mod Post Page 
  let modifiedPostTitle = document.querySelector(".mod-dashboard-post-create-title");
  let modifiedPostMessage = document.getElementById("updatePostMessage");

  if (modifiedPostTitle) {

    modifiedPostTitle.value = "";

  }

  if (modifiedPostMessage) {

    modifiedPostMessage.value = "";
  }
  
}
