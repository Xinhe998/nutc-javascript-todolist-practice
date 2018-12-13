function myFunction() {
    if (event.keyCode == 13) {
        var node = document.createElement("Li"); //create a li
        var text = document.getElementById("todo").value; //get inputbox's value
        var check = document.createElement("INPUT"); //create a input
        check.setAttribute("type", "checkbox"); //set type as checkbox
        var label = document.createElement("label"); //create a lable
        var textnode = document.createTextNode(text); //create a textNode with text
        var btn = document.createElement("BUTTON"); //create a button
        var btntext = document.createTextNode("x"); //create a textNode with X

        node.appendChild(check);//append checkbox element
        label.appendChild(textnode);
        node.appendChild(label);//append label element
        document.getElementById("dolist").appendChild(node); //append li element under dolist ul
        btn.appendChild(btntext);
        btn.setAttribute("class", "deleteBtn"); //set button class as seleteBtn
        node.appendChild(btn); //append button element

        document.getElementById("todo").value = ""; //clear inputbox's value

        //when user click button, delete this li
        btn.addEventListener("click",
            function () {
                this.parentNode.remove();
            })

    }

}