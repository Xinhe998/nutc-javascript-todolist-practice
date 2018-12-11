var item_num=0;
window.addEventListener('keypress',function(e){
    var todos_text=document.getElementById('todos_text').value;
    if(e.keyCode==13){
        if(todos_text==''){
            this.alert('請輸入代辦事項');
        }else{
            this.document.getElementById('todos_item_div').innerHTML +="<div class='todos_item_data_div'>" +
                                                                            "<table>" +
                                                                                "<tr>" +
                                                                                    "<td class='td_image'><a href='javascript:checked("+item_num+");'><img class='checked' src='assets/oval.png'/></a></td>" +
                                                                                    "<td>" +
                                                                                        "<font class='item_font'>"+todos_text+"</font>" +
                                                                                        "<input type='hidden' value='1' class='item_status'/>" +
                                                                                    "</td>" +
                                                                                    "<td class='td_image'><a href='#'><img src='assets/error.png' class='error_img'/></a></td>" +
                                                                                "</tr>" +
                                                                            "</table>" +
                                                                        "</div>";
            item_num++;
        }
    }
});

function checked(num){
    if(document.getElementsByClassName('item_status')[num].value==1){
        document.getElementsByClassName('checked')[num].src='assets/check.png';
        document.getElementsByClassName('item_font')[num].style='text-decoration:line-through';
        document.getElementsByClassName('item_status')[num].value=0;
    }else{
        document.getElementsByClassName('checked')[num].src='assets/oval.png';
        document.getElementsByClassName('item_font')[num].style='text-decoration:none';
        document.getElementsByClassName('item_status')[num].value=1;
    }

}


