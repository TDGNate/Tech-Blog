// API Calls for dashboard

// Update A Post 
async function updatePost(title, content, userId, postId) {

  console.log(title, content, userId, postId);

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

      console.log(data);

      if (data.message == "updated") {

        clearForms();

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

        console.log(data);

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