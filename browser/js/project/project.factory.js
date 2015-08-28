'use strict';

app.factory('Project', function ($http) {

	// Project Constructor
	function Project (props) {
		angular.extend(this, props);
	}
	Project.url = 'api/project/';
	Object.defineProperty(Project.prototype, 'url', {
		get: function(){
			return Project.url + this._id;
		}
	});

	Project.prototype.fetch = function () {
		return $http.get(this.url)
			.then(function (suc) {
				return suc.data;
			})
	}

	return Project;
});