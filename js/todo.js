function isEnter() {
    if (event.keyCode == 13) {
        var li = document.createElement("li");
        var checkbox = document.createElement("input"); //打勾勾
        checkbox.type = "checkbox";
        checkbox.value = 1;
        var label = document.createElement("label");  //輸入值
        var button = document.createElement("button"); //刪除按鈕         
        label.appendChild(document.createTextNode(document.getElementById("content").value));
        button.appendChild(document.createTextNode("x"));
        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(button);
        document.getElementById("list").appendChild(li);
        document.getElementById("content").value = "";
        button.addEventListener("click", function () {
            this.parentNode.remove();
        });
    }
}
