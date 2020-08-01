(function (){
'use strict';



angular.module('LunchBoxApp', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.items = "";
  $scope.checkLunchBox = function () {
    $scope.itemsArr = $scope.items.split(",");
     if($scope.itemsArr.length <= 3){
       $scope.message= "Enjoy!";
     }else if($scope.itemsArr.length > 3){
        $scope.message= "Too much!";
     }
   };

}


})();
