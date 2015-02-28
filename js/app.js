var app = angular.module('rtfmApp', ['firebase', 'ngRoute']);

app.config(function($routeProvider) {

    $routeProvider
        .when('/login', {
            templateUrl: 'js/login/loginTmpl.html',
            controller: 'loginCtrl'
        })
        .when('/threads', {
            templateUrl: 'js/threads/threads.html',
            controller: 'threadsCtrl'
        })
        .when('/threads/:threadId', {
            templateUrl: '',
            controller: ''
        })
        .otherwise({
            redirectTo: '/login'
        })

})
