(function () {
    'use strict';

    angular
        .module('app.marketEvent')
        .controller('MarketEventController', MarketEventController);

    MarketEventController.$inject = ['$scope','logger',
        '$stateParams',
        '$state',
        'MarketEvent',
        'MarketEventForm'];
    /* @ngInject */
    function MarketEventController($scope, logger,
        $stateParams,
        $state,
        MarketEvent,
        MarketEventForm) {

        var vm = this;

        vm.marketEvent = {};
        vm.marketEvents = {};

        // Setup the form fields. Used by angular-formly to create the fields for the form. 
        // See http://angular-formly.com/ and services/market-event.form.client.service.js and views/create.html
        vm.setFormFields = function(disabled) {
            vm.formFields = MarketEventForm.getFormFields(disabled);
        };

        vm.loadAll = function() {
            vm.marketEvents = MarketEvent.query();
        };

        // Create new MarketEvent        
        vm.create = function() {
            // Create new MarketEvent object
            var marketEvent = new MarketEvent(vm.marketEvent);

            // Redirect after save
            marketEvent.$save(function(response) {
                logger.success('MarketEvent created');
                $state.go("app.viewMarketEvent", {'marketEventId': response.id});
            }, function(errorResponse) {
                vm.error = errorResponse;
            });
        };

        // Remove existing MarketEvent
        vm.remove = function(marketEvent) {

            if (marketEvent) {
                marketEvent = MarketEvent.get({marketEventId:marketEvent.id}, function() {
                    marketEvent.$remove(function() {
                        logger.success('MarketEvent deleted');
                        vm.tableParams.reload();
                    });
                });
            } else {
                vm.marketEvent.$remove(function() {
                    logger.success('MarketEvent deleted');
                    $state.go("app.listMarketEvent");
                });
            }

        };

        // Update existing MarketEvent
        vm.update = function() {
            var marketEvent = vm.marketEvent;

            marketEvent.$update(function() {
                logger.success('MarketEvent updated');
                $state.go("app.listMarketEvent");
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
                logger.error("Update Error " + errorResponse);
            });
        };

        // Ensure form fields are set for view and edit
        vm.viewMarketEvent = function() {
            if($stateParams.marketEventId) {
                vm.marketEvent = MarketEvent.get({marketEventId: $stateParams.marketEventId}, vm.successResponse, vm.errorResponse);
                vm.setFormFields(true);
            } else {
                console.log("MarketEventController: $stateParams.marketEventId is blank");
            }
        };

        vm.editMarketEvent = function() {
            if($stateParams.marketEventId) {
                vm.marketEvent = MarketEvent.get({marketEventId: $stateParams.marketEventId}, vm.successResponse, vm.errorResponse);
                vm.setFormFields(false);
            } else {
                console.log("MarketEventController: $stateParams.marketEventId is blank");
            }
        };

		vm.errorResponse = function(response) {
			// Error
			if (response.status === 404) {
				logger.error("Not found");
			} else if (response.status === 403) {
				logger.error("No access");
			} else {
				logger.error("Error: " + response);
			}
		}

		vm.successResponse = function(response) {
			
		}
        // Called to initialize the controller
        activate();

        function activate() {

            $scope.$on("$stateChangeSuccess", function(event, toState, toParams, fromState, fromParams) {
        
                console.log("MarketEventController: $state.name = " + toState.name);
                // Load data for this route to use
                switch (toState.name) {
                    case "app.viewMarketEvent":
                        vm.viewMarketEvent();
                        break;
                    case "app.listMarketEvent":
                        vm.loadAll();
                        break;
                    case "app.createMarketEvent":
                        vm.setFormFields(false);
                        break;
                }
            });
        }
    }

})();
