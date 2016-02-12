(function() {
  'use strict';

  angular
    .module('app.categoryList')
    .controller('CategoryListController', CategoryListController);

  CategoryListController.$inject = ['categoryService', 'user'];

  // Features are stored in their respective categories
  function CategoryListController(categoryService, user) {
    var vm = this;

    vm.categories  = categoryService.getCategoriesByUser(user.uid);
  }

})();
