// creating the module
myApp = angular.module('myApp', []);

// registering the controller to the module
myApp.controller('todoController', function($scope){
    $scope.todoTasks=[];
    $scope.addTodo = function(){
        $scope.todoTasks.push({
            'task': $scope.task,
            'dati': $scope.dati,
            'category': $scope.category
        });
    };
})