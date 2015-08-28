'use strict';

app.factory('Project', function ($http) {

	// Project Constructor
	function Project (props) {
		angular.extend(this, props);
	}
	Project.url = 'api/project';
	Object.defineProperty(Project.prototype, 'url', {
		get: function(){
			return Project.url + this._id;
		}
	});

	Project.fetch = function () {
		return {
			"_id": 12424,
			"title": "Bidacity"
		}
	}

});