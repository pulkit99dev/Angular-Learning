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
                
     $scope.drivers = drivers;
     $scope.dataView = "index-table.html";

            });