var app = angular
  .module("myApp", ["ngRoute"])
  .config(function ($routeProvider, $locationProvider) {
      $locationProvider.hashPrefix("");
    $routeProvider
      .when("/home", {
        templateURL: "Templates/home.html",
        controller: "homeController",
      })
      .when("/courses", {
        templateURL: "Templates/course.html",
        controller: "courseController",
      })
      .when("/students", {
        templateURL: "Templates/students.html",
        controller: "studentController",
      })
      .otherwise({
          redirectTo: "/home"
      })
      $locationProvider.html5Mode(true);
  })
  .controller("homeController", function ($scope) {
    $scope.message = "Home Page";
  })
  .controller("courseController", function ($scope) {
    $scope.courses = ["C#", "Javascript", "Java", "Dart", "Swift"];
  })
  .controller("studentController", function ($scope) {
    $scope.students = [
      {
        name: "Sachin",
      },
      {
        name: "Sachin",
      },
      {
        name: "Sachin",
      },
      {
        name: "Sachin",
      },
      {
        name: "Sachin",
      },
      {
        name: "Sachin",
      },
      {
        name: "Sachin",
      },
    ];
  });
