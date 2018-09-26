/**
 * Created by Administrator on 2018/9/24 0024.
 */

function  SearchSelect(data) {
    var liHeight=30;
    var self = this;
    if (!data.id) {
        console.log('id不能为空');
        return;
    }
    $('#' + data.id).append("<input><ul></ul>");
    if (!data.options) {
        console.log('选项为空')
    }
    var id = data.id;
    var options = data.options;
    var divElement = $('#' + id);
    var inputElement = $('#' + id + ' input');
    var ulElement=$('#'+id+' ul');
    var lis =$('#'+id+' ul > li');
    var flushLis=function () {
        ulElement.html('');
        ulElement.height(0);
        if(data.options!=null && data.options.length>0){
            for(var i=0;i<data.options.length;i++){
                var option=data.options[i];
                ulElement.append("<li value='"+option.val+"'>"+option.text+"</li>")
            }
            lis.width(ulElement.width());
            var liNum=data.options.length>5?5:data.options.length;
            ulElement.height(liNum*liHeight+15);
        }
    }
    flushLis();
}
