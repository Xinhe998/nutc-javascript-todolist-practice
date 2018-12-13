function noNumbers(){
    const todoInputDOM = document.getElementById('listinput');
    todoInputDOM.addEventListener('keydown', event => {
        if (event.keyCode === 13 && event.target.value) {
            // 在這裡新增待辦項目...
            var li=document.createElement("li");
            var inputValue=document.getElementById("listinput").value;
            var t =document.createTextNode(inputValue);
            li.appendChild(t);
            document.getElementById("myUL").appendChild(li);
            document.getElementById("listinput").value="";
            var span =document.createElement("SPAN");
            var txt=document.createTextNode("\u00D7");
            span.className="close";
            span.appendChild(txt);
            li.appendChild(span);
            span.onclick=function(){
                var div=this.parentElement;
                div.style.display="none";
            }    
        }
    });
}