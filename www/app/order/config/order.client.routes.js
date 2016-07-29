// The routes for order
(function() {
    'use strict';

    angular
        .module('app.order')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app.listOrder',
                config: {
                    url: '/order',
                    templateUrl: 'app/order/views/list.html',
                    controller: 'OrderController',
                    controllerAs: 'vm',
                    title: 'List Orders',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-folder-open"></i> Orders'
                    }
                }
            },
            {
                state: 'app.createOrder',
                config: {
                    url: '/order/create',
                    templateUrl: 'app/order/views/create.html',
                    controller: 'OrderController',
                    controllerAs: 'vm',
                    title: 'Create Order'
                }
            },
            {
                state: 'app.viewOrder',
                config: {
                    url: '/order/:orderId',
                    templateUrl: 'app/order/views/view.html',
                    controller: 'OrderController',
                    controllerAs: 'vm',
                    title: 'View Order'
                }
            },
            {
                state: 'app.editOrder',
                config: {
                    url: '/order/:orderId/edit',
                    templateUrl: 'app/order/views/edit.html',
                    controller: 'OrderController',
                    controllerAs: 'vm',
                    title: 'Edit Order'
                }
            }
        ];
    }
})();
