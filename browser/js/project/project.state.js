app.config(function ($stateProvider){
	$stateProvider
	.state('project', {
		url: '/project/:id',
		templateUrl: 'js/project/project.view.html',
		controller: 'ProjectController',
		resolve: {
			project: function (Project, $stateParams) {
				// In view mode, 
				var proj = new Project({_id: $stateParams.id});
				console.log('Returned project resolve: ', proj);
				return proj.fetch();
			}
		}
	});
});