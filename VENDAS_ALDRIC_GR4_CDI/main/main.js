//Slides
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mon-slider", {
    loop: true,

    pagination: {
      el: ".swiper-pagination",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    autoplay: {
      delay: 3000,
    },
  });
});

//Darkmode
let Darkmode = document.querySelectorAll(".dark-button");
Darkmode.forEach(function (item) {
  item.addEventListener("click", function () {
    document.body.classList.toggle("dark");
  });
});

//Menu Burger
let accordions = document.querySelectorAll(".accordeon");
accordions.forEach(function (item) {
  item.addEventListener("click", function () {
    this.classList.toggle("open");
  });
});

//Subscribe
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault("");
  let errorContainer = document.querySelector(".message-error");
  let errorList = document.querySelector(".message-error ul");

  errorList.innerHTML = "";
  errorContainer.classList.remove("visible");

  let pseudo = document.querySelector("#pseudo");

  if (pseudo.value.length < 6) {
    errorContainer.classList.add("visible");
    pseudo.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Le pseudo ne peut pas être inférieur à 6 caractère";

    errorList.appendChild(err);
  } else {
    pseudo.classList.add("success");
  }

  let email = document.querySelector("#email");

  if (email.value === "") {
    errorContainer.classList.add("visible");
    email.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Le champ email ne peut pas être vide";

    errorList.appendChild(err);
  } else {
    email.classList.add("success");
  }

  let passCheck = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
  );
  let password = document.querySelector("#password");

  if (password.value.length < 10 || passCheck.test(password.value) === false) {
    errorContainer.classList.add("visible");
    password.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Le mot de passe doit être chiant à retenir";

    errorList.appendChild(err);
  } else {
    password.classList.add("success");
  }

  let passwordConfirm = document.querySelector("#password2");

  if (
    passwordConfirm.value !== password.value ||
    passwordConfirm.value === ""
  ) {
    errorContainer.classList.add("visible");
    passwordConfirm.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Le mot de passe doit être identique";

    errorList.appendChild(err);
  } else {
    passwordConfirm.classList.add("success");
  }

  let successContainer = document.querySelector(".message-success");
  successContainer.classList.remove("visible");

  if (
    email.classList.contains("success") &&
    pseudo.classList.contains("success") &&
    password.classList.contains("success") &&
    passwordConfirm.classList.contains("success")
  ) {
    successContainer.classList.add("visible");
  }
});

//Tab
function tabNav() {
  const tabButton = document.querySelectorAll(".account_tab_button");
  const tabContent = document.querySelectorAll(".tab_content");

  console.log(tabButton);
  console.log(tabContent);

  tabButton.forEach((button) => {
    button.addEventListener("click", () => {
      tabButton.forEach((btn) => {
        btn.classList.remove("tab_active");
      });
      button.classList.add("tab_active");
      tabContent.forEach((content) => {
        content.classList.remove("tab_active");
      });
      const tabName = button.getAttribute("data-house");
      document.getElementById(tabName).classList.add("tab_active");
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  tabNav();
});
