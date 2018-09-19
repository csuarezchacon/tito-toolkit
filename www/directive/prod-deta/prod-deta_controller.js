(function () {
	angular.module('prod-deta-module').controller('prodDetaController', ['$http', '$scope', '$rootScope', function($http, $scope, $rootScope) {
		var vm = this;

		vm.product = "";

		vm.closeNav = function(){
			document.getElementById("mySidenav").style.width = "0";
		};
	}]);
})();