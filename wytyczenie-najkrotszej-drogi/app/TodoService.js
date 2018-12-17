var TodoService = (function(service) {

    var _todos = []; 
	
	var tab1 = [];
	var tab2 = [];
	var wynik = [];

    service.getTodos = function() {
        return _todos;
    }

    service.addTodo = function(description) {
		_todos.push(new Todo(description));
    }
	
	service.calculateTodo = function() {
		
		for(var i = 0; i < _todos.length; i++) {
			var dane = _todos[i].description.split(",");
			
			tab1[i] = dane[0];
			tab2[i] = dane[1]
			
			wynik = [];
			
			for(var x = 0; x < tab1.length - 1; x++) {
				for(var y = 1; y < tab1.length; y++) {
					if(tab1[x] !== tab1[y] && tab2[x] !== tab2[y]) {
							wynik[y] = Math.sqrt((tab1[x] - tab1[y])*(tab1[x] - tab1[y]) + (tab2[x] - tab2[y])*(tab2[x] - tab2[y]));
							
							if(!isNaN(wynik[y])) {
								wynik.push(wynik[y]);
								let unique = [...new Set(wynik)];
								if(unique[y] !== null) {
									console.log("odleglosci miedzy " + _todos[x].description + " a " + _todos[y].description + ": " + unique[y]);
									console.log("-------------------------------------");
								}
								
							}
					} else {
						console.log("nie porownuje tych samych");
					}
					
					
					
				}
				

			}
			
		}
		
	}
	
    service.deleteTodo = function(todoId) {
        _todos = _todos.filter(function(todo) {
            return todo.id !== todoId;
        });
    }

    return service;

})(TodoService || {});