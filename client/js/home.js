// // //////// Hamburger menu on click event to pull out sidebar animation START /////////////
document.querySelector(".hamburger-menu").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("change")
  })
  
  /////////// Hamburger menu on click event to pull out sidebar animation END /////////////
  
  const logOut = document.querySelector("#logout")
  logOut.addEventListener("click", (e)=>{
      e.preventDefault()
      removeTokenFromLocalStorage()
  })
  const signOut = document.querySelector("#signout")
  signOut.addEventListener("click", (e)=>{
      e.preventDefault()
      removeTokenFromLocalStorage()
  })

  const removeTokenFromLocalStorage = () =>{
    window.localStorage.removeItem("token")
    window.localStorage.removeItem("permission")
    window.location.assign("index.html")
}
