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
  });
