console.log("link");

const sendBtn = document.getElementById("deskCommentBtn");

if (sendBtn) {

  sendBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    // get User's Comment 
    const comment = document.getElementById("deskComment").value;

    // check if the input field is empty 
    if (comment == "") {

      swal({
        title: "Hold up...",
        text: "Can't send anything if there's isn't anything to send silly",
        button: "Ok"
      });

      return;
    }

    // get the value ID from the picked post, so we know which post to send the comment 
    const postId = parseInt(document.querySelector(".picked").getAttribute("value"));

    // Get the User's ID to complete the API call along with the post ID 
    const userId = parseInt(document.querySelector(".home-hello-user").getAttribute("value"));

    deskAddComment(comment, userId, postId);

    console.log(comment, postId, userId);
  });

}