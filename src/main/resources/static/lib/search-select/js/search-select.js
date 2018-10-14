/**
 * Created by Administrator on 2018/9/24 0024.
 */
$("body").click(function(){
    $('.search-select-cls > div').css('display','none');
});
function  SearchSelect(data) {
    var liHeight=30;
    var self = this;
    if (!data.id) {
        console.log('id不能为空');
        return;
    }
    $('#' + data.id).append("<input><div><table></table></div>");
    if (!data.options) {
        console.log('选项为空')
    }
    var id = data.id;
    var options = data.options;
    var divElement = $('#' + id);
    var inputElement = $('#' + id + ' > input');
    var optionsElement=$('#'+id+' > div');
    var tabElement=$('#'+id+' > div > table');
    var trElement=$('#'+id+' > div > table > tr');
    var width=divElement.width();
    divElement.click(function (e) {
        optionsElement.css('display','block');
        e.cancelBubble=true;
        e.stopPropagation();
        $('.search-select-cls').each(function () {
            var thisid=$(this).attr("id");
            if(thisid!=id){
                $('#'+thisid+' > div').css('display','none');
            }
        })
    })
    var flushTrs=function () {
        tabElement.html('');
        tabElement.height(0);
        if(data.options!=null && data.options.length>0){
            for(var i=0;i<data.options.length;i++){
                var option=data.options[i];
                tabElement.append("<tr><td click='"+trclick()+"' value='"+option.val+"'>"+option.text+"</td></tr>")
            }
            optionsElement.width(width);
            tabElement.width(width-2);
            trElement.width(width-2);
            var trNum=data.options.length>5?5:data.options.length;
            optionsElement.height(trNum*liHeight+15);
        }
    }
    function trclick(e) {
        console.log('--click  val---------->'+e)
    }
    flushTrs();
}
