//判斷鍵盤觸發enter事件
document.onkeydown=function(event){
var code = event.keyCode;
if(document.getElementById("search").value!="")
    if (code==13)
    list();
}
//累計li的id
var row=0;

function list(){
    var ls=document.createElement("li");
    var image=document.createElement("img");
    var image2=document.createElement("img");
    var value=document.getElementById("search").value;
    var textnode=document.createTextNode(value);

    image.src="assets/circle.png";
    image.setAttribute("name","0");
    image.setAttribute("onclick","javascript:imgclick(this);");
    image2.src="assets/close.png";
    image2.setAttribute("name","2");
    image2.setAttribute("class","img2");
    image2.setAttribute("onclick","javascript:imgclick(this);");

    ls.appendChild(image);
    ls.appendChild(textnode);
    ls.appendChild(image2);
    ls.setAttribute("id",row);

    document.getElementById("list").appendChild(ls);
    row++;
    document.getElementById("search").value="";
}
function imgclick(obj){
    var f=obj.parentNode;
    
    if(obj.name==0){
        obj.name=1;
        obj.src="assets/check.png";
        document.getElementById(f.id).style.textDecoration="line-through";
    }else if(obj.name==1){
        obj.name=0;
        obj.src="assets/circle.png";
        document.getElementById(f.id).style.textDecoration="none";
    }else{
        document.getElementById(f.id).remove(1);
    }
}