(function () {
	angular.module('prod-module').controller('prodController', ['$http', '$scope', function($http, $scope) {
		var vm = this;

		vm.product = $scope.product;
	}]);
})();