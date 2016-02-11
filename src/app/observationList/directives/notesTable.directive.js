(function() {
  'use strict';

  angular
    .module('app.observationList')
    .directive('gzNotesTable', gzNotesTable);

  function gzNotesTable() {
    return {
      templateUrl: 'app/observationList/directives/notesTable.html',
      restrict: 'E',
      controller: NotesTableController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        notes: '='
      }
    };
  }

  NotesTableController.$inject = ['textMessageService'];

  function NotesTableController(textMessageService) {
    var vm = this;

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
  }

})();
