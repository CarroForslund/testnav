//import {Component, View, bootstrap} from 'angular2/angular2';

//@Component({
//    selector: 'my-app'
//})
//@View({
//    template: '<h1>My first Angular 2 App</h1>'
//})
//class AppComponent {
//}
//bootstrap(AppComponent);

//import { bootstrap, Component } from 'angular2/angular2'

//Component({
//   selector: 'my-app',
//   template: '<h1>Hello from TypeScript</h1>'
//)
//lass MyApp {



//module app {
//    class Config {
//        constructor($routeProvider: ng.route.IRouteProvider) {
//            $routeProvider
//                .when("/", {
//                    templateUrl: "/app/posts/list.html",
//                    controller: "PostsCtrl as vm"
//                })
//                .when("/edit/:id", {
//                    templateUrl: "/app/posts/edit.html",
//                    controller: "PostEditCtrl as vm"
//                })
//                .when("/add", {
//                    templateUrl: "/app/posts/add.html",
//                    controller: "PostAddCtrl as vm"
//                })
//                .otherwise({ redirectTo: '/' });
//        }
//    }
//    Config.$inject = ['$routeProvider'];

//    var mainApp = angular.module('chsakellBlogApp', ['ngRoute']);
//    mainApp.config(Config);
//}