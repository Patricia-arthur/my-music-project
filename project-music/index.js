function changeTheme() {
    let body = document.querySelector("body");
    if(body.classList.contains("dark")) {
       body.classList.remove("dark");
    } else {
    body.classList.add("dark");
    }
  }


   let themeButton = document.querySelector(".dark-theme");
   themeButton.addEventListener("click", changeTheme)
