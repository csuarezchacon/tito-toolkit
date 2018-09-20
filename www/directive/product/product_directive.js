(function () {
	angular.module('product-module').directive('product', function() {
		return {
			controller: 'productController',
			controllerAs: 'vmProduct',
			restrict: 'E',
			scope: {product: "=?product"},
			templateUrl: 'www/directive/product/product.html'
		}
	});
})();