'use strict';

angular.module('mousethiefApp')
    .controller('HumanTimeController', ['$scope', function($scope) {
        $scope.customer = {
            name: 'Naomi',
            address: '1600 Amphitheatre'
        };
        $scope.naomi = {
            name: 'Naomi',
            address: '1600 Amphitheatre'
        };
        $scope.igor = {
            name: 'Igor',
            address: '123 Somewhere'
        };
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.timeStamp = '2015-01-29T16:01:03.700Z';
    }])
    .directive('humanTime', function() {
        return {
            // restrict A takes <div my-directive />
            // restrict E takes <my-directive />
            restrict: 'E',
            scope: {
                // = shorthand because attribute is the same name as value in scope
                // e.g., <foo-bar customer-info="naomi" />
                customerInfo: '='
            },
            controller: ['$scope', function($scope) {
                $scope.timeStamp = [
                    '2015-01-29T23:01:03.700Z',
                    '2015-01-14T23:01:03.700Z',
                    '2014-12-29T23:01:03.700Z'
                ];
            }],
            templateUrl: '/scripts/componentDemo/humanTime/humanTime.html'
        };
    });