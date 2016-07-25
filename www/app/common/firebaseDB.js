/*
	This is the factory which is essential to setup the connection to 
	Firebase and get a ref to the DB
*/

(function(){
  'use strict';
  angular.module('app')
    .factory('FirebaseDB', FirebaseDB);

	function FirebaseDB() {
		// Initialize Firebase
	    var config = {
	      apiKey: "AIzaSyCf77s7kxM7lGXw3oY6P2aCmng2SqXEdhc",
	      authDomain: "lifeofatrade.firebaseapp.com",
	      databaseURL: "https://lifeofatrade.firebaseio.com",
	      storageBucket: "lifeofatrade.appspot.com",
	    };
	    firebase.initializeApp(config);

	    return firebase.database().ref();
	}
  
})();
