(function() {
  'use strict';

  angular
    .module('app.categoryList')
    .directive('gzFeaturesForm', gzFeaturesForm);

  function gzFeaturesForm() {
    return {
      templateUrl: 'app/categoryList/directives/FeaturesForm.html',
      restrict: 'E',
      controller: FeaturesFormController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        category: '=',
        uid: '@'
      }
    };
  }

  FeaturesFormController.$inject = ['featureService'];

  function FeaturesFormController(featureService) {
    var vm = this;
    vm.features = featureService.getFeaturesByCategory(vm.uid, vm.category);

    vm.newFeature = new featureService.Feature();
    vm.addFeature = addFeature;

    function addFeature() {
      vm.features.$add(vm.newFeature);
      vm.newFeature = new featureService.Feature();
    }
  }

})();
