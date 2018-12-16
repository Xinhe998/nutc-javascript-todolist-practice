var input = document.getElementById("thing");
var content = document.getElementById("content");
var x = document.getElementsByClassName("item");

input.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    var div = document.createElement("div");
    div.className = "item";
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "done standard";
    var thing = document.createElement("p");
    var text = document.createTextNode(input.value);
    thing.className = "standard";
    thing.appendChild(text);
    var clean = document.createElement("button");
    var clean_word = document.createTextNode("刪除");
    clean.className = "clean standard";
    clean.appendChild(clean_word);

    div.appendChild(checkbox);
    div.appendChild(thing);
    div.appendChild(clean);
    content.appendChild(div);

    input.value = "";
    for (let i = 0; i < x.length; i++) {
      if (x[i].children[0] != null) {
        x[i].children[0].addEventListener('click', function () {
          if (this.checked) {
            x[i].children[1].style.textDecoration = "line-through";
          } else {
            x[i].children[1].style.textDecoration = "none";
          }
        });
      }

      if (x[i].children[2] != null) {
        x[i].children[2].addEventListener('click', function () {
          x[i].innerHTML = "";
          x[i].style.border = "none";
        });
      }
    }
  }
});