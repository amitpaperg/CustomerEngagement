(function() {
  'use strict';

  angular
    .module('app.categoryList')
    .directive('gzCategoriesCard', gzCategoriesCard);

  function gzCategoriesCard() {
    return {
      templateUrl: 'app/categoryList/directives/categoriesCard.html',
      restrict: 'E',
      controller: CategoriesCardController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        categories: '=',
        uid: '@'
      }
    };
  }

  function CategoriesCardController() {
    var vm = this;
  }

})();
