(function () {
    'use strict';

    angular.module('app.security', ['ionic', 'firebase', 'ui.router']);
    angular.module('app').requires.push('app.security');

})();
