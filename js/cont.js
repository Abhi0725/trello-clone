var app = angular.module('trelloApp',[]);

app.controller('trelloController', function($scope){
		$scope.newPriority = '';
		$scope.newItems = '';
		$scope.newAddress = '';
		
		$scope.orders = [{id: '1', priority: '1', items: '5', address: '26 mount apt, vasant kunj', delivered: false},
						{id: '2', priority: '2', items: '3', address: '98 valley apt, vasanti kunj', delivered: false},
						{id: '3', priority: '4', items: '10', address: '33 sushant lok, gurgaon', delivered: false},
						{id: '4', priority: '4', items: '3', address: '98 valley apt, vasanti kunj', delivered: false},
						{id: '5', priority: '3', items: '4', address: 'fcdfgj ygyg uih', delivered: false},
						{id: '6', priority: '8', items: '1', address: 'pogghf jygdr jhyjdsd', delivered: false},
						{id: '7', priority: '7', items: '9', address: 'lorem ipsum porem', delivered: false},
						{id: '8', priority: '7', items: '5', address: 'porem mennum latem', delivered: false}
						];
		
		$scope.getTotalOrders = function(){
			  return $scope.orders.length;
			}
		
		$scope.getOrders = function(){
			  return $scope.orders;
			}
		
		$scope.addOrder = function(){
			  $scope.orders.push({id: $scope.getTotalOrders()+1, priority: $scope.newPriority, items: $scope.newItems, address: $scope.newAddress, delivered: false});
			  $scope.newPriority = '';
			  $scope.newItems = '';
			  $scope.newAddress = '';
			  
			}
				
		$scope.deleteCard = function(){
			  $scope.orders = _.filter($scope.orders, function(order){
				  return !order.delivered;											 
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