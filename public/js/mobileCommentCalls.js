// mobile comments api Calls


async function mobileComments(postId) {
  if (typeof postId == "number") {
    console.log("this is a num");

  let phoneComents = document.querySelectorAll(".phone-comment-content");

    // call api 
    await fetch(`/api/post/${postId}`, {
      method: "GET",
    })
    .then((res) => 
    res.json()
    )
      .then((postData) => {
        console.log(postData);
      });

  } else {
    console.log("not");
  }
}