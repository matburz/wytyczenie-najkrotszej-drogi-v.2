var TodoRenderer = (function (renderer) {

    var _listRoot = null;
	

    renderer.renderList = function (todos) {
        _initializeRoot();

        for (var i = 0; i < todos.length; i++) {
			_createTodoItem(todos[i]);
        }
    };

    function _initializeRoot() {
        if (!_listRoot) {
            _listRoot = document.querySelector('#todo-list-root');
        } else {
            _clearItems();
        }
    }

    function _clearItems() {
        while (_listRoot.firstChild) {
            _listRoot.removeChild(_listRoot.firstChild);
        }
    }

    function _createTodoItem(todo) {
        _listRoot.innerHTML += _createTodoFromTemplate(todo);
    }
	
	function _calculatedTodo(todo) {
		_listRoot.innerHTML += _calculatedTemplate(todo);
	}

    function _createTodoFromTemplate(todo) {
        return `<div class="panel panel-default todo-item">
					<div class="panel-heading">
						Współrzędne lokalizacji nr ${todo.id}
					</div>
					<div class="panel-body">
						<div class="row">
							<div class="col-sm-8">
								<p class="todo-description">
									${todo.description}
								</p>
							</div>
							<div class="col-sm-2">
								<button type="submit" class="btn btn-block btn-danger" onclick="TodoView.deleteTodo(${todo.id});">
									Usuń
								</button>
							</div>
						</div>
					</div>
				</div>`;
    }
	
	function _calculatedTemplate(todo) {
		return `<div class="panel panel-default todo-item">
					<div class="panel-heading">
						Wytyczona droga
					</div>
					<div class="panel-body">
						<div class="row">
							<div class="col-sm-8">
								<p class="todo-description">
									${todo.description}
								</p>
							</div>
							<div class="col-sm-2">
							</div>
						</div>
					</div>
				</div>`;
	}

    return renderer;

})(TodoRenderer || {});