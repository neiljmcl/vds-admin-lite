'use strict';

angular.module('myApp.vegetables', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/vegetables', {
      template: '<vegetables></vegetables>',
    });
  }])
  .value('title', 'My FavouritE Vegetables')
  .directive('demoTitle', ['title', function(title) {
    return {
      restrict: 'E',
      template: '<H1>{{title}}</H1>',
      bindToController: false,
      // controllerAs: 'page',
      controller: ['$scope', function($scope) {
        console.log("binding title: ", title);
        var page = this;
        $scope.title = 'feck'
      }]
    }
  }])
  .directive('vegetables', [function() {
    return {
      restrict: 'E',
      templateUrl: 'view1/view1.html',
      controller: [function() {
        var vm = this;
        vm.vegetables = [];
        vm.vegetables.push({name: 'Brussels sprouts', serveWith:'Chestnuts'});
        vm.vegetables.push({name: 'Aubergine', serveWith:'Chilli oil'});
        vm.vegetables.push({name: 'Cabbage', serveWith:'bacon'});
        vm.vegetables.push({name: 'Carrots', serveWith: 'harissa'});

      }],
      controllerAs: 'vm',
      bindToController: true
    };
  }])


