'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).
  directive('jtParent',[function() {
      console.log('=============jt-Parent: This is warpper function=====================')
      return {
          link: function(scope,ielm,iattrs){
              console.log('====================jt-Parent: This is link function.=================')
          }
      }
  }]).
  directive('jtChild',[function(){
      console.log('=============jt-Child: This is warpper function=====================')
      return {
          link: function(scope,ielm,iattrs){
              console.log('====================jt-Child: This is link function.=================')
          }
      }
  }]);
