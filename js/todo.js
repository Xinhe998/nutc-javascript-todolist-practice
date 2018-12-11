document.onkeydown=function(event){
var code = event.keyCode;
if(document.getElementById("search").value!="")
    if (code==13)
    list();
}
function list(){
    //console.log(document.getElementById("search").value);
    /*var node=document.createElement("li");
    var value=document.getElementById("search").value;
    var textnode=node.appendChild(document.createTextNode(value));
    document.getElementById("list").appendChild(textnode);*/
    var list=document.createElement("li");
    var image=document.createElement("img");
    var image2=document.createElement("img");
    image.src="assets/circle.png";
    var value=document.getElementById("search").value;
    var textnode=document.createTextNode(value);
    list.appendChild(image);
    list.appendChild(textnode);
    image2.src="assets/close.png";
    image2.setAttribute("class","img2");
    list.appendChild(image2);
    document.getElementById("list").appendChild(list);
}
