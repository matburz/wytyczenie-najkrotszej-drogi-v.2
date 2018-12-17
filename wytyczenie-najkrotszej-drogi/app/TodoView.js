var TodoView = (function(view) {

    var _addTodoInput1 = document.querySelector('#todo-input1');
	var _addTodoInput2 = document.querySelector('#todo-input2');

    view.getTodos = function() {
        return TodoService.getTodos();
    }

    view.addTodo = function() {
				
		var _addTodoInput1Text = _addTodoInput1.value;
		var _var1 = parseInt(_addTodoInput1Text);
		
		var _addTodoInput1Text2 = _addTodoInput2.value;
		var _var2 = parseInt(_addTodoInput1Text2);
	
		if(isNaN(_var1) || isNaN(_var2)) {
			alert("Wprowadz tylko liczby!") 
		} else {	
			var _added = _addTodoInput1.value + ',' +  _addTodoInput2.value
			console.log(_added.split(","));
			
			TodoService.addTodo(_added);
			_addTodoInput1.value = '';
			_addTodoInput2.value = '';
			updateView();
			
		}
		
		
    };

    view.deleteTodo = function(todoId) {
        TodoService.deleteTodo(todoId);
        updateView();
    };

    /*view.changeState = function(checkbox, todoId) {
        TodoService.changeState(checkbox.checked, todoId);
        updateView();
    };*/
	
	view.calculateTodo = function() {
		TodoService.calculateTodo(); 
		updateView();
	}

    function updateView() {
        TodoRenderer.renderList(TodoService.getTodos());
    }

    return view;

})(TodoView || {});

document.addEventListener("DOMContentLoaded", function(event) {
    TodoRenderer.renderList(TodoView.getTodos());
});