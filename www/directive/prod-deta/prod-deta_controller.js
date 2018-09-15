(function () {
	angular.module('prod-deta-module').controller('prodDetaController', ['$http', '$scope', function($http, $scope) {
		var vm = this;

		vm.product = $scope.product;

		vm.closeNav = function(){
			document.getElementById("mySidenav").style.width = "0";
		};
	}]);
})();