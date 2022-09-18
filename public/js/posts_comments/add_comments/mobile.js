console.log("link");

const sendBtnMobile = document.getElementById("phneBtn");

// For no console log errors 
if (sendBtnMobile) {

   sendBtnMobile.addEventListener("click", initMobileComments);

}

async function initMobileComments() {

  let device = "mobile";

   // get User's Comment 
   const commentMobile = document.getElementById("phneComment").value;

   // check if the input field is empty 
   if (commentMobile == "") {
 
     swal({
       title: "Hold up...",
       text: "Can't send anything if there's isn't anything to send silly",
       button: "Ok"
     });
 
     return;
  }

  const postIdMobile = parseInt(document.querySelector(".phone-picked").getAttribute("value"));

  // Get the User's ID to complete the API call along with the post ID 
  const userIdMobile = parseInt(document.querySelector(".home-hello-user").getAttribute("value"));

  // console.log(commentMobile, postIdMobile, userIdMobile);  

  AddComment(commentMobile, userIdMobile, postIdMobile, device); 

  document.getElementById("phneComment").value = "";
  
}
