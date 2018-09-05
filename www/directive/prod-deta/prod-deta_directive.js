(function () {
	angular.module('prod-deta-module').directive('prodDeta', function() {
		return {
			controller: 'prodDetaController',
			controllerAs: 'vmProdDeta',
			restrict: 'E',
			scope: {product: "=?product"},
			templateUrl: 'www/directive/prod-deta/prod-deta.html'
		}
	});
})();