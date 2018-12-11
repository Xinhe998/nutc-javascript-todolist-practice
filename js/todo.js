document.onkeydown=function(event){
var code = event.keyCode;
if(document.getElementById("search").value!="")
    if (code==13)
    list();
}
function list(){
    //console.log(document.getElementById("search").value);
    var node=document.createElement("li");
    var value=document.getElementById("search").value;
    var textnode=document.createTextNode(value);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);

}
