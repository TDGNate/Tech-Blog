// API call and remove comments page 

async function AddComment(comment, userId, postId, device) {

  // API call to get comments 
  await fetch("/api/comment", {

    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      comment: comment,
      user_id: userId,
      post_id: postId
    })

  })
    .then((res) => {
      if (res.status == "200") {

        swal({
          title: "Sent!",
          text: ";)",
          button: false
        });

        // clearout all the comments 
        resetComments();

        setTimeout(() => {
          
          swal.close();

        }, 1000);

        // get back all the comments
        if ( device == "desktop" ) {

          getComments(postId);
          
        } else if (device == "mobile") {

          mobileComments(postId);
          
        } else return;

      } else {

        swal({
          title: "Uh oh...",
          text: "Hmmm something happened... if it happens again please contact itsnzte@gmail.com",
          button: "Ok"
        });

      }
    })
    .catch((err) => {
    
      swal({
        title: "Uh oh...",
        text: "Couldn't send comment, an error occured while trying to make a request. If it happens again please contact itsnzte@gmail.com",
        button: "Ok"
      });

  });
}

// Function to reset all post's
async function resetComments() {

  // Desktop Remove Comments 
  let commentEls = document.querySelectorAll(".comment");

  if (commentEls) {

    if (commentEls.length > 0) {
      
      commentEls.forEach((com) => {

        com.remove();

      });
    }

  }

  // Phone Remove Comments 
  let phoneCommentsEls = document.querySelectorAll(".phone-comment");

  if (phoneCommentsEls) {
    
    if (phoneCommentsEls.length > 0) {
      phoneCommentsEls.forEach((com) => {

        com.remove();

      });
    }
  
  }
}

