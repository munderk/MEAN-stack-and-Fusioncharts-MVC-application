


//Author: Rishabh Munde

var myApp = angular.module('myApp', ["ng-fusioncharts"]);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) 
{
    console.log("Hello World from controller");

      $http.get('/ptdata1').success(function(response) 
      {
        console.log("I got the data I requested");    //for debugging purposes. it will appear on on browser->more_tools->devTools->console
        console.log(response);                        //same as above
        var ChartParameters = 
                {
                    caption: "Def_Created",
                    theme: "ocean",
                    xAxisName: "Duration",
                    xAxisNameFont: "Arial",
                    xAxisNameFontBold: "1", 
                    yAxisName: "Count",
                    yAxisNameFont: "Arial",
                    xAxisNameFontBold: "1",
                    xAxisNameFontSize: "12",
                    yAxisNameFontSize: "12",
                    rotateValues: "0"
                };
        $scope.myDataSource =
        {
            chart: ChartParameters,
            data: response
        };

       
      });
      $scope.myDataSource={};
}]);﻿