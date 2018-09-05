(function () {
	angular.module('prod-deta-module').controller('prodDetaController', ['$http', '$scope', function($http, $scope) {
		var vm = this;

		vm.product = $scope.product;
		vm.openNav = function(){
			document.getElementById("mySidenav").style.width = "250px";
		};

		vm.closeNav = function(){
			document.getElementById("mySidenav").style.width = "0";
		};
	}]);
})();