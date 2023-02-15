let clickSignup = () => {
    document.querySelector(".login").style = "transform:translateX(-90%);";
    document.querySelector(".signup").style = "transform:translateX(0);";
    document.querySelector("#undertab").style = "left:null;right:0;";
  };
  
  let clickLogin = () => {
    document.querySelector(".login").style = "transform:translateX(0)";
    document.querySelector(".signup").style = "transform:translateX(90%);";
    document.querySelector("#undertab").style = "right:null; left:0;";
  };
  
  const form = document.getElementById("signup-btn")
  form.addEventListener('click', registerForm) 
  function registerForm (){
    const userData = {
      username: document.getElementById("signup-username").value,
      password: document.getElementById("signup-pswd").value,
    }

  const sendRegistration = async () => {
    try {

      const options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: userData["username"],
            password: userData["password"]
        })
    }

    const response = await fetch("http://localhost:3000/register", options);
    const data = await response.json();
    if (response.status == 201) {
      alert("Registered!");}

      document.querySelector("#signup-username").value = ""
      document.querySelector("#signup-pswd").value = ""
    } catch (err) {
      console.log(err)
    }
  }
  sendRegistration()
}


document.getElementById("login-btn").addEventListener("click", async () => {
  const userData = {
    username: document.getElementById("login-username").value,
    password: document.getElementById("login-pswd").value,
  }

  const options = {
      method: "POST",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: userData["username"],
        password: userData["password"]
      })
  }

  const response = await fetch("http://localhost:3000/login", options);
  const data = await response.json();

  if (response.status == 200) {

      localStorage.setItem("token", data.token)
      window.location.assign("library.html")
    
  } else {
      alert(data.error);
  }
})
