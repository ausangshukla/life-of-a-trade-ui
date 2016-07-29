(function () {
    'use strict';

    angular
        .module('app.order')
        .controller('OrderController', OrderController);

    OrderController.$inject = ['logger',
        '$stateParams',
        '$state',
        'Order',
        '$scope',
        'OrderForm'];
    /* @ngInject */
    function OrderController(logger,
        $stateParams,
        $state,
        Order,
        $scope,
        OrderForm) {

        var vm = this;

        vm.order = {};
        vm.orders = {};

        // Setup the form fields. Used by angular-formly to create the fields for the form. 
        // See http://angular-formly.com/ and services/order.form.client.service.js and views/create.html
        vm.setFormFields = function(disabled) {
            vm.formFields = OrderForm.getFormFields(disabled);
        };

        vm.loadAll = function(disabled) {
            vm.orders = Order.query();
        };

        // Create new Order        
        vm.create = function() {
            // Create new Order object
            var order = new Order(vm.order);

            // Redirect after save
            order.$save(function(response) {
                logger.success('Order created');
                $state.go("app.viewOrder", {'orderId': response.id});
            }, function(errorResponse) {
                vm.error = errorResponse;
            });
        };

        // Remove existing Order
        vm.remove = function(order) {

            if (order) {
                order = Order.get({orderId:order.id}, function() {
                    order.$remove(function() {
                        logger.success('Order deleted');
                        vm.tableParams.reload();
                    });
                });
            } else {
                vm.order.$remove(function() {
                    logger.success('Order deleted');
                    $state.go("app.listOrder");
                });
            }

        };

        // Update existing Order
        vm.update = function() {
            var order = vm.order;

            order.$update(function() {
                logger.success('Order updated');
                $state.go("app.listOrder");
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
                logger.error("Update Error " + errorResponse);
            });
        };

        // Ensure form fields are set for view and edit
        vm.viewOrder = function() {
            if($stateParams.orderId) {
                vm.order = Order.get({orderId: $stateParams.orderId}, vm.successResponse, vm.errorResponse);
                vm.setFormFields(true);
            } else {
                console.log("OrderController: $stateParams.orderId is blank");
            }
        };

        vm.editOrder = function() {
            if($stateParams.orderId) {
                vm.order = Order.get({orderId: $stateParams.orderId}, vm.successResponse, vm.errorResponse);
                vm.setFormFields(false);
            } else {
                console.log("OrderController: $stateParams.orderId is blank");
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
        
                console.log("OrderController: $state.name = " + toState.name);
                // Load data for this route to use
                switch (toState.name) {
                    case "app.viewOrder":
                        vm.viewOrder();
                        break;
                    case "app.listOrder":
                        vm.loadAll();
                        break;
                    case "app.createOrder":
                        vm.setFormFields(false);
                        break;
                }
            });
        }
    }

})();
