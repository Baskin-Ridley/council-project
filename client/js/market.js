
  async function newItemListing() {
    const response = await fetch('http://localhost:3000/market');
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
      const itemDescription = document.createElement('p');
      const userContainer = document.createElement('div');
      const userProfilePicture = document.createElement('img');
      const userName = document.createElement('p');
  
      // Set the attributes and content for the elements:
      console.log(item.title)
      itemContainer.className = 'item';
      itemPhoto.src = item.img_url;
      itemTitle.textContent = item.title;
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
      itemContainer.appendChild(itemPhoto);
      itemContainer.appendChild(itemDescription);
  
      // Add the item container to the community feed:
      const recylingFeed = document.getElementById('recyling-feed');
      recylingFeed.appendChild(itemContainer);
    });
  }

function newPostPopup(){
    // Get the elements
    const newPostButton = document.getElementById("new-post-button");
    const newPostPopup = document.getElementById("new-post-popup");
    const c lose = document.getElementsByClassName("close")[0];
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
    if (event.target == newPostPopup) {
        newPostPopup.style.display = "none";
    }
    });

    // Handle form submit
    const form = newPostPopup.querySelector('form');
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      console.log("hello");
      console.log(imageURLInput.value)
      const data = {
        title: titleInput.value,
        content: contentInput.value,
        img_url: imageURLInput.value,
        /* username/profile picture get from token*/
        user_id: 1
      };
      console.log(data);
      newPostPopup.style.display = "none";
    
      try {
        const response = await fetch('http://localhost:3000/market/create/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
    
        const responseData = await response.json();
        console.log(responseData);
      } catch (error) {
        console.error(error);
      }
    });  
}

newPostPopup();
newItemListing();


