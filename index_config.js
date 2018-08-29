(function (){
	angular.module('index-module').config(
		['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
			$urlRouterProvider.otherwise('/home');

			$stateProvider
				.state('home', {
					url: '/home',
					templateUrl: 'www/pages/home/home.html'
				})
				.state('gallery', {
					url: '/gallery',
					templateUrl: 'www/pages/gallery/gallery.html'
				});
		}]
	);
})();
