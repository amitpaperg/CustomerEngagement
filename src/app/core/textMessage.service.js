(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('textMessageService', textMessageService);

  textMessageService.$inject = ['firebaseDataService'];

  function textMessageService(firebaseDataService) {
    var service = {
      sendTextMessage: sendTextMessage
    };

    return service;

    ////////////

    function sendTextMessage(note, notes) {
      var newTextMessage = {
        phoneNumber: note.phone,
        size: note.size,
        name: note.name
      };
      firebaseDataService.textMessages.push(newTextMessage);
      note.notified = true;
      notes.$save(notes);
    }
  }

})();
