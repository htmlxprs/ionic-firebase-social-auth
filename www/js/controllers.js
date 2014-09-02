/**
 * Created by Sandeep on 31/08/14.
 */

angular.module('com.htmlxprs.socialAuth.controllers',[]).controller('LoginController',['$scope','FIREBASE_REF','$firebaseSimpleLogin','userSession',function($scope,FIREBASE_REF,$firebaseSimpleLogin,userSession){

    userSession.auth=$firebaseSimpleLogin(new Firebase(FIREBASE_REF));

    $scope.login=function(provider){
        userSession.auth.$login(provider);
    }

}]).controller('HomeController',['$scope','userSession',function($scope,userSession){

    $scope.user=userSession.user;

    $scope.logout=function(){
        userSession.auth.$logout();
    }

}]);