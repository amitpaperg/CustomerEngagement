(function() {
  'use strict';

  angular
    .module('app.categoryList')
    .directive('gzCategoriesForm', gzCategoriesForm);

  function gzCategoriesForm() {
    return {
      templateUrl: 'app/categoryList/directives/CategoriesForm.html',
      restrict: 'E',
      controller: CategoriesFormController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        categories: '='
      }
    };
  }

  CategoriesFormController.$inject = ['categoryService'];

  function CategoriesFormController(categoryService) {
    var vm = this;

    vm.newCategory = new categoryService.Category();
    vm.addCategory = addCategory;

    function addCategory() {
      vm.categories.$add(vm.newCategory);
      vm.newCategory = new categoryService.Category();
    }
  }

})();
