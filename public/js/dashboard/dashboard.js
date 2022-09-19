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

// Function to Clears all forms 
function clearForms() {

  // Mod Post Page 
  document.querySelector(".mod-dashboard-post-create-title").value = "";
  document.getElementById("updatePostMessage").value = "";

}
