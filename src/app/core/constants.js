(function() {
  'use strict';

  angular
    .module('app.core')
    .constant('FIREBASE_URL', 'https://productnotes.firebaseio.com/')
    .constant('PROTECTED_PATHS', ['/observationlist','/categorylist']);

})();
