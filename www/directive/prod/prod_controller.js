(function () {
	angular.module('prod-module').controller('prodController', ['$http', '$scope', function($http, $scope) {
		var vm = this;

		vm.product = $scope.product;
		vm.selectedProduct = {};
		vm.openNav = function(product){
			document.getElementById("mySidenav").style.width = "500px";
			vm.selectedProduct = product;
		};
	}]);
})();