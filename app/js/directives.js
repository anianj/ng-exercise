'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return {
    	template: '<a href="#">123</a>',
    	replace: true,
    	compile: function(te,ta,trs){
    		console.log(te);
    		console.log(ta);
    		return function(s,le,la){
    			console.log(s);
    			console.log(le === te);
    			console.log(la);
    		}
    	}
    }
  }])
