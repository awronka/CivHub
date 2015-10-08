'use strict';

app.config(function ($stateProvider) {
	$stateProvider
	.state('projectView', {
		url: '/project/:id',
		templateUrl: 'js/project/view/project.view.html',
		controller: 'ProjectController',
		resolve: {
			project: function ($stateParams, Project) {
				var proj = new Project({_id: $stateParams.id});
				return proj.fetch();
			}
		}
	})
	.state('projectEdit', {
		url: '/project/:id/edit',
		params: {project: null},
		templateUrl: 'js/project/editor/project.editor.html',
		controller: 'ProjectController',
		resolve: {
			project: function (Project, $stateParams, $http) {
				// If a project is passed, return it, otherwise look in db
				// if ($stateParams.project) return $stateParams.project;
				// else {
					var proj = new Project({_id: $stateParams.id});
					return proj.fetch();
				// }
			}
		}
	});
});