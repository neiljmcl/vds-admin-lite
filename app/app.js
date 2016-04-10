'use strict';
angular.module('vdsAdmin', [
  'ui.router'
]).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  console.log("Setting vdsAdmin shit up: ");

  $urlRouterProvider
    .when('', '/grid')
    .otherwise('notfound');

  $stateProvider
    .state('taxonomy', {
      url: '/taxonomy/{path:^.*}',
      templateUrl: 'taxonomy/taxonomy.html',
        controller: 'TaxonomyController',
      onEnter: function() {
        console.log("We have entered the taxonomy zone")
      }
    }).state('grid', {
      url: '/grid',
      templateUrl: 'grid.html',
      controller: 'GridController'
    }).state('notfound', {
      url: '/not_found',
      templateUrl: 'not_found.html'
    });
}])
  .controller('TaxonomyController', ['$scope', '$stateParams', '$log', 'TaxonomyService',
    function($scope, $stateParams, $log, taxonomyService) {
      $log.info("This is your taxonomy controller with path ", $stateParams.path, $stateParams.path === 'foo/bar');
      $scope.title = "Welcome to the taxonomy page";
      $scope.parent = "Make";
      $scope.child = "Model";
      $scope.path = $stateParams.path;
      $scope.taxonomyPaths = _.map(taxonomyService.children(), function(child) {
        return taxonomyService.path(child.taxonomyId);
      });
      $scope.get = function() {
        taxonomyService.get($scope.path);
      }
    }]).controller('GridController', ['$scope', '$log', function($scope, $log) {
    $log.info("This is your grid controller");
    $scope.motd = "This is your grid";

  }])
  .service('TaxonomyService', ['$log', function($log) {
    var service = {
      children: function() {
        return [
          {name: 'foo', taxonomyId:'foo'},
          {name: 'bar', taxonomyId:'foo/bar'},
          {name: 'baa', taxonomyId:'foo/bar/baa'}
        ];
      },
      path: function(taxonomyId) {
        return {path: taxonomyId};
      },
      get: function(path) {
        $log.info("Get: ", path, path.split("/"));
      }
    };
    return service;
  }])