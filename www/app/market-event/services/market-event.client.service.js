// The resource used to interact with the REST service
(function() {
    'use strict';

    angular
        .module('app.marketEvent')
        .factory('MarketEvent', MarketEvent);

    MarketEvent.$inject = ['$resource', 'SPRAY_API_BASE_URL'];
    /* @ngInject */
    function MarketEvent($resource, SPRAY_API_BASE_URL) {

        var params = {
            marketEventId: '@id',
            format: 'json'
        };

        var actions = {
            update: {
                method: 'PUT'
            },
            delete: {
                method: 'DELETE'
            }
        };

        var API_URL = SPRAY_API_BASE_URL + '/market_events/:marketEventId';

        return $resource(API_URL, params, actions);

    }

})();
