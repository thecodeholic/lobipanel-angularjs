/**
 * Created by zura on 12/10/2017.
 */
(function () {
  'use strict';

  angular.module('lobipanel')
    .directive('lobipanel', lobipanel);

  function lobipanel(){
      return {
        restrict: 'E',
        transclude: true,
        template: `<div class="panel panel-primary" >
              <div class="panel-heading">
                  <h3 class="panel-title"></h3>
              </div>
              <div class="panel-body" ng-transclude>
                  
              </div>
          </div>
        `,
        link: function(scope, el, attrs){
          el.lobiPanel();
        }
      }
  }
})();