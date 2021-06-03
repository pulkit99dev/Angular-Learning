var app = angular
        .module('myApp', [])
        .controller('myController', function($scope){
                var drivers=[
                    {
                        name: "Lewis Hamilton",
                        dob: new Date("November 23, 1980"),
                        gender: 'Male',
                        salary: 60000000.566
                    },
                    {
                        name: "Vettel",
                        dob: new Date("May 05, 1970"),
                        gender: 'Male',
                        salary: 20000000
                    },
                    {
                        name: " Max ",
                        dob: new Date("August 16, 1960"),
                        gender: 'Male',
                        salary: 18000000.345
                    },
                    {
                        name: "Charles",
                        dob: new Date("April 23, 1990"),
                        gender: 'Male',
                        salary: 25000000.123
                    },
                    {
                        name: "Lando Norris",
                        dob: new Date("December 21, 1998"),
                        gender: 'Male',
                        salary: 20000000
                    }
                ];
                $scope.rowLimit = 5;
                $scope.sortColumn = "name";
     $scope.drivers= drivers;

     $scope.search = function(item){
         if($scope.searchText == undefined){
             return true;
         }else{
             if(item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
                item.gender.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1
             ){
                 return true;
             }
         }
         return false;
     }

        //     var technologies=[
        //         {
        //             name:"Java",
        //             likes: 0,
        //             dislikes: 0
        //         },
        //         {
        //             name:"Javascript",
        //             likes: 0,
        //             dislikes: 0
        //         },
        //         {
        //             name:"Flutter",
        //             likes: 0,
        //             dislikes: 0
        //         },
        //         {
        //             name:"React Native",
        //             likes: 0,
        //             dislikes: 0
        //         }
        //     ]

        //         $scope.technologies = technologies;
        //         $scope.incrementLikes = function(technology){
        //             technology.likes++;
        //         }
        //         $scope.incrementDislikes = function(technology){
        //             technology.dislikes++;
        //         }
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