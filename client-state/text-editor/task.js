const editor = document.getElementById("editor");
const button = document.getElementById("button");
// проверка на наличие значения в textarea
editor.value = localStorage.getItem("editorValue");
// добавлене значения textarea в localStorage
editor.addEventListener("input", () => {
  localStorage.setItem("editorValue", editor.value);
});
// удаление localStorage и значения textarea
button.onclick = function () {
  localStorage.removeItem("editorValue");
  editor.value = "";
};