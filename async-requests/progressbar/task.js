const progress = document.getElementById("progress");
let form = document.getElementById("form");
let file = document.getElementById("file");

document.forms.form.onsubmit = function () {
  let input = this.elements.file;
  let file = input.files[0];
  if (file) {
    upload(file);
  }
  return false;
};
function upload(file) {
  var xhr = new XMLHttpRequest();
  xhr.upload.onprogress = function (event) {
    progress.value = event.loaded / event.total;
  };

  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
  xhr.send(file);
}
