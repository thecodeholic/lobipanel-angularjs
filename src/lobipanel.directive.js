/**
 * Created by zura on 12/10/2017.
 */
(function () {
  'use strict';

  angular.module('lobipanel')
    .directive('lobipanel', lobipanel);

  function lobipanel() {
    return {
      replace: true,
      restrict: 'E',
      transclude: true,
      scope: {
        heading: '@heading',
        options: '=',
        events: '='
      },
      template: `<div class="panel panel-primary" >
              <div class="panel-heading">
                  <h3 class="panel-title">{{heading}}</h3>
              </div>
              <div class="panel-body" ng-transclude>
                  
              </div>
          </div>
        `,
      link: function (scope, el, attrs) {
        var $el = $(el);
        var instance = $el.data('lobiPanel');
        if (scope.events && angular.isObject(scope.events)) {
          angular.forEach(scope.events, function (value, key) {
            if (!angular.isFunction(value)) {
              console.error(key + " event listener is not a function");
              return;
            }
            $el.on(key + '.lobiPanel', value);
          });
        }
        $el.lobiPanel(scope.options);
      }
    }
  }

})();