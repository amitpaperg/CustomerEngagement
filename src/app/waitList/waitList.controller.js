(function() {
  'use strict';

  angular
    .module('app.waitList')
    .controller('WaitListController', WaitListController);

  WaitListController.$inject = ['partyService', 'textMessageService', 'user'];

  function WaitListController(partyService, textMessageService, user) {
    var vm = this;

    vm.parties  = partyService.getPartiesByUser(user.uid);
    vm.removeParty = removeParty;
    vm.sendTextMessage = sendTextMessage;
    vm.toggleDone = toggleDone;

    function removeParty(party) {
      vm.parties.$remove(party);
    }

    function sendTextMessage(party) {
      textMessageService.sendTextMessage(party, vm.parties);
    }

    function toggleDone(party) {
      vm.parties.$save(party);
    }

  }

})();