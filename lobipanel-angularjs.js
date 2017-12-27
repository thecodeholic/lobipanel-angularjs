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

  angular.module('lobipanel').directive('lobipanel', ['$timeout', lobipanel]).directive('lobipanelParent', ['$timeout', lobipanelParent]);

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
      template: '<div class="panel" ng-class="[cls]">\n              <div class="panel-heading">\n                  <h3 class="panel-title">{{style}} - {{heading}}</h3>\n              </div>\n              <div class="panel-body" ng-transclude>\n                  \n              </div>\n          </div>\n        ',
      link: function link(scope, el, attrs) {
        scope.style = scope.style || 'primary';
        scope.cls = 'panel-' + scope.style;
        var $el = $(el);
        var instance = $el.data('lobiPanel');

        var events = ['init.lobiPanel', 'beforeUnpin.lobiPanel', 'onUnpin.lobiPanel', 'beforeClose.lobiPanel', 'onClose.lobiPanel', 'beforeToFront.lobiPanel', 'onToFront.lobiPanel', 'beforePin.lobiPanel', 'onPin.lobiPanel', 'beforeMinimize.lobiPanel', 'onMinimize.lobiPanel', 'beforeMaximize.lobiPanel', 'onMaximize.lobiPanel', 'beforeFullScreen.lobiPanel', 'onFullScreen.lobiPanel', 'beforeSmallSize.lobiPanel', 'onSmallSize.lobiPanel', 'beforeLoad.lobiPanel', 'startLoading.lobiPanel', 'loaded.lobiPanel', 'resizeStart.lobiPanel', 'onResize.lobiPanel', 'resizeStop.lobiPanel', 'dragged.lobiPanel'];
        if (scope.events && angular.isObject(scope.events)) {
          angular.forEach(scope.events, function (value, key) {
            if (!angular.isFunction(value)) {
              console.error(key + " event listener is not a function");
              return;
            }
            $el.on(key + '.lobiPanel', value);
          });
        }

        angular.forEach(events, function (event) {
          $el.on(event, function () {
            console.log("calling event " + event);
            scope.$apply();
          });
        });

        $timeout(function () {
          $el.lobiPanel(scope.options);
        }, 0);
      }
    };
  }

  function lobipanelParent() {
    return {
      restrict: 'A',
      scope: {},
      link: function link(scope, el, attrs) {
        $(el).lobiPanelParent();
      }
    };
  }
})();