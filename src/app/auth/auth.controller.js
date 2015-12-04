(function() {
  'use strict';

  angular
    .module('app.auth')
    .controller('AuthController', AuthController);

  AuthController.$inject = ['$firebaseAuth'];

  function AuthController($firebaseAuth) {
    var vm = this;
    var firebaseReference = new Firebase('https://waitandeat-v2-demo.firebaseio.com/');
    var firebaseAuthObject = $firebaseAuth(firebaseReference);

    vm.user = {
      email: '',
      password: ''
    };

    vm.register = register;
    vm.login = login;
    vm.logout = logout;

    function register(user) {
      return firebaseAuthObject.$createUser(user)
        .then(function() {
          return vm.login(user);
        })
        .catch(function(error) {
          console.log(error);
        });
    }

    function login(user) {
      return firebaseAuthObject.$authWithPassword(user)
        .then(function(loggedInUser) {
          console.log(loggedInUser);
        })
        .catch(function(error) {
          console.log(error);
        });
    }

    function logout() {
      firebaseAuthObject.$unauth();
    }
  }

})();