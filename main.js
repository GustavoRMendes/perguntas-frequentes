const span = document.querySelector("span");
const dd = document.querySelector("dd");

span.addEventListener("click", () => {
  dd.classList.toggle("ativo");
});
