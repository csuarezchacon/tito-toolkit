(function () {
	angular.module('dir-prod-module').directive('prod', function() {
		return {
			restrict: 'E',
			controller: 'dirProdController',
			controllerAs: 'vmDirProd',
			templateUrl: 'www/directive/dir-prod/dir-prod.html'
		}
	});
})();