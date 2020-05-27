const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}
const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')



function newTodo() {
	let list = $('#input').val();
	//let itemCountSpan = parseInt($('#item-count').text(), 10)
	let length= $("#todo-list").children().filter(":not(:hidden)").length
	if(false){
		alert('You need a todo of @ least 3 letters')
	} else {
	  $('#todo-list').append($(`<li class=${classNames.TODO_ITEM}><input type='checkbox' class=${classNames.TODO_CHECKBOX}><label>` + list + "</label><button>delete</button></li>"));
	  $("#item-count").html(length+1);	
	  $(document).on('click','li button', function(){
      //delete item********************   
		$(this).parent().fadeOut('slow');  
       $("#item-count").html($("#todo-list").children().filter(":not(:hidden)").length-1);
      	  var $b = $('input[type=checkbox]');
      
      // $("#unchecked-count").html($b.filter(":not(:checked)").filter(":not(:hidden)").length-1);	 
      
    $b.change(function() {
    if(this.checked) {
        //Do stuff
      $("#unchecked-count").html($b.filter(":not(:checked)").filter(":not(:hidden)").length-1);	    
    } else {

      
    }
});
      
      
      
	  });
	  var $b = $('input[type=checkbox]');
    $b.change(function() {
    if(this.checked) {
        //Do stuff
      $("#unchecked-count").html($b.filter(":not(:checked)").filter(":not(:hidden)").length);	
      
    } else {
       $("#unchecked-count").html($b.filter(":not(:checked)").filter(":not(:hidden)").length);	
    }
});
	  $("#unchecked-count").html($b.filter(":not(:checked)").filter(":not(:hidden)").length);	
	  }
  list = $('#input').val('');
}
