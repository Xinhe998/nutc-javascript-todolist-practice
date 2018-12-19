window.onload = function () {
    var num = 1;
    document.getElementById("textbox").addEventListener("keyup", function (event) {
        // event.preventDefault();
        if (event.keyCode === 13 && event.target.value != "") {
            var ul = document.getElementById("list_ul");
            var li = document.createElement("li");
            var checkbox = document.createElement("input");
            var delete_icon = new Image(18, 18);

            delete_icon.src = "./assets/delete.png";
            delete_icon.setAttribute("style", "float:right; margin-top:11px; margin-right:10px; cursor:pointer");
            delete_icon.setAttribute("id", "delete_li" + num);
            delete_icon.setAttribute("onclick", "delete_li(" + num + ")");

            checkbox.type = "checkbox";
            checkbox.setAttribute("id", "checkbox_" + num);
            checkbox.setAttribute("onclick", "change_input(" + num + ")");

            li.appendChild(checkbox);
            li.setAttribute("id", "li_" + num);
            li.appendChild(document.createTextNode(document.getElementById("textbox").value));
            ul.appendChild(li);
            li.appendChild(delete_icon);
            document.getElementById("textbox").value = "";
            num = num + 1;
            console.log(num);
        }
    });


}
function change_input(num) {
    var li_text = document.getElementById("li_" + num);
    var checkbox = document.getElementById("checkbox_" + num);
    if (checkbox.checked) {
        li_text.setAttribute("style", "text-decoration:line-through;");
    }
    else {
        li_text.setAttribute("style", "text-decoration:none;");
    }
}
function delete_li(num) {
    var delete_li = document.getElementById("li_" + num);
    delete_li.parentNode.removeChild(delete_li);
}