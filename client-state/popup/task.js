const modalClose = document.querySelector(".modal__close");
const modal = document.querySelector(".modal");

if (!getCookie("modalUnopened")) {
  modal.classList.add("modal_active");
}

modalClose.addEventListener("click", () => {
  modal.classList.remove("modal_active");
  document.cookie = "modalUnopened=modal";
});

function getCookie(name) {
  const value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
}