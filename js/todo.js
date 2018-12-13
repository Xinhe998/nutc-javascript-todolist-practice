function myFunction() {
    if(event.keyCode == 13) {
    //checkbox
    var check = document.createElement("INPUT");
    check.setAttribute("type", "checkbox");
    document.getElementById("dolist").appendChild(check);
    //list
    var node = document.createElement("Li");
    var text =document.getElementById("todo").value;
    var textnode = document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("dolist").appendChild(node);
    //deleteButton
    var btn = document.createElement("BUTTON");
    var t = document.createTextNode("x");
    btn.appendChild(t);
    document.getElementById("dolist").appendChild(btn);

    }
}
