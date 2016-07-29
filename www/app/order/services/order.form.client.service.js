(function() {
    'use strict';

    angular
        .module('app.order')
        .factory('OrderForm', factory);

    function factory() {

        var getFormFields = function(disabled) {

            var fields = [

                 
	            {
	                key: 'exchange',
	                type: 'input',
	                templateOptions: {
	                    label: 'Exchange:',
	                    disabled: disabled,
	                    required: true,
	                    type: 'select'
	                }
	            },
	             
	            {
	                key: 'buy_sell',
	                type: 'input',
	                templateOptions: {
	                    label: 'Buy_sell:',
	                    disabled: disabled,
	                    required: true,
	                    type: 'select'
	                }
	            },
	             
	            {
	                key: 'order_type',
	                type: 'input',
	                templateOptions: {
	                    label: 'Order_type:',
	                    disabled: disabled,
	                    required: true,
	                    type: 'select'
	                }
	            },
	             
	            {
	                key: 'user_id',
	                type: 'input',
	                templateOptions: {
	                    label: 'User_id:',
	                    disabled: disabled,
	                    required: true,
	                    type: ''
	                }
	            },
	             
	            {
	                key: 'security_id',
	                type: 'input',
	                templateOptions: {
	                    label: 'Security_id:',
	                    disabled: disabled,
	                    required: true,
	                    type: ''
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
	                key: 'quantity',
	                type: 'input',
	                templateOptions: {
	                    label: 'Quantity:',
	                    disabled: disabled,
	                    required: true,
	                    type: ''
	                }
	            },
	             
	            {
	                key: 'price',
	                type: 'input',
	                templateOptions: {
	                    label: 'Price:',
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
