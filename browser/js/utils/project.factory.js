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

	// Get This
	Project.prototype.fetch = function () {
		return $http.get(this.url)
			.then(function (suc) {
				return suc.data;
			})
	}

	// Method for Mapping Objs
	Project.map = function(data) {
		return data.map(function (obj){
			return new Project(obj);
		});
	}

	// Get All Projects
	Project.fetchAll = function () {
		return $http.get(Project.url)
			.then(function (res) {
				return Project.map(res.data);
			});
	}

	// Get This Round's Projects
	Project.fetchRound = function() {
		return $http.get(Project.url + 'round')
			.then(function (res) {
				return Project.map(res.data);
			})
	}
	
	//get projects based on query
	Project.getProjectsByName = function(query){
		return $http.post(Project.url + "search", {query: query}).then(function(res){
			return Project.map(res.data);
		});
	}
	
	//Delete a project
	Project.deleteProject = function(id){
		return $http.delete(Project.url+id).then(function(res){
			return res.data;
		});
	}

	return Project;
});