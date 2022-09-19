// API Calls for dashboard 

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
  
          }, 2100);

        }
      });
}