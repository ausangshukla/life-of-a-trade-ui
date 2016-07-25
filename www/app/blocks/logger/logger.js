(function() {
    'use strict';

    angular
        .module('blocks.logger')
        .factory('logger', logger);

    logger.$inject = ['$log', 'ToastPlugin'];

    /* @ngInject */
    function logger($log, ToastPlugin) {
        var service = {
            showToasts: true,

            error   : error,
            info    : info,
            success : success,
            warning : warning,

            // straight to console; bypass ToastPlugin
            log     : $log.log
        };

        return service;
        /////////////////////

        function error(message, data, title) {
            ToastPlugin.error(message, title);
            $log.error('Error: ' + message, data);
        }

        function info(message, data, title) {
            ToastPlugin.info(message, title);
            $log.info('Info: ' + message, data);
        }

        function success(message, data, title) {
            ToastPlugin.success(message, title);
            $log.info('Success: ' + message, data);
        }

        function warning(message, data, title) {
            ToastPlugin.warning(message, title);
            $log.warn('Warning: ' + message, data);
        }
    }
}());
