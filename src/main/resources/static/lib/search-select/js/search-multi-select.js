/**
 * Created by Administrator on 2018/9/24 0024.
 */
$("body").click(function(){
    hide($('.search-select-cls > .options-cls'));
});
function show(dom) {
    dom.css('display','block');
}
function hide(dom) {
    dom.css('display','none');
}
function  SearchSelect(data) {
    var liHeight=30;
    var self = this;
    self.checked=null;
    if (!data.id) {
        console.log('id不能为空');
        return;
    }
    $('#' + data.id).append("<div class='show-cls'></div><input><div class='options-cls'><table></table></div>");
    if (!data.options) {
        console.log('选项为空')
    }
    var id = data.id;
    var options = data.options;
    var divElement = $('#' + id);
    var inputElement = $('#' + id + ' > input');
    var optionsElement=$('#'+id+' > .options-cls');
    var tabElement=$('#'+id+' > .options-cls > table');
    var trElement=$('#'+id+' > .options-cls > table > tr');
    var width=divElement.width();
    divElement.click(function (e) {
        show(optionsElement);
        e.cancelBubble=true;
        e.stopPropagation();
        $('.search-select-cls').each(function () {
            var thisid=$(this).attr("id");
            if(thisid!=id){
               hide( $('#'+thisid+' > .options-cls'))
            }
        })
    })
    var flushTrs=function () {
        tabElement.html('');
        tabElement.height(0);
        if(data.options!=null && data.options.length>0){
            for(var i=0;i<data.options.length;i++){
                var optionId="search_option_"+id+"_"+i;
                var option=data.options[i];
                tabElement.append("<tr id='"+optionId+"'><td value='"+option.val+"'>"+option.text+"</td></tr>")
                var obj = {val:option.val,txt:option.text};
                $('#'+optionId).click(obj,trclick)
            }
            optionsElement.width(width);
            tabElement.width(width-2);
            trElement.width(width-2);
            var trNum=data.options.length>5?5:data.options.length;
            optionsElement.height(trNum*liHeight+15);
        }
    }

    inputElement.change(function () {
        self.checked=null;
    });

    function trclick(e) {
        e.stopPropagation();
        inputElement.val(e.data.txt);
        self.checked=e.data.val;
        hide(optionsElement);
    }
    flushTrs();
}
