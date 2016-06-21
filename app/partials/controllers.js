'use strict';
var reportsAppControllers = angular.module('reportsAppControllers', []);

//Blank Controller used for raw HTML templates
reportsAppControllers.controller('BlankController', ['$scope', '$http',
	function(sc, ht) {
		//Do nothing, because this is a blank controller!
	}
]);

//Controller for the main frames (menu items mainly)
reportsAppControllers.controller('PartialsController', ['$scope', '$mdSidenav', '$location',
	function(sc, sidenav, lc) {
		sc.selected = routes[0];
		sc.pages = routes;
		sc.go = function(user) {
			sc.selected = user;
			lc.path(user.path);
		};

		//But where is the 'right' sidenav??? /s
		sc.toggleList = function() {
			sidenav('left').toggle();
		};
	}
]);

//A controller for demoing MySQL connections, scope injection, and a basic frame
//TODO: Refactor the MySQL connection into a shared resource
reportsAppControllers.controller('StatesController', ['$scope',
	function(sc) {
		//You can require() node modules!
		var mysql = require('mysql');
		var connection = mysql.createConnection({
			host: 'localhost',
			user: 'user',
			password: 'password',
			database: 'stempact'
		});
		connection.connect();
		connection.query('SELECT * FROM states', function(err, rows, fields) {
			if (err) throw err;
			//Things will need to be injected into the scope to actually be usable
			sc.states = rows;
		});
		//CLOSE YOUR CONNECTIONS, WE DON'T NEED NO MEMORY LEAKS
		connection.end();
	}
]);

reportsAppControllers.controller('reportCardController', ['$scope',
	function(sc) {
		var mysql = require('mysql');
		var connection = mysql.createConnection({
			host: 'localhost',
			user: 'user',
			password: 'password',
			database: 'stempact'
		});
		connection.connect();
		sc.employers = 420;
		sc.programs = 69;
		sc.applications = 45;
		sc.totalhours = 357;

		sc.students = 50;
		sc.newstudents = 10;

		sc.volunteers = 75;
		sc.newvolunteers = 16;
		connection.end();
	}
]);

reportsAppControllers.controller('studentVolunteerReportController', ['$scope',
	function(sc) {
		var mysql = require('mysql');
		var connection = mysql.createConnection({
			host: 'localhost',
			user: 'user',
			password: 'password',
			database: 'stempact'
		});
		connection.connect();
		sc.studenthoursOT = 95;
		sc.studenthoursLT = 25;

		sc.volunteerhoursOT = 41;
		sc.volunteerhoursLT = 96;
		connection.end();
	}
]);

reportsAppControllers.controller('timeSourcesReportController', ['$scope',
	function(sc) {
		var mysql = require('mysql');
		var connection = mysql.createConnection({
			host: 'localhost',
			user: 'user',
			password: 'password',
			database: 'stempact'
		});
		connection.connect();
		sc.directOT = 59;
		sc.directLT = 52;

		sc.assistOT = 14;
		sc.assistLT = 69;
		connection.end();
	}
]);
