/**
 * Created by zura on 12/10/2017.
 */
(function () {
  'use strict';

  angular.module('app', [
    'lobipanel'
  ])
    .controller('LobiPanelDemoController', ['$scope', LobiPanelDemoController]);

  function LobiPanelDemoController($scope) {
    var vm = this;
    vm.demoVar = "113";
    console.log("1111111");
  }
})();