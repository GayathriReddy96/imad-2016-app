//counter
var button=document.getElementbyId('counter');
var counter=0;
button.onClick=function(){
    counter=counter+1;
    var span=document.getElementbyId('count');
    span.InnerHTML=counter.toString();
};
