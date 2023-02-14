const item = {
    photo: "https://placekitten.com/200/200",
    title: "Item Title",
    description: "Item description goes here.",
    user: {
      profilePicture: "https://placekitten.com/200/300",
      username: "JohnDoe"
    }
  };

function newItemListing(){
  
  const itemContainer = document.createElement("div");
  const itemPhoto = document.createElement("img");
  const itemTitle = document.createElement("h2");
  const itemDescription = document.createElement("p");
  const userContainer = document.createElement("div");
  const userProfilePicture = document.createElement("img");
  const userName = document.createElement("p");
  
  // Set the attributes and content for the elements:
  itemContainer.className = "item";
  itemPhoto.src = item.photo;
  itemTitle.textContent = item.title;
  itemDescription.textContent = item.description;
  userContainer.className = "user";
  userProfilePicture.src = item.user.profilePicture;
  userName.textContent = item.user.username;
  
  // Add the user profile picture and username to the user container:
  userContainer.appendChild(userProfilePicture);
  userContainer.appendChild(userName);
  
  // Add all elements to the item container:
  itemContainer.appendChild(userContainer);
  itemContainer.appendChild(itemTitle);

  itemContainer.appendChild(itemPhoto);
  itemContainer.appendChild(itemDescription);
  
  // Add the item container to the community feed:
  const recylingFeed = document.getElementById("recyling-feed");
  recylingFeed.appendChild(itemContainer);
}

newItemListing();
newItemListing();

