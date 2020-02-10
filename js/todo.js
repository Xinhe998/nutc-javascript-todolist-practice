document.querySelector(".todo__input").addEventListener('keypress', function (e) {
    var key = e.keyCode;
    if (key == 13) {
        var content = this.value;
        if (content) {

            let list_item = document.createElement("li");

            let list_item_child1 = document.createElement("input");
            list_item_child1.type = "checkbox";

            let list_item_child2 = document.createElement("label");
            list_item_child2.innerHTML = content;

            let list_item_child3 = document.createElement("button");

            list_item.appendChild(list_item_child1);
            list_item.appendChild(list_item_child2);
            list_item.appendChild(list_item_child3);

            document.querySelector(".todo__list").appendChild(list_item);

            this.value="";

            list_item_child2.addEventListener("click",function(){
                if(list_item_child1.checked==false){
                    list_item_child1.checked=true;
                }
                else{
                    list_item_child1.checked=false;
                }
            })

            list_item.childNodes[2].addEventListener("click", function () {
                this.parentNode.remove();
            })
        }
    }
})