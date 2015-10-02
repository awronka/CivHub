'use strict';

app.factory('User', function($http) {

	function User (props) {
		angular.extend(this, props);
	}
	User.url = 'api/users/';
	Object.defineProperty(User.prototype, 'url', {
		get: function(){
			return User.url + this._id
		}
	});

	User.prototype.fetch = function() {
		return $http.get(this.url)
			.then(function (suc) {
				return suc.data;
			});
	}

	return User;
});