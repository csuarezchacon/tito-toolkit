(function() {
	angular.module('store-module').controller('storeController', ['$stateParams', function($stateParams) {
		var vm = this;
		vm.products = {
			'list': [
				{'background-image': 'url(www/img/ZORRO002/ZORRO002_1_400X400.JPG)'},
				{'background-image': 'url(www/img/ZORRO001/ZORRO001_1_400X400.JPG)'},
				{'background-image': 'url(www/img/UNICORNIO002/UNICORNIO002_1_400X400.JPG)'},
				{'background-image': 'url(www/img/UNICORNIO001/UNICORNIO001_1_400X400.JPG)'},
				{'background-image': 'url(www/img/TERRY001/TERRY001_1_300X300.PNG)'},
				{'background-image': 'url(www/img/TEO001/TEO001_3_BKGND_300X300.PNG)'},
				{'background-image': 'url(www/img/TEO001/TEO001_2_BKGND_300X300.PNG)'},
				{'background-image': 'url(www/img/TEO001/TEO001_1_BKGND_300X300.PNG)'},
				{'background-image': 'url(www/img/TEO001/TEO001_1_300X300.PNG)'},
				{'background-image': 'url(www/img/MAPACHE001/MAPACHE001_1_400X400.JPG)'},
				{'background-image': 'url(www/img/LOBO001/LOBO001_1_400X400.JPG)'},
				{'background-image': 'url(www/img/LEON001/LEON001_1_400X400.JPG)'},
				{'background-image': 'url(www/img/JIRAFA001/JIRAFA001_1_400X400.JPG)'},
				{'background-image': 'url(www/img/DINO001/DINO001_1_400X400.JPG)'},
				{'background-image': 'url(www/img/CONEJO001/CONEJO001_1_400X400.JPG)'},
				{'background-image': 'url(www/img/CONEJA001/CONEJA001_1_400X400.JPG)'},
			]
		};
	}]);
})();