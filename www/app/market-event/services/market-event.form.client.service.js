(function() {
    'use strict';

    angular
        .module('app.marketEvent')
        .factory('MarketEventForm', factory);

    function factory() {

        var getFormFields = function(disabled) {

            var fields = [

                 
	            {
	                key: 'name',
	                type: 'input',
	                templateOptions: {
	                    label: 'Name:',
	                    disabled: disabled,
	                    required: true,
	                    type: ''
	                }
	            },
	             
	            {
	                key: 'event_type',
	                type: 'input',
	                templateOptions: {
	                    label: 'Event_type:',
	                    disabled: disabled,
	                    required: true,
	                    type: ''
	                }
	            },
	             
	            {
	                key: 'summary',
	                type: 'input',
	                templateOptions: {
	                    label: 'Summary:',
	                    disabled: disabled,
	                    required: true,
	                    type: ''
	                }
	            },
	             
	            {
	                key: 'description',
	                type: 'input',
	                templateOptions: {
	                    label: 'Description:',
	                    disabled: disabled,
	                    required: true,
	                    type: ''
	                }
	            },
	             
	            {
	                key: 'direction',
	                type: 'input',
	                templateOptions: {
	                    label: 'Direction:',
	                    disabled: disabled,
	                    required: true,
	                    type: 'select'
	                }
	            },
	             
	            {
	                key: 'intensity',
	                type: 'input',
	                templateOptions: {
	                    label: 'Intensity:',
	                    disabled: disabled,
	                    required: true,
	                    type: 'select'
	                }
	            },
	             
	            {
	                key: 'asset_class',
	                type: 'input',
	                templateOptions: {
	                    label: 'Asset_class:',
	                    disabled: disabled,
	                    required: true,
	                    type: 'select'
	                }
	            },
	             
	            {
	                key: 'region',
	                type: 'input',
	                templateOptions: {
	                    label: 'Region:',
	                    disabled: disabled,
	                    required: true,
	                    type: 'select'
	                }
	            },
	             
	            {
	                key: 'sector',
	                type: 'input',
	                templateOptions: {
	                    label: 'Sector:',
	                    disabled: disabled,
	                    required: true,
	                    type: 'select'
	                }
	            },
	             
	            {
	                key: 'ticker',
	                type: 'input',
	                templateOptions: {
	                    label: 'Ticker:',
	                    disabled: disabled,
	                    required: true,
	                    type: ''
	                }
	            },
	             
	            {
	                key: 'externl_url',
	                type: 'input',
	                templateOptions: {
	                    label: 'Externl_url:',
	                    disabled: disabled,
	                    required: true,
	                    type: ''
	                }
	            },
	            

            ];

            return fields;

        };

        var service = {
            getFormFields: getFormFields
        };

        return service;

    }

})();
