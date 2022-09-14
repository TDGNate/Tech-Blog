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
        
      })
    .catch(err => console.log(err));
  } else {
    console.log("not a number");
  }
}