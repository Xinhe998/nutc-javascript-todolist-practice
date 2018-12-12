
document.getElementById("text").addEventListener('keypress', function () {
    if (event.keyCode == 13) {
        var li = document.createElement("li");
        var li = document.createElement("button");
        var text = document.createTextNode(document.getElementById("text").value);
        li.appendChild(text);
        document.getElementById("lu").appendChild(li);
    }
});