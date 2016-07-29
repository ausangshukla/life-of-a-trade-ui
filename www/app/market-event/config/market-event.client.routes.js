// The routes for marketEvent
(function() {
    'use strict';

    angular
        .module('app.marketEvent')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app.listMarketEvent',
                config: {
                    url: '/market-event',
                    templateUrl: 'app/market-event/views/list.html',
                    controller: 'MarketEventController',
                    controllerAs: 'vm',
                    title: 'List MarketEvents',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-folder-open"></i> MarketEvents'
                    }
                }
            },
            {
                state: 'app.createMarketEvent',
                config: {
                    url: '/market-event/create',
                    templateUrl: 'app/market-event/views/create.html',
                    controller: 'MarketEventController',
                    controllerAs: 'vm',
                    title: 'Create MarketEvent'
                }
            },
            {
                state: 'app.viewMarketEvent',
                config: {
                    url: '/market-event/:marketEventId',
                    templateUrl: 'app/market-event/views/view.html',
                    controller: 'MarketEventController',
                    controllerAs: 'vm',
                    title: 'View MarketEvent'
                }
            },
            {
                state: 'app.editMarketEvent',
                config: {
                    url: '/market-event/:marketEventId/edit',
                    templateUrl: 'app/market-event/views/edit.html',
                    controller: 'MarketEventController',
                    controllerAs: 'vm',
                    title: 'Edit MarketEvent'
                }
            }
        ];
    }
})();
