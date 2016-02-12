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
        categories: '='
      }
    };
  }

  function CategoriesTableController() {
    var vm = this;

    /*
    vm.removeNote = removeNote;
    vm.sendTextMessage = sendTextMessage;
    vm.toggleDone = toggleDone;

    function removeNote(note) {
      vm.notes.$remove(note);
    }

    function sendTextMessage(note) {
      textMessageService.sendTextMessage(note, vm.notes);
    }

    function toggleDone(note) {
      vm.notes.$save(note);
    }
    */
  }

})();
