window.onload = function(){
    var n=1;                                                    //li的id
    document.getElementById("enter").onkeydown = function addEvent(){
        if(event.keyCode == 13){                                //13是Enter鍵
            console.log("send");
            var text = document.getElementById("enter");        //取得input
            var content_text = text.value;                      //取得input內容
            var node = document.createElement("li");            //新增li
            var checkbox = document.createElement("input");     //新增input
            var list = document.createElement("text");          //新增text
            var deletenode = document.createElement("span");    //新增span->X
            checkbox.type = "checkbox";                         //set input type為checkbox
            list.innerHTML = content_text;                      //將字塞進text裡
            deletenode.innerHTML = "X";                         //X
            document.getElementById("memo").appendChild(node);  //增加一個li小孩
            node.setAttribute("id",n);                          //set li id
            node.appendChild(checkbox);                         //li裡的checkbox
            node.appendChild(list);                             //li裡的text
            node.appendChild(deletenode);                       //li裡的X
            checkbox.setAttribute("id","check"+n);              //set checkbox id
            checkbox.setAttribute("onclick","done()");          //set checkbox onclick
            list.setAttribute("id","list"+n);                   //set list id
            n+=1;
            document.getElementById("enter").value="";          //清空input
        }
    }; 
};
function done(n){
    var ischecked = document.getElementById("check"+n);
    var change = document.getElementById("list"+n); 
    if(ischecked.checked){
        change.setAttribute("style","text-decoration:line-through;");   
        console.log("true");
    }else{
        change.setAttribute("style","text-decoration:none;");   
        console.log("false");
    }
};    
