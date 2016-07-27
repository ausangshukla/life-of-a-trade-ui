/* global toastr:false, moment:false */
(function() {
	'use strict';

	angular
			.module('app')
			.constant('API_BASE_URL', 'http://localhost:3000')
			.constant('SPRAY_API_BASE_URL', 'http://localhost:8000')
			.constant('FAYE_URL', 'http://localhost:9292')
			.constant('APP_COLORS', {
				'primary' : '#5d9cec',
				'success' : '#27c24c',
				'info' : '#23b7e5',
				'warning' : '#ff902b',
				'danger' : '#f05050',
				'inverse' : '#131e26',
				'green' : '#37bc9b',
				'pink' : '#f532e5',
				'purple' : '#7266ba',
				'dark' : '#3a3f51',
				'yellow' : '#fad732',
				'gray-darker' : '#232735',
				'gray-dark' : '#3a3f51',
				'gray' : '#dde6e9',
				'gray-light' : '#e4eaec',
				'gray-lighter' : '#edf1f2'
			})
			.constant('APP_MEDIAQUERY', {
				'desktopLG' : 1200,
				'desktop' : 992,
				'tablet' : 768,
				'mobile' : 480
			});
})();