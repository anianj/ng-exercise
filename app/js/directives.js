'use strict';

/* Directives */

angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).
  directive('jtParent',[function() {
      console.log('jt-Parent: This is warpper function')
      return {
          //template: 'Hello this is replaced parent content',
          compile: function(telm,tattrs,trunsclude){
            console.log('jt-Parent: This is compile function of ' + tattrs.jtParentIndex)
            return  function(scope,ielm,iattrs){
                      console.log('jt-Parent: This is link function of ' + iattrs.jtParentIndex)
                    }
          }
      }
  }]).
  directive('jtChild',[function(){
      console.log('jt-Child: This is warpper function')
      return {
           compile: function(telm,tattrs,trunsclude){
            console.log('jt-Child: This is compile function of ' + tattrs.jtChildIndex)
            return  function(scope,ielm,iattrs){
                      console.log('jt-Child: This is link function of ' + iattrs.jtChildIndex)
                    }
          }
      }
  }]).
  directive('colorWord', function() {
    return {
      scope: {
        v: "@"
      },
      restrict: 'AE',
      replace: true,
      template: '<span>Hello {{v}}</span>',
      link: function(scope, elem, attrs) {
        elem.bind('click', function() {
          scope.$apply(function() {
            scope.v = "white";
          });
        });
        elem.bind('mouseover', function() {
          elem.css('cursor', 'pointer');
        });
      }
    };
  }).
  directive('jtSwitcher', ['', function(){
    // Runs during compile
    return {
      // name: '',
      // priority: 1,
      // terminal: true,
      // scope: {}, // {} = isolate, true = child, false/undefined = no change
      // controller: function($scope, $element, $attrs, $transclude) {},
      // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
      // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
      // template: '',
      // templateUrl: '',
      // replace: true,
      // transclude: true,
      // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
      link: function($scope, iElm, iAttrs, controller) {
        
      }
    };
  }]);;
