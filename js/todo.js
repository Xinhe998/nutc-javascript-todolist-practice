window.onload = function() {
    var box_content = document.getElementsByClassName("keyboxVal")[0]; //取得inputbox
    var ul = document.getElementById("List_ul"); //取得ul
    box_content.focus();
    var children_sum = 0;
    box_content.addEventListener("keyup", function(e) { //按enter即新增待辦事項
        if (e.target.value != "" && e.keyCode === 13) {
            var li = document.createElement("li"); //創建一個li
            children_sum += 1; //id編號累加
            var checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.value = 1; //預設不勾
            var img = new Image(16, 16);
            img.src = './assets/garbage.png';
            ul.appendChild(li); //在ul底下append li
            li.appendChild(checkbox); //再append li內容checkbox
            li.appendChild(img); //再append li內容 垃圾桶
            li.appendChild(document.createTextNode(e.target.value)); //再append li內容text
            li.setAttribute("id", "element" + children_sum); //設定此次新增的li id
            checkbox.setAttribute("id", "check" + children_sum); //設定此次新增的li裡的checkbox id
            checkbox.setAttribute("style", "margin-left:2%;margin-right:5%;");
            checkbox.setAttribute("onclick", "textstyle_change(" + children_sum + ")"); //設定click執行之function
            img.setAttribute("id", "img" + children_sum); //設定此次新增的li裡的img id
            img.setAttribute("style", "position:relative;left:80%;top:10%;z-index:1"); //設定trash can 位置
            img.setAttribute("onclick", "javascript:removeNode(" + children_sum + ")")
            e.target.value = "";
            box_content.value = e.target.value;
            // img.style.setProperty('--set_trashcan', cal + '%')
        }
    });


}

function textstyle_change(val) { //checkbox change取得值 對應至各id編號 
    var check_node = document.getElementById("check" + val); //取的checkbox id
    var li_text = document.getElementById("element" + val); //取的li id
    if (check_node.checked) {
        li_text.setAttribute("style", "text-decoration:line-through;");
    } else {
        li_text.setAttribute("style", "text-decoration:none;");
    }

};

function removeNode(val) { //remove li
    var li = document.getElementById("element" + val); //取的li id
    li.parentNode.removeChild(li); //刪除li

};