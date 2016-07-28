(function() {
	'use strict';


	angular.module('app.security').controller('SecuritiesSearchCtrl',
		SecuritiesSearchCtrl);

	SecuritiesSearchCtrl.$inject = ['$state', '$scope', '$location', '$filter', 'Security'];

	function SecuritiesSearchCtrl($state, $scope, $location, $filter, Security) {

		var vm = this;

		vm.search = function(term) {
			return $scope.search_securities = Security.search({
				term: term
			}).$promise.then((function(response) {
				console.log(response);
				return response;
			}));
		};
	};



	angular.module('app.security').controller('SecurityController',
		SecurityController);

	SecurityController.$inject = ['$scope', '$state', '$stateParams', '$location', 'API_BASE_URL', 'Security', 'SecurityForm'];

	function SecurityController($scope, $state, $stateParams, $location, API_BASE_URL, Security, SecurityForm) {

		var vm = this;
		/*
			The security being viewed, edited, deleted
		*/
		vm.security = {};

		vm.securities = {};

		vm.setFormFields = function(disabled) {
			vm.formFields = SecurityForm.getFormFields(disabled);
		};

		vm.loadAll = function() {
			Security.query(function(data) {
				console.log('Securities loaded');
				vm.securities = data;
			}, function(errorResponse) {
				vm.error = errorResponse.data.summary;
			});
		}

		vm.create = function() {
			// Create new Security object
			var security = new Security(vm.security);

			// Redirect after save
			security.$save(function(response) {
				console.log('Security created');
				$state.go("app.viewSecurity",{securityId: response.id});
			}, function(errorResponse) {
				vm.error = errorResponse.data.summary;
			});
		};

		// Remove existing Security
		vm.remove = function(security) {

			if (security) {
				security = Security.get({
					securityId: security.id
				}, function() {
					security.$remove(function() {
						console.log('Security deleted');
						vm.tableParams.reload();
					});
				});
			} else {
				vm.security.$remove(function() {
					console.log('Security deleted');
					$location.path('/security');
				});
			}

		};

		// Update existing Security
		vm.update = function() {
			var security = vm.security;

			security.$update(function() {
				console.log('Security updated');
				$state.go("app.listSecurity")
			}, function(errorResponse) {
				vm.error = errorResponse.data.summary;
			});
		};

		vm.toViewSecurity = function() {
			console.log('$stateParams.securityId = ' + $stateParams.securityId);
			if($stateParams.securityId) {
				vm.security = Security.get({
					securityId: $stateParams.securityId
				});
				vm.setFormFields(true);
			}
		};

		vm.toEditSecurity = function() {
			if($stateParams.securityId) {
				vm.security = Security.get({
					securityId: $stateParams.securityId
				});
				vm.setFormFields(false);
			}
		};

		activate();

		function activate() { 

			$scope.$on("$stateChangeSuccess", function(event, current, toParams, fromState, fromParams) {
				
				console.log("SecurityController: $state.name = " + current.name);	

				switch (current.name) {
					case "app.viewSecurity":
						vm.toViewSecurity();
						break;
					case "app.listSecurity":
						vm.loadAll();
						break;
					case "app.createSecurity":
						vm.setFormFields(false);
						break;
				}
			});			

			
		}


	}

})();