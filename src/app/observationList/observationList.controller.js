(function() {
  'use strict';

  angular
    .module('app.observationList')
    .controller('ObservationListController', ObservationListController);

  ObservationListController.$inject = ['noteService', 'user'];

  function ObservationListController(noteService, user) {
    var vm = this;

    vm.notes  = noteService.getNotesByUser(user.uid);
  }

})();
