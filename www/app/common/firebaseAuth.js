(function(){
  'use strict';
  angular.module('app')
    .factory('Auth', Auth);

	function Auth(FirebaseDB) {
		return firebase.auth();
	}
  
})();
