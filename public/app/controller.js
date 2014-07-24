var drblue=angular.module('drblue',[]);
var controllers={};
drblue.factory('portfolio',function($http){
  var info={};
  //var factory={};
  //info.data={};
  $http.get('/json/portfolio.json').success(function(data) {
    info.data = data;
    //console.log(info.data);
    //factory.info=info;
  });
  return info;
  /*factory.getHead=function(){
    return info.head;
  }
  factory.getTrunk=function(){
    return info.trunk;
  }
  factory.getLimb=function(){
    return info.limb;
  }
  factory.getOther=function(){
    return info.other;
  }
  return factory;*/
});

/*controllers.head=function($scope,portfolio){
  $scope.$watch("portfolio.head",function(){
    $scope.sets=portfolio.head;
  });
};*/

controllers.portfolio=function($scope,portfolio){
  $scope.gallery=portfolio;
  //-console.log($scope.sets);
};

/*controllers.trunk=function($scope,portfolio){
  $scope.sets=portfolio.data.trunk;
};
controllers.limb=function($scope,portfolio){
  $scope.sets=portfolio.data.limb;
};
controllers.other=function($scope,portfolio){
  $scope.sets=portfolio.data.other;
};*/

/*controllers.head=function($scope,portfolio){
  $scope.sets=portfolio.getHead();
};
controllers.trunk=function($scope,portfolio){
  $scope.sets=portfolio.getTrunk();
};
controllers.limb=function($scope,portfolio){
  $scope.sets=portfolio.getLimb();
};
controllers.other=function($scope,portfolio){
  $scope.sets=portfolio.getOther();
};*/

drblue.controller('portfolio',controllers.portfolio);
/*drblue.controller('head',controllers.head);
drblue.controller('trunk',controllers.trunk);
drblue.controller('limb',controllers.limb);
drblue.controller('other',controllers.other);
*/
