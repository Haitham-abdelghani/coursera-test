angular.module('myFirstApp',[])

.controller('myFirstController',function($scope){
  $scope.name='';
  $scope.totalValue=0;
  $scope.displayNumeric=function(){
    var newDate=calculate($scope.name);
  $scope.  totalValue=newDate;
};
  function calculate(string){
    var data=0;
    for (var i = 0; i < string.length; i++) {
      data+=string.charCodeAt(i);
    }
    return data;
  }
})
