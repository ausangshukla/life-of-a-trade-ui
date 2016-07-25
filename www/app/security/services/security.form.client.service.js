(function() {
    'use strict';

    angular
        .module('app.security')
        .factory('SecurityForm', factory);

    function factory() {

        var getFormFields = function(disabled) {

            var fields = [
                {
                    key: 'name',
                    type: 'input',
                    templateOptions: {
                        label: 'Name:',
                        disabled: disabled,
                        required: true
                    }
                },
                {
                    key: 'ticker',
                    type: 'input',
                    templateOptions: {
                        label: 'Ticker:',
                        disabled: disabled
                    }
                },
                {
                    key: 'price',
                    type: 'input',
                    templateOptions: {
                        label: 'Price:',
                        disabled: disabled
                    }
                },
                {
                    key: 'asset_class',
                    type: 'select',
                    templateOptions: {
                        label: 'Asset Class:',
                        disabled: disabled,
                        options: [
                          {name: 'Stock', value: 'Stock'},
                          {name: 'Bond', value: 'Bond'},
                          {name: 'Derivative', value: 'Derivative'}
                        ]
                    }
                },
                {
                    key: 'region',
                    type: 'select',
                    templateOptions: {
                        label: 'Region:',
                        disabled: disabled,
                        options: [
                          {name: 'US', value: 'US'},
                          {name: 'EU', value: 'EU'},
                          {name: 'APAC', value: 'APAC'},
                          {name: 'EMEA', value: 'EMEA'}
                        ]
                    }
                },
                {
                    key: 'sector',
                    type: 'select',
                    templateOptions: {
                        label: 'Sector:',
                        disabled: disabled,
                        options: [
                          {name: 'Auto', value: 'Auto'},
                          {name: 'Pharma', value: 'Pharma'},
                          {name: 'Manufacturing', value: 'Manufacturing'},
                          {name: 'Construction', value: 'Construction'},
                          {name: 'Technology', value: 'Technology'}
                        ]
                    }
                },
                {
                    key: 'description',
                    type: 'textarea',
                    templateOptions: {
                        label: 'Description:',
                        disabled: disabled
                    }
                }
            ];

            return fields;

        };

        var service = {
            getFormFields: getFormFields
        };

        return service;

    }

})();
