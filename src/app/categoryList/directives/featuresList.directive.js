(function() {
  'use strict';

  angular
    .module('app.categoryList')
    .directive('gzFeaturesList', gzFeaturesList);

  function gzFeaturesList() {
    return {
      templateUrl: 'app/categoryList/directives/featuresList.html',
      restrict: 'E',
      controller: FeaturesListController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        category: '=',
        uid: '@'
      }
    };
  }

  FeaturesListController.$inject = ['featureService'];

  function FeaturesListController(featureService) {
    var vm = this;

    vm.features = featureService.getFeaturesByCategory(vm.uid, vm.category);
  }

})();
