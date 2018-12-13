function isEnter() {
    if (event.keyCode == 13) {
        var node = document.createElement("LI");
        var value = document.getElementById("content").value;
        var textnode = document.createTextNode(value);
        node.appendChild(textnode);
        document.getElementById("list").appendChild(node);
    }
}