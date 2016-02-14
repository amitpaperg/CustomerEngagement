(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('categoryService', categoryService);

  categoryService.$inject = ['$firebaseArray', 'firebaseDataService'];

  function categoryService($firebaseArray, firebaseDataService) {

    // features live inside categories
    var categories = null;

    var service = {
      Category: Category,
      getCategoriesByUser: getCategoriesByUser,
      reset: reset
    };

    return service;

    ////////////

    function Category() {
      this.name = '';
      this.features = null;
    }

    function getCategoriesByUser(uid) {
      if (!categories) {
        categories = $firebaseArray(firebaseDataService.users.child(uid).child('categories'));
      }
      return categories;
    }

    function reset() {
      if (categories) {
        categories.$destroy();
        categories = null;
      }
    }

  }

})();
