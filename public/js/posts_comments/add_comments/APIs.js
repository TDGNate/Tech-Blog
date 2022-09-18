// calling the comment apis

async function deskAddComment(comment, userId, postId) {

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

        resetComments();

        setTimeout(() => {
          
          swal.close();

        }, 1000);


      } else {

        swal({
          title: "uh oh...",
          text: "Hmmm something happened... if it happens again please contact itsnzte@gmail.com",
          button: "Ok"
        });

      }
    })
    .catch((err) => {
    
      swal({
        title: "uh oh...",
        text: "Couldn't send comment, an error occured while trying to make a request",
        button: "Ok"
      });

  });
}

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

