const h1 = document.querySelector("#heading");

h1.onclick = function (e) {
  e.stop();
  console.log(e);
};
