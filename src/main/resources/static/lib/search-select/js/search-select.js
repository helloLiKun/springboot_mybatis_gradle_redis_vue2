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
    self.id = data.id;
    self.options = data.options;
    self.divElement = $('#' + self.id);
    self.inputElement = $('#' + self.id + ' input');
    self.ulElement=$('#'+self.id+' ul');
    self.flushLis=function () {
        self.ulElement.html('');
        self.ulElement.height(0);
        if(data.options!=null && data.options.length>0){
            for(var i=0;i<data.options.length;i++){
                var option=data.options[i];
                self.ulElement.append("<li "+option.val+">"+option.text+"</li>")
            }
            $('#'+self.id+' ul > li').width(self.ulElement.width()+42);
            var liNum=data.options.length>5?5:data.options.length;
            self.ulElement.height(liNum*liHeight+30);
        }
    }
    self.flushLis();
}
