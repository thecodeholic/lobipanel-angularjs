/**
 * Created by zura on 12/10/2017.
 */
(function () {
  'use strict';

  angular.module('lobipanel')
    .directive('lobipanel', ['$timeout', lobipanel])
    .directive('lobipanelParent', ['$timeout', lobipanelParent])
  ;

  function lobipanel($timeout) {
    return {
      replace: true,
      restrict: 'AE',
      transclude: true,
      scope: {
        style: '@style',
        heading: '@heading',
        options: '=',
        events: '='
      },
      template: `<div class="panel" ng-class="[cls]">
              <div class="panel-heading">
                  <h3 class="panel-title">{{style}} - {{heading}}</h3>
              </div>
              <div class="panel-body" ng-transclude>
                  
              </div>
          </div>
        `,
      link: function (scope, el, attrs) {
        scope.style = (scope.style || 'primary');
        scope.cls = 'panel-'+scope.style;
        const $el = $(el);
        const instance = $el.data('lobiPanel');
        if (scope.events && angular.isObject(scope.events)) {
          angular.forEach(scope.events, function (value, key) {
            if (!angular.isFunction(value)) {
              console.error(key + " event listener is not a function");
              return;
            }
            $el.on(key + '.lobiPanel', value);
          });
        }
        $timeout(function(){
          $el.lobiPanel(scope.options);
        },0);
      }
    }
  }

  function lobipanelParent(){
    return {
      restrict: 'A',
      scope: {},
      link: function (scope, el, attrs) {
          $(el).lobiPanelParent()
      }
    }
  }
})();