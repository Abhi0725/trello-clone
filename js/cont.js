var app = angular.module('trelloApp',[]);

app.controller('trelloController', function($scope){
		
		$scope.orders = [{id: '1', priority: '1', items: '5', address: '26 mount apt, vasant kunj', delivered: false},
						{id: '2', priority: '2', items: '3', address: '98 valley apt, vasanti kunj', delivered: false},
						{id: '3', priority: '5', items: '10', address: '33 sushant lok, gurgaon', delivered: false},
						{id: '4', priority: '4', items: '3', address: '98 valley apt, vasanti kunj', delivered: false},
						{id: '5', priority: '3', items: '4', address: 'fcdfgj ygyg uih', delivered: false},
						{id: '6', priority: '8', items: '1', address: 'pogghf jygdr jhyjdsd', delivered: false},
						{id: '7', priority: '6', items: '9', address: 'lorem ipsum porem', delivered: false},
						{id: '8', priority: '7', items: '5', address: 'porem mennum latem', delivered: false}
						];
		
		$scope.getTotalTodos = function(){
			  return $scope.todos.length;
			}
		
		$scope.AddTodo = function(){
			  $scope.todos.push({task: $scope.todoTask, done: false});
			  $scope.todoTask = '';
			}
			
		$scope.remove = function(){
			  $scope.todos = _.filter($scope.todos, function(todo){
				  return !todo.done;											 
				});
			}
			
		$scope.remaining = function(){
			  $scope.remtodos = _.filter($scope.todos, function(todo){
				  return !todo.done;											 
				});
			  $scope.remainingTasks = $scope.remtodos.length;
			  return $scope.remainingTasks;
			}
			
	});