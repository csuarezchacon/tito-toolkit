(function() {
	angular.module('store-module').controller('storeController', ['$stateParams', function($stateParams) {
		var vm = this;
		vm.products = {
			'list': [
				{'img': 'www/img/ZORRO002/ZORRO002_1_400X400.JPG', 'imgStyle': {'background-image': 'url(www/img/ZORRO002/ZORRO002_1_400X400.JPG)'}, 'title': 'Franz Fox', 'price': 14000},
				{'img': 'www/img/ZORRO001/ZORRO001_1_400X400.JPG', 'imgStyle': {'background-image': 'url(www/img/ZORRO001/ZORRO001_1_400X400.JPG)'}, 'title': 'Franz Fox', 'price': 14000},
				{'img': 'www/img/UNICORNIO002/UNICORNIO002_1_400X400.JPG', 'imgStyle': {'background-image': 'url(www/img/UNICORNIO002/UNICORNIO002_1_400X400.JPG)'}, 'title': 'Unicornio Lana', 'price': 14000},
				{'img': 'www/img/UNICORNIO001/UNICORNIO001_1_400X400.JPG', 'imgStyle': {'background-image': 'url(www/img/UNICORNIO001/UNICORNIO001_1_400X400.JPG)'}, 'title': 'Unicornio Lana', 'price': 14000},
				{'img': 'www/img/TERRY001/TERRY001_1_300X300.PNG', 'imgStyle': {'background-image': 'url(www/img/TERRY001/TERRY001_1_300X300.PNG)'}, 'title': 'Dinosaurio Terry', 'price': 14000},
				{'img': 'www/img/TEO001/TEO001_3_BKGND_300X300.PNG', 'imgStyle': {'background-image': 'url(www/img/TEO001/TEO001_3_BKGND_300X300.PNG)'}, 'title': 'Dinosaurio Teo', 'price': 14000},
				{'img': 'www/img/TEO001/TEO001_2_BKGND_300X300.PNG', 'imgStyle': {'background-image': 'url(www/img/TEO001/TEO001_2_BKGND_300X300.PNG)'}, 'title': 'Dinosaurio Teo', 'price': 14000},
				{'img': 'www/img/TEO001/TEO001_1_BKGND_300X300.PNG', 'imgStyle': {'background-image': 'url(www/img/TEO001/TEO001_1_BKGND_300X300.PNG)'}, 'title': 'Dinosaurio Teo', 'price': 14000},
				{'img': 'www/img/TEO001/TEO001_1_300X300.PNG', 'imgStyle': {'background-image': 'url(www/img/TEO001/TEO001_1_300X300.PNG)'}, 'title': 'Dinosaurio Teo', 'price': 14000},
				{'img': 'www/img/MAPACHE001/MAPACHE001_1_400X400.JPG', 'imgStyle': {'background-image': 'url(www/img/MAPACHE001/MAPACHE001_1_400X400.JPG)'}, 'title': 'Mapache', 'price': 14000},
				{'img': 'www/img/LOBO001/LOBO001_1_400X400.JPG', 'imgStyle': {'background-image': 'url(www/img/LOBO001/LOBO001_1_400X400.JPG)'}, 'title': 'Lobo Sam', 'price': 14000},
				{'img': 'www/img/LEON001/LEON001_1_400X400.JPG', 'imgStyle': {'background-image': 'url(www/img/LEON001/LEON001_1_400X400.JPG)'}, 'title': 'Leon Leo', 'price': 14000},
				{'img': 'www/img/JIRAFA001/JIRAFA001_1_400X400.JPG', 'imgStyle': {'background-image': 'url(www/img/JIRAFA001/JIRAFA001_1_400X400.JPG)'}, 'title': 'Jirafa Rafa', 'price': 14000},
				{'img': 'www/img/DINO001/DINO001_1_400X400.JPG', 'imgStyle': {'background-image': 'url(www/img/DINO001/DINO001_1_400X400.JPG)'}, 'title': 'Dino el Dinosaurio', 'price': 14000},
				{'img': 'www/img/CONEJO001/CONEJO001_1_400X400.JPG', 'imgStyle': {'background-image': 'url(www/img/CONEJO001/CONEJO001_1_400X400.JPG)'}, 'title': 'Conejo Mateo', 'price': 14000},
				{'img': 'www/img/CONEJA001/CONEJA001_1_400X400.JPG', 'imgStyle': {'background-image': 'url(www/img/CONEJA001/CONEJA001_1_400X400.JPG)'}, 'title': 'Coneja Matilde', 'price': 14000},
			]
		};
	}]);
})();
