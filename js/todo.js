function myFunction() {
    if(event.keyCode == 13) {
    var node = document.createElement("Li");
    var text =document.getElementById("todo").value;
    var textnode = document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("dolist").appendChild(node);
    }
}
