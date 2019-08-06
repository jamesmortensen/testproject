// testMain.js

function testEmails() {
	var emailAddressTestCase = 'james.mortensen@anywhere.co';
	var obj = isValidEmail(emailAddressTestCase);
	if(obj.result) 
		console.log('pass - ' + emailAddressTestCase + ' is valid.');
	else {
		console.error('fail - ' + emailAddressTestCase + ' ' + 'should be valid but was marked not valid');
	}

	emailAddressTestCase = 'jem@a-cti.com';
	obj = isValidEmail(emailAddressTestCase);
	if(obj.result)
		console.log('pass - ' + emailAddressTestCase + ' is valid.');
	else {
		console.error('fail - ' + emailAddressTestCase + ' ' + 'should be valid but was marked not valid');
	}

	emailAddressTestCase = 'adfsdfsdaf@afdsdafsa.asdfsdf.c';
	obj = isValidEmail(emailAddressTestCase);
	if(! obj.result)
		console.log('pass - ' + emailAddressTestCase + ' is not valid.');
	else {
		console.error('fail - ' + emailAddressTestCase + ' ' + 'should be not valid but was marked valid');
	}

	emailAddressTestCase = 'james@full.io';
	obj = isValidEmail(emailAddressTestCase);
	if(obj.result) 
		console.log('pass - ' + emailAddressTestCase + ' is valid.');
	else {
		console.error('fail - ' + emailAddressTestCase + ' ' + 'should be valid but was marked not valid');
	}

	emailAddressTestCase = 'j@j.c';
	obj = isValidEmail(emailAddressTestCase);
	if(! obj.result)
		console.log('pass - ' + emailAddressTestCase + ' is not valid.');
	else {
		console.error('fail - ' + emailAddressTestCase + ' ' + 'should be not valid but was marked valid');
	}

	emailAddressTestCase = 'james';
	obj = isValidEmail(emailAddressTestCase);
	if(! obj.result)
		console.log('pass - ' + emailAddressTestCase + ' is not valid.');
	else {
		console.error('fail - ' + emailAddressTestCase + ' ' + 'should be not valid but was marked valid');
	}

	emailAddressTestCase = 'james.mortensen+hello@anywhere.co';
	obj = isValidEmail(emailAddressTestCase);
	if(obj.result)
		console.log('pass - ' + emailAddressTestCase + ' is valid.');
	else {
		console.error('fail - ' + emailAddressTestCase + ' ' + 'should be valid but was marked not valid');
	}

	emailAddressTestCase = 'kevino\'brian@setmore.com';
	obj = isValidEmail(emailAddressTestCase);
	if(obj.result)
		console.log('pass - ' + emailAddressTestCase + ' is valid.');
	else {
		console.error('fail - ' + emailAddressTestCase + ' ' + 'should be valid but was marked not valid');
	}
 
	emailAddressTestCase = 'bianca.o\'connor@aus.gov.au';
	obj = isValidEmail(emailAddressTestCase);
	if(obj.result)
		console.log('pass - ' + emailAddressTestCase + ' is valid.');
	else {
		console.error('fail - ' + emailAddressTestCase + ' ' + 'should be valid but was marked not valid');
	}

	emailAddressTestCase = 'james@teachy.ch';
	obj = isValidEmail(emailAddressTestCase);
	if(obj.result)
		console.log('pass - ' + emailAddressTestCase + ' is valid.');
	else {
		console.error('fail - ' + emailAddressTestCase + ' ' + 'should be valid but was marked not valid');
	}

	emailAddressTestCase = 'zpl-bk-an@gb-server01.de';
	obj = isValidEmail(emailAddressTestCase);
	if(obj.result)
		console.log('pass - ' + emailAddressTestCase + ' is valid.');
	else {
		console.error('fail - ' + emailAddressTestCase + ' ' + 'should be valid but was marked not valid');
	}

	emailAddressTestCase = 'james@answerforce.com.global';
	obj = isValidEmail(emailAddressTestCase);
	if(obj.result)
		console.log('pass - ' + emailAddressTestCase + ' is valid.');
	else {
		console.error('fail - ' + emailAddressTestCase + ' ' + 'should be valid but was marked not valid');
	}

	emailAddressTestCase = 'james@answerforce.com.';
	obj = isValidEmail(emailAddressTestCase);
	if(! obj.result)
		console.log('pass - ' + emailAddressTestCase + ' is not valid.');
	else {
		console.error('fail - ' + emailAddressTestCase + ' ' + 'should be not valid but was marked valid');
	}
}


function testUrls() {
	var urlTestCase = 'http://google.com';
	var obj = isValidUrl(urlTestCase);
	if(obj.result)
		console.log('pass - ' + urlTestCase);
	else {
		console.error('fail - ' + urlTestCase + ' ' + obj.message);
	}

	urlTestCase = 'http://127.0.0.1:8080';
	obj = isValidUrl(urlTestCase);
	if(obj.result)
		console.log('pass - ' + urlTestCase);
	else {
		console.error('fail - ' + urlTestCase + ' ' + obj.message);
	}

	urlTestCase = 'https://127.0.0.1:8443';
	obj = isValidUrl(urlTestCase);
	if(obj.result)
		console.log('pass - ' + urlTestCase);
	else {
		console.error('fail - ' + urlTestCase + ' ' + obj.message);
	}

	urlTestCase = 'https://localhost:8443';
	obj = isValidUrl(urlTestCase);
	if(obj.result)
		console.log('pass - ' + urlTestCase);
	else {
		console.error('fail - ' + urlTestCase + ' ' + obj.message);
	}

	urlTestCase = 'ftp://127.0.0.1:34483';
	obj = isValidUrl(urlTestCase);
	if(obj.result)
		console.log('pass - ' + urlTestCase);
	else {
		console.error('fail - ' + urlTestCase + ' ' + obj.message);
	}

	urlTestCase = 'ws://127.0.0.1:34483';
	obj = isValidUrl(urlTestCase);
	if(obj.result)
		console.log('pass - ' + urlTestCase);
	else {
		console.error('fail - ' + urlTestCase + ' ' + obj.message);
	}

	urlTestCase = 'wss://web.whatsapp.com/ws';
	obj = isValidUrl(urlTestCase);
	if(obj.result)
		console.log('pass - ' + urlTestCase);
	else {
		console.error('fail - ' + urlTestCase + ' ' + obj.message);
	}

	// this test case will fail because this is not valid but we 
	 // incorrectly expect it to be valid
	urlTestCase = 'xmpp://127.0.0.1';
	obj = isValidUrl(urlTestCase);
	if(obj.result)
		console.log('pass - ' + urlTestCase);
	else {
		console.error('fail - ' + urlTestCase + ' ' + obj.message);
	}

	urlTestCase = 'https://smartsoccer.training';
	obj = isValidUrl(urlTestCase);
	if(obj.result)
		console.log('smartsoccer pass - ' + urlTestCase);
	else {
		console.error('smartsoccer fail - ' + urlTestCase + ' ' + obj.message);
	}

}