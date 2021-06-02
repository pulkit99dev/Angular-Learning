var app = angular
        .module('myApp', [])
        .controller('myController', function($scope){
            var technologies=[
                {
                    name:"Java",
                    likes: 0,
                    dislikes: 0
                },
                {
                    name:"Javascript",
                    likes: 0,
                    dislikes: 0
                },
                {
                    name:"Flutter",
                    likes: 0,
                    dislikes: 0
                },
                {
                    name:"React Native",
                    likes: 0,
                    dislikes: 0
                }
            ]

                $scope.technologies = technologies;
                $scope.incrementLikes = function(technology){
                    technology.likes++
                }
                $scope.incrementDislikes = function(technology){
                    technology.dislikes
                }
//      var countries = [
//          {
//             name: "USA",
//             cities: [
//                 {name : 'LA'},
//                 {name: 'DC'},
//                 {name: 'NY'}
//             ]
//          },
//          {
//             name: "UK",
//             cities: [
//                 {name : 'Southampton'},
//                 {name: 'Birmingham'},
//                 {name: 'Manchester'}
//             ]
//          },
//          {
//             name: "India",
//             cities: [
//                 {name : 'Delhi'},
//                 {name: 'Pune'},
//                 {name: 'Chennai'}
//             ]
//          },
// ];

    // $scope.countries= countries;
            
})