var listContainer = $('#list');
var addNewTask = $('#add_new_task');
var newTask = $('#new_task');
var list = [];
function listPaint (){
   listContainer.empty();
   for(i=0; i<list.length; i++){
        
        var listItem = $(list[i]);
        listItem.hover(function(e) {
           var target = e.target;
           var doneTarget = $(target).find('button');
           doneTarget.slideDown();
       }, function(e) {
           var target = e.target;
           var doneTarget = $(target).find('button');
           doneTarget.slideUp();
       });
       listContainer.append(listItem);
   }
};
listPaint();

addNewTask.on('submit', function(e){
   e.preventDefault();
   var newTaskVal = newTask.val();
   if (newTaskVal){
       var newli = '<li class="listItem">' + newTaskVal + '<button class="done"> </button></li>';
       list.push(newli);
       listPaint();
       newTaskVal = newTask.val('');
   } else{alert('enter task')};
   

//var buttonDone = $('button.done');


});
listContainer.click(function(e){
    if(e.target.nodeName==='BUTTON'){
        var target = $(e.target);
        var liTarget = target.closest('li');
        var index = liTarget.index();
        list.splice(index, 1);
        listPaint();}
    });