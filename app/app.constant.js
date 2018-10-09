//  'use strict';
var API_URL = 'http://172.20.9.198:3000/api/';

//var API_URL = 'https://dev.fleury.com.br';


app.constant('CONST', {
	SITE_URL: location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : ''),
	SITE_URL_ENCODED: encodeURIComponent(location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '')),

	BASE_API_URL: API_URL,
	APP_DOMAIN: '',
	DATE_NOW: moment(),

    MAXIMUM_UPLOAD_FILE_WIDTH: 400, //in px
});