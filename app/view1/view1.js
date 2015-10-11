'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope ) {
  $scope.durian = "durian";
      $scope.aubergine="pea aubergine";
      $scope.apple = "apple"
      $scope.celeriac="celeriac";
}])

.directive('fruitandveg', [function() {
  return {
    restrict: 'E',
    scope: {
      fruit: '=', vegetable: '='
    },
    template: 'fruit: {{fruit}} vegetable: {{vegetable}}<BR>'
  };
}]);

