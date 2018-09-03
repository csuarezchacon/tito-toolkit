(function (){
	angular.module('index-module').config(
		['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
			$urlRouterProvider.otherwise('/home');

			$stateProvider
				.state('home', {
					url: '/home',
					templateUrl: 'www/pages/home/home.html'
				})
				.state('store', {
					url: '/store',
					controller: 'storeController',
					controllerAs: 'vmStore',
					templateUrl: 'www/pages/store/store.html'
				});
		}]
	);
})();
