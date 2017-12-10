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
    vm.panelTitle = "Lorem ipsum title";
    vm.options = {
      reload: false,
      close: false,
      editTitle: false
    };

    vm.events = {
      init: function(){
        console.log("initialized");
      },
      beforeUnpin: function(){
        console.log("333333333333");
      }
    };

  }
})();