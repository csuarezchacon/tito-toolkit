(function () {
	angular.module('prod-module').directive('prod', function() {
		return {
			controller: 'prodController',
			controllerAs: 'vmProd',
			restrict: 'E',
			scope: {product: "=?product"},
			templateUrl: 'www/directive/prod/prod.html'
		}
	});
})();