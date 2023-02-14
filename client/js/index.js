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
  