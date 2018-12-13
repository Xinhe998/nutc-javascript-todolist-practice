
document.getElementById("text").addEventListener('keypress', function () {
    if (event.keyCode == 13) {
        //var ul = document.createElement("ul");
        //var li = document.createElement("li");
        var checkbox = document.createElement("INPUT");
        var text = document.createTextNode(document.getElementById("text").value);
        var tr =document.createElement("tr");
        var td =document.createElement("td");
        var span =document.createElement("span");
        span.addEventListener('click',function() {
            tr.remove();
        });
        checkbox.setAttribute("type", "checkbox");
        document.getElementById("table").appendChild(tr);

        checkbox.addEventListener('click',function() {
            if (checkbox.checked==true){
                td.classList.add("tdclass");
            }
            else {
                td.classList.remove("tdclass");
            }
        })
        
        tr.appendChild(td);
        td.appendChild(checkbox);
        td.appendChild(text);
        td.appendChild(span);
        //td.appendChild(ul);
        //ul.appendChild(li);
        //li.appendChild(checkbox);
        //li.appendChild(text);
        //li.appendChild(span);
        
        document.getElementById("table").border = "1px solid #000000";
    }
});
