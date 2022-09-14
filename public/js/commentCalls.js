// Comments

async function getComments(postId) {
  
  if (typeof postId == "number") {

    // console.log("this is a number");

    document.querySelector(".preloader").style.display = "block";

    let coreParent = document.querySelector(".container-comments");

    let domComments = document.querySelectorAll(".comment");

    if ( domComments.length > 0 ) {
      for (i = 0; i < domComments.length; i++) {
        domComments.forEach((com) => {
          com.remove();
        });
      }
    }

    // call api 
    await fetch(`/api/post/${postId}`, {
      method: "GET",
    })
      .then((res) => 
        res.json()
      )
      .then((postData) => {
        console.log(postData);

        comments = postData.comments;

        if (comments == undefined || comments == [] || comments.length == 0) {
          let subTxt = document.querySelector(".comment-sub-text");
          subTxt.style.display = "block";
          setTimeout(() => {
          subTxt.style.display = "none";
            }, 2500);
        }

        setTimeout(() => {
          comments.forEach((com) => {


            // cache the API data 
            let text = com.comment;
            let user = com.user.name;
            let date = com.date_created;
            console.log(text, user, date);
  
            // creating Elements for page 
            let commentDiv = document.createElement("div");
            let commentContentDiv = document.createElement("div");
            let commentBottomDiv = document.createElement("div");
            let commentUserDiv = document.createElement("div");
            let commentDateDiv = document.createElement("div");
            let commentHr = document.createElement("hr");
  
            // adding classes to new Elements 
            commentDiv.classList.add("comment");
            commentContentDiv.classList.add("comment-content");
            commentBottomDiv.classList.add("comment-bottom");
            commentUserDiv.classList.add("comment-name");
            commentDateDiv.classList.add("comment-created");
  
            // Fill Elements with data 
            commentContentDiv.textContent = text;
            commentUserDiv.textContent = user;
            commentDateDiv.textContent = date;
  
            // Append to parent 
            commentDiv.appendChild(commentContentDiv);
            commentDiv.appendChild(commentBottomDiv);
  
            // Append to bottom parent 
            commentBottomDiv.appendChild(commentHr);
            commentBottomDiv.appendChild(commentUserDiv);
            commentBottomDiv.appendChild(commentDateDiv);
  
            // Append to Core parent 
            coreParent.appendChild(commentDiv);
          });
        document.querySelector(".preloader").style.display = "none";

         }, 800);
        
        
      })
    .catch(err => console.log(err));
  } else {
    console.log("not a number");
  }
}