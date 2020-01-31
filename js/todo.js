var input = document.getElementsByClassName("form__input");
var list = document.getElementById("js-list");
var d = 0;
input[0].focus();    
function add_todo() {
    var todo = input[0].value;
    if (todo != '') {
        var li = document.createElement("LI");
        var label = document.createElement("label");
        var checkbox = document.createElement("input");
        var button = document.createElement("button");
        var box_block = document.createElement("div")
        var button_block = document.createElement("div");
        var text = document.createElement("span");
        var all_list = list.children;
        text.append(todo);
        text.setAttribute("class","list__text");
        box_block.append(checkbox,label,text);
        box_block.setAttribute("class","list__left")
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("class","list__box");
        label.setAttribute("class","box__pic");
        button.setAttribute("class","list__delete");
        button.setAttribute("onclick","delete_todo(this),del_count()");
        button_block.appendChild(button);
        button_block.setAttribute("class","list__right")
        li.setAttribute("class", "list__item");
        li.append(box_block, button_block);
        list.appendChild(li);
        input[0].value = null;
        
        for(var i=0;i<all_list.length+d;i++){
            checkbox.setAttribute("id","box"+i);
            label.setAttribute("for","box"+i);
        }

    }
    else{
        return;
    }
};
function delete_todo(btn){
    var li = btn.parentNode.parentNode;
    list.removeChild(li);
};
function del_count(){
    d+=1;
    console.log(d);
    return d;
}