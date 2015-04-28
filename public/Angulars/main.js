/**
 * Created by Vladimirsk on 4/27/2015.
 */

var app= angular.module('main',['ngRoute','ui.bootstrap']);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/addressBook', {
                templateUrl: 'Angulars/views/angular-route-addressBook.jsp'
            }).
            when('/about', {
                templateUrl: 'Angulars/views/angular-route-about.jsp'
            }).
            when('/login', {
                templateUrl: 'Angulars/views/angular-route-login.jsp',
                controller: 'loginController'
            }).
            when('/logout', {
                templateUrl: 'Angulars/views/angular-route-logout.jsp',
                controller: 'logoutController'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);

