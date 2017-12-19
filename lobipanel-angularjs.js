'use strict';

/**
 * Created by zura on 12/10/2017.
 */
(function () {
  'use strict';

  angular.module('lobipanel', []);
})();
'use strict';

/**
 * Created by zura on 12/10/2017.
 */
(function () {
  'use strict';

  angular.module('lobipanel').controller('LobiPanelController', LobiPanelController);

  function LobiPanelController() {}
})();
'use strict';

/**
 * Created by zura on 12/10/2017.
 */
(function () {
  'use strict';

  angular.module('lobipanel').directive('lobipanel', ['$timeout', lobipanel]);

  function lobipanel($timeout) {
    return {
      replace: true,
      restrict: 'E',
      transclude: true,
      scope: {
        style: '@style',
        heading: '@heading',
        options: '=',
        events: '='
      },
      template: '<div class="panel panel-primary" ng-class="[cls]">\n              <div class="panel-heading">\n                  <h3 class="panel-title">{{style}} - {{heading}}</h3>\n              </div>\n              <div class="panel-body" ng-transclude>\n                  \n              </div>\n          </div>\n        ',
      link: function link(scope, el, attrs) {
        scope.style = scope.style || 'primary';
        scope.cls = 'panel-' + scope.style;
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
        $timeout(function () {
          $el.lobiPanel(scope.options);
        }, 0);
      }
    };
  }
})();