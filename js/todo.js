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
    var value=document.getElementById("search").value;
    var textnode=document.createTextNode(value);
    var allli=document.getElementsByTagName('li').length;
    image.src="assets/circle.png";
    image2.src="assets/close.png";
    list.appendChild(image);
    list.appendChild(textnode);
    image2.setAttribute("class","img2");
    list.appendChild(image2);
    list.setAttribute("id",allli);
    image.setAttribute("onclick","javascript:imgclick(this);");
    image2.setAttribute("onclick","javascript:imgclick(this);");
    document.getElementById("list").appendChild(list);
}
/*document.getElementById("list").addEventListener('click', function () {
    console.log(this.getElementById);
});*/
function imgclick(obj){
    console.log(obj);
    obj.src="assets/check.png";
}