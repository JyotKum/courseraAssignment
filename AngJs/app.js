(function(){
	'use strict';
	angular.module('diApp',[])
	.controller('diAppController',diAppController);
	diAppController.$inject=['$scope','$filter']
	function diAppController($scope,$filter){
		$scope.name="Jyoti";
		$scope.totalValue=101;
	};
	
	
})();