(function() {
  'use strict';

  angular
    .module('app.categoryList')
    .directive('gzCategoriesTable', gzCategoriesTable);

  function gzCategoriesTable() {
    return {
      templateUrl: 'app/categoryList/directives/categoriesTable.html',
      restrict: 'E',
      controller: CategoriesTableController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        categories: '=',
        uid: '@'
      }
    };
  }

  function CategoriesTableController() {
    var vm = this;
  }

})();
