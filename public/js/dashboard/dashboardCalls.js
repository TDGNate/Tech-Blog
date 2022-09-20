// API Calls for dashboard

// Update A Post 
async function updatePost(title, content, userId, postId) {

  await fetch(`/api/post/${postId}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      title: title,
      content: content,
      user_id: userId
    })
  })
    .then((res) => 
    
      res.json()

    )
    .then((data) => {

      // console.log(data); 

      if (data.message == "updated") {

        swal({
          icon: "success",
          text: "Redirecting...",
          button: false
        });

        setTimeout(() => {
          
          swal.close();
          window
          .document
          .location
            .href = "/dashboard";

        }, 1000);
      }
  });
}

// Delete A Post 

async function deletePost(postId) {

    await fetch(`/api/post/${postId}`, {  method: "DELETE" })
      .then((res) =>
        
        res.json()

      )
      .then((data) => {

        // console.log(data); 

        if (data.message == "deleted") {

          swal({
            icon: "success",
            text: "Redirecting...",
            button: false
          });

          setTimeout(() => {

            window
            .document
            .location
              .href = "/dashboard";
  
          }, 1875);

          setTimeout(() => {

            deletePostBtn.removeAttribute("disabled");

          }, 2500);

        }
      });
}

// Update a Comment 
async function updateComment(comment, userId, commentId) {

  await fetch(`/api/comment/${commentId}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      comment: comment,
      user_id: userId
    })
  })
    .then((res) => 
    
      res.json()

    )
    .then((data) => {

      // console.log(data); 

      if (data.message == "updated") {

        swal({
          icon: "success",
          text: "Redirecting...",
          button: false
        });

        setTimeout(() => {
          
          swal.close();
          window
          .document
          .location
            .href = "/dashboard";

        }, 1000);
      }
  });

}

// Delete Comment

async function deleteComment(commentId) {

  await fetch(`/api/comment/${commentId}`, {  method: "DELETE" })
  .then((res) =>
    
    res.json()

  )
  .then((data) => {

    // console.log(data); 

    if (data.message == "deleted") {

      swal({
        icon: "success",
        text: "Redirecting...",
        button: false
      });

      setTimeout(() => {

        window
        .document
        .location
          .href = "/dashboard";

      }, 1875);

      setTimeout(() => {

        deleteCommentBtn.removeAttribute("disabled");

      }, 2500);

    }
  });

}