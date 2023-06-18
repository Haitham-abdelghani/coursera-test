angular.module('LunchCheck',[])



.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject=['$scope'];
function LunchCheckController($scope){
$scope.items='';
$scope.checkLunch=function(){
  if($scope.items==''){
    $scope.message='Please enter data first';
  }else{
    var newData=$scope.items.split(',');
    var newDateCount=newData.length;
    if(newDateCount<=3){
      $scope.message='Enjoy!';
    }else {
      $scope.message='Too much!'
    }
  }
}

}
