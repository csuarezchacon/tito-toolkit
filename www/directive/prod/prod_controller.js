(function () {
	angular.module('prod-module').controller('prodController', ['$http', '$scope', function($http, $scope) {
		var vm = this;

		vm.product = $scope.product;
		vm.selectedProduct = {};
		vm.openNav = function(product){
			$scope.$parent.$parent.$parent.vmProdDeta.product = product;
			document.getElementById("mySidenav").style.width = "350px";
		};
	}]);
})();