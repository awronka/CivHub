'use strict';

app.factory('ProductAndService', function ($http) {
	
	// Constructor
	function ProductOrService (props) {
		angular.extend(this, props);
	}
	ProductOrService.url = '/api/productandservice/';
	Object.defineProperty(ProductOrService.prototype, 'url', {
		get: function(){
			return ProductOrService.url + this.id;
		}
	});

	// Get This
	ProductOrService.prototype.fetch = function() {
		return $http.get(this.url)
			.then(function (res) {
				return new ProductOrService(res.data);
			});
	}

	// Method for Mapping Objs
	ProductOrService.map = function(data) {
		return data.map(function (obj) {
			return new ProductOrService(obj);
		});
	}

	// Get All Products and Services
	ProductOrService.fetchAll = function() {
		return $http.get(ProductOrService.url)
			.then(function (res) {
				return ProductOrService.map(res.data);
			});
	}

	// Get This Round's Products and Services
	ProductOrService.fetchRound = function() {
		return $http.get(ProductOrService.url + 'round')
			.then(function (res) {
				return ProductOrService.map(res.data);
			});
	}

	return ProductOrService;
});