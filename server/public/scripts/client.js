var myApp = angular.module('myApp', ['ngRoute']);

// app configuration
myApp.config(function($routeProvider) {
    console.log('config loaded');
    // define our client side routes
    $routeProvider
        .when('/messages', {
            templateUrl: '/views/messages.html',
            controller: 'MessagesController as vm'            
        })
        .otherwise(
            { redirectTo: '/messages' }
        );
    
});
