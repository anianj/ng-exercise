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
  }]);
