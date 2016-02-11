(function() {
  'use strict';

  angular
    .module('app.observationList')
    .directive('gzNotesForm', gzNotesForm);

  function gzNotesForm() {
    return {
      templateUrl: 'app/observationList/directives/notesForm.html',
      restrict: 'E',
      controller: NotesFormController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        notes: '='
      }
    };
  }

  NotesFormController.$inject = ['noteService'];

  function NotesFormController(noteService) {
    var vm = this;

    vm.newNote = new noteService.Note();
    vm.addNote = addNote;

    function addNote() {
      vm.notes.$add(vm.newNote);
      vm.newNote = new noteService.Note();
    }
  }

})();
