(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('noteService', noteService);

  noteService.$inject = ['$firebaseArray', 'firebaseDataService'];

  function noteService($firebaseArray, firebaseDataService) {

    var notes = null;

    var service = {
      Note: Note,
      getNotesByUser: getNotesByUser,
      reset: reset
    };

    return service;

    ////////////

    function Note() {
      this.name = '';
      this.phone = '';
      this.size = '';
      this.done = false;
      this.notified = false;
    }

    function getNotesByUser(uid) {
      if (!notes) {
        notes = $firebaseArray(firebaseDataService.users.child(uid).child('notes'));
      }
      return notes;
    }

    function reset() {
      if (notes) {
        notes.$destroy();
        notes = null;
      }
    }

  }

})();
