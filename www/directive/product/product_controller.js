(function () {
	angular.module('product-module').controller('productController', ['$http', '$scope', function($http, $scope) {
		var vm = this;

		vm.product = $scope.product;
		
	}]);
})();