document.getElementById("homePageBtnClick").addEventListener("click", function() {
  let wrapperPageLogin = document.getElementById("wrapperPageLogin");
  let overlay = document.createElement("div");
  overlay.classList.add("overlay");

  document.body.appendChild(overlay);
  wrapperPageLogin.style.display = "block";

  let closeWrapperLogin = function() {
    overlay.style.display = "none";
    wrapperPageLogin.style.display = "none";
    document.body.removeChild(overlay);
  };

  overlay.addEventListener("click", closeWrapperLogin);
  
  var closeButton = wrapperPageLogin.querySelector(".markx");
  if (closeButton) {
    closeButton.addEventListener("click", closeWrapperLogin);
  }



  let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.   clientWidth;
  let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  let loginBoxWidth = wrapperPageLogin.offsetWidth;
  let loginBoxHeight = wrapperPageLogin.offsetHeight;

  wrapperPageLogin.style.left = (windowWidth - loginBoxWidth) / 2 + "px";
  wrapperPageLogin.style.top = (windowHeight - loginBoxHeight) / 2 + "px";
});

