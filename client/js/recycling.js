const getPayload = () => {
  const token = window.localStorage.getItem("token")
  if(!token) return false
  const parts = token.split(".")
  if (parts.length < 3) return false
  return JSON.parse(atob(parts[1]))
}
let userId = getPayload().sub
//console.log(userId)

const newPostBtn = document.getElementById("new-post-btn");
const deletePostBtn = document.getElementById("delete-post-btn");

// Add event listener for the "New Post" button
newPostBtn.addEventListener("click", function() {
  // TODO: Implement logic for adding a new post
});

// Add event listener for the "Delete Post" button
deletePostBtn.addEventListener("click", function() {
  // TODO: Implement logic for deleting a post
});
