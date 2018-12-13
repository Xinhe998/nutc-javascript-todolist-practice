window.addEventListener('keypress',function(e){
    var todos_text=document.getElementById('todos_text').value;
    if(e.keyCode==13){
        this.document.getElementById('todos_item_div').innerHTML +="<div class='todos_item_data_div'>" +
                                                                        "<table>" +
                                                                            "<tr>" +
                                                                                "<td class='td_image'><a href='#'><img class='checked' src='assets/oval.png' onclick='javascript:checked(this);'/></a></td>" +
                                                                                "<td>" +
                                                                                    "<font class='item_font'>"+todos_text+"</font>" +
                                                                                    "<input type='hidden' value='1' class='item_status'/>" +
                                                                                "</td>" +
                                                                                "<td class='td_image'><a href='#'><img src='assets/error.png' class='error_img' onclick='javascript:remove(this);'/></a></td>" +
                                                                            "</tr>" +
                                                                        "</table>" +
                                                                    "</div>";
        document.getElementById('todos_text').value="";                                                                
    }
});
function checked(obj){
    var index_num=[].indexOf.call(document.querySelectorAll('.checked'),obj);
    if(document.getElementsByClassName('item_status')[index_num].value==1){
        document.getElementsByClassName('checked')[index_num].src='assets/check.png';
        document.getElementsByClassName('item_font')[index_num].style='text-decoration:line-through';
        document.getElementsByClassName('item_status')[index_num].value=0;
    }else{
        document.getElementsByClassName('checked')[index_num].src='assets/oval.png';
        document.getElementsByClassName('item_font')[index_num].style='text-decoration:none';
        document.getElementsByClassName('item_status')[index_num].value=1;
    }
}
function remove(obj){
    var index_num=[].indexOf.call(document.querySelectorAll('.error_img'),obj);
    document.getElementById('todos_item_div').removeChild(document.getElementsByClassName('todos_item_data_div')[index_num]);
}