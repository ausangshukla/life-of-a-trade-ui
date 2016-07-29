/*
	This is where we inject the firebase idToken of the authnticated user into the x-session-token
	So that the server side can verify us
*/
(function(){
	'use strict';
	angular.module('app')
	.factory('sessionInjector', ['FirebaseDB', '$q', function(FirebaseDB, $q) {  
		var sessionInjector = {
			request: function(config) {

				var deferred = $q.defer();
				var currentUser = firebase.auth().currentUser;
				
				if(currentUser) {
					// If we have a current user, stick the idToken into x-session-token
					console.log("sessionInjector: " + angular.toJson(currentUser));
					currentUser.getToken(true).then(function(idToken) {
					  // Send token to your backend via HTTPS
					  config.headers['x-session-token'] = idToken;
					  console.log("sessionInjector: idToken = " + idToken);
					  deferred.resolve(config);
					}).catch(function(error) {
					  // Handle error
					  config.headers['x-session-token'] = null;
					  deferred.resolve(config);
					});
				} else {
					deferred.resolve(config);
				}
				
				return deferred.promise;
			}
		};
		return sessionInjector;
	}])

})();
