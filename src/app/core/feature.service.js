(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('featureService', featureService);

  featureService.$inject = ['$firebaseArray', 'firebaseDataService'];

  function featureService($firebaseArray, firebaseDataService) {
    var service = {
      Feature: Feature,
      getFeaturesByCategory: getFeaturesByCategory
    };

    return service;

    ////////////

    function Feature() {
      this.name = '';
    }

    function getFeaturesByCategory(userId, category) {
      category.features = $firebaseArray(firebaseDataService.users.child(userId).child('categories').child(category.$id).child('features'));
      return category.features;
    }
  }

})();
