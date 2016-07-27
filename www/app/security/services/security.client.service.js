(function() {
    'use strict';

    angular
        .module('app.security')
        .factory('Security', Security);

    Security.$inject = ['$resource', 'SPRAY_API_BASE_URL'];
    /* @ngInject */
    function Security($resource, SPRAY_API_BASE_URL) {

        var params = {
            securityId: '@id',
            format: 'json'
        };

        var actions = {
            update: {
                method: 'PUT'
            },
            search: {
            	url: SPRAY_API_BASE_URL + "/securities/search",	
            	method: "GET",
            	params: {term: '@term'},
            	isArray: true
            }
        };

        var API_URL = SPRAY_API_BASE_URL + '/securities/:securityId';

        return $resource(API_URL, params, actions);

    }

})();
