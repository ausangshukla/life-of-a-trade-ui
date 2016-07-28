(function(){
  'use strict';
  angular.module('app')
    .controller('LoginCtrl', LoginCtrl);

  function LoginCtrl($scope, $state, Storage, Auth, $log){
    var fn = {}, data = {};
    $scope.fn = fn;
    $scope.data = data;

    data.credentials = {
      login: '',
      password: ''
    };

    fn.login = function(credentials){
      if(credentials.login){
        Storage.setUser({login: credentials.login}).then(function(){
          $state.go('app.twitts');
        });
      }
    };

    fn.loginWithGoogle = function loginWithGoogle() {
      
      var auth = firebase.auth();

      var provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider).then(function(result) {
        //console.log(result);
        var accessToken = result.credential.accessToken;
        console.log(accessToken);
        $state.go('app.listSecurity');
      });
    };
  }


})();
