// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  const errorModal = document.getElementById("modal");
  const hearts = document.querySelectorAll(".like-glyph");

  // Make sure the error modal is hidden initially
  errorModal.classList.add("hidden");

  // Add a click event listener to each heart
  hearts.forEach(heart => {
    heart.addEventListener("click", () => {
      mimicServerCall()
        .then(() => {
          // Toggle between empty and full heart
          if (heart.innerText === FULL_HEART) {
            heart.innerText = EMPTY_HEART;
            heart.classList.remove("activated-heart");
          } else {
            heart.innerText = FULL_HEART;
            heart.classList.add("activated-heart");
          }
        })
        .catch((error) => {
          // Display the error modal and show error message
          errorModal.classList.remove("hidden");
          errorModal.querySelector("#modal-message").innerText = error;
          // Hide the error modal after 3 seconds
          setTimeout(() => {
            errorModal.classList.add("hidden");
          }, 3000);
        });
    });
  });
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
