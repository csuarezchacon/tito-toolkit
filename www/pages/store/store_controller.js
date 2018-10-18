(function() {
	angular.module('store-module').controller('storeController', ['$stateParams', function($stateParams) {
		var vm = this;
		vm.products = {
			"list": [
				{"img": "www/img/ZORRO002/ZORRO002_1_400X400.JPG", "imgStyle": {"background-image": "url(www/img/ZORRO002/ZORRO002_1_400X400.JPG)"}, "title": "Franz", "price": 14000, "description": "Material: Algodón\n\nasdf"},
				{"img": "www/img/ZORRO001/ZORRO001_1_400X400.JPG", "imgStyle": {"background-image": "url(www/img/ZORRO001/ZORRO001_1_400X400.JPG)"}, "title": "Franz", "price": 14000, "description": ""},
				{"img": "www/img/UNICORNIO002/UNICORNIO002_1_400X400.JPG", "imgStyle": {"background-image": "url(www/img/UNICORNIO002/UNICORNIO002_1_400X400.JPG)"}, "title": "Lana", "price": 14000, "description": ""},
				{"img": "www/img/UNICORNIO001/UNICORNIO001_1_400X400.JPG", "imgStyle": {"background-image": "url(www/img/UNICORNIO001/UNICORNIO001_1_400X400.JPG)"}, "title": "Lana", "price": 14000, "description": ""},
				{"img": "www/img/TERRY001/TERRY001_1_300X300.PNG", "imgStyle": {"background-image": "url(www/img/TERRY001/TERRY001_1_300X300.PNG)"}, "title": "Terry", "price": 14000, "description": ""},
				{"img": "www/img/TEO001/TEO001_3_BKGND_300X300.PNG", "imgStyle": {"background-image": "url(www/img/TEO001/TEO001_3_BKGND_300X300.PNG)"}, "title": "Teo", "price": 14000, "description": ""},
				{"img": "www/img/TEO001/TEO001_2_BKGND_300X300.PNG", "imgStyle": {"background-image": "url(www/img/TEO001/TEO001_2_BKGND_300X300.PNG)"}, "title": "Teo", "price": 14000, "description": ""},
				{"img": "www/img/TEO001/TEO001_1_BKGND_300X300.PNG", "imgStyle": {"background-image": "url(www/img/TEO001/TEO001_1_BKGND_300X300.PNG)"}, "title": "Teo", "price": 14000, "description": ""},
				{"img": "www/img/TEO001/TEO001_1_300X300.PNG", "imgStyle": {"background-image": "url(www/img/TEO001/TEO001_1_300X300.PNG)"}, "title": "Teo", "price": 14000, "description": ""},
				{"img": "www/img/MAPACHE001/MAPACHE001_1_400X400.JPG", "imgStyle": {"background-image": "url(www/img/MAPACHE001/MAPACHE001_1_400X400.JPG)"}, "title": "Mapache", "price": 14000, "description": ""},
				{"img": "www/img/LOBO001/LOBO001_1_400X400.JPG", "imgStyle": {"background-image": "url(www/img/LOBO001/LOBO001_1_400X400.JPG)"}, "title": "Sam", "price": 14000, "description": ""},
				{"img": "www/img/LEON001/LEON001_1_400X400.JPG", "imgStyle": {"background-image": "url(www/img/LEON001/LEON001_1_400X400.JPG)"}, "title": "Leo", "price": 14000, "description": ""},
				{"img": "www/img/JIRAFA001/JIRAFA001_1_400X400.JPG", "imgStyle": {"background-image": "url(www/img/JIRAFA001/JIRAFA001_1_400X400.JPG)"}, "title": "Rafa", "price": 14000, "description": ""},
				{"img": "www/img/DINO001/DINO001_1_400X400.JPG", "imgStyle": {"background-image": "url(www/img/DINO001/DINO001_1_400X400.JPG)"}, "title": "Dino", "price": 14000, "description": ""},
				{"img": "www/img/CONEJO001/CONEJO001_1_400X400.JPG", "imgStyle": {"background-image": "url(www/img/CONEJO001/CONEJO001_1_400X400.JPG)"}, "title": "Mateo", "price": 14000, "description": ""},
				{"img": "www/img/CONEJA001/CONEJA001_1_400X400.JPG", "imgStyle": {"background-image": "url(www/img/CONEJA001/CONEJA001_1_400X400.JPG)"}, "title": "Matilde", "price": 14000, "description": ""}
			]
		};
	}]);
})();
