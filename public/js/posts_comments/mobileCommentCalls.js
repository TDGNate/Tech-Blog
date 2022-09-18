// mobile comments API Calls

async function mobileComments(postId) {
  
  if (typeof postId == "number") {

    document.querySelector(".preloader-mv").style.display = "block";

    // call api 
    await fetch(`/api/post/${postId}`, {
      method: "GET",
    })
    .then((res) => 
    res.json()
    )
      .then((postData) => {

        let phoneContainerComments = document.querySelector(".phone-comment-container");

        let comments = postData.comments;

        // check if there is comments 
        if (comments == undefined || comments == [] || comments.length === 0) {
          let subTxtmv = document.querySelector(".comment-sub-text-mv");
          subTxtmv.style.display = "block";
          document.querySelector(".preloader-mv").style.display = "none";

          setTimeout(() => {
            subTxtmv.style.display = "none";

            }, 2500);
        }

        setTimeout(() => {
          comments.forEach((com) => {

          // cache the API data 
          let text = com.comment;
          let user = com.user.name;
          let date = com.date_created; 

          //  creating elements 
          let commentDivMobile = document.createElement("div");
          let commentContentDivMobile = document.createElement("div");
          let commentBottomDivMobile = document.createElement("div");
          let commentNameDivMobile = document.createElement("div");
          let commentDateDivMobile = document.createElement("div");
          let commentHrDivMobile = document.createElement("hr");

          // giving classes 
          commentDivMobile.classList.add("phone-comment");
          commentContentDivMobile.classList.add("phone-comment-content");
          commentBottomDivMobile.classList.add("phone-comment-bottom");
          commentNameDivMobile.classList.add("phone-comment-name");
          commentDateDivMobile.classList.add("phone-comment-date");

          // add content 
          commentContentDivMobile.textContent = text;
          commentNameDivMobile.textContent = user;
          commentDateDivMobile.textContent = date;

          // append to parent 
          commentDivMobile.appendChild(commentContentDivMobile);
          commentDivMobile.appendChild(commentBottomDivMobile);

          // append to nested parent 
          commentBottomDivMobile.appendChild(commentHrDivMobile);
          commentBottomDivMobile.appendChild(commentNameDivMobile);
          commentBottomDivMobile.appendChild(commentDateDivMobile);

          // append to core parent 
          phoneContainerComments.appendChild(commentDivMobile);

            document.querySelector(".preloader-mv").style.display = "none";

          });

        }, 800);
        
      })
      .catch(err => {
        document.querySelector(".preloader-mv").style.display = "none";
        
        console.log(err);
      });

  } else {
    console.log("The Post Value ID is not a number (Mobile Call)");

    return;
  }
}