function event_OK(){
    if(this.checked==true){
        this.nextElementSibling.classList.add("OK");
    }else{
        this.nextElementSibling.classList.remove("OK");
    }
}
function event_remove(){
    var remo=this.parentElement;
    this.parentElement.parentElement.removeChild(remo);
}
document.querySelector("input[type=text]").addEventListener("keypress",function(){
   if(event.keyCode==13){
        var list=document.createElement("li");
        var checkbox=document.createElement("input");
        checkbox.type="checkbox";
        checkbox.addEventListener("click",event_OK);
        var span=document.createElement("span");
        span.innerHTML=this.value;
        var close=document.createElement("span");
        close.innerHTML="X";
        close.classList.add("close");
        close.addEventListener("click",event_remove);
        list.appendChild(checkbox);
        list.appendChild(span);
        list.appendChild(close);
        document.querySelector("ul").appendChild(list);
        this.value="";
   }
});