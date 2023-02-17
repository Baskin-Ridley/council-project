const getPayload = () => {
  const token = window.localStorage.getItem("token")
  if(!token) return false
  const parts = token.split(".")
  if (parts.length < 3) return false
  return JSON.parse(atob(parts[1]))
}

let userId = getPayload().sub
console.log(userId)

// // //////// Hamburger menu on click event to pull out sidebar animation START /////////////
document.addEventListener("DOMContentLoaded", () => {

  document.querySelector(".hamburger-menu").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("change")
  })
})

/////////// Hamburger menu on click event to pull out sidebar animation END /////////////




  async function newItemListing() {
    const response = await fetch('http://localhost:3000/landscape');
    const data = await response.json();
    console.log(data)

    data.forEach(async item => {
      console.log(item)
      
      let responseID = await fetch('http://localhost:3000/user/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_id:item.user_id
        })
      });
      let dataID = await responseID.json();
      console.log(dataID)

      const itemContainer = document.createElement('div');
      const itemPhoto = document.createElement('img');
      const itemTitle = document.createElement('h2');
      const itemDate = document.createElement('div')
      const itemDescription = document.createElement('p');
      const userContainer = document.createElement('div');
      const userProfilePicture = document.createElement('img');
      const userName = document.createElement('p');
      const deleteButton = document.createElement('button');

      deleteButton.className = 'delete-button';
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = function () {
        deletePost(item.marketplace_id);
      };
      console.log(item.user_id)
      deleteButton.style.display = item.user_id === userId ? 'block' : 'none'; // Show the delete button if the user id matches
  
      // Set the attributes and content for the elements:
      console.log(item.title)
      itemContainer.className = 'item';
      itemPhoto.src = item.img_url;
      itemTitle.textContent = item.title;
      itemDate.textContent = item.activity_date.slice(0, 10);
      itemDescription.textContent = item.content;
      userContainer.className = 'user';
      userProfilePicture.src = dataID.profile_pic;
      userName.textContent = dataID.username;
  
      // Add the user profile picture and username to the user container:
      userContainer.appendChild(userProfilePicture);
      userContainer.appendChild(userName);
  
      // Add all elements to the item container:
      itemContainer.appendChild(userContainer);
      itemContainer.appendChild(itemTitle);
      itemContainer.appendChild(itemDate);
      itemContainer.appendChild(itemPhoto);
      itemContainer.appendChild(itemDescription);
      itemContainer.appendChild(deleteButton);
  
      // Add the item container to the community feed:
      const recylingFeed = document.getElementById('recyling-feed');
      recylingFeed.appendChild(itemContainer);
    });
  }

  async function deletePost(id){
    console.log("hello", id)
    const response = await fetch("http://localhost:3000/event/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        marketplace_id: id
      }),
    });
    location.reload()
    console.log("deleted")
  }

  function newPostPopup() {
    // Get the elements
    const newPostButton = document.getElementById("new-post-button");
    const newPostPopup = document.getElementById("new-post-popup");
    const close = document.querySelector(".close");
    const titleInput = document.getElementById("title");
    const contentInput = document.getElementById("content");
    const imageURLInput = document.getElementById("imageURL");
  
    // Add event listeners
    newPostButton.addEventListener("click", () => {
            newPostPopup.style.display = "block";
    });
  
    close.addEventListener("click", () => {
      newPostPopup.style.display = "none";
    });
  
    window.addEventListener("click", (event) => {
      if (event.target === newPostPopup) {
        newPostPopup.style.display = "none";
      }
    });
  
    // Handle form submit
    const form = newPostPopup.querySelector("form");
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
  
      const data = {
        title: titleInput.value,
        content: contentInput.value,
        img_url: imageURLInput.value,
        user_id: userId, // get user_id from the token
      };
      console.log(data)

      newPostPopup.style.display = "none";
  
      try {
        const response = await fetch("http://localhost:3000/event/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
  
        const responseData = await response.json();
        console.log(responseData);
      } catch (error) {
        console.error(error);
      }
      location.reload();

    });
  }
  document.addEventListener("DOMContentLoaded", () => {
    newItemListing();
    newPostPopup();
  });

module.exports = {
  getPayload,
  newItemListing,
  deletePost,
  newPostPopup,
  userId
}
