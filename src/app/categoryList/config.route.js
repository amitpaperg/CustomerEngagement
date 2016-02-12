(function() {
  'use strict';

  angular
    .module('app.categoryList')
    .config(configFunction);

  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {
    $routeProvider.when('/categorylist', {
      templateUrl: 'app/categoryList/categoryList.html',
      controller: 'CategoryListController',
      controllerAs: 'vm',
      resolve: {user: resolveUser}
    });
  }

  resolveUser.$inject = ['authService'];

  function resolveUser(authService) {
    return authService.firebaseAuthObject.$requireAuth();
  }

})();
