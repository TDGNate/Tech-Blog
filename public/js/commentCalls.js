// Comments

function getComments(postId) {

  if (typeof postId == "number") {
    console.log("this is a number");

    fetch(`/api/post/${postId}`, {
      method: "GET",
    })
      .then((res) => 
        res.json()
      )
      .then((postData) => {
        console.log(postData);

        let comments = postData.comments;
        // console.log(comments);

        comments.forEach((com) => {
          let text = com.comment;
          let user = com.user.name;
          let date = com.date_created;
          console.log(text, user, date);
        });
        
      })
    .catch(err => console.log(err));
  } else {
    console.log("not a number");
  }
}