(function() {
    'use strict';

    angular
        .module('app.security')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app.listSecurity',
                config: {
                    views: {
                        'menuContent': {
                            url: '/security',
                            templateUrl: 'app/security/views/list.html',
                            controller: 'SecurityController',
                            controllerAs: 'vm',
                            title: 'List Securities'
                        }
                    }
                }
            },
            {
                state: 'app.createSecurity',
                config: {
                    url: '/security/create',
                    templateUrl: 'app/security/views/create.html',
                    controller: 'SecurityController',
                    controllerAs: 'vm',
                    title: 'Create Security'
                }
            },
            {
                state: 'app.viewSecurity',
                config: {
                    url: '/security/:securityId',
                    templateUrl: 'app/security/views/view.html',
                    controller: 'SecurityController',
                    controllerAs: 'vm',
                    title: 'View Security'
                }
            },
            {
                state: 'app.editSecurity',
                config: {
                    url: '/security/:securityId/edit',
                    templateUrl: 'app/security/views/edit.html',
                    controller: 'SecurityController',
                    controllerAs: 'vm',
                    title: 'Edit Security'
                }
            }
        ];
    }
})();
